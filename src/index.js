import React from "react";
import ReactDOM from "react-dom/client";
import Welcome from "./components/Welcome/Welcome.jsx";

export default function App() {
  return <Welcome />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
