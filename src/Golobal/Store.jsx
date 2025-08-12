import { createContext } from "react";
import {
  loginEmail,
  loginMobile,
  loginUserid,
} from "../NetworkManagers/AuthManagers/LoginManager.js";
import Response from "../constants/StandardResponse.js";
import { getCookies, setCookieObject } from "../Utils/CookieManager.js";
const data = createContext([]);
const name = "rashid";
async function login(type, userId, Password) {
  try {
    let response;
    if (type === "phone") {
      response = await loginMobile(userId, Password);
    } else if (type === "email") {
      response = await loginEmail(userId, Password);
    } else {
      response = await loginUserid(userId, Password);
    }
    await setCookieObject("userData", {
      profile: response.profile,
      userid: response.userid,
      username: response.username,
      token: response.token,
    });
    location.replace("/home");
    return null;
  } catch (error) {
    return new Response(error, "login failed");
  }
}

export default function ContextProvider({ children }) {
  return <data.Provider value={{ name, login }}>{children}</data.Provider>;
}
export { data };
