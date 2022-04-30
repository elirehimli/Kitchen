import React from 'react'
import style from "../Section3/Section3.module.css"
import corba from "../Img/duguncorbasi.jpg"
import pilav from "../Img/pilav.jpg"
import helva from "../Img/helva.jpg"
import { Link } from "react-router-dom"
import 'antd/dist/antd.css';
import { Rate } from 'antd';
function Section3() {
    return (
        <div className={style.section3}>
            <h1>BÜTÜN YEMEK ÇEŞİTLERİ</h1>
            <div className={style.eats}>
                <div className={style.yemek}>
                    <Link to="/duguncorbasi"><img src={corba} /></Link>
                    <div className={style.text}>
                        <article>TOY ŞORBASI RESEPTİ</article>
                        <h6>
                            <li>150 gr yağsız dana eti (tranç)</li>
                            <li>1/2 soğan</li>
                            <li>2 tane yenibahar</li>
                            <li>4 tane karabiber</li>
                            <li>1,5 litre sıcak su</li>
                        </h6>
                        <Link to="/duguncorbasi">Daha Etraflı</Link>
                    </div>
                    <Rate allowHalf defaultValue={0} />
                </div>
                <div className={style.yemek}>
                    <Link to="/tahinhelvasi"><img src={helva} /></Link>
                    <div className={style.text}>
                        <article>ASAN TAHİN HALVASI RESEPTİ</article>
                        <h6>
                            <li>1 bardak şeker (200 gr)</li>
                            <li>Yarım çay bardağı (60 ml)</li>
                            <li>1 bardak tahin (260 gr)</li>
                            <li>1 tutam tuz</li>
                            <li>1 paket vanilin</li>
                        </h6>
                        <Link to="/tahinhelvasi">Daha Etraflı</Link>
                    </div>
                    <Rate allowHalf defaultValue={0} />
                </div>
                <div className={style.yemek}>
                    <Link to="/bulgurlupilav" ><img src={pilav} /></Link>
                    <div className={style.text}>
                        <article>BULQUR MUCƏNDƏRƏ PİLƏVİ RESEPTİ</article>
                        <h6>
                            <li>1,5 su bardağı bulgur</li>
                            <li>1 su bardağı yeşil mercimek</li>
                            <li>2 adet soğan</li>
                            <li>½ çay bardağı zeytinyağı</li>
                            <li>1 tatlı kaşığı tuz</li>
                        </h6>
                        <Link to="/bulgurlupilav">Daha Etraflı</Link>
                    </div>
                    <Rate allowHalf defaultValue={0} />
                </div>
            </div>
        </div>
    )
}

export default Section3
