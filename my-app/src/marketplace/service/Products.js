import React from "react";
import "antd/dist/antd.css";
import { Table, Input, Button } from "antd";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import AddProduct from "./AddProduct";



const getProductParams = (params) => {
    return {
        results: params.pagination.pageSize,
        page: params.pagination.current,
        ...params
    };
};


class Products extends React.Component {
    columns = [
        {
            title: "Name",
            dataIndex: "name",

            sorter: {
                compare: (a, b) => a.name.localeCompare(b.name),
                multiple: 1,
            },
            width: "20%"
        },
        {
            title: "Price",
            dataIndex: "price",
            render: (price) => `$ ${price}`,
            sorter: {
                compare: (a, b) => a.price - b.price,
                multiple: 1,
            },

            width: "20%"
        },
        {
            title: "Seller",
            dataIndex: "seller",
            render: (seller) => `${seller && seller.username}`,
            width: "20%"
        },
        {
            title: "Edit",
            dataIndex: "id",
            render: (text, record) => (
                <div>
                    <button style={{ margin: "5px 5px 5px 5px", borderColor: "red" }} onClick={() => axios.delete(`http://localhost:8080/admin/delete-product/${record.id}`)
                        .then(deleteResponse => {
                            console.log("Deleted:  ", record.id)
                            console.log(deleteResponse)
                            const { data } = deleteResponse;

                            this.setState({
                                loading: false,
                                data: data
                            });

                        })}>
                        {"Delete"}
                    </button>
                    <button style={{ margin: "5px 5px 5px 5px", borderColor: "blue" }} onClick={() => this.updateClick(record)}>
                        {"Update"}
                    </button>
                </div>

            ),
            width: "20%"
        }
    ];

    updateClick(record) {
        
        this.props.history.push({
            pathname: '/products/update',
            state: { record }
          })
    }


    state = {
        filterTable: null,
        data: [],
        pagination: {
            current: 1,
            pageSize: 5
        },
        loading: false,
        redirect: false
    };
    search = value => {
        const { data } = this.state;
        console.log("PASS", { value });

        const filterTable = data.filter(o =>
            Object.keys(o).some(k =>
                String(o[k])
                    .toLowerCase()
                    .includes(value.toLowerCase())
            )
        );

        this.setState({ filterTable });
    };

    componentDidMount() {
        const { pagination } = this.state;
        this.fetch({ pagination });
    };


    handleTableChange = (pagination, filters, sorter) => {
        this.fetch({
            sortField: sorter.field,
            sortOrder: sorter.order,
            pagination,
            ...filters
        });
    };

    fetch = (params = {}) => {
        this.setState({ loading: true });

        axios
            .get("http://localhost:8080/admin/products", {
                params: getProductParams(params)
            })
            .then((response) => {
                console.log(response.data);
                const { data } = response;

                this.setState({
                    loading: false,
                    data: data,
                    pagination: {
                        ...params.pagination
                    }
                });
            })
            .catch((error) => {
                console.log(error);
            })
            .then(() => {
                this.setState({
                    loading: false
                });
            });
    };

    handleSubmit = () => {
        console.log("Add Product is Clicked!!!")
        this.setState({ redirect: true })
    }


    render() {
        const { data, pagination, loading, redirect, filterTable } = this.state;

        if (redirect) {
            return (
                <Router>
                    <Redirect to="/products/add" />
                    <Switch>
                        <Route path="/products/add">
                            <AddProduct />
                        </Route>
                    </Switch>
                </Router>

            )
        }
        return (
            <div>
                <Input.Search
                    style={{ margin: "0 0 10px 0" }}
                    placeholder="Search by name or price..."
                    enterButton
                    onSearch={this.search}
                />
                <Button style={{ margin: "0 0 10px 0", borderColor: "aquamarine" }} onClick={this.handleSubmit}>Add Product</Button>
                <Table
                    columns={this.columns}
                    rowKey={(record) => record.id}
                    dataSource={filterTable == null ? data : filterTable}
                    pagination={pagination}
                    loading={loading}
                    onChange={this.handleTableChange}
                />
            </div>

        );
    }
}

export default Products;