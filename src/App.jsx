import "./App.css";
import Store from "./Golobal/Store.jsx";
import { Outlet } from "react-router-dom";
const innerHeight = window.innerHeight;
const innerWidth = window.innerWidth;

function App() {
  return (
    <Store>
      <div id="mainFrame">
        <Outlet />
      </div>
    </Store>
  );
}

export default App;
