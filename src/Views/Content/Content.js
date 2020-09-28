import React, { useState } from "react";
import { Layout, Button,Input } from "antd";
import { AppstoreAddOutlined, BarcodeOutlined } from "@ant-design/icons";
import GirdView from './GirdView';
import './Content.css';

const { Content } = Layout;

const { Search } = Input;
const Contents = () => {
  return (
    <>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          boxShadow: "1px 1px 1px 1px #999",
        }}
      >
        <Search
          placeholder=" search books"
          onSearch={(value) => console.log(value)}
          enterButton
          style={{ width: "20%" }}
        />
        <Button
          className="btn ant-btn-primary newbook"
          icon={<AppstoreAddOutlined />}
        >
          {" "}
          new book
        </Button>
        <Button
          className="btn ant-btn-primary newbook"
          icon={<BarcodeOutlined />}
        >
          {" "}
          new book
        </Button>

        <GirdView/>
      </Content>
    </>
  );
};

export default Contents;
