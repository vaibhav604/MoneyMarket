import { WhatsAppOutlined } from "@ant-design/icons";
import { Button, Layout, Row, Typography } from "antd";
import React from "react";

const Home: React.FC = () => {
  return (
    <Layout.Content>
      <Row>
        <Typography.Title>Account Handling Service</Typography.Title>
      </Row>
      <Row>
        With reliable and professional account management service, we will
        provide you with the best solutions for your investment needs. Watch
        video to know more.
      </Row>
      <Button style={{ backgroundColor: "green" }} icon={<WhatsAppOutlined />}>
        Contact Us
      </Button>
    </Layout.Content>
  );
};

export default Home;
