import { FrontPageDataType, GalleryPageType } from "../lib/types";
import { PageContent } from "../components/PageContent";
import { getDataWP } from "../api/getDataWP";

const MagicEmilPage = async () => {
  const pageData: FrontPageDataType = await getDataWP(
    "https://wp.tryllejan.dk/wp-json/wp/v2/pages/290",
    "Failed to get text data",
  );

  const imageData: GalleryPageType[] = await getDataWP(
    "https://wp.tryllejan.dk/wp-json/wp/v2/media?parent=290",
    "Failed to fetch Hero image",
  );

  const localImageUrl = "/emil.jpg";
  return (
    <PageContent
      text={pageData.content.rendered}
      imageUrl={imageData[0] ? imageData[0]["source_url"] : localImageUrl}
    />
  );
};

export default MagicEmilPage;
