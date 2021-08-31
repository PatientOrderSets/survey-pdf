(<any>window)['HTMLCanvasElement'].prototype.getContext = async () => {
    return {};
  };

import { SurveyPDF } from '../src/survey';
import { IRect, DocController } from '../src/doc_controller';
import { FlatSurvey } from '../src/flat_layout/flat_survey';
import { FlatHTML } from '../src/flat_layout/flat_html';
import { FlatSignaturePad } from '../src/flat_layout/flat_signaturepad';
import { IPdfBrick } from '../src/pdf_render/pdf_brick';
import { SurveyHelper } from '../src/helper_survey';
import { TestHelper } from '../src/helper_test';
let __dummy_sp = new FlatSignaturePad(null, null, null);

test('Check signaturepad', async () => {
    let json: any = {
        questions: [
            {
                type: 'signaturepad',
                name: 'sigpadque',
                titleLocation: 'hidden',
                defaultValue: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADICAYAAABS39xVAAAgAElEQVR4Xu29DZhdZXU2fK99zgz4H1QwcyY0g6JWtBI+tVZta/heqxDmDEm9oCqoSbVSM2dCogXx1b4k9Xutf5cJmTORUPoaVGpLqknmDBGrlfBpFarUST/xt8pEMmciWBlAIJlzzrO+a+29n32evc8+/78zs/d1cQFznt/1PHvt9XOvtQgteBKZNLdgmDYMQRkQngPGgzI4Mc8EJ2ELK0hhXv6u/5uJ5ol5hfy7dFHqdAZOEKwVDDUv/65l4XZbJnt+suD1YXdu828FxkMxwpmKeYVFNM9MQ3oOWZf8tyKsMecl2GP6/lZtXQTMs9Ov7U975iIGmFq4eAXAauF4XR0qm0y1kjZl95I4NL4dFl1vNujP586Y2bAt5P0pHWZwavwyZrotfALekU2Obffuf7MUXZkZX2uB7nTHOQ7Ffw8L0yArQcSPscIzidXj8tKxRa8n0MsAfm6d8z4B4Kl19mlXc2HO7b4IvwXw9GY2wIxHiDBDYO/SMFyGCZq3GSjRvLyh5ZizpWheWQ6DDDLMutZG1tPAwlzUuQScAdDpTFhpj8HsMeMKY54C7I/KSbeN/PskGDkGCu7fThHwsHtPThHhFDs0/G/A/u9nWuCHAEvGAsPb10owToJwJhhngXBuXXtrrrGcc56BkxbwHAb6Qob7ETN+IOuT80SBjxHRAFvoZ8aQxfip/m8C1jp7wxFpmx1ObWpuebX1TkylPwvGRv89oU2zI6P7qo0wdGDnilysb4YJzyrT9pZsMuWN3ZIXL5GZyAI8IBMS8AtYlKYcf/v4+tQ9YYtIZMbXE1kvYOBJFNRZRI7kYzO1GLJOn9i9nDsllw1PPy32m9+ifxUKubOQz8/E+vteVlAshw1LYS0s6/8i5jkQnc3gi4tvF2bA9HSAH2d2JAkqTxjfUt0X3n7ZCUXJjOWlIPLRTUs91Q6n0u+eNMeYB/OjIHomuYzF7CfthJEwqXnLeYntJ5+Pz5yOk/O1ftWaWWtY35UHPjNkxQrnM/GQxTQkEiARhsAIY0jHijS1poV52mcJHLHvgWXN9y0szLRyL/aL0d8/xAVeDaI1IJa1vRFAon5a8L0AvcLpRxm5ewr8uBWzHigo9X2yrAtQUGcT41G5z0pR1iJsJGAYwGlMuIOZP34iOWbvV56VB3YOWbG+9zE4T0TbzDUR8eWzw2P7619nZ3qESVggHMoOp9ZXW8FAJr2HgPfqdszYT4TXAhh0yGsz3nP07w0zrMRX9rw4e/Hmn+iBEpn0twG8xrdAwj5lWftOrNt8V7WFR78vHgoM3j6xRin1eo8xOapoUc1lPGIRTwMeM5oW5ipM9cSG95ao5a3cuTBOxHg1UWGNrI+JhkC8pgzjLD81YYYZM6T4LorhvkIu/127cTw+ZDKaetYudGPFInWcD2CaLNo0e8nodHAM0VqIMWIyLmLchLj6yOy6LcfrmbMTbRNT6bvA+GOHwRCL5CEScX8+d061j06JOYnVx4lipzP4ar12U72sm2GtzNywzkIsY38QGYeyI0UuKpITQNeWMC6ZWfEO6uObe5HgnTjUxTqHyZyYbJXDtJPZkpKtgrA1Q6RmjhtSQzv3rBmTRbxWpCVRjyjAOGuYX9TD04QZKIvvtRQvFIhmrHhszvwY1zBOXU0GptJbibFTOjFh29xwalfYAAFzi8MPLCRnL0lN1TVhmxsnMumjAF4enIa4slo4eHv6RazgCT3SX+xuLmP/fnE83pBNjh2091/vXgYnx48w0evdfk9kk6mnBccYPLx7FfJ4gyLrnVqv9toQ9nVKt653b1F7YOXkntcLE2Dw2gADOAbCNJhFWjrSCWlJn4dcYDCfb5sMStdV9dhEvReJz7Hh8YysP57PT1f7+lcduIkGqzLjaxVIpK3VwvA5H9tUTvpMZCYOAFxUr5j3qEL+kyc2bGurtFrr9gam0v+TGP/ba894EoSnVFMLQ4zt38omU38k4wxMpue1+YZAN8wmR7c2xLASmbQQ+Z3u4n6eTaYqGintr4RtZ/J7EVTMWgvkf3hi3ZaHaiVM1K71FAgwKMdo6xns6QhDHenP54906uWWF7kAnG+om/aaanxc25ijivYCY6q2bv/7RNuzydEdYX1WTo5fTKBNRLjM+Z3vVcBfNaqeVltXPb8PTu7eyGR91hBKfgjGefL/lbyFIf08YcZHF8MeVreElchM/BTgF7oX+565kdQf1LK5sw7tel481vdXYH4LgFVun3+F4m9lLy26LWsZK2rTGAXE8JyPx9coWK83JZWiBIIj8pJ3Uq2z4urVxPwHtpG+NpXOVUNJPEvTAlUhy5oJswU1RqXO9zKlLTEyE7B9djh1S3Alq+/YO5A7tXCV7+NPvCU7PDbe+VUXZ1x5+MbzrEL+PmMNPwLwElsiqqAWBo31ImnOJVMXSr/ByYmNTOwwQcPw3gjDekjDEgh812xyrJ4vIFZl0usU4Y/B+IDeoCwUoJvnkqO3dpPwS3FubYMCaL1mCLYEZeGIVu/azaBsm4T2ztlMyYYyhGLGNPO0P4iiKhHNx5inxXO4mJlStbslH5NTfX0biSGqz2oxyoOxvb+Quyso3Q5M7n4jkfXVokRDn8oOj15TbY52/p7IpAXreKaegwjfZra9fdPZZOqCsLkTUxObwTxh/PadbDIlfWB7neOF+/VvKh87R1TmBhhWWrAujkeoRtdl2GJtrqzy14B5BKBnO20oQ6Q+38su3HYeeivGti9+PP5OgqjcLB+TFZpBCQOwiI6088UXaYGJxC6z1jWEh37Q5GNn25QYJ0B8t0hJrYYytIKenR5DXlTqK6w3GRcDt1kWfcU8t8Hb08NcwKdAeLGzRr6XQGOzydR3Or1mmS8ITwB4O0A24FMzm+C6wiSzbDJlq5LyJDJpsdEJ85b92Yb3uhhWiNfCB+pqhFCCP6FYfIsfe0IHycKOdr5Yjay1V/vYTILpUlet0gziKKF9NihhjCdjp52vvXRgW2IqkZo0s7RR/oxpxDAdnWv1m+QAKvvXM8mLDwFOv8TxxmKXKsSOirSx6o6bn80LJ/+WCe8xRrw1m0xdWX2G1rYoNaDbWDUBiK+u5AkdyKQfJeAZejWxvDr3gQ1bfm4zrKn0QTAudRmWjXhvkmH5YfPNkCDEOD8Popu7Leo2s6d29ZWvcCym1rLF4q1dKxgj11B+EOCDrTSS2/ABkX3j6k8s5vMq4ZpMVVNUgVauo120XAzj2l5ShY2KeaPrOZOQqmkC3yA0PtUXv5yY9pp7UeALO22QL8FiEm4D4/KKamEgrM9cdyIzLlKaHfKjPYU9w7A0sVcdTL9axeg67ca17Vtk/dXc8OZ7F8PlatcaHWwKLnWN5bYUJWqVIjrYCjVPG+RFnYPCmqqMScJEgGkxfIuNqdswgXbRvdfGtY3RFq9nhbWaeQF0BKS+AYXzYdEGMGwTCzF/GVbs/8wOb769E/sYmExvJXLwZc5DPwHYVlnLqYUDk+nbip5PG2f1Wq3WmoZ3bS9vimFVEvWaJVDJ5onenR0e/ftmx10s/Q2Va6uB1LaxUBbzrmYYhGdn0rim8iE0Qi4BBYoB2LM1RSpd92+RJ2UTi5FekPP6+TaBns5gD8hJhF0gfGb2ktRP273yRCb9BQBXGPNIeN1zyvGKRGbiawC/Qbc3JawAgPRoNpkST3Ltz8DU+HtM0bMakrX2kcNbrrpj4txCnr9AjFe7LX5MFr11qb4wwqQW4v1Xu9KlqGIrtBTFudjBesJaTCS4xDpWie0T8noYpsjW1OzN7Wx/w1AvQcIG86JZgJ2YPNCvodSEsnCknaqii17/DwA+QHk5RMHgZHqvzwaneIeGOTnvQ584+exHUPCkLzYKdKzaCzEwmb6RCFcVj6MImW/nESWmJj4JZjEkOhH+oO39+YUbOgVmbOfetMGcSYLH6c8ctz7tI6iD1dDk2r5kxfOvBawXugG9ocZvYw8eY1LEM5E6187T7fzY5ZmXsRaDKbRjhaHB0C7DCc4XzPRArDbNjmzxsjyYsYY2wzL/UD1EwIdyl2DCC9uN4dEbdMF1EnOlvyDTFnhbp+Zv9cFK3CWDrnZDl44y8aRF1pdN6VHblfIcYwnmdXNvrZHUKJVAlsFQFCfQNoINtPoMe308w9P4dgCvk7hJY82/BuhbKr+wrR0hPmEpZ0DY15/LbTMFjUrgUVmrGaJTwrAc4QUzKhe7MEzaSmTS3wTwh3rT5Qxp7TpIG0zWV9hVdHXaeY22ziXHbmjXnK0e1w4QJ9opnj0C36hg/RhQsJmRDuKtbFOyl1QEWFrTzHwywjK1+qSW3nirMhNXKOD9AP+e5J0wdvgTMN1MMXy9VeYWO11OX9+dJVkyGN+AxQc1Ol+yviCvfuytJRBrbDIsCfPxSVi6kwmRN48tkZn4HsBuHiBHp+zGsQ5mJnaZ6ScAOqjy1rZqKm031qrVtphVuJItW52WsCSJn/RQweXWJXq/zZzcoF0tKRUWrPle3Gs36BvN2RgFErdPbIdiM0uok22V8UMmvsmyrLtawbxC0045gtE+lcvtEOkuMZU+DnbzXwH3ZZOpl+ldlVMJJcWDi5h1moZZ9ROZ9CMAnukONp9Nps5ojFzN9/LFGrmSocW8qVsqoi/8pIZ0J57aJmmYJfRkmYSgNH/y0QitosDzv7b3WSdP5T8MtjNB6CQGklF3wc3S+h/M1vbTC6eONmovFnxlDHS9RD6UrNvW5nIXWrH4P4DIy6VnCkKaYcn7MjeSWmFLWGTRBazUEEAHzEHl7yaXDSTbst2MrSJeI+PYkf1MB40sovMM3t5OFdEMIDbyMJWNpyTCPcy4gIBfK6hrY6DZZiAJjdAp6hNRoBIFnLi9/EYN0jTaCuPqt/F24H2n5fO3NMK4XPuzpFEX1e93A2vJAvQFgCWPnv3EyXr2L4c3PxzwEh7LJlNDNsPSHM1MLOb29QIXBWKgcvwzPWgjgc/tuDYuVkOSe7kxR7a4VTZNRz1rMMNPbMBmZdvSMdjBusUMAhIbt9DX931iPlZvkHg964zaRhRoBQVsI328f7uBqNfDSt78mNi3wbSvXAqccmvQ2pCg1akPaV7gawLhRL6uDHx6Lpl6v5sQ1BGi3LhlGsyMHzFfJn/8TlE19HU2BmgFoZodw43slvzYJtM62J9f2FTLF8FmTDh9hQ4/qYRZMlOxSJbNSrFxbk6fNf353Npa1tEsHaL+EQVaQQFHsolvZSZBrhvFIXgBIJG46hIKijylCINKZNKfAPBWI9WUsXT6z2xy9HzTVq1NVCUMyxXDJM+09/KLagjFb2bgw8VRWxdH2Coi5+LxgwwvG6oMO92fz11oMouSVCdl8n3rJHZm+Ek1XJS5Dy2tBtXqVuw1GiOiQCcooBkXQAJINYQBeOXQJBi7UIjdUM4JZKiDJcn8SpMSGtxFqTdTzLoR7Din9HtUwrDkxxLbkCTkV/iuGfMD9BbDknW7zFawWjojqvx5nolELRMHQTmbW0vDT9x13M+EHeXydXfiwkVzRBRoFQVctS4YBpQvwiPElswH+3K5Q1pAcJmVqHQryvELOylhPvfRYJmwgI74YHYk9TybcQVVQt2wxJ5FeBTseQi9/DStIkij45h2Jqe+XkmhBG/oTqU6cUXZ9WIkbHRfUb+IAr1IAZsJEW01sZBSZS6A69Ll55zSeox7ZqtkJi6HjrdpwPz32ZGxd1dkWPJjKd6pSMJOotxl1iKeSb0ZxKuqxsYxZiBGcuMR8bWvkNvRTntS0bPRmbClXrzU0ZqWPgVcZ5dIXKY2IxsvFgFm/BuBbq6loKrNb0Kq6AheyyxaQ4IkFXxDORKLBBawC9lN24Vy1xJTzFJDkuakmgGcCPO6mosYwQsF64jWpwN14NwtthdkahvaCStqKSK59K91tMOlTgE7a0RcbWU7Q0NoRXcnd5fjYXSq/DBPU4yOBYGpKw/vPtMqWJJqWb+rY9nkaNondAisoRrzGZhMnyCCrUO6z6PZZKpcaemazqhMXblK+eFtOxOBn2Tgq7UWHgi1a9nE42261llNC66hkcsg7ySLLmwFSriGKaMmEQV6ggKacYVAIqqsjw6CeV92JHVIGiYy6R8AeKnD17B/biQlCQCLLMwGjlYpeBgSyLig8rEX1xIeErQxBdL4hm2mLWlOQmxyOVacnhsZe1+rTlzct5IKWNdQa9W40TgRBRYTBQQCJTUFBLsYyNVVYRuO5mNZ+Y1mVaBg+J8TS1ilmERiKv0TMF4UmK2k1Lad2qKGVLruOEcJLOJix6oGu4jeHwBUzNVjl1Xia5stfGFnX2Dad1ohN9ROG9liurjRWiMKCAWcFErWEJMaAtEaNyDaTDqoCTWtYvErzJJhwVTPXvBzObzQ70ztOaPA6hesK+X4zyAL4FaAXuirTOu2cbFMPhuTAC27XR1lYHLiK0R8kbkVm3EqvquRGokaxgDwplarmdGVjyiwFCmgU98o8K4AOHUHmN6iqwEx8f654TFPLRSGZZfSKZuhYWr3G8DW1wJEE0aV8L3wTrVgqXKxKFLpDmbSr1HAR918VMWtNFAGXAztBB6Kwm+W4qsV7amdFAiJUnELbBSDpU21kEwkaliCrcGp9E52ijtWfNqZ373a3M38njg0/jomutoPisUBBd5dSypZTb9updppZu9R34gCvUCBQO52QKl3wbKK9RuY92RHxkZlrXY+K7OcDggnCLiuoCzbBWlB7S0Wa/R0vS9SzPoEK7XeH+FNB7PJ0Q29QIR61xBSczEHxR+tpCIWw5h4a6QK1kvxqH1EgSIFEpm0hAPadi0JklbMCVOI0LYsLwGf7UUDPgFGXxVCPpZNpnROLGF2trHZ00PFiE20YbG69Qcy6R+Q61YVOohrlYn3hElbTlAnT0uBx+jyRRSIKNA4BXxCE2OGLL6WmbYB8PJkSQkwX8ZQjaUA1BoGScUWyXbps+aHpZUJS/Gy2FIXm6ROZMa/B5CXWVWYlmXxftOTKAQW+1dkt2r8kkY9IwpoCqzMpNdZgFc/UdIhi7fdl4NP8Y6KKY5D1CSROeyS0UFSlwFoliSdXwxHJCXAVe7k7kB9NcCtNiKBoCC1sS+fXx9BGBbDiUZr7HUKBEt6aTB7YjL9TyC7erTYr75bkWGFVr5A5Ri5krxZwLTKxzbUAjLtJaKeNbXn+TGlPhYwxssSb2YgwfnY6GLbUy/RN1pLRIEgBTRiwWZOLpg9kUl/EcBb3LaPV2ZYgbr30kmLapXI7aiW+X1GDOL8YsQorTx843lWIfc5Uz10931tNpn6ZHTlIgpEFGgdBczkoWJ4l4gRX4SKDfIu8wxM7XkFsfpe4Oe68rj7DGl29ZfFVZJL9u6qxRKAacc3eU+bi1G27hpEI0UUWBwUCKAVDkkCgWCxmQoMy1+W3tEhHa5Xz/aDyQAZdONp+YUPLibbz+BkepgJXwZ8HtTjTNb6ueHN99ZDj6htRIGIAuEUCORwn8kOp84JxgCXZ1iZ9J0lKPAq9qtKB+GmqZEirLFeriMYtoeBTPpOC3gaA68K/h4BRqPXL6JAayjgot7v16PJuxW0iYcyrERm73OB/C8Afoa5lFrsV5WWLiKfl9h+keC1nAwMvKKQj28MRpK7ey0JAm/N8UWjRBRYfhQwKz1LklBlxzAXyw+GMqxwOAPqsl+VI3UJ0LQJqa3dx5nITBwA+AKyaL0Gwg5OjV/GTLf55iaaU1bh/BPrtkhF5+iJKBBRoEEKmAlDJdyPmGeqMqxEZvxagD5uztmI/arcmkuBpq2pI9ggjUK7DU6mdzJha1gq6MTk+ASINgc63tfX1/cnxy66aq6V64jGiiiwnCgQcNTdAvDBqgxLbDZivyJA0so83yFYa3OUu/qqFEB1kPSEngGZeiW6KiQ2LMe0TsbUa3+zbsujy+mSRXuNKNAqCpg2K4mqIWC7AknVaJdNBGZaeWDnkBXvcw1ffBRuaE6z9qtyGzKxF5LihvOxTd0EZBYJVr2MmYnCLe6P/zybHPtsqw4wGieiwHKiQNDwLoJSRQnLAUvm77NlKsY9RHg1ALuufbsI56vOQ5hRudiF3WBaBne/JZtMSfHIqk8iM3E9wL5QpchzWJVsUYOIAmUpYBremfEXRPi7shKWL/8V4wEQzgbzF7MjY29rJ40DumvHkfG66COBj9YbI6hVaE2fYFrXdtItGjuiwFKjgGl4J+CvGfhIWYblqWh2ZRm3rh/TNdmR0U+1mzBBD2K14hitWo8deNnX931WOKORnOyJzPg+gHR9tpPZZOoprVpbNE5EgeVGgYDwMgHATt4njz+9TGZ8reUauEjxDWzR1XYjiy7oVH6roAdRip/OjqQkL05bHltn7ivcKcyKC7E1jaiiicnxzSASwspzazaZurIti40GjSiwDCgQAItmACRDGZYZt8PA3xLwQWlYrW5hq2noppo4oj2IYow/LZ/b0OpwHmee/s86BTQa84KuvmPvwMJC7gad1SFSB1t9G6LxlhsFAimT/wvAuaEMKxgtzWBbwuqWETkQRzTf6gKlOn1OM6pnYjK9G4Qxh6B8bzY59srldsGi/UYUaDUFfIn7jME9lTDgTjwGsNhlrgdag3BvdEPCbVWBj+gUzK3K+KCBoeUSEtay3sTk7o+BrA/YrAo4MpdMXVhLv6hNRIGIApUpYBrezZb+nO6Mne6Pt4CwAoxLqxVZ7RTh7Zg+0FpmflazwdMeMBR8V6MpjhOHxrfDEsmKng3QYwpqpJYqO52iVzRPRIHFTAEpnQdAO7K8rXgMy1e1gmkTk40tWt2MBNJqgrmMRtLbrIbtxeRt9VarMcqaNRUbaYisWbJw1ewlqalW7zcaL6LAcqVAMJeez4blq03oGtkpVph21LDqiO9OElVURCi1y8tmWkdIj2HMO6bysbWNeARLgp+jRH6dPP5ormVCgSBP8jGsgPh1tD+fW7sQ73tYGoUF/3abZo53L77VqIlYFWiq4QuCLWsUpuGogbZdz36I+HKzkk636RLNH1FgqVAgWJTCx7B8UHjCthjztA44bPTl7gThXC4suu5qmU8M35ZF28IwY4lM+vsA1jTKgBOZ9LeNGmnHFfjtkc2qE6cczbFcKWAWpfAYVjCjn2Cu4vH8kGZY7Qp6buUh+GIRgXli7Osr5HZo3Jab10qwVqElyiqtJXH7xFuh+EM6p7sdoM38iRMjY19p5R6isSIKRBTwUyDMU0iBl90OcjbxT93CYNV7eK59SqQtXfjVVhNFqrJVR4Kd1L6ecQcyE1cQWDynZ9r9GB/PjqSuq2eMqG1EgYgCjVEgwJscM4zpHQRgZykwLPRtzdLQ2DYq9xK0vgLv0rgtt/WPssnUefXMNzA5fhsRXeb2mWXiv5kbHrupnjGithEFIgo0ToFgxRzNsLg4pKMyaSN8WFn6xqfvXE/XYPdpACJhOcIRYdvccGpXtVUM3p5+kVLYqwtwMHCCmf88UgGrUS76PaJAaykQCNHxJCyPYWmDtKE71pwXqrVLbX40bWQH8HMAL3BHrFgwYuXk+MWWRXt0lgpi3FSIqw9HudqbP49ohIgC9VIgzFMoKqHHsHSQc5Fh1W+krndR7WivYwS1VBWsbcZMH5wbGf2YOffAZPpTRHh/USLjqyIVsB2nE40ZUaB2CgQ9hT6GpQ3sulEzQcG1L6m1LbXeG1RnjRzyLwHQb6ZjHphM36azLYDo24XfPPHGX73jmsdbu7JotIgCEQXqpUDQU+gxLGY8MjeSWiEDaqmrUcxSvYtqVXtX55WE9Y/053NrwtLR+MJ77In5N048II4z8/65kbH3tWo90TgRBSIKNEeBYEyhKWE9mk2mnmXqjYsBg6XJYWYNjRGvP54ck3xaoY8b3nOYQQNOA3qMmd83N5K6uTnyRr0jCkQUaCUFSkrVGzasE9lkasCM4VksGCxHKrSLnq6v5g0UwzoRXau9gACeAPBUl3Ft788v3NDqRIGtPMBorIgCy4kCwZjCooTlAis18n0xQRoMLlzRqxmMAJdYQJD1M1ZSrNEJ7wEwrfKxDY0ERi+nixTtNaJAJygQLPvlMSzNoGp9+Tux2FrmqMVu5aq5YttaI2My8Pm5ZOodpjqZi/dv1xlWYYf30LbZkVFBzkdPRIGIAl2kQCKTLth5GFykuw1r0KXoi1JI70MatN2qUgYGV2KUwqa2Q6GSyijiZ4HpoIeSryN1TRfPM5o6osCSpkAik84BiJdhWOn/IwjxxQBp8BD5ISXlhZnlYn3XM0ES/klR2EeIeGO1hH8uE9xnZ1t1VUSyaFOnqgYt6ZsXbS6iQAMUGJyamHcyDTuxhC5w1JGoNO6hl9PKyMJdvJUEJh8KVmk2c1+59Dmq8rH19dilgjGJRNg4O5y6pQF6R10iCkQUaIICiUz6IQDP9TEsrSpp0GgvewgNhkRBvJXByGwVUAK6+/O5rY14/oIFMMD4m+xIykvg18QZRF0jCkQUqJECiUx6VoAAPoalQaKuxNXTWRokTpAZ5wTxVmaZMlcF3CVSY410KdssMO5+y+L9UabRZqka9Y8oUBsFEpPp+0FOFXpPJRSGJX+QxH29DGnQTgHTeO66Pg94XkDGI9XAo7WRqtgqkUl/AoTLdGA0M++MUPH1UjFqH1Ggfgr4CuRoG5bYrFipIYAOaI9h/UO3t4cHIjOS8QUzpkodRclJ34gKWG31g7enh1lBgqZf6raNytJXI1r0e0SBMhQQB1fhtKc+J1dYOFs3IdD1RJhhFomKbp5Ljt4ayrAkDKdY2KH3IA0aSyWqoI55LM1I2Jl1D0yl54ix0iEybc8mR3dEtzKiQESB8hRYdcfNz1a5U2MMXkuEIWbMEPAibZsq11Plc+fE4vF9ukqWpxKKkb0YaMgbqrn/O304mjlJCpxYv1rBigVbZQNBAUil6q2dWvNAJn2nEdqDXnZQdPqcovkiCpgUWH3H3oHcqYWrYNGo9kBqd6gAACAASURBVPTVQyEVU2fFCrQ/yLDms8nUGVr06jVIg4e+Z7qGgF8z2XnWbS+g2Nv68vn17VAByxF21cH0q1UMd3tirEUXRDiteq5h1HapU2BlZnytpbAWFv1FNSnKpgXjv0F4jkkXXUbPTDGjJSy7CrIu99VLEoMOvSHwUTB+wkTv0ZuqFujczkthJj5EVEy1naSOxl5kFLCZFeijRlk8cwcLzDjExHtihDNZWWfC4iQYF3nvNeMRMF87d6lTQ6GEYYmUAsvayoqldl9TJdxbTVvBhTFjBRGyACT5njx1A0EbXZedvRRYS0QbtBS18vDuMylv/cwL4YkYVqPkjfotMQoEiw0b2/sOsbqpUCgcObFh24zNiG6fWKMU7zTNK2HvdqmERThkMe/qNUhDWJmfTkoz7pdCgqbtIq1zyZQN/UhMpjMgDHuHETGsJfbaRdtphAKJTPoLAK7w9SXMoMC39Kv8LtNsE4zxlT6CTujLL2wPmndCJCy6gaHmndLvnfG0VSNIIpO+BsAnPDFRCpiCd3S62nIik/4JHG8GxGMhXwefOih/J2vjieHNUdhOtUONfl+yFAg6opyN0idUfuEzWqLSm3exlFdrO7TdMiQeWLcPsWHxDoAESfrOXgh6TmTG/xYgr2ApA5+ZS6Y2d+O0fYyT8XHO4TPUD1ukdZ+fAn0XZJNXSSLA6IkosKwo4Goht3nFhp1EA/st4HOzI6kpkxgCTToV7zsQUAGPkUXrKzmtShiWGK+JsVGqJnczj3uJsY5oRrHa1GmpyiTyysM3nmcV8ve5f3uIiT9MTHs9yY+xf24kdfmyuqXRZpc9Bez3QuWvgcM3vIcIN8FSH5ldt+W4+XfbecZ8QEeKOAJYbdXYSxiWMCmxX8kY3fAQGlgNI7CYj2WTY3b8ULefgLj730DR/apdr91eYzR/RIFOUmAwk/4cA2/XcxLwCxBfFxZjG0xIIHG+sLC9lsLGMn4pw2L8hSL8Xbc8hL4yW4wnGViwYrS2V7BNiamJzWCeCLkQxymmXhP8mnTy4kRzRRToNAUSmYlJgJO1aBmDk+mdOied2/4owNvrAXmXGt0ZSSZkOh30PDg1fpli2mzotGK4fmevxTKuPLBzyIr33R+8GJF01elXJZqv2xQwnVCyFrFXFSzrugeHN//CXFuovYpwSOViW+vJSxcqYYlnsNMewiBkgVhtYrJ2MoNOK+SGOolcr3YJwhiWlLGfHUldVa1v9HtEgaVCgSCzAvOe7MiYhNz4HqPOgs5JJ6zNThDaCC3CkO62ZAO0P4awxPhGuCM7nLpYM7Be8FIGiSr5t4y4RefnCHvVyN2L+ixCCpQBg/5jNpl6a3A7A5nxqwm0y/h703G+QYY1TeB5CS5sZwxhMMe6uyG7LJebiUFUrkeyyVRPGNo1wUVtZSZx2/oeIvrC7PCoZ3RchPcwWnJEgaoUCGVWhH3Z4dSm0g+7UxtU/11H0DRri/YxLPd/hEmsbpeH0BURzewKvuo1lYpJVKVoGxuYSPeQae7LJlMva+P00dARBbpKgcTU7j8HW58CcIbHhIgvD3oCQ2oolEWtN7KhoIQltffe2S4PYVh4jan2udlCReWStMw6XUwj+2ppH6kQbREdrjDowyqmXnxi3RZJkB89NVJg4ND4lbDoXQR6BaD+NZsc21Bj16hZByng2m0Ff+hWRQ83g5SU0auxOlU9W/ExrIGp9I3EuKrVHsJg2mJ3gcdUPrbW9BIUGVr77We1EslWA0Gf8IHcgK8CeJM5hgJf2E1Qa6376YV2QlMobGKii831tEuq74U9L+Y12EH/Jig0xGabyExIKJ9pSD9KFm1sVgUM0i0gYY3/I0B/1owVPziBm79KQKCel0AYYiEf32gyK6MMdc9kiJA0yKqAd5Dkb3cfCXyWOEbLBdfqv0cMq7ZXskIEf1eAyrWtevm2Gpgav5KYPl+8/3TjXHL0vfr/HZtz/2dNe5Wg1vtzuY3t8O77GdbkxM0gflcrvHNuEdKdQbh+OQh+r0lXg4d3r1J569NhzAqxvgeNEB377HQw9PK92tV37jotPg1gVbE1LwDUTxaSs5f4482qjxi1aDcFApEdD2WTqbP0nHZdBSKRvmznWL2o9UbW7lcJMxO3EPgdzcYQhhnenMWF4y+07UoS880mx9Y2spFW9nFyTj/5L7BtK84TBIYmMukHzSDPPFkvCALmWrmmxT7W4FRacHV25W3jkYiB/wHw40z40NzwmKja0dNDFPBnI6GD2eSobWcMqfl51AJvPZ4cO9LO5QckrPS3QHidFKFoVJwLy20jG6jEBHtNuvKFB7nMKobY1385vPlhfRiJqfQhMEbc/380m0zZ5bOjp5QCIWrgcSJ+n/0Jc2Ai38kmU6+NaNdbFFh1+8RFSvFXzI92Xy7/tYW+Pr/m1CBqvZHd+iWsyfTdZOF52eHUOY0M5uVb93eumDKilzyDvzO154w8q9sD6VyvzSZTnwzSYzCT/mcG3uz+/VQ2mTq9EZot9T4hauBDULwne+nY9uLXO6o21Iv3IJjXiokvAtN1OnyuEypg6Xs3fsQrQuHmcZ+pF1JQBghaU1GIXpGuJNWxlaftIPJybVWKD3RFYsGTSWqMmUaZfC9e1FataWAy/XYifM4cTzsnirg2/nk2OXZuq+aMxmkNBVZ9+9NPUb/p/6HnHSfcAeB3DW9506j1RlYamiI5O5zyEKrVBg31EjidbOR6pf6edEW4q545q62pkd8TmfHvmTarajUGfQyrS6l4Gtlnp/oMZNIfJECKD3iP+QFITI5PyMchqprdqROpb54QmELxHEO8/PWN3njr0IyjtQYm6oKmwdi6WivY6FLzzRr5G98+EEjKZw9VC0QhWGW6GbtfM+vvxb4DU+PvMRMbulKoL4RjMDNxmMEXW330wuMXjf5XL+5jOa8pPM2xUKTxwOVW0NOM5bXLfNXKbMI8gaLTxojX1+IpcJndw7VmGmzFZoNjJKZ2vwFsfc339xoDmW2XroHFamfsZTv23q4xE7dPvBWKbzA9qACms8nUBXrORGb8bQDdSsB3Z5Op32/XWqJxG6NA2EfcGan7gO6SUvW1SDuDUxMXMvNBAM80SHLMAm+shVlJH2276pZkksikv+641N2jYOxn8GdPjIx5XpFKxx0xrHDqJKbS9weiAn5s9Z3+uuMXvfs3HsOaTH8MhA8wqT+eG97yzcZeq6hXuyiQyPgDlwH8vD+fe2WjyIFWrrOEYUn590pJtVyvj8QcFuOK6qwNKC87g25lxuezIymvwEQrN1ZprEQm/QMALy0yK5ZMiJP1hNa4QdwS92g/tTD6Tu2vG/OUKZh5PJtMnR1cj750sZg694F1W37ejfVGc4ZTICQr6MP9+dzze4FZyYrND6KtElaK5xqcTO9lgldtWQZopDx8Yip9kBXWdjr1ccL9sptHRcBfzyZT/0+9F9hTab2O3ReX691DK9uXxJuJAkHWK+eGN99rziPhTqyQMWs7tnId0ViNUUBMPBQvfDZQxUaAcqGJ+RqbpfleQQlLbA2hWRLCLiQxfXl2ZFRjkWpajaFKVfUi1jRgDY3s9Mug9xPj1Ubz+8jCdc2Eg5go4FaEM9WwlZ5sEpYnjImvmht2youbj23MZbwyO5J6Rk9uZhkuKhhi4/ugs9o0O7JFNKqeeHwMS1yGYaExzRinzV2aXsVO2a4GJtNbiSCFWBNFYYj3qEL+k8GijvWeiItbcxHu3fWe1Lv2VrZPTKZ/BoKJpbo1m0xdGZzDY2xlkr61ck3RWLVRIAhfYOAEASt1717LoBFUCfeFYafCQlXCSvhUI5HGLnWqsERoZoAavYDV9iK/RwzLpsGniPB+g15lw2w0lKEW2Egt9I/aNE6BsOQEbk3Sd3v23R4ERCcyaQmPszO/kOCighiswamJ9zOzZBq0n0ZtD0bq4xXtlq7CJEKp6MHEe+oxrFe7DiaIrdv4lGprbcfvg7enX8QKPymOTb/OJkfPDJtL3yMBj+Z/c/Lwr95xzePtWFM0ZnUKhGT99cLnfBJMDxZXSWTSUml9dVmGlZgcnwVRUZ2y6G3ZS0a/WJ0s/hYaJNpO6WpgavxNUPQuMyWMvQrFO6zTnrLbdK3Xu/7QlzBTjGtajgyrlsRumm7a3tdrKkYr7sFiGiOYnCDoNPNnZ+hOMeVK9KwoYZ19eO8LCoWciUL+STaZ+t16D8gIcG6bdOXiuv4cgGfMFamqnaXjl7OEFUzsVqlykEZNR6pgvW9Oa9ubkIVygcu+j1BvqoSsqUJiY5odGfU8Ajrey2sAddlscss/10tGXViilvjCescOyctjF3QE1M1zI1v+pd7x6mlv7KvrIQv1rLsVbROZiYcAfq5tJhB1u5C7NsyJoTN4MPBp9fCT/ytSBVtB/frGCEIWKkWkJDLjBwDSscQ9lzbJ55kX96aJVDcBlo2GUZgAy1aGr8i4SvHOAG7kUSZcn3+Cbn7o8tHf1nes9bfWaq7Tc/l4Cf37xrwCbwizDZqpg1Q+tr7eKr/1n0jUI0iBkNqfFdMXJ6bS94Fxnh6n11T4agzLE78aNbYLSBSMS1slXTkMEJLw3pdRop22sXKvwXJkWCUhSUybTKncpJWozIppDRFvzCbHJJQrejpIgdKMC7yjP5/fVQm1HgCH91z5urIMK1iSXcrH1wsga6V05XytlVSk9pW4blWBxkbukT/FzNKXsEoC3gmHyqUFMph5xwDCjZzhUuwTAlmoOXdVAMK0iBhWZnytrzIM0Wh2eHRPPQfcKunKvfxXm5V3pHZhPcHW9ay71rZ+aWPpM6xgXcly8BSDLlJfsqeqd9d6tou1XQhk4Wh/Pre21ljARQBrMIzut0+s0XXEgpWOVUydVU+hUPNlbtR2ZRtsgavN6H/t3Tgtl9tX6yG06/KZe6w1LU+71tLucWtVBd2v+/dZ4YxOx4q2mwa9Pv5AZvxqAu0y1nlLfz63tZ73xAdraCHIulW086mEwp01wxqc3L2RyXJSAAuq1MKLZy9J/bTWiT2XfwW1odxYZTx/j1hE+/ryC9vrOYBa19tIO5/KW8GW08jYvdRHMyEjXW5ZVVCf+1Jn4L10PrKWIGShUbthAIcVmm2jm3sva8Nqxltgfo3rSbvigtqk6KoXgC0SFRHvUvn4vl70MhUJuHSzNZjOBTkPLsTWhJ2Fhnm0unJ4N1+QXp87JMvC0WY8sonM+AMAeXUje9pLKJvXFzExmb4LhD92D+z+bDL1/FoPr17pymVwO8MYVTWvRq1ralc7j2ExjWZH6rPxtWtNrRzXqMhtD1tOcjIcEMdUPra2Fz8uraRLL4zlvjcHDNtu3SpgcB8Dh3b/KVnWlzzNivjyRuKG20Ufv0o4mR6eHXGq75qIVyb+8tzwWE1pZOqRrgYy6Q0EqVLDbzA2eIwJu+aGU6Yu3q79Nz1uYjL9GAhPt0BXHk+O3tr0gD02gB/Nj6Nh6Ye0aizSV2S36swBmpAFVwtpGXTELBLc7miReqlVlmGZSejrwWBpz2AltSAxNT7GTH9qgj6lPQO7Fhtep5ifZ+mphMFCG2HOE5dZ3Slf+eWcE6zeF6/R9iFVqppSAcPWEcxy0kshVT6GZWZraIRh+dMGl77AiamJdzHzlR6jYvwXLHxL5WI7FqsKsVQZVtDQHqYKmm0iI3ujLKj2fubHQXoJWLodTqjByfQwEzJ6ZWzRB+cuGf1Y7SttX8uyDCvIZWsxvhmxdZ7qYMMjFNbCwnCw7p8VpwPHL978n+3bXvtH1gxrqb2wJuYqTFoWZnUq3nfA+fgsfQxa+29S5RlKIQvtlegDANJfZZMpL6lft2gRTEtOZsbRgcmJPyTiIwBiYDyp4mp1JRyWaZwV1YBZDbFFrw/E+mXB+BJb1i3BXN/dIkKz8y5FhmUac8t5BT1QcAOwlWZpvpz6d0IFDFULM+ktAKRcm/t0/6NUwrDk5TONqqb4VU2PNb7IEnQ8D8BzjYoNjBTfpSwcaWUCvV64uEuRYZl5s8Nq0XmSdMSs2noFQ1DrTXsB61lwoJjqQ1C8J3vpmC80rp7xmm0b9Fj7quasPLz7TKtgPejxV1ZvKpeuJTE5sRnEE4EFPQrQNxTjoydGRr/b7GJ7tf9SA0qalYXCAsqLiRj5rr58fn2vgHh79X40ui4zTtX2voK2lgsyb3SOav3E6cJMb9MJMQn4BSx6swaXV+vf6t9DGZYJ9Exkxr+n7U5h7s0QHIjkUL4DzPcold/XbJGHVm+4HeMV3f7dF5mb3Z95IZjx3bkRf1VmM0Ywwlo1S+3w/iGBy0fJoo3dYhJu4RABc+s6njkVi685se4vf9geCpQfNZRhmSpAQCSENryXS/HCoBtjfac+dPyi93lVfju9qU7Pt1QYllnRSALLgwxJe6iYQeWQ7p2m/VKbr0QF7BGVe2BqzyuICwcNBPxDKhZf22mmFSxebKuEphrglsgSBLr9iB3LkooVRDuNgORfA5DMk8syMn8pMKxSw67fA+V+2QRRvabRQPalxlxavR8zfrZbKmClPSUOTpyNGP/SaPMQEY92EgVfhmHxXbo24crDN55nFfL3FRdJdwP8B/L/OsYPIBEXy4ZstPpge228pcCwdBpjoW2o3Woy/S8g/EkEDG3P7QsU8/Aq2LRntuZGHZhK3+0rSNzBjA6hDEu2Y2KuEpn0rK8IqbPfoxZ4K8Naz2DJU3WsP59bsxwNsIudYQXSxpSE3miPIDN9ZG5k9H81d92j3iYFQgKXO+oFbPQ0gqaiSgVIGp0jrF9ZhmWK/YlM+vtmUDIIh1QutvV0nJxfiPfdLyEZSw00WQ+RFzPDCiCnS+1WmYld9gepR2wp9ZxLr7c1w57KVbDp5T2EFCm+zyrgXcfXp+5p17rLMiwAE/353Idzsb7rmbDVXIBiXndiZOwrXjUUxiNzIym7EutyfBYrwwqmOw6mATLUxJbHqi3He2LuOaACdtUL2MxZlDIt+jVY3ZYdGRttZtxyfUuSSCYy4ycAeh4Dj5LY2N2S0L4BmPfIghKZ8d8C9LTlbtdYjAzLH1YDBM9QX4wo+0JrX7sSFXAJSK6JqT0jzGqbP6KF7xUMptVHNx2/aNSsa9oUQUsYlr+ogjs24RAYFwD4Hfcv9xHo67aqwHigv5B7+XK0XWnKL0aGZeTaLylPZqqJ9SRfbOomLoPOtgpoeNeX2oc+kZk4EKxkJcdKwOepj/6mFYwrcSj9Fljwqs6TTOASdiNYwmv4oKR78efGwiPEeJazGLphNjnqUxmXwd3zbXGxId19pckCX3i/mrj4gbC9cBdFmg2YVpa0im0HTVt4lVmHwT4Hwj4iuqEZAOzgVHorMzyYlc2wwp6BqfH3ENPe4G8qHztnsaaFadVlXkwMyzT0SgYGM7TGpyYSKhbbbBXtlvo4YV7AbDK1canvW/bnIuQlXO9M/37poAV1g1mwuVZ6mGFjrvQW3jVYQcdtFdWbk4PJjB9h0Ot7XcQ3qjCLg6TEI2ikBlqWAOBaX5pa27kfBynisqIXgaC17qPZdoO3p4eh8F4G1hljzRNjX18ht6Mec1Iik04D8Az6ZSUsR1VM/8CIJ0IkXTnkN2xYG3o5W6onCYakMdaZNiIje7Ovp9M/UHF5SauAtVLMNTfscqvAe92IsLEvlztUC+MazKT/mQEvVXtFhjWYGd/FIAGJ2g+xes3syJa7a13wUm2nGUEvG6h9SPZAOTITnhIjXt+IqL5Uz7befZkhTI7K0p6MoPWuq5fahzEuST9lWbStmn1rMDM+zaDzPR5UaWODmfF7GPT7Rpubs8nUX/QSMbqxloHMxM8J/HwLuOR4MnW4G2uoNKepCgadJMupEGy7z8VUAUXlJqbtnU4H0+49tnJ8N3XNPiLHgecIQdhVKMRuKGcXT2TSApF4QVWGFQp3CITwtHIzi2ksneSwWoLDbu3JqHrjK1keyL+/I5vsXmK2btGmVfOaXnRxZhTy8Y3L3RlVK23FHKGYN3qMizAD5m1h5pXEVPokGKdVZVj+DJTGUjoY+FgrATrdTue+VjF1VqUU0p1el8xnFhMwbY4++MISAC92g7YyZ1AFlNz2vV5Hs1u0qqi93T6xBkqJyen1RrtpIuyaHU7dYt/l2yfWsGIJE/SeUBuWKV3J10MJLtouPOA8VgF/0M74oV4ksLkmHQjaiwwrkUnPAFgNxsezI6nrZN2BvFc+qavXad1L6wuUQDtmgTdG9r/mTsjlNZKCebXBlWaYMUNONXhfCGAowzKlK3Hdw1KPM9NtxaXxvdnk2CubW+ri7Z2YSt8vIDmVz53TSxlWzbLxGm8VCMmJKjQ3cO2CucOCeLYGhoy6GBRw6BvfykxbTftWGJFKGFYgdsfD5wxOpXcyF4OiiXHT7EjqquVI+V60YZmxgKbnzwjJ6emcS716j4IZQZdzlpJ2n5ETIdC/nonXEnhI5mOmu0H4gJ67hGGZZcpNYORzD338Gf3WU+/01xlsb520dhOo0fF7kWF5qiDggXtNrFUEX6j/tAN1ASOGXz8Jm+5RUoncHDFQkOCR0wq5IRPcFcxGWk85+6ZX3kMDaJWQyXplL9Ra1LGCAgLVaX988YNYnh+WRq9MSfroKGypUVI23S+IVvBJWEaoRklEv545UB1WZLZrsiNjn2p6ZYtoAF1ZqBcYlqnCa4lYH/JyDg9p9DrZ9CT6rA7k7fXwq0b3uVj6lWVYwQqr/fncGeWg84lM+gGzaCoselv2klEvBcRiIUaj69QppLuNwwp4/2xV0JfVkrBtbji1q9F9Lrd+ARVw0SbZW0rnVlYlNEM5YNhBwjY/MDn+aSLapn9jwj1zwym7UMVyeHrFhmWG2EgZrng8P6RAUulmheCDImBobbdxOWdYqI1C3WtVlmEZRlvUEiMXVA2lPuFccvS93dta52bWKmE3YQ1m+I14riyiI8x8QFSZKGdZ7XfBTLLnVoXa2MsB7bXvbGm0DAhSkhxQsg+kP8zAR9wtllRRCZWy7EKL6nu+35YBCn7l4d1nWgXrQQDT/fnchbVEnLfj6hhwhaNM1hgp9TkQxBUcpQCqgeDBJHtReE0NROtCk1CGNZCZ+AyB/9JZD70lmxz9p1rWNji5eyOTJfl/3K6YUcybTiTHjtTSfzG2cZOUCYj2vmwy9bJu7MEMWVDAJRZhwjUSZ7LJ1Eg31rSY5oywVYvntEKN7tomI9sw6xNW25Zt9I3FbwTRn+m2zNg/N5K6vFrfxfr7wOTuNxJZX5X0r9nh1KZu7MPLcwUcIZGqbDXQn020G+vqxpyOxEuvA6zXAPhjZn4AFn+dGT/Nqyfu/fWlH3jMXJdrWJdQEDupIVm0vlqKk27sK5rToUBlhtXgS1gCdVjCqqGH+HcrCXX6YvkiERg/BOE8KXKr8rH1yylbgFNuCsN+ILP/NBg4bFn4zOwlqakSbFWkOnf66jY0X4lKaDIbIr58dnhsf70jO+mU8anlgIJPZNL/CuD/BvAP2WTqinpp1Wx7w3b1WwBPX25Sgq2SK/oICC+ug5a3gPB6kUQjw3odVOuBpgGGNU+JzMSjAD8D4OMFUhf/avhqSYtc9zN4e/pFrCAVYHV0dddsPHUvvo4OA5PpeSdAs/PocTMSQZYsL5/AGZaLZJWYHJ8A0eY6jivY9Mf9+dxruuUoaWLdy7ZrQCUUhpVmmxqEmexw6pxmKDN46Ib3sBUrVtohXJcdTn28mTF7qa/JMLqR335wKn0jM+yAc2FWyyk+UAobsEIm9D5IAjjgZ6wwaMXoZhT4d5nwnpK2jPuzI6nn99KditZSmQKmhGVLxwbDaokROVCSG1hC9izTflQpEqAdl9Cd+xtOnUqALLpguRiLnRjW3DcBerZJW8kYoizrpmA8p4ut+gIYTwueBRP977nh0Q+344yiMVtPAX9MLAwJC0hlkympKdb04zPCE2aIaMNSeLkM4tWEVWuakO4ALtr3VgBPBaDIolcsBXrWQp+VB3YOWfG+b/pCwYQI4AuD8JmgYZ2BLxHjv8z0JMs1YL8WWvdim4ANa9qTsOqBM9SyMZ2V0217EuC3LnYEsWHw7hg409XhpfKtbRskwt7Z4ZSLmavlJBZvG1cF//9c54K9EYHNWBbvDzqHbGyVi/QPFoRIZNLfBiCwB7sacbfgKIv3JLq38pVT6Y9Z7OXDetRlWO3JIGriuwj4RYE5dWJk7Cvd235zMxfDlzoTpxcwOCownlCF2O8tByN7oAhskVnF8DmBKZgnadYEDEOs+8wUEcNq7iXocO+ByfROIiNxqDCVdoE9V9+xdyCXy2XNPXY7w0Gj9DYN7rXEWjY6j+7nZ1b8JEBPwTIpHhFefIDvQoyvnF235bimUWnQcviHJJGZOADw+kjCavZWdr6/EVkik99nS1hMfNXc8NhN7VjOgBNzKFUwXuqO/zARX9UI3qsd66t1TDNqvN0G94BkdRRAP4CXECM5O+KXLmpd/2JpF86s6IbZ5OhWcw/1INYdkCldr/u32vyxWGi7GNdpQlnE/mgzrE5IPcGy94vNe9gpg3uAWR2DwnWwILnGvPz6i/Hi1bLmQD0Bt4tfagoGLdcS7O14GQt3O3jDcIN9LeuL2nSeAoOT6b0GROU+Eo9eJ2L/5MupCvw/iXCZ3najyPrOk00yWowfkRpq7UzdEpSs+vO5tQt9ffvAuHSp57cK5j2SMw4WfHAZmp3vq17E+kAm/e8EvMoe16IPzl0y+rFu3KNozvooELQ/hpb5qm/I+lr7PDbAQ2ThD2cvSf20vlE629qfjbU9CHez7Lk2HMf61QpdSLIbQNVOUTmsyngwNXGzlZZXHUy/WsVwt72nFoCkO0Wb5T6P6bgTrazjDGvw8O5VXLDuMGxaJ8nCZUHPTy8dlPn1bwfjcICO1hfBfLrp5SrCKDrjlewGzYPBrc4aih8FMxWMK1XtajSTqg9qs4QAzd04t07MlLFREAAADcVJREFU6WLw7tdzScLMjjMsmdwxxBcOArTKXczDULw7e+mYpP3ouccoztFywKgpXTD4B5yPJwW2YBqf223k7xbBAyhmexmmB7Yew3ote3CC9OnOSMqqhVrdb3P2V256VSG/8O96JbFY37ldYViygFUHd71axeKOiO489ylwqheT/2n8VavtVwHpwpebSVffXqqFO3XNRPO10OFGgWrV0uSW/nxuayuCls0ojE44m7r/2i/eFYR5d7vGsISMvi+ey7S6lcWz3LGa+KtWxu/5JCsJ6iT2cokbvx3rz+fWtOJF7aVrG8astKptGtbFM2qBNx5vYQbbwJ37z2wydX4v0SZaS5ECPrulW2m+qwxLlhYI4bFDLzrhtaz1YpiVaXSR0lr7lmsXNDIHpSidwmYp1sTz1750sk5IwV6h1UJf304wNsp/tzODaiKTfgLAUwAczyZTZzd7nlH/9lAgkUlL7YQz7dFdm2PXGdaqOybOVQv8JRBe7m27S9k8w8je6vjBEPe9Ly6xU3iv9lyxyqMGmZVIUCJB5vr7h3QcoDAwWNjeznqKiczE1wB+QxQI3Y1bUNucQe1Lq+9dZ1hlVEOA1J9kh7d8vbbtta9VK6WdEBT3UcFaaZXPjJ/rRPhP+6hWOrLB+PWPNrNaiPdfDbCg2CW4uyOpnn12rFj8pSfW/eUPO0mLaK7qFEhkxvcB9E7dkiy8WOBPPcGwZFGJyfG/AtEnja10PWNpKz117ljiobKzLthl5GO01kwT40kgSyxmMIRZHbVU/h0FK34DAWudM+8cdMM0Q0SG9+rMoxstBjLj9xDo9/XcPSVh6UXpAqVFAtHBbHJ0QzcIZjPRzPh2wI5BawrOECgp727HD0A1GVorjfvdop2eV0cIeF9K8F0g+idm7HH/1vHKNaZtREUSVrevSOj8wVA+XbS4ZyQsWbVtz8rxz3w7YNyWHUl5ZcQ6Sd1WADfDmFUYPMLznC0h6SposyLCPcz4OYC3yTkKHfryC9s77QVNTKXvd+o4tietUifv6FKdq3hGzg57kmHJwkqKs9pJ6xqr5tPsYWr7VaP2pJDSUrKkUGnNs5UtkdTHJcwKfFQxDUkBj3rjAJs9x2D/RCZ9AsDzohCdVlO2deP5QnKMgPWekrBku65E8iW3lJZHgU6L7qb9qtF0JEHbTbkqN0aWgkWfkcE+PwOeYB8g4TgYTlQD4VB/Lrex01KVvkiJr+x5MfLqx+5ami680rpXNBrJpEAik37cTQlu/5lzdN7cn47+qOcYlizOjSH6DwBnGJt4SIEv7xQS3sNKNaCihb60FQpHaKiDYI9mk2OuEXpxXuAQUKhdP9F2MoC2zo6M7uv2zgKZcF87m0x9p9triub3UyAoYfUMDqvcQQUyDepmxxX47Z1gWgOZ9N8R8G4ifHR2OPWhWi9UGTXQFyNXqqKMrwfogKgo/bncBd2SPmrdY7l2YbGBjlDFd8GytvZK4YySSuXAgyDcDab/UExHUKBjyyENdbPn3c7+ian0t8B4nZ5Dm4V6UsLyxPdApkhbNASOzCVTF7aTWDK25vD1uL1DYuDcZVZPSePli5cae4x/I8LXCsqaOb1w6uhiYGBhKWIASJHenY1mV2jnGQ9m0j9noGKNQjvDpX0eNAPmaYrRscKCNR8xs3aejDN2aQSMetPcyJZ/6WmGZS98Mn2bmfTPZlqM/cRsg/04hqwFPFzI5b8r/39iw7aZsw/vfcED664Sb1RDj6uSThHol/n+Jy771ZuuEX264hPmDazHuOzazA4CWB06EWGGWUqmyb952iKaF4YWi/Ej3ZZc3L1LGhBd9Vu20HG4QrUzMn+3M4aowntBdLF8n+rpqz+cBJon5hlFPENMMwrWfCSd1UvJ8PYlGYoZH8+OpK7raYZlV/vN8ythWR+2WVO9j1MReJYU7lOEZ1uKZxHDvynEfiFDBQtw6uE9dZT5G9mRsf9RbVo7myrzEWIpYe89DQXu2vYstoZh8XOJeYViWiOetWprEHXSZeY2UxOpgKHm9Yskkpr83g5pLUS6+mo2mbqo6pp7pMGqQ7teDiv27ALRGotpiImHBPbADNur2eAy54XcANnnIoyNiebNM5GPTSSxhVM3kBq5d2IJg8t11KrYJYD17iIKusErU2s3wj4ofkIR9tuXC3S9PXeNSd5KDIRtkC4kbCcezw8xW0NMagigIQIPMUherBV1vFj2i8TAvM3YbC5HM0Q8IxJbnArEljVfz4vkpr8+IkP1imG91qOvpZ14cYXuDqnUEIjWuEyo9g9K9YnkXERCnXYlOPt8SEH+Ds3s9DDMsWkLaoVIdfrM9G99CwvOubb4AyXv5kmcvkIy4RYKFMrILeKVpAq/LVBcnC04MbL5rnJbl2SeZhUks10wtYw2BXVVwnr24d3PfIqyPslSFYb59xj0GAEvakREDyWKVqOciO8BAL5S51Xu0ClmTIJwJslFIkyjwMfsPjFabf830QaQvd7TvbFkTkV7LYvnWGFeLlSn1DZ5sezLzdaQsniFSGia6QtjK6tuVibEPAjzYMx7TE5sOrY9Uc2Laqr32Qizq/4e934LeZFllRLETUqYCFYw0ZBDf2sFQ/7NDsMDST56+7/r+Mi0mgjCBC33n9MAFAITxAFWAEm1piafov1WmBBbUhcBa5jwE2K8GsBjsJ0esQ9nh9/7j3qynmJYNqI9ry4GQ0JfamQigoCnF5rUY+BbDP5rothjxIWz5YIUiGZihDPlBE4Mj9kSk34kAhyxvgcttZAArCuIEWPg7U2eSD3d5aWfthjT8sXUhlz5IlZS1aTqC049+QTicVFRhEHKJ/etemJSfJeycCTGPKRgFbiQ+6bY8sotTCQiewilhvSLJRKb/RK5L1bNqmj13fsYnrdmV7oTCcKmhftoJuisz2H4+regJCFS4Ok4OS+000yjHSpvpS3qeaWNSB/yb5FAdJ+gJCJSkU1ny7X3KdhnoYhOJ8LpkiYbwNMYeB4BcSL0MegZYI6DKA/mZ7ofyLhb/q36CbSuRd4eipAHy9rocQYX5MsFwLDz8q8J+C1gTRfy1i5xUgxkJq4g8BcqLcXEOw5Mjb+HmPZ67d0MLh2XsOTlo3zu3US0rRodHS8N7VdWYf+JdVseGsyk/53dyidOX/5lNjkWbqSuNrjxeyLzqecS9w8z0xAsutoVzaUArOTjebGdO8lTn+yv40Nenh57GfhvEH0T4Jcx43lEsMtJNfA4dg+2JbqhwJx1Dsf3gqmPgLsZeFgR3yHMut7MBFoNEHXU3qqpGjm3V9ZpS3MOKUj+LVJEPWpqnXtruLlWu/S/ZSDNEGXd5n83PEmnOzrOHXvt8wQ2mD/NiGPAORfl/Z3YmmFS81Zxv87bZFnz7XLgJCbT3wIVYQqhNDJMMIFiNdC1UzvKsAYzE+9gqC0AvSKw4FMgfBEKj8GiHxPUQ2ESUiKTvgbAJ4y+Lc3o4Eh+/DUwnpJNplaGETUxmf4YCB/Qv4XBLPRLbsXzaxwJBmtEcmmh1NLEO8H32qq3Ys+2INKZYNvEu6o4/wyR+LS0IBKMnqxR6cWuJeiqS+bCTdVVpCzN9Gw1Sgzf7qP/XqS5zRTl8SQZYZBe+8YN5XXR1c7dpdfoMgzv/w3G4a3blSTFERJkIvb/E81bymUwIQwln4/b/bRUWddiu9x44ND4LWTROyotQ6PZpU0iM/H/AvxHXntVeGv20qv/sWMMy/b4KXw+4Pp+CMSTSvHnUSgcE5VHFigqnnjwVh7efSbQfyYKubM0WNTEZ7Qak6X15rBx3QrW3/MR3HW11nMX5OXNx+NrxCNlv4j633ZSRdeY26EXrp51l2nrMTP7d8K8Db3QKXQCX3D9tXfa8nxQHQzOIY4A+0V2Dc+meqjbin1Q/lurh/Lf9TBWOY962reAZst2iEQmLYkNzi1DgAeyydTvOMxq71OB/Ald+BbAT4G+C7LJq57oGMNKTI7fB6Lz6jstKmg4gzARCVgl4CXGGNPZZOqC+sYs37rIDGl7Njm6Q1quyqTXKcW/b5Y6B/BjkBprZ4JBsbeJTcr7OoNexUTnuZCFB6HUk95OCGeyhaMEugIshlKnwjFL3Ucv31SrqLQox3EYq+s8cGnjY7YmMxUIgt3GsK0Vz6GoWpkOh2pUMR0StpdtwZrX/xaJyZRotU0uaJsz7XSm7Uwzaf03PVbYmkz7mvm7OAvyLCbd8Efb3mwyWlihmFfI/uX/5b99Y8Hy/z+zOCHEZjvsOqnEDlfyEPALBfwSzM8lopd5NDfSpneOYWXSZYlR7bDL/c6ED80Npz7aaP9gP0N6m4biQ65HwxfbR4Rds8Opqva3Vq2p2XHEZhhTuZdyAS8logG28EYntUr0RBRYHBRg0JVzydFbnW9Oh57S5HxNTiwYFUv9UTkcRyOjJzLjXwToLeF96aBV4I8dX5+6p5Gxe62P7TEVv7bCWsSsBxWrH1psnQdSZ2l7ktiSvK8cjK+oYWSX313IhN20R43tvUb+aD01UkCkLuo7/VXHL3r3bzrKsOQF8QCZ/sX+AwgLSuFXFvNJ+9LHkGXGTy2LXs4KcVL8TFjW+QCvd7v+SOVz6yq57mukh6+Zm/g+DUCwKefaXjqFjCL+cicCrhtZcy/3Cbr8RR0R1UOvWfBK9iVka4XGjenfNH7J/v9SBtnLnshePpLeWRvhcQJvEskfRFeAyti2AuDt/x+CHj0SDBjg3wAAAABJRU5ErkJggg=='
            }
        ]
    };
    let survey: SurveyPDF = new SurveyPDF(json, TestHelper.defaultOptions);
    let controller: DocController = new DocController(TestHelper.defaultOptions);
    let flats: IPdfBrick[][] = await FlatSurvey.generateFlats(survey, controller);
    expect(flats.length).toBe(1);
    expect(flats[0].length).toBe(1);
    expect(flats[0] instanceof FlatHTML);
    let assumeHTML: IRect = {
        xLeft: controller.leftTopPoint.xLeft + controller.unitWidth,
        xRight: controller.leftTopPoint.xLeft + controller.unitWidth +
            SurveyHelper.pxToPt(<any>survey.getAllQuestions()[0].width),
        yTop: controller.leftTopPoint.yTop,
        yBot: controller.leftTopPoint.yTop +
            SurveyHelper.pxToPt((<any>survey.getAllQuestions()[0]).height)
    };
    TestHelper.equalRect(expect, flats[0][0], assumeHTML);
});