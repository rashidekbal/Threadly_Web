import React, { useContext } from "react";
import { data } from "../../../Golobal/Store.jsx";

export default function Home() {
  const { name } = useContext(data);
  return <div>Home {name}</div>;
}
