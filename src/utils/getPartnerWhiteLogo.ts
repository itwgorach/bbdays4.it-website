import { PartnerType } from 'types'

export const getPartnerWhiteLogo = (partner: PartnerType) => partner.whiteLogo?.url || partner.Logo?.url
