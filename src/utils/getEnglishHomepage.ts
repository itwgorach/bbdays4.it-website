import HomePageDataType from 'types/HomePageDataType'

const getEnglishHomepage = (data: HomePageDataType) => {
  const plHomepage = JSON.parse(JSON.stringify(data.strapiHomepage.homepage))
  const enHomepage = data.strapiHomepage.localizations.data[0]?.attributes.homepage

  const mergeObjects = (polishItem, englishItem) => {
    if (englishItem) {
      for (const key in englishItem) {
        if (englishItem.hasOwnProperty(key) && englishItem[key] !== null) {
          polishItem[key] = englishItem[key]
        }
      }
    }
    return polishItem
  }

  const mapItemsWithLocalization = (polishItems) => {
    return polishItems.map((item) => item.localizations.data[0]?.attributes)
  }

  const mergeData = (polishData, englishData) => {
    return polishData.map((polishItem) => {
      const englishItem = englishData.find((engItem) => engItem._xcomponent === polishItem.strapi_component)

      if (englishItem) {
        switch (englishItem._xcomponent) {
          case 'base.festival-in-numbers':
            englishItem.achievements = mapItemsWithLocalization(polishItem.achievements)
            break
          case 'base.signup-grid':
            englishItem.signup_sections = mapItemsWithLocalization(polishItem.signup_sections)
            break
          case 'base.speakers-grid':
            englishItem.speakers = polishItem.speakers.map((item) =>
              mergeObjects(item, item.localizations.data[0]?.attributes),
            )
            break
          case 'base.schedule':
            englishItem.events = polishItem.events.map((item) =>
              mergeObjects(item, item.localizations.data[0]?.attributes),
            )
            break
          case 'base.agenda':
            englishItem.lectures = polishItem.lectures.map((item) =>
              mergeObjects(item, item.localizations.data[0]?.attributes),
            )
            englishItem.speakers = polishItem.speakers.map((item) =>
              mergeObjects(item, item.localizations.data[0]?.attributes),
            )
            break
          default:
            break
        }

        Object.keys(englishItem).forEach((key) => {
          if (englishItem[key] !== null) {
            polishItem[key] = englishItem[key]
          }
        })
      }

      return polishItem
    })
  }

  return mergeData(plHomepage, enHomepage)
}

export default getEnglishHomepage
