import { Menu, Image } from "antd";
import React from "react";
import { HomeFilled } from "@ant-design/icons";

const Navbar: React.FC = () => {
  const items = [
    {
      label: "Home",
      title: "Home",
      key: "home",
      icon: <HomeFilled />,
    },
    // {
    //   label: "Services",
    //   title: "Services",
    //   key: "Services",
    //   icon: <HomeFilled />,
    // },
    // {
    //   label: "Contact",
    //   title: "Contact",
    //   key: "contact",
    //   icon: <HomeFilled />,
    // },
  ];
  return (
    <>
      <Menu
        items={items}
        // mode="horizontal"
        // theme="dark"
        defaultOpenKeys={["home"]}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          top: "0",
          height: "50px",
          marginLeft: "600px",
        }}
      >
        <Image
          src="/MoneyMarket/assets/logo.png"
          preview={false}
          height={"50px"}
          width={"50px"}
          style={{ top: "0", position: "absolute" }}
        />
      </div>
    </>
  );
};

export default Navbar;
