import axios from 'axios';

const url = import.meta.env.VITE_GITHUB_API_URL;
const authKey = import.meta.env.GITHUB_AUTH_KEY;

const api = axios.create({
  baseURL: url,
  auth: authKey,
  headers: {
    Accept: 'application/vnd.github+json',
  },
});

export default api;
