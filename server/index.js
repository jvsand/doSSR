// import { Hello } from "./hello";

// new Hello("JIRO").greet();

import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./hello";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
