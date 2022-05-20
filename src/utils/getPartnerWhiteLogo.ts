import { PartnerType } from "types"

export function getPartnerWhiteLogo( partner: PartnerType ) {
    if(!partner.whiteLogo?.url) {
        return partner.Logo?.url
    }
}