import React from "react";
import ReactDOM from "react-dom/client";
import { Scene } from "./App";

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Scene />
    </React.StrictMode>
  );
}