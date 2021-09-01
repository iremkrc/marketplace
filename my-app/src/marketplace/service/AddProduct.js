import { Form, Input, Button, Select } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import Products from "./Products";


const AddProduct = () => {

  const [data, setData] = useState();
  const [credentials, setCredentials] = useState({});
  const [redirect, setRedirect] = useState();


  useEffect(() => {
    fetch();
  }, []);

  fetch = (params = {}) => {
    axios
      .get("http://localhost:8080/admin/sellers", {

      })
      .then((response) => {
        const { data } = response;
        setData(data);
      })

  }



  const onFinish = (values) => {
    axios.post('http://localhost:8080/admin/products/add', {
      name: credentials.name,
      price: credentials.price,
      sellerId: credentials.seller

    })
      .then(loginResponse => {
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

  const handleSelectChange = (selection) => {
    setCredentials({
      ...credentials,
      seller: selection

    });
  }


  const getOptions = () => {
    const options = data && data.map((seller) =>
      <Select.Option key={seller.id} value={seller.id}>{seller.username}</Select.Option>
    );
    return options;

  }

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
        label="Product Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please enter a product name!"
          }
        ]}
      >
        <Input onChange={handleChange} name="name" value={credentials.name} />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[
          {
            required: true,
            message: "Please enter a price!"
          }
        ]}
      >
        <Input onChange={handleChange} name="price" value={credentials.price} />

      </Form.Item>
      <Form.Item
        label="Seller"
        name="seller"
        rules={[
          {
            required: true,
            message: "Please select a seller!"
          }
        ]}
      >
        <Select onChange={handleSelectChange} name="seller">
          {getOptions()}
        </Select>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16
        }}
      >
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
}


export default AddProduct;