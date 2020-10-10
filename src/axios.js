import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.BASE_URL || 'https://localhost'
});

console.log(`Using URL ${process.env.BASE_URL || 'https://localhost'}. Env is ${process.env.BASE_URL}`)


export default Axios;

