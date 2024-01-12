import { FrontPageDataType, GalleryPageType } from "../lib/types";
import { PageContent } from "../components/PageContent";
import { getDataWP } from "../api/getDataWP";

const MagicEmilPage = async () => {
  const data: FrontPageDataType = await getDataWP(
    "https://tryllejan.dk/wp-json/wp/v2/pages/290",
    "Failed to get text data",
  );
  const imageData: GalleryPageType[] = await getDataWP(
    "https://tryllejan.dk/wp-json/wp/v2/media?parent=290",
    "Failed to fetch Hero image",
  );

  return (
    <PageContent
      text={data.content.rendered}
      imageUrl={imageData[1]["source_url"]}
    />
  );
};

export default MagicEmilPage;
