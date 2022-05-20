import { PartnerType } from "types"

export function getPartnerWhiteLogo( partner: PartnerType ) {
    if(!partner.whiteLogo?.url) {
        return partner.Logo?.url
    }
<<<<<<< HEAD

    return partner.whiteLogo.url
=======
>>>>>>> 1059529 (add getPartnerWhiteLogo util)
}