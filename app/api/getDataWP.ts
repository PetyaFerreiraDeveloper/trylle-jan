export const getDataWP = async (url: string, errorMsg: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(errorMsg);
  }
  return res.json();
};
