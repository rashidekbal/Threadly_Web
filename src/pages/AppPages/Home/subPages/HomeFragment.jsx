import style from "./css/HomeFragment.module.css";

export default function HomeFragment() {
  return (
    <div className={style.main}>
      <div className={style.contentSection}>content section</div>
      <div className={style.suggestUsersSection}>suggest user section</div>
    </div>
  );
}
