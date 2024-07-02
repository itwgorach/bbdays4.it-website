import HomePageDataType from 'types/HomePageDataType'

const getPolishHomepage = (data: HomePageDataType) => {
  const { homepage } = data.strapiHomepage

  return homepage
}

export default getPolishHomepage
