import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";

import "./Weather.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather />
      <p>
        <a href="https://github.com/koshface/weather-app-draft">
          Open-source code
        </a>
        by Emily Noto
      </p>
    </div>
  </StrictMode>
);
