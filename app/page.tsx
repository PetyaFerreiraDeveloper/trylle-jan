import { getDataWP } from "./api/getDataWP";
import { PageContent } from "./components/PageContent";
import { FrontPageDataType, GalleryPageType } from "./lib/types";

const Home = async () => {
  // data is the content on the front page of the WordPress in json format
  const data: FrontPageDataType = await getDataWP(
    "https://wp.tryllejan.dk/wp-json/wp/v2/pages/58",
    "Failed to fetch data",
  );

  // imageData is the content in the wp_attachment object on the front page of the WordPress in json format. it comes as an array with properties for the images on the page
  const imageData: GalleryPageType[] = await getDataWP(
    "https://wp.tryllejan.dk/wp-json/wp/v2/media?parent=58",
    "Failed to fetch Hero image",
  );

  return (
    <PageContent
      text={data.content.rendered}
      imageUrl={imageData[0]["source_url"]}
      secretBtn={true}
    />
  );
};

export default Home;
