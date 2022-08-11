import axios from "axios";
import { logger } from "./logger";

class Request {
  constructor(token = "") {

    this.request = logger(
      axios.create({
        baseURL: "http://192.168.111.135:3000",
      })
    );
    this.token = token;
  }
  get = (url) => {
    return this.request.get(url);
  };
  post = (url, params, token) => {
    return this.request.post(url, params, { headers: {"Authorization": `Bearer ${token}`} });
  };
}

export const request = new Request();
