import { Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import LocalStorageService from "../util/LocalStorageService";



const Login = () => {
    const [credentials, setCredentials] = useState({});
    const history = useHistory();
    let message = "Welcome!";

    const onFinish = (values) => {
        console.log("Success:", values);

        axios.post('http://localhost:8080/login', {
            username: credentials.username,
            password: credentials.password
        })
            .then(loginResponse => {
                console.log(credentials);
                LocalStorageService.getService().setToken(loginResponse.data);
            })

    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const handleChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value

        });
    };

    return (
        <div>
            <h1>{message}</h1>
        <Form
            name="basic"
            labelCol={{
                span: 8
            }}
            wrapperCol={{
                span: 16
            }}
            initialValues={{
                remember: true
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ margin: "0 auto", width: 400 }}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: "Please enter your username!"
                    }
                ]}
            >
                <Input onChange={handleChange} name="username" value={credentials.username} />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Please enter your password!"
                    }
                ]}
            >
                <Input.Password onChange={handleChange} name="password" value={credentials.password} />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        </div>
    );
};

export default Login;
