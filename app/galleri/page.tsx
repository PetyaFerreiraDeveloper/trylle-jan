import Image from "next/image";
import { GalleryPageType } from "../lib/types";
import { getDataWP } from "../api/getDataWP";

const GalleryPage = async () => {
  const imageData: GalleryPageType[] = await getDataWP(
    "https://tryllejan.dk/wp-json/wp/v2/media/?per_page=100",
    "Failed to fetch data",
  );
   
  return (
    <section className="pt-[146px] flex flex-col">
      <h2 className="text-3xl px-5 pb-5 md:px-10 lg:px-20 xl:px-36">Galleri</h2>
      <div className="overflow-scroll">
        <div className="flex flex-col items-center md:flex-row gap-5 pb-5 flex-1">
          {imageData.map((d: GalleryPageType) => (
            <div key={d.id} className="w-full">
              <div
                key={d.id}
                className="rounded-lg border-2 border-gray-200 shadow-lg scrollbar-hide relative w-full h-96 md:w-[768px] md:h-[600px]  "
              >
                <Image
                  className="rounded-lg object-top overflow-hidden"
                  src={d.source_url}
                  alt={d.alt_text}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <p>{d.source_url}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
