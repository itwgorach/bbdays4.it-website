const getEnglishHomepage = (data) => {
  const plHomepage = JSON.parse(JSON.stringify(data.strapiHomepage.homepage))
  const enHomepage = data.strapiHomepage.localizations.data[0].attributes.homepage

  const mergeData = (polishData, englishData) => {
    const mergedData = polishData.map((polishItem) => {
      const englishItem = englishData.find((engItem) => engItem._xcomponent === polishItem.strapi_component)
      if (englishItem?._xcomponent === 'base.festival-in-numbers') {
        englishItem.achievements = [
          {
            ...polishItem.achievements[0],
            name: polishItem.achievements[0].localizations.data[0].attributes.name,
            number: polishItem.achievements[0].localizations.data[0].attributes.number,
          },
        ]
        console.log(englishItem)
        console.log(polishItem)
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
  // console.log(plHomepage)
  // console.log('------------')
  // console.log(enHomepage)
  // console.log('------------')
  // console.log(homepage)

  return homepage
}

export default getEnglishHomepage
