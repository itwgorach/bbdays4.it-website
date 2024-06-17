import VideosPageDateType from 'types/VideosPageDataType'

const getPolishVideosPage = (data: VideosPageDateType) => {
  const { videospage } = data.strapiVideospage

  const { subtitle } = data.strapiVideospage
  const { footerSubtitle } = data.strapiVideospage
  return [subtitle, footerSubtitle, videospage]
}

export default getPolishVideosPage
