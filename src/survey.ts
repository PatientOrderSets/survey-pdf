import { SurveyModel, Event } from 'survey-core';
import { IDocOptions, DocController } from './doc_controller';
import { FlatSurvey } from './flat_layout/flat_survey';
import { PagePacker } from './page_layout/page_packer';
import { IPdfBrick } from './pdf_render/pdf_brick';
import { EventHandler } from './event_handler/event_handler';

export class SurveyPDF extends SurveyModel {
    public controller: DocController;
    public constructor(jsonObject: any, options: IDocOptions) {
        super(jsonObject);
        this.controller = new DocController(options);
    }
    public onRenderHeader: Event<(sender: SurveyPDF, options: any) => any, any> =
        new Event<(sender: SurveyPDF, options: any) => any, any>();
    public onRenderFooter: Event<(sender: SurveyPDF, options: any) => any, any> =
        new Event<(sender: SurveyPDF, options: any) => any, any>();
    public async render(): Promise<void> {
        let flats: IPdfBrick[][] = await FlatSurvey.generateFlats(this);
        let packs: IPdfBrick[][] = PagePacker.pack(flats, this.controller);
        EventHandler.process_events(this, packs);
        let htmlExtraPagesCount: number = 0;
        for (let i: number = 0; i < packs.length; i++) {
            for (let j: number = 0; j < packs[i].length; j++) {
                let pagesCount: number = this.controller.doc.getNumberOfPages();
                await packs[i][j].render();
                htmlExtraPagesCount += this.controller.doc.getNumberOfPages() - pagesCount;
            }
            if (i !== packs.length - 1 && htmlExtraPagesCount === 0) this.controller.addPage();
            if (htmlExtraPagesCount > 0) htmlExtraPagesCount--;
        }
    }
    public async save(fileName: string = 'survey_result.pdf'): Promise<void> {
        await this.render();
        this.controller.doc.save(fileName);
    }
    public async raw(): Promise<void> {
        await this.render();
        return this.controller.doc.__private__.buildDocument();
    }
}