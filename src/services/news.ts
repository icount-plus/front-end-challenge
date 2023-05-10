import axios from "axios";

export const newsService = axios.create({
  baseURL: process.env.REACT_APP_NEWS_URL,
  params: {
    "api-key": process.env.REACT_APP_NEWS_KEY,
  },
  headers: {
    Accept: "application/json",
  },
});
export const searchNews = async (setData: any) => {
  await newsService
    .get("/search/v2/articlesearch.json", { params: { q: "bitcoin" } })
    .then((resp) => setData(resp.data));
};
export const topNews = async (setData: any) => {
  await newsService
    .get("mostpopular/v2/viewed/7.json")
    .then((resp) => setData(resp.data));
};
