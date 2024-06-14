const getPolishVideosPage = (data) => {
  const { videospage } = data.strapiVideospage

  const { subtitle } = data.strapiVideospage
  const { footerSubtitle } = data.strapiVideospage
  return [subtitle, footerSubtitle, videospage]
}

export default getPolishVideosPage
