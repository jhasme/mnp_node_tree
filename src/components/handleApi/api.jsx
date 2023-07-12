import axios from "axios";

import { baseURL } from "../baseUrl/baseURL";

export const getData = async () => {
  try {
    const res = await axios.get(baseURL + "/users", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (err) {
    console.log(err.message);
  }
};
