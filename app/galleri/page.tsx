import Image from "next/image";
import { GalleryPageType } from "../lib/types";
import { getDataWP } from "../api/getDataWP";

const GalleryPage = async () => {
  const imageData: GalleryPageType[] = await getDataWP(
    "https://tryllejan.dk/wp-json/wp/v2/media/?per_page=100",
    "Failed to fetch data",
  );

  return (
    // <section className="pt-[146px] flex flex-col">
    //   <h2 className="text-3xl px-5 pb-5 md:px-10 lg:px-20 xl:px-36">Galleri</h2>
    //   <div className="overflow-scroll">
    //     <div className="flex flex-col items-center md:flex-row gap-5 pb-5 flex-1">
    //       {imageData.map((d: GalleryPageType) => (
    //         <div key={d.id} className="w-full">
    //           <div
    //             key={d.id}
    //             className="rounded-lg border-2 border-gray-200 shadow-lg scrollbar-hide relative w-full h-96 md:w-[768px] md:h-[600px]  "
    //           >
    //             <Image
    //               className="rounded-lg object-top overflow-hidden"
    //               src={d.source_url}
    //               alt={d.alt_text}
    //               fill
    //               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    //               style={{
    //                 objectFit: "cover",
    //               }}
    //             />
    //           </div>
    //           <p>{d.source_url}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="pt-[146px] mx-auto max-w-[1960px] p-4 ">
      <h2 className="text-3xl px-5 pb-5 md:px-10 lg:px-20 xl:px-36">Galleri</h2>
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
        {imageData.map((d: GalleryPageType) => (
          <div
            key={d.id}
            className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
          >
            <Image
              className="rounded-lg object-top overflow-hidden"
              src={d.source_url}
              alt={d.alt_text}
              width={720}
              height={480}
              sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;
