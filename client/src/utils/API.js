import axios from "axios";

export default {
  getDBproperties() {
    return axios.get('/api/properties');
   },
 
   getZillowProperties(state, city) {
    return axios.get(`/api/propertieshttp://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=X1-ZWz1h654yx46x7_8l13j&state=${state}&city=${city}`);
   }
}