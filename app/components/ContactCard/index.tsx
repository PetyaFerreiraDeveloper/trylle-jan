import { ContactCardType } from "@/app/kontakt/page";
import Image from "next/image";

type ContactCard = {
  data: ContactCardType;
  key?: string;
};

export const ContactCard = async ({ data }: ContactCard) => {
  return (
    <section className="flex flex-col gap-2 items-center w-full md:w-72 max-w-96 rounded-lg border border-gray-200 shadow-md">
      <div className="w-full h-72 relative">
        <Image
          className="rounded-t-lg object-top"
          src={data.imgUrl}
          fill
          objectFit="cover"
          alt="emil"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="pb-5">
        <h3 className="text-3xl my-5">{data.title}</h3>
        <h4>
          <span className="font-bold text-gray-800">Tryllekunstner: </span>
          <span>{data.subtitle}</span>
        </h4>
        <p>
          <span className="font-bold text-gray-800">Telefon: </span>
          <a href={`tel:${data.phone}`}>{data.phone}</a>
        </p>
        <p>
          <span className="font-bold text-gray-800">Mail: </span>
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </p>
        {data.cvr ? (
          <p>
            <span className="font-bold text-gray-800">CVR: </span>
            <span>{data.cvr}</span>
          </p>
        ) : null}
      </div>
    </section>
  );
};
