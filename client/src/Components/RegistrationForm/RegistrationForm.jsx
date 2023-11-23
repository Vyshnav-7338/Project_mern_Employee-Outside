import React from "react";
import "./RegistrationForm.css";
import { Steps, Form, Input, Button } from "antd";
import {
  CheckCircleOutlined,
  ProfileOutlined,
  ProfileFilled,
} from "@ant-design/icons";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import Upload from "./Upload";
function RegistrationForm() {
  const [current, setCurrent] = useState(0);
  const [ProfileDetails, SetProfileDetails] = useState(null);
  const [addressDetails, setAddressDetails] = useState(null);

  const onFinishProfileForm = (values) => {
    SetProfileDetails(values);
    setCurrent(1);
  };
  const onFinishAddressForm = (values) => {
    setAddressDetails(values);

    setCurrent(2);
  };

  const forms = [
    <ProfileForm
      onFinish={onFinishProfileForm}
      initialValues={ProfileDetails}
    />,
    <AddressForm
      onFinish={onFinishAddressForm}
      initialValues={addressDetails}
    />,
    <Finish profileDetails={ProfileDetails} addressDetails={addressDetails} />,
  ];
  const isStepDisabled = (stepNumber) => {
    if (stepNumber === 0) {
      return false;
    }
    if (stepNumber === 1) {
      return ProfileDetails === null;
    }
    if (stepNumber === 2) {
      return ProfileDetails === null || addressDetails === null;
    }
  };
  return (
    <div className="container steps">
      <Steps
        style={{ padding: "30px 16px" }}
        onChange={setCurrent}
        current={current}
      >
        <Steps.Step
          disabled={isStepDisabled(0)}
          title="PersonalInfo"
          icon={<ProfileOutlined />}
        />
        <Steps.Step
          disabled={isStepDisabled(1)}
          title="Address"
          icon={<ProfileFilled />}
        />
        <Steps.Step
          disabled={isStepDisabled(2)}
          title="Uploads"
          icon={<CheckCircleOutlined />}
        />
      </Steps>
      {forms[current]}
    </div>
  );
}

function ProfileForm({ onFinish, initialValues }) {
  return (
    <div className="container formStyle">
      <Form onFinish={onFinish} initialValues={initialValues}>
        <Form.Item
          label="First Name"
          name={"FirstName"}
          rules={[
            {
              required: true,
              message: "please enter your First Name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name={"LastName"}
          rules={[
            {
              required: true,
              message: "please enter your Last Name",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input type="number" className="quantity" />
        </Form.Item>

        <Button type="primary" className="btnn" htmlType="submit">
          Next
        </Button>
      </Form>
    </div>
  );
}
function AddressForm({ onFinish, initialValues }) {
  return (
    <div className="container formStyle">
      <Form onFinish={onFinish} initialValues={initialValues}>
        <Form.Item
          label="Address"
          name={"Address"}
          rules={[
            {
              required: true,
              message: "please enter your Address",
            },
          ]}
        >
          <TextArea />
        </Form.Item>
        <Form.Item
          name="AlternativeNumber"
          label="Alternative Number"
          rules={[
            {
              required: true,
              message: "Please input your Alternative Number!",
            },
          ]}
        >
          <Input type="number" className="quantity" />
        </Form.Item>

        <Form.Item
          name="Aadhaar"
          label="Aadhaar"
          rules={[
            { required: true, message: "Please input your Aadhaar number!" },
          ]}
        >
          <Input type="number" className="quantity" />
        </Form.Item>

        <Button type="primary" className="btnn" htmlType="submit">
          Next
        </Button>
      </Form>
    </div>
  );
}

function Finish({ profileDetails, addressDetails }) {
  return (
    <div className="container formStyle">
      <h1>Upload!</h1>
      <Upload profileDetails={profileDetails} addressDetails={addressDetails} />
    </div>
  );
}

export default RegistrationForm;
