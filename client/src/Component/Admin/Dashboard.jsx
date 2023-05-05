import React, { useEffect } from "react";

import "./dashboard.css";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../metaData/MetaData.jsx";
import Sidebar from "./Sidebar";
import { Typography } from "@mui/material";
import { getAdminProducts } from "../../Stores/actions/productAction";
import { getAllOrders } from "../../Stores/actions/orderAction";
import { getAllUsers } from "../../Stores/actions/userAction";


const Dashboard = () => {
    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.products);

    const { orders } = useSelector((state) => state.allOrders);

    const { users } = useSelector((state) => state.allUsers);

    let outOfStock = 0;

    products &&
        products.forEach((item) => {
            if (item.Stock === 0) {
                outOfStock += 1;
            }
        });

    useEffect(() => {

        dispatch(getAdminProducts());
        dispatch(getAllOrders());
        dispatch(getAllUsers());
    }, [dispatch]);

    let totalAmount = 0;
    orders &&
        orders.forEach((item) => {
            totalAmount += item.totalPrice;
        });

    const lineState = {
        labels: ["Initial Amount", "Amount Earned"],
        datasets: [
            {
                label: "TOTAL AMOUNT",
                backgroundColor: ["tomato"],
                hoverBackgroundColor: ["rgb(197, 72, 49)"],
                data: [0, totalAmount],
            },
        ],
    };

    const doughnutState = {
        labels: ["Out of Stock", "InStock"],
        datasets: [
            {
                backgroundColor: ["#00A6B4", "#6800B4"],
                hoverBackgroundColor: ["#4B5000", "#35014F"],
                data: [outOfStock, products && products.length - outOfStock],
            },
        ],
    };

    return (
        <div className="dashboard">
            <MetaData title="Dashboard - Admin Panel" />
            <Sidebar />
            <div className="dashboardContainer">
                <Typography component="h1">Dashboard</Typography>
                <div className="dashboardSummary">
                    <div>
                        <p>
                            Total Amount <br /> ₹{totalAmount}
                        </p>
                    </div>
                    <div className="dashboardSummaryBox2">
                        <Link to="/admin/products">
                            <p>Product</p>
                            <p>{products && products.length}</p>
                        </Link>
                        <Link to="/admin/orders">
                            <p>Orders</p>
                            <p>{orders && orders.length}</p>
                        </Link>
                        <Link to="/admin/users">
                            <p>Users</p>
                            <p>{users && users.length}</p>
                        </Link>
                    </div>
                </div>
                <div className="lineChart">
                    <Chart type='line' data={lineState} />
                </div>
                <div className="doughnutChart">
                    <Doughnut data={doughnutState} />
                </div>

            </div>

        </div>
    );
};

export default Dashboard;
            // <div className="dashboardContainer">
            //     <Typography component="h1">Dashboard</Typography>

            //     <div className="dashboardSummary">
            //         <div>
            //             <p>
            //                 Total Amount <br /> ₹{totalAmount}
            //             </p>
            //         </div>
            //         <div className="dashboardSummaryBox2">
            //             <Link to="/admin/products">
            //                 <p>Product</p>
            //                 {/* <p>{products && products.length}</p> */}
            //             </Link>
            //             <Link to="/admin/orders">
            //                 <p>Orders</p>
            //                 {/* <p>{orders && orders.length}</p> */}
            //             </Link>
            //             <Link to="/admin/users">
            //                 <p>Users</p>
            //                 {/* <p>{users && users.length}</p> */}
            //             </Link>
            //         </div>
            //     </div>

            //     <div className="lineChart">
            //         <Line data={lineState} />
            //     </div>

            //     <div className="doughnutChart">
            //         <Doughnut data={doughnutState} />
            //     </div>
            // </div>