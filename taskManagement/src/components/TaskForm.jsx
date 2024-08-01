import React from "react";
import { Button, Form, Input, DatePicker, Row, Col } from "antd";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import "../style/taskForm.scss";
import { addTask } from "../redux/actions";

export default function TaskForm({ onClose }) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { RangePicker } = DatePicker;

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(
      addTask({
        id: uuidv4(),
        name: values.taskname,
        suggest: values.suggest,
        description: values.description,
        rangepicker: [
          values.rangepicker[0]?.toISOString(),
          values.rangepicker[1]?.toISOString(),
        ],
      })
    );
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container-form">
      <div className="form-outline">
        <CloseIcon color="disabled" onClick={onClose} className="close-icon" />
        <Form
          form={form}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={16}>
            <Col xs={12} sm={24} md={12}>
              <Form.Item
                label="Taskname"
                name="taskname"
                rules={[{ required: true, message: "Please input task name!" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={12} sm={24} md={12}>
              <Form.Item label="RangePicker" name="rangepicker">
                <RangePicker showTime />
              </Form.Item>
            </Col>
            <Col xs={12} sm={24} md={12}>
              <Form.Item
                label="Suggest"
                name="suggest"
                rules={[{ required: false }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24}>
              <Form.Item
                label="Description"
                name="description"
                rules={[{ required: false }]}
              >
                <Input.TextArea />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} style={{ textAlign: "right" }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}
