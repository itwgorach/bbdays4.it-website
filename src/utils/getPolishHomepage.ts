import HomePageDataType from 'types/HomePageDataType'

const getPolishhHomepage = (data: HomePageDataType) => {
  const { homepage } = data.strapiHomepage

  return homepage
}

export default getPolishhHomepage
