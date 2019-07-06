import axios from "axios";

export default {
  getZillowProperties(city, state) {
    return axios.get(`/api/properties/${city}/${state}`);
   },
   handleCreateUser(email, username, password) {
     return axios.post(`/api/user/`, { email: email, username: username, password: password });
   }
};