import Image from "next/image";
import { GalleryPageType } from "../lib/types";

const getData = async () => {
  const res = await fetch(
    "https://tryllejan.dk/wp-json/wp/v2/media/?per_page=100"
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const GalleryPage = async () => {
  const data = await getData();
  return (
    <section className="pt-[146px]">
      <h2 className="text-3xl ">Galleri</h2>
      <div className="flex flex-col items-center md:flex-row gap-5 overflow-x-scroll ">
        {data.map((d: GalleryPageType) => (
          <div key={d.id} className="w-full">
            <div
              key={d.id}
              className="rounded-lg border-2 border-green-500 relative w-full h-96 md:w-[768px] md:h-[600px]  "
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;
