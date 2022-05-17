import STRAPI_PARTNERConnection = GatsbyTypes.STRAPI_PARTNERConnection

type PartnersPageType = {
  data:{
    allStrapiPartner: STRAPI_PARTNERConnection
  }
}

export default PartnersPageType
