import { getDataWP } from "../api/getDataWP";
import { ReferenceCard } from "../components/ReferenceCard";

const ReferencesPage = async () => {
  const data: any[] = await getDataWP(
    "https://tryllejan.dk//wp-json/wp/v2/posts",
    "Failed to fetch data",
  );

  const purgedData = data.map((review) => ({ date: review.date , title: review.title.rendered, excerpt: review.excerpt.rendered }));
  function getReferenceCardData(item: any) {
    const date = item?.date ?? null;
    const title = item?.title ?? null;
    const excerpt = item?.excerpt ?? null;
    //const author = excerpt?.match(/\[author\](.*)\[\/author\]/g);
    const author = excerpt?.match(/(?<=\[author\])([\s\S]*?)(?=\[\/author\])/g);
    const content = excerpt?.match(/(?<=\[content\])([\s\S]*?)(?=\[\/content\])/g);
    const referenceDate = excerpt?.match(/(?<=\[date\])([\s\S]*?)(?=\[\/date\])/g);
    const position = excerpt?.match(/(?<=\[position\])([\s\S]*?)(?=\[\/position\])/g);
    return { title, author, content, date, position, referenceDate: referenceDate ? new Date(referenceDate) : ''};
  }

  const updatedReferenceCardData = purgedData.map((card) => {
    return getReferenceCardData(card);
  });

  updatedReferenceCardData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section className={"page-section"}>
      <h2 className="text-3xl">Referencer</h2>
      <p className="mb-10">Hvad mine glæde kunder siger:</p>
      <div className="flex flex-col gap-8 md:flex-row overflow-x-scroll">
        {updatedReferenceCardData.map((card) => (
          <ReferenceCard review={card} key={card.title} />
        ))}
      </div>
      {/* <p>{data[0].title.rendered}</p> */}
    </section>
  );
};

export default ReferencesPage;
