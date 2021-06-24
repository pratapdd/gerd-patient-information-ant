import "./UserForm.css";

import { BankOutlined, EnvironmentOutlined, HomeOutlined, UploadOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Upload } from "antd";

import React from "react";
import { useHistory } from "react-router-dom";

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

// eslint-disable-next-line no-unused-vars
const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const UserForm = () => {
  const history = useHistory();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);

    history.push("/confirm");
  };

  return (
    <div className={"container"}>
      <Form
        className={"form"}
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        initialValues={{
          "input-number": 3,
          "checkbox-group": ["A", "B"],
          rate: 3.5,
        }}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Enter Name" />
        </Form.Item>

        <Form.Item
          name="userdegree"
          rules={[
            {
              required: true,
              message: "Please input your Degree!",
            },
          ]}
        >
          <Input
            prefix={<BankOutlined className="site-form-item-icon" />}
            placeholder="Enter Degree/ Speciality/ Designation"
          />
        </Form.Item>

        <Form.Item
          name="userstate"
          rules={[
            {
              required: true,
              message: "Please input your State!",
            },
          ]}
        >
          <Input prefix={<HomeOutlined className="site-form-item-icon" />} placeholder="Enter State" />
        </Form.Item>

        <Form.Item
          name="usercity"
          rules={[
            {
              required: true,
              message: "Please input your City!",
            },
          ]}
        >
          <Input prefix={<EnvironmentOutlined className="site-form-item-icon" />} placeholder="Enter City" />
        </Form.Item>

        <Form.Item>
          <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture" maxCount={1}>
            <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Form.Item name="agree" valuePropName="checked" noStyle>
            <Checkbox>I agree to share my details to create the GERD Patient Information Input</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
        >
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserForm;
