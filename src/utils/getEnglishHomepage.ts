const getEnglishHomepage = (data) => {
  const plHomepage = JSON.parse(JSON.stringify(data.strapiHomepage.homepage))
  const enHomepage = data.strapiHomepage.localizations.data[0].attributes.homepage

  const mergeData = (polishData, englishData) => {
    const mergedData = polishData.map((polishItem) => {
      const englishItem = englishData.find((engItem) => engItem._xcomponent === polishItem.strapi_component)
      if (englishItem?._xcomponent === 'base.festival-in-numbers') {
        englishItem.achievements = [
          ...polishItem.achievements.map((item) => {
            return item.localizations.data[0].attributes
          }),
        ]
      }
      if (englishItem?._xcomponent === 'base.signup-grid') {
        englishItem.signup_sections = [
          ...polishItem.signup_sections.map((item) => {
            return item.localizations.data[0].attributes
          }),
        ]
      }
      if (englishItem?._xcomponent === 'base.speakers-grid') {
        englishItem.speakers = [
          ...polishItem.speakers.map((item) => {
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
            const merg = mergeObjects(item, item.localizations.data[0].attributes)

            return merg
          }),
        ]
      }

      if (englishItem) {
        for (const key in englishItem) {
          if (englishItem.hasOwnProperty(key) && englishItem[key] !== null) {
            polishItem[key] = englishItem[key]
          }
        }
      }
      return polishItem
    })

    return mergedData
  }

  const homepage = mergeData(plHomepage, enHomepage)

  return homepage
}

export default getEnglishHomepage
