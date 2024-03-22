import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import SocialProvider from "./context/contractContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <SocialProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SocialProvider>
);
