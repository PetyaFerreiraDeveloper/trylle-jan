import GalleryImage from "../components/GalleryImage";
import { getDataWP } from "@/app/api/getDataWP";
import { GalleryPageType } from "@/app/lib/types";

const GalleryPage = async () => {
  const imageData: GalleryPageType[] = await getDataWP(
     "https://wp.tryllejan.dk/wp-json/wp/v2/media/?per_page=100",
     "Failed to fetch data",
  );

  return (
    <section className="pt-[146px] mx-auto max-w-[1960px] p-4 ">
      <h2 className="text-3xl px-5 pb-5 md:px-10 lg:px-20 xl:px-36">Galleri</h2>
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
        {imageData.map((data: GalleryPageType) => (
          <GalleryImage key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;
