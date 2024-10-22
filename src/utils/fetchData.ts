// load the data from the local directory
export const fetchDataLoader = async () => {
  const response = await fetch("../../public/data/popularProperty.json");
  if (!response.ok) {
    throw new Error("Failed to load data");
  }
  const data = await response.json();
  return data;
};
