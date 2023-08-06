import { PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Button, Form, Input, Switch, Upload, message } from "antd";
import axios from "axios";

const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
interface IFile {
  originFileObj: File;
}
export interface IRestaurant {
  title: string;
  desc: string;
  open_time: string;
  close_time: string;
  photos: IFile[];
  status: boolean;
  location: string;
}

const blobToBase64 = (blob: Blob) => {
  return new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      resolve(base64String);
    };
    reader.readAsDataURL(blob);
  });
};

const Genrel: React.FC = () => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async (values: IRestaurant) => {
    const photos: string[] = [];
    for (let i = 0; i < values.photos.length; i++) {
      const base64 = await blobToBase64(values.photos[i].originFileObj);
      photos.push(base64);
    }
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:1993/restaurant", {
        ...values,
        photos,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setComponentDisabled(!componentDisabled)}
        style={{ marginBottom: "10px" }}
        type="primary"
      >
        Create Restaurant
      </Button>
      <hr />
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={componentDisabled}
        onFinish={handleSubmit}
        style={{ marginTop: "15px" }}
      >
        <Form.Item
          rules={[{ required: true, message: "Title is required" }]}
          name="title"
          label="Title"
        >
          <Input />
        </Form.Item>

        <Form.Item
          rules={[{ required: true, message: "Description is required" }]}
          name="desc"
          label="Description"
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Location is required" }]}
          name="location"
          label="Location on map"
        >
          <Input />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Opening time is required" }]}
          name="open_time"
          label="Opening time:"
        >
          <Input />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Closing time is required" }]}
          name="close_time"
          label="Closing time:"
        >
          <Input />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Upload photos" }]}
          label="Upload"
          valuePropName="fileList"
          name={"photos"}
          getValueFromEvent={normFile}
        >
          <Upload
            name="photos"
            action="/photos"
            listType="picture-card"
            beforeUpload={() => false}
          >
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item name={"status"} label="Status" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item>
          <Button
            loading={loading}
            htmlType="submit"
            size="large"
            type="primary"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Genrel;
