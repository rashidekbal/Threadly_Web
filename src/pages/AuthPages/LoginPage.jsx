import React, { useEffect, useState } from "react";
import { checkLoggedIn } from "../../Utils/ReuseableFunction.js";
import style from "./css/LoginPage.module.css";
import Image from "../../assets/BigImages/landing.png";
import { NavLink } from "react-router-dom";
export default function LoginPage() {
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
            }}
          >
            <input
              className={style.feild}
              type="text"
              placeholder="phone number, username or email address"
            />
            <input
              className={style.feild}
              type="password"
              placeholder="password"
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
