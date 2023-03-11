import axios from 'axios';

const url = 'https://api.github.com';
const authKey = import.meta.env.GITHUB_AUTH_KEY;
const config = {
  auth: authKey,
  headers: {
    Accept: 'application/vnd.github+json',
  },
};

export const fetcher = async (key) => {
  if (key) {
    const { data } = await axios.get(`${url}${key}`, config);
    return data;
  }
  return null;
};

export const getKeyRepo = ({ checkBox, input }) => {
  if (checkBox) {
    return `/repos/${input}`;
  }
  return `/search/repositories?q=${input}&per_page=1`;
};
