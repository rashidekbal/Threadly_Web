import React, { useContext, useEffect } from "react";
import { data } from "../../../Golobal/Store.jsx";
import { checkLoggedIn } from "../../../Utils/ReuseableFunction.js";
import { getCookies } from "../../../Utils/CookieManager.js";

export default function Home() {
  const { name } = useContext(data);
  useEffect(async () => {
    const IsLoggedIn = await getCookies("userData");
    if (IsLoggedIn == null) {
      location.replace("/");
    }
  }, []);
  return (
    <>
      <div>Home {name}</div>
      <div>
        <button
          onClick={async () => {
            await cookieStore.delete("userData");
            location.replace("/");
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
}
