import axios from "axios";
import {getCookie } from "./Cookies";

export const VKYRequest = (type, endpoint, body) => {
  const headers = {};

  // Check if jwt cookie exists
  const jwtCookie = getCookie("jwt");
  if (jwtCookie) {
    headers["Authorization"] = `Bearer ${jwtCookie}`;
  }

  let responsePromise;

  if (type.toLowerCase() === "get") {
    responsePromise = axios.get(import.meta.env.VITE_BACKEND_URL + endpoint, {
      headers: headers,
    });
  } else if (type.toLowerCase() === "post") {
    responsePromise = axios.post(
      import.meta.env.VITE_BACKEND_URL + endpoint,
      body,
      { headers: headers }
    );
  } else if (type.toLowerCase() === "patch") {
    responsePromise = axios.patch(
      import.meta.env.VITE_BACKEND_URL + endpoint,
      body,
      { headers: headers }
    );
  } else if (type.toLowerCase() === "delete") {
    responsePromise = axios.delete(
      import.meta.env.VITE_BACKEND_URL + endpoint,
      { headers: headers }
    );
  } else {
    throw new Error(`Unsupported request type: ${type}`);
  }

  return responsePromise;
};
