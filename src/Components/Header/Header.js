import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import style from "../Header/Header.module.css"
import Navbar from "../Navbar/Navbar"
import { Link } from "react-router-dom"
function Header() {
    return (
        <div>
            {/* <div className={style.header}>
                <div class="animate__animated animate__bounce animate__bounceInRight">
                    <a  target="_blank" href="https://www.facebook.com/"><FaFacebook className={style.icon1} /></a>
                    <a target="_blank" href="https://www.instagram.com/"><AiOutlineInstagram className={style.icon1} /></a>
                    <a target="_blank" href="https://twitter.com/"><AiFillTwitterCircle className={style.icon1} /></a>
                    <a target="_blank" href="https://www.youtube.com/"><AiFillYoutube className={style.icon1} /></a>
                </div>
                <a class="animate__animated animate__bounce animate__bounceInTop" target="_blank" href="mailto:info@refikaninmutfagi.com">info@Türkmetbexi.com</a>
                <Link class="animate__animated animate__bounce animate__bounceInLeft" to="/bizimlecalismak">Bizimlə çalişmaq istərsiz?</Link>
            </div> */}
            <Navbar />
        </div>
    )
}

export default Header
