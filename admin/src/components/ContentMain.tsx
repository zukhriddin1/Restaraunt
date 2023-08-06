import { theme } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
interface IContentmain {
  children: React.ReactElement;
}
const ContentMain: React.FC<IContentmain> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Content>
      <div
        style={{
          padding: 24,
          border: "7px",
          minHeight: "100%",
          background: colorBgContainer,
        }}
      >
        {children}
      </div>
    </Content>
  );
};

export default ContentMain;
