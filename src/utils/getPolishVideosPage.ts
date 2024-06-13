const getPolishVideosPage = (data) => {
  const subtitle = data.strapiVideospage.subtitle
  const footerSubtitle = data.strapiVideospage.footerSubtitle
  return [subtitle, footerSubtitle]
}

export default getPolishVideosPage
