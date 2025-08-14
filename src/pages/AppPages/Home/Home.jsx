import { useContext, useEffect, useState } from "react";
import { data } from "../../../Golobal/Store.jsx";
import style from "./css/Home.module.css";
import { getCookies } from "../../../Utils/CookieManager.js";
import { NavLink } from "react-router-dom";
import homeIcon_filled from "../../../assets/icons/home_filled_icon.svg";
import homeIcon_Unfilled from "../../../assets/icons/home_unfilled_icon.svg";
import searchActive from "../../../assets/icons/search_active_icon.svg";
import searchInActive from "../../../assets/icons/search_inactive_icon.svg";
import explore_active from "../../../assets/icons/explore_active.svg";
import explore_InActive from "../../../assets/icons/explore_inactive.svg";
import play_active from "../../../assets/icons/play_active.svg";
import play_InActive from "../../../assets/icons/play_inactive.svg";
import message_active from "../../../assets/icons/message_active.svg";
import message_InActive from "../../../assets/icons/message_inactive.svg";
import heart_active from "../../../assets/icons/heart_active_icon.svg";
import heart_InActive from "../../../assets/icons/heart_inactive_icon.svg";
import addPost_icon from "../../../assets/icons/add_post_icon.svg";
import profile from "../../../assets/icons/profile.svg";
import HomeFragment from "./subPages/HomeFragment.jsx";
import ExploreFragment from "./subPages/ExploreFragment.jsx";
import ReelsFragment from "./subPages/ReelsFragment.jsx";
import MessagesFragment from "./subPages/MessagesFragment.jsx";
import ProfileFragment from "./subPages/ProfileFragment.jsx";
export default function Home() {
  const { userPreloadData } = useContext(data);
  const [location, setLocation] = useState("home");
  useEffect(() => {
    (async () => {
      const IsLoggedIn = await getCookies("userData");

      if (IsLoggedIn === null) {
        window.location.href = "/";
      }
    })();
  }, []);
  return (
    <div className={style.main}>
      <div className={style.navSection}>
        <div className={style.UpperSection}>
          <h1>Threadly</h1>
        </div>
        <div className={style.lowerSection}>
          <ul>
            <li>
              <NavLink
                className={style.navlink}
                onClick={() => {
                  setLocation("home");
                }}
              >
                <div className={style.navCard}>
                  <img
                    src={
                      location === "home" ? homeIcon_filled : homeIcon_Unfilled
                    }
                    className={style.navIcon}
                  />
                  <p className={location === "home" && style.activeLocation}>
                    Home
                  </p>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink className={style.navlink}>
                <div className={style.navCard}>
                  <img
                    src={location === "search" ? searchActive : searchInActive}
                    className={style.navIcon}
                  />
                  <p className={location === "search" && style.activeLocation}>
                    Search
                  </p>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={style.navlink}
                onClick={() => {
                  setLocation("explore");
                }}
              >
                <div className={style.navCard}>
                  <img
                    src={
                      location === "explore" ? explore_active : explore_InActive
                    }
                    className={style.navIcon}
                  />
                  <p className={location === "explore" && style.activeLocation}>
                    Explore
                  </p>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={style.navlink}
                onClick={() => {
                  setLocation("reels");
                }}
              >
                <div className={style.navCard}>
                  <img
                    src={location === "reels" ? play_active : play_InActive}
                    className={style.navIcon}
                  />
                  <p className={location === "reels" && style.activeLocation}>
                    Reels
                  </p>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={style.navlink}
                onClick={() => {
                  setLocation("messages");
                }}
              >
                <div className={style.navCard}>
                  <img
                    src={
                      location === "messages"
                        ? message_active
                        : message_InActive
                    }
                    className={style.navIcon}
                  />
                  <p
                    className={location === "messages" && style.activeLocation}
                  >
                    Messages
                  </p>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink className={style.navlink}>
                <div className={style.navCard}>
                  <img
                    src={
                      location === "notification"
                        ? heart_active
                        : heart_InActive
                    }
                    className={style.navIcon}
                  />
                  <p
                    className={
                      location === "notification" && style.activeLocation
                    }
                  >
                    Notification
                  </p>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink className={style.navlink}>
                <div className={style.navCard}>
                  <img src={addPost_icon} className={style.navIcon} />
                  <p className={location === "create" && style.activeLocation}>
                    Create
                  </p>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={style.navlink}
                onClick={() => {
                  setLocation("profile");
                }}
              >
                <div className={style.navCard}>
                  <img
                    src={
                      userPreloadData != null
                        ? userPreloadData.profile
                        : profile
                    }
                    className={`${style.navIcon} ${
                      location === "profile" && style.profileActive
                    } ${style.profile}`}
                  />
                  <p className={location === "profile" && style.activeLocation}>
                    Profile
                  </p>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.ContentSection}>
        {location === "home" ? (
          <HomeFragment />
        ) : location === "explore" ? (
          <ExploreFragment />
        ) : location === "reels" ? (
          <ReelsFragment />
        ) : location === "messages" ? (
          <MessagesFragment />
        ) : (
          location === "profile" && <ProfileFragment />
        )}
        <nav className={style.BottomNav}></nav>
      </div>
    </div>
  );
}
