import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#f3f3f3",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
