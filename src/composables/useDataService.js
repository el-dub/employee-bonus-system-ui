import axios from "axios";

export function useDataService() {
  // const getBaseUrl = () => {
  //     // if(window.location.href.indexOf("localhost") !== -1) {
  //     //
  //     // }
  //     return "http://localhost:8080";
  // }

  const getCategories = async () => {
    const url = "/category";
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("axios request", error);
    }
  };

  const getBonuses = async () => {
    const url = "/bonus";
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("axios request", error);
    }
  };

  return {
    getCategories,
    getBonuses,
  };
}
