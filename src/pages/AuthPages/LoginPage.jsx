import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  checkLoggedIn,
  isValidEmail,
  isValidPhone,
} from "../../Utils/ReuseableFunction.js";
import style from "./css/LoginPage.module.css";
import Image from "../../assets/BigImages/landing.png";
import { NavLink } from "react-router-dom";
import { data } from "../../Golobal/Store.jsx";
export default function LoginPage() {
  const { login } = useContext(data);
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const handleOnLogin = async () => {
    if (userid.length < 5) return alert("please enter valid user id");
    if (password.length < 6) {
      return alert("password must not be less than 6 characters");
    }
    if (isValidEmail(userid)) {
      let response = await login("email", userid, password);
    } else if (isValidPhone(userid)) {
      let response = await login("phone", userid, password);
    } else {
      let response = await login("userid", userid, password);
    }
  };
  useEffect(() => {
    checkLoggedIn();
  }, []);
  return (
    <div className={style.main}>
      <div className={`${style.section} ${style.Image_container}`}>
        <img src={Image} />
      </div>
      <div className={`${style.section} ${style.formSection}`}>
        <div className={style.loginDiv}>
          <h1>Threadly</h1>
          <form
            className={style.form}
            onSubmit={(e) => {
              e.preventDefault();
              handleOnLogin();
            }}
          >
            <input
              className={style.feild}
              type="text"
              onChange={(e) => {
                setUserId(e.target.value);
              }}
              value={userid}
              placeholder="phone number, username or email address"
            />
            <input
              className={style.feild}
              type="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <button
              className={`${style.feild} ${style.loginBtn}`}
              type="submit"
            >
              Login
            </button>
            <p className={style.forgetPassBtn}>Forget password!</p>
            <div className={style.barHolder}>
              <div className={style.bar}>
                <p>OR</p>
              </div>
            </div>
            <NavLink className={style.navlink} to="/register">
              <button className={`${style.feild} ${style.signUpBtn}`}>
                Sign Up
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}
