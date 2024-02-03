import { getDataWP } from "../api/getDataWP";
import { ReferencesPageType } from "../lib/types";
import { transformReviews } from "../utils/transformReviews";
import ScrollBarReviews from "../components/ScrollBarReviews";
import { references } from "../lib/const";

type PurgedDataType = {
  title: string;
  excerpt: string;
};

export type UpdatedReferenceCardDataType = {
  title: string;
  author: string;
  content: string;
  position: string;
  referenceDate: Date | string;
};

const ReferencesPage = async () => {
  // const data: ReferencesPageType[] = await getDataWP(
  //   "https://tryllejan.dk//wp-json/wp/v2/posts",
  //   "Failed to fetch data",
  // );

  // const purgedData: PurgedDataType[] = data.map((review) => ({
  //   title: review.title.rendered,
  //   excerpt: review.content.rendered,
  // }));

  // const updatedReferenceCardData: UpdatedReferenceCardDataType[] =
  //   purgedData.map((card) => {
  //     return transformReviews(card);
  //   });

  // updatedReferenceCardData.sort(
  //   (a, b) =>
  //     new Date(b.referenceDate).getTime() - new Date(a.referenceDate).getTime(),
  // );

  return (
    <section className={"page-section"}>
      <h2 className="text-3xl">Referencer</h2>
      <p className="mb-5">Hvad mine glæde kunder siger:</p>
      <ScrollBarReviews data={references} />
    </section>
  );
};

export default ReferencesPage;
