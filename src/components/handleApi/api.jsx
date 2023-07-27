import axios from "axios";

import { baseURL } from "../baseUrl/baseURL";

export const getData = async () => {
  try {
    const res = await axios.get(baseURL, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
      },
    });
    return res;
  } catch (err) {
    console.log(err.message);
  }
};
