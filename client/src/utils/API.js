import axios from "axios";

export default {
  getZillowProperties(city, state) {
    return axios.get(`/api/properties/${city}/${state}`);
   },
   handleCreateUser(newUser) {
     return axios.post(`/api/user/`, newUser);
   }
};