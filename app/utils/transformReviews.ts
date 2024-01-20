type ReferenceDataType = {
  title: string;
  excerpt: string;
};

export const transformReviews = (item: ReferenceDataType) => {
  const title = item.title;
  const excerpt = item.excerpt;

  const authorArray = excerpt?.match(
    /(?<=\[author\])([\s\S]*?)(?=\[\/author\])/g,
  );
  const author = authorArray ? authorArray[0] : "";
  const contentArray = excerpt?.match(
    /(?<=\[content\])([\s\S]*?)(?=\[\/content\])/g,
  );
  const content = contentArray ? contentArray[0] : "";
  const referenceDate = excerpt?.match(
    /(?<=\[date\])([\s\S]*?)(?=\[\/date\])/g,
  );

  const positionArray = excerpt?.match(
    /(?<=\[position\])([\s\S]*?)(?=\[\/position\])/g,
  );
  const position = positionArray ? positionArray[0] : "";

  return {
    title,
    author,
    content,
    position,
    referenceDate: referenceDate ? new Date(referenceDate[0]) : "",
  };
};
