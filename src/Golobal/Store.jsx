import { createContext, useEffect, useState } from "react";
import {
  loginEmail,
  loginMobile,
  loginUserid,
} from "../NetworkManagers/AuthManagers/LoginManager.js";
import Response from "../constants/StandardResponse.js";
import { getCookies, setCookieObject } from "../Utils/CookieManager.js";
const data = createContext([]);
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
    window.location.href = "/home";
    return null;
  } catch (error) {
    return new Response(error, "login failed");
  }
}

export default function ContextProvider({ children }) {
  const [userPreloadData, setUserPreloadData] = useState(null);

  async function fetchAndSetUserDataOnLoad() {
    let cookies = await getCookies("userData");
    if (cookies != null) {
      sessionStorage.setItem("token", cookies.token);
      setUserPreloadData(cookies);
    }
    return;
  }
  useEffect(() => {
    (async () => {
      await fetchAndSetUserDataOnLoad();
    })();
  }, []);
  return (
    <data.Provider value={{ login, userPreloadData }}>{children}</data.Provider>
  );
}
export { data };
