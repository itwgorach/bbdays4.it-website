const getEnglishVideosPage = (data) => {
  const { videospage: enVideospage } = data.strapiVideospage.localizations.data[0].attributes
  const plVideospage = JSON.parse(JSON.stringify(data.strapiVideospage.videospage))

  const updateVideoLists = (component) => {
    if (component.video_lists && component.video_lists.length > 0) {
      component.video_lists = component.video_lists.map((video) => {
        const localization = video.localizations.data.find((loc) => loc.attributes.locale === 'en')
        if (localization) {
          video.videoUrl = localization.attributes.videoUrl
          video.subtitle = localization.attributes.subtitle
        }
        return video
      })
    }
    return component
  }

  const mergeData = (polishData, englishData) => {
    const updatedPolishData = polishData.map((component) => {
      if (component.strapi_component === 'base.videos-list') {
        return updateVideoLists(component)
      }
      return component
    })

    const mergedData = updatedPolishData.map((polishItem) => {
      const englishItem = englishData.find((engItem) => engItem._xcomponent === polishItem.strapi_component)
      if (englishItem) {
        for (const key in englishItem) {
          if (englishItem.hasOwnProperty(key) && key !== '_xcomponent' && englishItem[key] !== null) {
            polishItem[key] = englishItem[key]
          }
        }
      }
      return polishItem
    })

    return mergedData
  }

  const videospage = mergeData(plVideospage, enVideospage)
  const { subtitle, footerSubtitle } = data.strapiVideospage.localizations.data[0].attributes

  return [subtitle, footerSubtitle, videospage]
}

export default getEnglishVideosPage
