import React, { useContext } from 'react'
import './sidebar.scss'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from 'react-router-dom'
import { DarkModeContext } from "../../context/darkModeContext";
import { useTranslation } from "react-i18next";
import logo3 from '../35.jpg';
const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
    const { t } = useTranslation(["sidebar"])
    return (
        <div className='sidebar'>
            {/* <div className='top'>
                <Link to='/' style={{ textDecoration: "none" }}>
                    <span className='logo'>
                    <img src={logo3} alt="" className='logos'></img>    
                    </span>
                </Link>
            </div> */}
            <div className='row'>
                {/* <div className='logos'>
                    <img src={logo3} alt=""  ></img>
                </div> */}
                <div className='center'>
                    <b><p>{t("My Town")}</p> </b>
                </div>
            </div>
            <hr />
            <div className='center'>
                <ul>
                    <p className='title'>{t("MAIN")}</p>
                    <Link to='/' style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className='icon' />
                            <span>{t("Dashboard")}</span>
                        </li>
                    </Link>
                    <p className='title'>{t("LISTS")}</p>
                    <Link to='/addusers' style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineIcon className='icon' />
                            <span>{t("Add People")}</span>
                        </li>
                    </Link>
                    {/* <Link to='/products' style={{ textDecoration: "none" }}>
                        <li>
                            <StoreIcon className='icon' />
                            <span>Products</span>
                        </li>
                    </Link> */}
                    {/* <li>
                        <CreditCardIcon className='icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className='icon' />
                        <span>Delivery</span>
                    </li> */}
                    {/* <p className='title'>Add People</p>
                    <Link to='/AddData' style={{ textDecoration: "none" }}>
                    <li>
                        <InsertChartIcon className='icon' />
                        <span>Add People</span>
                    </li>
                    </Link> */}




                    <p className='title'>{t("Show Peoples")}</p>
                    <Link to='/users' style={{ textDecoration: "none" }}>
                        <li>
                            <SettingsSystemDaydreamOutlinedIcon className='icon' />
                            <span>{t("Show Peoples")}</span>
                        </li>
                    </Link>

                    <p className='title'>{t("USER")}</p>
                    {/* <li>
                        <AccountCircleOutlinedIcon className='icon' />
                        <span>Profile</span>
                    </li> */}
                    <li>
                        <ExitToAppIcon className='icon' />
                        <span>{t("Logout")}</span>
                    </li>
                </ul>
            </div>
            <div className='bottom'>
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "LIGHT" })}
                ></div>
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "DARK" })}
                ></div>
            </div>
        </div>
    )
}

export default Sidebar