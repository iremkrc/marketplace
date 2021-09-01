import { Form, Input, Button, Select } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import Products from "./Products";

const UpdateProduct = ({ location }) => {
    const [credentials, setCredentials] = useState({});
    const [redirect, setRedirect] = useState();
    const history = useHistory();


    useEffect(() => {
        fetch(location);
    }, []);

    const onFinish = (values) => {
        axios.put('http://localhost:8080/admin/products/update', {
            productId: location.state.record.id,
            name: credentials.name,
            price: credentials.price,

        })
            .then(response => {
                setRedirect(true);
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
    if (redirect) {
        return (
            <Router>
                <Redirect to="/products"/>
                <Switch>
                    <Route path="/products">
                        <Products />
                    </Route>
                </Switch>
            </Router>

        )
    }
    return (

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
                label="Name"
                name="name"
                value={location.name}
                rules={[
                    {
                        required: true,
                        message: "Please enter a product name!"
                    }
                ]}
            >
                <Input onChange={handleChange} name="name" value={credentials.name} placeholder={location.state.record.name} />
            </Form.Item>

            <Form.Item
                label="Price"
                name="price"
                value={location.price}
                rules={[
                    {
                        required: true,
                        message: "Please enter a price!"
                    }
                ]}
            >
                <Input onChange={handleChange} name="price" value={credentials.price} placeholder={location.state.record.price} />

            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16
                }}
            >
                <Button type="primary" htmlType="submit">
                    Update
                </Button>
            </Form.Item>
        </Form>
    );

}

export default UpdateProduct;