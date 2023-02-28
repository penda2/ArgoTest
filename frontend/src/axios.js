//enregistrement de la base de l'url 
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/api";
axios.defaults.headers.common['Authorization'] = 'Auth Token'
export default {
  name: "axios",
};
