export const getDataWP = async (url: string, errorMsg: string) => {
  // this line does not work properly. After deleting an image, we get error:
  // ⨯ upstream image response failed for https://tryllejan.dk/wp-content/uploads/2024/01/1W3A6487-1-scaled.jpg 404
  // ImageError: "url" parameter is valid but upstream response is invalid
  // const res = await fetch(url, { next: { revalidate: 3600 } });

  // this line of code will not cache any of the data
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(errorMsg);
  }
  return res.json();
};
