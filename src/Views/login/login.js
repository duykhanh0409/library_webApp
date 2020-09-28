/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Form, Input, Button, Checkbox, Space } from "antd";
import "antd/dist/antd.css";
import "./login.css";
import bgLogin from "../../images/backgroundLogin.png";
import logo from "../../images/logo.png";
import { UserOutlined,LockOutlined,RightOutlined } from "@ant-design/icons";


const Login = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-md-5 col-sm-5 login-infor ">
          <div >
            <img src={logo} className="logo"  />
            <h3 className="title-brand">Sign in to library</h3>
          </div>
          <Space align="baseline">
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
               
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
              <Input placeholder="username" prefix={<UserOutlined />} />
              </Form.Item>

              <Form.Item
                
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password  placeholder="password" prefix={<LockOutlined />}/>
              </Form.Item>

              <Form.Item
               
                name="remember"
                valuePropName="checked"
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Form>
              <p className="repassword">Forgot password ?</p>
              </Form>

              <Form.Item >
                <Button type="primary" className="submit-login"htmlType="submit" icon={<RightOutlined />}>
                  Login
                </Button>
              </Form.Item>
              <Form.Item>
                <p className="register">Don't have an account ?<span className="signup"> Sign Up</span></p>
              </Form.Item>
              <Form.Item >
                <p className="happy">Happy day</p>
              </Form.Item>
            </Form>
          </Space>
        </div>
        <div className="col-lg-7 col-md-7 col-sm-7">
          <img src={bgLogin} className="bg-login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
