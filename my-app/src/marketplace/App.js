import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import Login from "./service/Login"
import Products from "./service/Products"
import AddProduct from "./service/AddProduct"
import UpdateProduct from "./service/UpdateProduct"
import Users from "./service/Users"
import Sellers from "./service/Sellers"
import "./styles.css"

const { Header, Content, Footer } = Layout;

function App() {
    return (
        <Router>
            <Layout style={{ height: "100vh" }}>
                <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
                        <Menu.Item key="1">
                            {" "}
                            <Link to="/">Login</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            {" "}
                            <Link to="/products">Products</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            {" "}
                            <Link to="/users">Users</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            {" "}
                            <Link to="/sellers">Sellers</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content
                    className="site-layout"
                    style={{ padding: "0 50px", marginTop: 64 }}
                >
                    <div
                        className="site-layout-background"
                        style={{ padding: 24, minHeight: 380 }}
                    >
                        <Switch>
                            <Route path="/products/update" component = {UpdateProduct}/>
                             
                            <Route path="/products/add">
                                <AddProduct />
                            </Route>
                            <Route path="/products" component = {Products}/>
                                
                            <Route path="/users">
                                <Users />
                            </Route>
                            <Route path="/sellers">
                                <Sellers />
                            </Route>
                            <Route path="/">
                                <Login />
                            </Route>
                        </Switch>
                    </div>
                </Content>
            </Layout>
        </Router>
    );
}
export default App;