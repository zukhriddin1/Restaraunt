import React from "react";
import { Layout } from "antd";
import MainMenu from "./MainMenu";
import { Outlet } from "react-router-dom";
import ContentMain from "./ContentMain";

const { Footer, Sider } = Layout;

const MainLayout: React.FC = () => {
  return (
    <Layout style={{ height: "100%" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            background: "#aaa",
            height: "50px",
            width: "80%",
            margin: "10px auto",
            borderRadius: "10px",
          }}
        ></div>
        <MainMenu></MainMenu>
      </Sider>
      <Layout style={{ height: "100%", overflow: "auto", padding: "20px" }}>
        <ContentMain>
          <Outlet></Outlet>
        </ContentMain>
        {/* <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default MainLayout;
