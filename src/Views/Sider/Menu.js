/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "antd/dist/antd.css";
import "./sider.css";
import { Menu, Switch, Button, Card, Avatar, Drawer, Layout } from "antd";
import { Link } from "react-router-dom";

//views

import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import logo from "../../images/logo.png";
const { Sider } = Layout;

const Menus = () => {
  const [theme, setTheme] = useState("light");
  
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState("1");

  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };

 
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <>
      <Sider width={270} className="site-layout-background show_deskop">
        <div>
          <Card style={{ width: 270, textAlign: "center", height: 200 }}>
            <img src={logo} width="150" height="50" />
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              style={{ width: "100px", height: "100px" }}
            />
            <p>EMG name</p>
          </Card>
          <Menu
            onClick={handleClick}
            mode="inline"
            defaultSelectedKeys={["/"]}
            defaultOpenKeys={["/"]}
            style={{ height: "600px", borderRight: 0 }}
            theme={theme}
        
            selectedKeys={[current]}
          >
            <Menu.Item key="/" icon={<PieChartOutlined />}>
              Employees
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="/teacher" icon={<DesktopOutlined />}>
              <Link to="/teacher">Teacher</Link>
            </Menu.Item>
            <Menu.Item key="books" icon={<ContainerOutlined />}>
              <Link to="/books">Books</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<PieChartOutlined />}>
              Booking
            </Menu.Item>
            <Menu.Item key="5" icon={<DesktopOutlined />}>
              Return Book
            </Menu.Item>
            <Menu.Item key="6" icon={<ContainerOutlined />}>
              Account
            </Menu.Item>
            <Menu.Item key="7" icon={<PieChartOutlined />}>
              Report
            </Menu.Item>
            <Menu.Item key="8" icon={<DesktopOutlined />}>
              Notifications
            </Menu.Item>
            <Menu.Item key="9" icon={<ContainerOutlined />}>
              Setting
            </Menu.Item>
          </Menu>
          <Switch
            checked={theme === "dark"}
            onChange={changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
            style={{ position: "relative", top: "-600px", left: "40px" }}
          />
        </div>
      </Sider>
      {/*reponsive */}
      <Button
        className="menu_mobile"
        type="primary"
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
      />
      <Drawer
        title="Topics"
        placement="left"
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <Card style={{ width: 270, textAlign: "center", height: 200 }}>
          <img src={logo} width="150" height="50" />
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            style={{ width: "100px", height: "100px" }}
          />
          <p>EMG name</p>
        </Card>
        <Menu
            onClick={handleClick}
            mode="inline"
            defaultSelectedKeys={["/"]}
            defaultOpenKeys={["/"]}
            style={{ height: "600px", borderRight: 0 }}
            theme={theme}
        
            selectedKeys={[current]}
          >
            <Menu.Item key="/" icon={<PieChartOutlined />}>
              Employees
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="/teacher" icon={<DesktopOutlined />}>
              <Link to="/teacher">Teacher</Link>
            </Menu.Item>
            <Menu.Item key="books" icon={<ContainerOutlined />}>
              <Link to="/books">Books</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<PieChartOutlined />}>
              Booking
            </Menu.Item>
            <Menu.Item key="5" icon={<DesktopOutlined />}>
              Return Book
            </Menu.Item>
            <Menu.Item key="6" icon={<ContainerOutlined />}>
              Account
            </Menu.Item>
            <Menu.Item key="7" icon={<PieChartOutlined />}>
              Report
            </Menu.Item>
            <Menu.Item key="8" icon={<DesktopOutlined />}>
              Notifications
            </Menu.Item>
            <Menu.Item key="9" icon={<ContainerOutlined />}>
              Setting
            </Menu.Item>
          </Menu>
      </Drawer>
    </>
  );
};

export default Menus;
