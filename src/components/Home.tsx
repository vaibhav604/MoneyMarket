import { WhatsAppOutlined } from "@ant-design/icons";
// import {  } from "@ant-design/pro-layout";

import { Button, Layout, Row, Typography } from "antd";
import React from "react";
import InfoWidget from "./InfoWidget";

const Home: React.FC = () => {
  const handleWhatsAppClick = () => {
    const newTab = window.open("http://wa.me/+918308530407", "_blank");
    newTab?.focus();
  };
  return (
    <div className="page">
      <Row className="flex-space-between">
        <Typography.Title>Account Handling Service</Typography.Title>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: 0,
          }}
        >
          <p>
            Contact us:
            <br />
            {"+918308530407"}
          </p>
          <Button
            type="primary"
            icon={<WhatsAppOutlined />}
            onClick={() => handleWhatsAppClick()}
          >
            Send Message
          </Button>
        </div>
      </Row>
      <Row>With reliable and professional account management service,</Row>
      <Row>
        we will provide you with the best solutions for your investment needs.
      </Row>
      <InfoWidget />
    </div>
  );
};

export default Home;
