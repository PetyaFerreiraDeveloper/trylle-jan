import { PageContent } from "./components/PageContent"

const getData = async () => {
  const res = await fetch("https://tryllejan.dk/wp-json/wp/v2/pages/58")
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }
  return res.json()
}

const Home = async () => {
  // data is the content on the front page of the wordpress in markup format
  const data = await getData()
  console.log({data});

  return <PageContent data={data} />
}

export default Home
