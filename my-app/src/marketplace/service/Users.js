import React from "react";
import "antd/dist/antd.css";
import { Table, Input } from "antd";
import axios from "axios";


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
            title: "Username",
            dataIndex: "username",

            sorter: {
                compare: (a, b) => a.username.localeCompare(b.username),
                multiple: 1,
            },
            width: "20%"
        },
        {
            title: "Edit",
            dataIndex: "id",
            render: (text, record) => (
                <div>
                    <button style={{ margin: "5px 5px 5px 5px", borderColor: "red" }} onClick={() => axios.delete(`http://localhost:8080/admin/delete-enduser/${record.id}`)
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

    state = {
        filterTable: null,
        data: [],
        pagination: {
            current: 1,
            pageSize: 5
        },
        loading: false
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
            .get("http://localhost:8080/admin/users", {
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




    render() {
        const { data, pagination, loading, filterTable } = this.state;
        return (
            <div>
                <Input.Search
                    style={{ margin: "0 0 10px 0" }}
                    placeholder="Search by username..."
                    enterButton
                    onSearch={this.search}
                />
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