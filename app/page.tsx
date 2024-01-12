import { PageContent } from "./components/PageContent"
import { FrontPageDataType, GalleryPageType } from "./lib/types"

const getData = async () => {
  const res = await fetch("https://tryllejan.dk/wp-json/wp/v2/pages/58")
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }
  return res.json()
}

const getFrontPageImage = async () => {
  const res = await fetch("https://tryllejan.dk/wp-json/wp/v2/media?parent=58")
  if (!res.ok) {
    throw new Error("Failed to fetch FrontPage image")
  }
  return res.json()
}

const Home = async () => {
  // data is the content on the front page of the wordpress in json format
  const data: FrontPageDataType = await getData()

  // imageData is the content in the wp_attachment object on the front page of the wordpress in json format. it comes as an array with properties for the images on the page
  const imageData: GalleryPageType[] = await getFrontPageImage()

  return (
    <PageContent
      text={data.content.rendered}
      imageUrl={imageData[0]["source_url"]}
    />
  )
}

export default Home
