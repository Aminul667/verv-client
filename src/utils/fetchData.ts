/* eslint-disable @typescript-eslint/no-unused-vars */
import popularProperty from "../assets/data/popularProperty.json";

export const fetchDataLoader = async () => {
  try {
    const data = await Promise.resolve(popularProperty); // simulating fetch
    return data;
  } catch (error) {
    throw new Error("Failed to load data");
  }
};
