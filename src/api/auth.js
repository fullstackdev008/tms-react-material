import axios from "axios"

const API_URL = 'http://192.168.149.158:3001/api';

class Auth {
  signin(authInfo) {
    return axios
      .post(API_URL + "auth/signin", authInfo)
      .then(response => {
        console.log(response.data)
        return response.data;
      });
  }

  signup(authInfo) {
    console.log(authInfo);
    return axios
      .post(API_URL + "auth/signup", authInfo)
      .then(response => {
        console.log(response.data)
        return response.data;
      });
  }
}

export default new Auth();
