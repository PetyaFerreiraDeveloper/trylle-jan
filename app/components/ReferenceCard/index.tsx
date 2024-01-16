import { ReferenceCardType } from "@/app/lib/referenceCardData";
type Props = {
  review: ReferenceCardType;
  key: string;
};
export const ReferenceCard = (props: Props) => {
  const { title, content, author, position, referenceDate } = props.review;
  return (
    <article className="flex flex-col gap-2 w-full md:min-w-72 md:max-w-96 items-start">
      <div className="w-full h-[1px] bg-gray-800 my-5"></div>
      {referenceDate ? <p className="self-end">
        { referenceDate.toLocaleString("da-DK", {
          year: "numeric",
          month: "long",
          day: "numeric"
        }) }
      </p> : null}
      <p className="">{content}</p>
      <h4 className="text-xl mt-5">{title}</h4>
      <div className="flex flex-col self-end text-right">
        <p>{author}</p>
        <p>{position}</p>
      </div>
    </article>
  );
};
