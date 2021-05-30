import { BASE_URL } from "../constants/apiConfig"; 
import axios from "axios";
export default function callAPI(endpoint, method = "GET", body) {
  let headers = new Headers();

  // headers.append('Content-Type', 'application/json');
  // headers.append('Accept', 'application/json'); 
  // headers.append('Origin','http://localhost:3002');
    return axios({
      method: method,
      url: `${BASE_URL}${endpoint}`,
      data: body,
      // headers:headers
      });
  }