import { Menu } from "antd";
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
    {
      label: "Services",
      title: "Services",
      key: "Services",
      icon: <HomeFilled />,
    },
    {
      label: "About",
      title: "About",
      key: "about",
      icon: <HomeFilled />,
    },
    {
      label: "Contact",
      title: "Contact",
      key: "contact",
      icon: <HomeFilled />,
    },
  ];
  return <Menu items={items} mode="horizontal" />;
};

export default Navbar;
