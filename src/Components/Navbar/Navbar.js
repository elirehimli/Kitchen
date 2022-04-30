import React from 'react'
import { Link } from "react-router-dom"
import style from "../Navbar/Navbar.module.css"
import logo from "../Img/logo.png"
import { BiSearchAlt2 } from "react-icons/bi";
function Navbar() {
    return (
        <div className={style.navbar}>
            <div className={style.logo}>
                <Link to="/"><img class="animate__animated animate__bounce animate__repeat-1" src={logo} /></Link>
            </div>
            <div className={style.nav}>
                <li><Link to="/">Ana Səhifə</Link></li>
                <li><Link to="/refikaninmutfagi">Türk mətbəxi</Link></li>
                <li><Link to="/tarifler">Çeşidlər</Link></li>
                <li><Link to="/gazeteyazilari">Qazet yazıları</Link></li>
            </div>
            <div className={style.text}>
                <p class="animate__animated animate__bounce animate__delay-0.2"> <a target="_blank" href="https://www.youtube.com/watch?v=4V3vi7gEdO0"> Yemək Çeştleri </a></p>
                <article class="animate__animated animate__bounce animate__delay-0.2s"> <a target="_blank" href="https://www.youtube.com/results?search_query=Refikanin+yemek+okulu"> Türk Yemək Dersləri </a></article>
            </div>
            <div className={style.input}>
                <div>
                    <input class="animate__animated animate__fadeInRight" placeholder="axtardığınız çeşidi yazin" />
                </div>
                <div>
                    <BiSearchAlt2 className={style.icon} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
