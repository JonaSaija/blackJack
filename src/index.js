import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Menu from "./components/Welcome/Welcome.jsx";
import Game from "./components/Game/menu.jsx";

export default function App() {
  return (
    <div>
      <Menu />
      <Game />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
