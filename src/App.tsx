import { Layout } from "antd";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import React from "react";

const App: React.FC = () => {
  return (
    <Layout>
      <Navbar />
      <Home />
    </Layout>
  );
};

export default App;
