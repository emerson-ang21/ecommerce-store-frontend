import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.BASE_URL || 'https://localhost'
});

export default Axios;
