import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/Welcome/welcome.css";
import Welcome from "./components/Welcome/Welcome.jsx";

export default function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
