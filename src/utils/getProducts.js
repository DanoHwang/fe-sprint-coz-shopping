import axios from "axios";
import { urls } from "../constants/urls";

export const getAllProducts = async () => {
  const result = await axios.get(urls.allProducts);

  if (result.status === 200) {
    return result.data;
  }

  if (result.status === 400) {
    return {
      name: "BadRequest",
      message: "Maximum count is 10"
    };
  }

  if (result.status === 500) {
    return {
      name: "serverError",
      message: "Internal Server Error"
    };
  }
};

export const getProductsByPage = async (page) => {
  const result = await axios.get(urls.allProducts);

  if (result.status === 200) {
    return result.data.slice(page * 16, (page + 1) * 16);
  }

  if (result.status === 400) {
    return {
      name: "BadRequest",
      message: "Maximum count is 10"
    };
  }

  if (result.status === 500) {
    return {
      name: "serverError",
      message: "Internal Server Error"
    };
  }
};
