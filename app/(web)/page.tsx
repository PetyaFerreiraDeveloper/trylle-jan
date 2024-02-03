import { StringDecoder } from "string_decoder";
import { getDataWP } from "./api/getDataWP";
import { PageContent } from "./components/PageContent";
import { FrontPageDataType, GalleryPageType } from "./lib/types";
import { textFrontPage } from "./lib/const";

const Home = async () => {
  // data is the content on the front page of the wordpress in json format
  // const data: FrontPageDataType = await getDataWP(
  //   "https://tryllejan.dk/wp-json/wp/v2/pages/58",
  //   "Failed to fetch data",
  // );

  // imageData is the content in the wp_attachment object on the front page of the wordpress in json format. it comes as an array with properties for the images on the page
  // const imageData: GalleryPageType[] = await getDataWP(
  //   "https://tryllejan.dk/wp-json/wp/v2/media?parent=58",
  //   "Failed to fetch Hero image",
  // );

  let imageUrl: string = "/frontPage.jpg";
  // if (imageData.length !== 0) {
  //   imageUrl = imageData[0]["source_url"];
  // }

  return (
    <PageContent
      text={textFrontPage}
      // text={data.content.rendered}
      imageUrl={imageUrl}
      secretBtn={true}
    />
  );
};

export default Home;
