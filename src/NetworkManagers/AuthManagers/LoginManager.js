import api from "../NetworkManagerMain.js";
import {
  LOGIN_EMAIL,
  LOGIN_MOBILE,
  LOGIN_USERID,
} from "../../Apis/ApiEndpoints.js";
import Request from "../../constants/RequestObject.js";
async function loginMobile(userid, password) {
  return new Promise((Resolve, Reject) => {
    api
      .post(LOGIN_MOBILE, new Request({ userid: userid, password: password }))
      .then((res) => {
        Resolve(res.data);
      })
      .catch((err) => {
        Reject(err.status);
      });
  });
}
async function loginEmail(userid, password) {
  return new Promise((Resolve, Reject) => {
    api
      .post(LOGIN_EMAIL, new Request({ userid: userid, password: password }))
      .then((res) => {
        Resolve(res.data);
      })
      .catch((err) => {
        Reject(err.status);
      });
  });
}
async function loginUserid(userid, password) {
  return new Promise((Resolve, Reject) => {
    api
      .post(LOGIN_USERID, new Request({ userid: userid, password: password }))
      .then((res) => {
        Resolve(res.data);
      })
      .catch((err) => {
        Reject(err.status);
      });
  });
}
export { loginMobile, loginEmail, loginUserid };
