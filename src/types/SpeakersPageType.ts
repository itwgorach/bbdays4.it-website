import STRAPI_SPEAKERConnection = GatsbyTypes.STRAPI_SPEAKERConnection

type SpeakersPageType = {
  data:{
    allStrapiSpeaker:STRAPI_SPEAKERConnection
  }
}

export default SpeakersPageType
