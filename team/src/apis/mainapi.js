import axios from "axios";

const getAPI = axios.create({
    baseURL: "https://theromans.fun",
    timeout: 10000000,
});

export { getAPI };