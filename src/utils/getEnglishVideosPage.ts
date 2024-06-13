const getEnglishVideosPage = (data) => {
  const subtitle = data.strapiVideospage.localizations.data[0].attributes.subtitle
  const footerSubtitle = data.strapiVideospage.localizations.data[0].attributes.footerSubtitle
  return [subtitle, footerSubtitle]
}

export default getEnglishVideosPage
