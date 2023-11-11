import {
  CustomerServiceOutlined,
  LineChartOutlined,
  SafetyOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Button, Col, Image, Layout, Row, Typography } from "antd";
import React from "react";

const InfoWidget: React.FC = () => {
  const getDiv = (icon: JSX.Element, title: string, subtitle: string) => {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "40px",
          }}
        >
          {icon}
        </div>
        <Typography.Text
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: "600",
          }}
        >
          {title}
        </Typography.Text>
        <Typography.Text
          style={{
            display: "flex",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          {subtitle}
        </Typography.Text>
      </div>
    );
  };
  return (
    <Row style={{ width: "100%" }}>
      <Col
        span={8}
        style={{
          gap: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "85px",
        }}
      >
        {getDiv(
          <SafetyOutlined />,
          "SAFE",
          "With over 7+ years of fund management experience, get maximum returns on your capital"
        )}
        {getDiv(
          <CustomerServiceOutlined />,
          "SUPPORT",
          "Get dedicated support and handholding, we'll guide you in every step of your financial journey."
        )}
      </Col>
      <Col
        span={8}
        style={{
          height: "100%",
          width: "100%",
          padding: "0px 80px",
        }}
      >
        <Image
          src="/MoneyMarket/assets/Promo.png"
          preview={false}
          // height={"calc(100% - 70px)"}
          width={"100%"}
        />
      </Col>
      <Col
        span={8}
        style={{
          gap: "70px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "85px",
        }}
      >
        {getDiv(
          <StarOutlined />,
          "PREMIUM",
          "All accounts are handled by seasoned professionals backed by strong technical analysis."
        )}
        {getDiv(
          <LineChartOutlined />,
          "PROFIT",
          "Get upto 20% guaranteed returns on your investment and never worry about loss in the market."
        )}
      </Col>
    </Row>
  );
};

export default InfoWidget;
