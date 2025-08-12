import React, { useEffect, useState } from "react";
import { checkLoggedIn } from "../../Utils/ReuseableFunction.js";
import style from "./css/RegisterPage.module.css";
import Image from "../../assets/BigImages/landing.png";
import { NavLink } from "react-router-dom";
export default function RegisterPage() {
  const [IsLoggedIn, setisLoggedIn] = useState(false);
  const [isAgreed, setAgreed] = useState(true);
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
              placeholder="phone number or email address"
              required
            />
            <input
              className={style.feild}
              type="password"
              placeholder="password"
              required
            />
            <input
              className={style.feild}
              type="text"
              placeholder="full Name"
              required
            />
            <div className={style.checkBoxHolder}>
              <input type="checkbox" required checked={isAgreed} />
              <span>
                i agree to <a href="#">terms&conditions</a>
              </span>
            </div>

            <button
              className={`${style.feild} ${style.signUpBtn}`}
              type="submit"
            >
              Sign up
            </button>

            <div className={style.barHolder}>
              <div className={style.bar}>
                <p>OR</p>
              </div>
            </div>
            <NavLink className={style.navlink} to="/login">
              <button className={`${style.feild}  ${style.loginBtn}`}>
                Login
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}
