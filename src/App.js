import { Layout } from "antd";
import React from "react";
//component
import Routers from "./router";
import Login from './Views/login/login';
import Menus from "./Views/Sider/Menu";
import { useLocation } from "react-router-dom";
const { Content } = Layout;

const App = () => {
  let location = useLocation();
  console.log(location.pathname);
  let check =
    location.pathname === "/login" ? (
      <>
        <Login />
      </>
    ) : (
      <>
        <Layout>
          <>
            <Menus />
          </>
          <Layout>
            <Layout style={{ padding: " 24px 24px" }}>
              <Content>
                <Routers />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </>
    );

  return (
    <>
      {check}
    </>
  );
};
export default App;
