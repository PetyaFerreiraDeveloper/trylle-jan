export const getDataWP = async (url: string, errorMsg: string) => {
  const res = await fetch(url, { next: { revalidate: 3600 } });

  // this line of code will not cache any of the data
  // const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(errorMsg);
  }
  return res.json();
};
