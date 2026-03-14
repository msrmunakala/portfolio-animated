import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./gsapSetup"; // Initialize GSAP plugins globally
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
