import VideosPageDateType from 'types/VideosPageDataType'

const getPolishVideosPage = (data: VideosPageDateType) => {
  const { videospage: videosPage } = data.strapiVideospage

  const { subtitle } = data.strapiVideospage
  const { footerSubtitle } = data.strapiVideospage
  return [subtitle, footerSubtitle, videosPage]
}

export default getPolishVideosPage
