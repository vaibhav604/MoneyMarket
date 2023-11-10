import { Layout } from "antd";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import React from "react";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <Layout className="main-layout">
            <Layout.Header>
              <Navbar />
            </Layout.Header>
            <Layout.Content className="main-layout-content">
              {<Home />}
            </Layout.Content>
          </Layout>
        }
      ></Route>
    </Routes>
  );
};

export default App;
