import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.BASE_URL || 'https://phfarms-server.herokuapp.com'
});

console.log(`Using URL ${process.env.BASE_URL || 'https://phfarms-server.herokuapp.com'}. Env is ${process.env.BASE_URL}`)


export default Axios;

