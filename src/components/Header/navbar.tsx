import { Menu } from "antd";
import React from "react";
import { HomeFilled } from "@ant-design/icons";
import { MdMovieFilter, MdPeople } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";

const Navbar: React.FC = () => {
  const items = [
    {
      label: "Home",
      title: "Home",
      key: "home",
      icon: <HomeFilled />,
    },
    {
      label: "Movies",
      title: "Movies",
      key: "movies",
      icon: <MdMovieFilter />,
    },
    {
      label: "Web Series",
      title: "Web Series",
      key: "webseries",
      icon: <RiComputerFill />,
    },
    {
      label: "Community",
      title: "Community",
      key: "community",
      icon: <MdPeople />,
    },
  ];
  return (
    <Menu
      items={items}
      mode="horizontal"
      triggerSubMenuAction="hover"
      style={{ backgroundColor: "black", color: "red" }}
    />
  );
};

export default Navbar;
