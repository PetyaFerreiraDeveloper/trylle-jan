import { ReferenceCardType } from "@/app/lib/referenceCardData"
type Props = {
  review: ReferenceCardType
  key: string
}
export const ReferenceCard = (props: Props) => {
  const { title, description, writerName, writerTitle, date } = props.review
  return (
    <article className="flex flex-col gap-2 w-full md:w-72 max-w-96 items-start">
      <div className="w-full h-[1px] bg-gray-800 my-5"></div>
      <p>
        {date.toLocaleString("da-DK", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <p className="">{description}</p>
      <h4 className="text-xl mt-5">{title}</h4>
      <div className="flex flex-col self-end">
        <p>{writerName}</p>
        <p>{writerTitle}</p>
      </div>
    </article>
  )
}
