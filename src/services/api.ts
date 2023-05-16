import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.spoonacular.com/",
});

const token = import.meta.env.VITE_API_KEY;


export { api, token };
