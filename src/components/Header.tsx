import { Layout, Col, Row } from "antd";
import React from "react";
import logo from "../../assets/logo.png";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  return (
    <Layout.Header
      style={{
        backgroundColor: "#fff",
        top: 0,
        zIndex: 1,
        width: "100%",
        height: "20%",
      }}
    >
      <Row gutter={10}>
        <Col>
          <div className="logo">
            <img src={logo} alt="logo" height={30} />
          </div>
        </Col>
        <Col>
          <div>
            <h1> Money Market</h1>
          </div>
        </Col>
        <Col
          style={{
            color: "blue",
            padding: "0px 30px",
          }}
        >
          <div>
            <span> SearchBar Component</span>
          </div>
        </Col>
        <Col
          style={{
            position: "absolute",
            right: "0px",
            padding: "0px 30px",
            backgroundColor: "green",
          }}
        >
          <div>
            <span> UserProfile </span>
          </div>
        </Col>
      </Row>
      <Navbar />
    </Layout.Header>
  );
};

export default Header;
