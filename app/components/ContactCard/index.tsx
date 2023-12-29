import { ContactCardType } from "@/app/lib/contactCardData"
import Image from "next/image"

type ContactCard = {
  data: ContactCardType
  key?: string
}

export const ContactCard = ({ data }: ContactCard) => {
  return (
    <section className="flex flex-col gap-2 items-center w-full md:w-72 max-w-96 rounded-lg border border-gray-200 shadow-md">
      <div className="w-full h-64 relative">
        <Image
          className="rounded-t-lg object-none object-top"
          src={data.imgUrl}
          fill={true}
          alt="emil"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="pb-5">
        <h3 className="text-3xl mb-5">{data.title}</h3>
        <h4>Tryllekunstner: {data.subtitle}</h4>
        <p>Telefon: {data.phone}</p>
        <p>Mail: {data.email}</p>
        {data.cvr ? <p>CVR: {data.cvr} </p> : null}
      </div>
    </section>
  )
}
