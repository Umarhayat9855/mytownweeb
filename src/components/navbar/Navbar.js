import React, { useContext, useEffect } from 'react'
import './navbar.scss'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
const Navbar = () => {
    const { dispatch } = useContext(DarkModeContext);
    const { i18n, t } = useTranslation(["sidebar"]);
    useEffect(() => {
        if (localStorage.getItem("i18nextLng")?.length > 2) {
            i18next.changeLanguage("en");
        }
    }, []);
    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='search'>
                    <input placeholder='Search...' type="text" />
                    <SearchOutlinedIcon className='icon' />
                </div>
                <div className='items'>
                    <div className='item'>
                        <LanguageOutlinedIcon className='icon' />
                        <select
                            value={localStorage.getItem("i18nextLng")}
                            onChange={handleLanguageChange}
                            id='languagebtn'
                        >
                            <option value="en" >{t("English")}</option>
                            <option value="urdu" >{t("Urdu")}</option>
                        </select>
                    </div>
                    <div className='item'>
                        <DarkModeOutlinedIcon className='icon'
                            onClick={() => dispatch({ type: "TOGGLE" })}
                        />
                    </div>
                    <div className='item'>
                        <FullscreenExitOutlinedIcon className='icon' />
                    </div>
                    <div className='item'>
                        <NotificationsNoneOutlinedIcon className='bel_icon' />
                        <div className='counter'>1</div>
                    </div>
                    <div className='item'>
                        <ChatBubbleOutlineOutlinedIcon className='icon' />
                        <div className='counter'>1</div>
                    </div>
                    <div className='item'>
                        <ListOutlinedIcon className='icon' />
                    </div>
                    <div className="item">
                        <img
                            src="https://res.cloudinary.com/v3solution/image/upload/v1639459008/mubeen_typography_sqbauo.png"
                            alt=""
                            className="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar