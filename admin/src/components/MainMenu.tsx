import { Menu } from "antd";
import React, { useState } from "react";
import {
  OrderedListOutlined,
  SettingFilled,
  UploadOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
const MainMenu = () => {
  const [defaultKey, setDefaultKey] = useState("");
  const location = useLocation();

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[useLocation().pathname]}
      items={[
        {
          key: "/restaurant",
          icon: <UploadOutlined></UploadOutlined>,
          label: "Restaurant",
          children: [
            {
              key: "/restaurant/general",
              icon: <SettingFilled></SettingFilled>,
              label: <Link to={"/restaurant/general"}>General</Link>,
            },
            {
              key: "/restaurant/menu",
              icon: <OrderedListOutlined></OrderedListOutlined>,
              label: <Link to={"/restaurant/menu"}>Menu</Link>,
            },
          ],
        },
      ]}
    />
  );
};

export default MainMenu;
