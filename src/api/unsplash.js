import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID F-SBRvyFUFOeNWQQlaaVdie-PDaO3VCcY744PmulzcM",
  },
});
