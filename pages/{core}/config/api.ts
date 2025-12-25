import axios from "axios";

const BASE_URL = "https://mockapi.io/clone/694bc8c2da5ddabf00353713";

const api = axios.create({
  baseURL: BASE_URL,
})

export default api
