import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./styles/theme";
import "./styles/antd.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
