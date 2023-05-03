import React from 'react'
import './widgets.scss'
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
//import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
//import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
//import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
//import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
const Widgets = ({ type,value }) => {
console.log("type",value)
    let amount = 28;
    let data;
    // let diff = 20;
    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                amount:value,
                // icon: (
                //     <PersonOutlinedIcon
                //         className="icon"
                //         style={{
                //             color: "crimson",
                //             backgroundColor: "rgba(255, 0, 0, 0.2)",
                //         }}
                //     />
                // ),
            };
            break;
        case "order":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View all Earnings",
                amount:300,
                // icon: (
                //     <ShoppingCartOutlinedIcon
                //         className="icon"
                //         style={{
                //             backgroundColor: "rgba(218, 165, 32, 0.2)",
                //             color: "goldenrod",
                //         }}
                //     />
                // ),
            };
            break;
        case "earning":
            data = {
                title: "CONFIRM ORDERS",
                isMoney: false,
                link: "View all Confirm Orders",
                amount:value,
                // icon: (
                //     <MonetizationOnOutlinedIcon
                //         className="icon"
                //         style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                //     />
                // ),
            };
            break;
        case "balance":
            data = {
                title: "PENDING ORDERS",
                isMoney: false,
                link: "View all Pending Orders",
                amount:5,
                // icon: (
                //     <AccountBalanceWalletOutlinedIcon
                //         className="icon"
                //         style={{
                //             backgroundColor: "rgba(128, 0, 128, 0.2)",
                //             color: "purple",
                //         }}
                //     />
                // ),
            };
            break;
        default:
            break;
    }
    return (
        <div className='widget'>
            <div className='left'>
                <span className='title'>{data.title}</span>
                <span className='counter'>{data.isMoney && "$"} {data.amount}</span>
                <span className='link'>{data.link}</span>
            </div>

        </div>
    )
    
}

export default Widgets