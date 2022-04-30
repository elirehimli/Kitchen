import React from 'react'
import style from "../../Components/Section4/Section4.module.css"
import { Link } from "react-router-dom"
import ramazan from "../Img/ramazankebab.jpg"
import baklava from "../Img/baklava.jpg"
import pide from "../Img/pide.jpg"
import { BiRightArrow } from "react-icons/bi";
import 'antd/dist/antd.css';
import { Rate } from 'antd';
function Section4() {
    return (
        <div className={style.section4}>
            <div className={style.eats2}>
                <div className={style.yemek2}>
                    <Link to="/islimkebabi"><img src={ramazan} /></Link>
                    <div className={style.text2}>
                        <article>İSLİM KEBABI TARİFİ</article>
                        <h6>
                            <li>3 yemek kaşığı sıvı yağ</li>
                            <li>350 gram kuşbaşı dana et</li>
                            <li>1 su bardağı arpacık soğan</li>
                            <li>1 çay kaşığı karabiber</li>
                            <li>1 su bardağı su</li>
                        </h6>
                        <Link to="/islimkebabi">Daha Etraflı</Link>
                    </div>
                    <Rate allowHalf defaultValue={0} />
                </div>
                <div className={style.yemek2}>
                    <Link to="/yumurtalipide"><img src={pide} /></Link>
                    <div className={style.text2}>
                        <article>YUMURTALI PİDE TARİFİ</article>
                        <h6>
                            <li>1 ramazan pidesi, mümkünse bayatlamış</li>
                            <li>1 tatlı kaşığı tereyağı</li>
                            <li>8 tane yumurta</li>
                            <li>2 tutam tuz</li>
                            <li>5-6 dal maydanoz</li>
                        </h6>
                        <Link to="/yumurtalipide">Daha Etraflı</Link>
                    </div>
                    <Rate allowHalf defaultValue={0} />
                </div>
                <div className={style.yemek2}>
                    <Link to="/baklava"><img src={baklava} /></Link>
                    <div className={style.text2}>
                        <article>PAXLAVA CHEESECAKE TARİFİ</article>
                        <h6>
                            <li>12 adet baklavalık yufka</li>
                            <li>1.5 su bardağı eritilmiş tereyağı</li>
                            <li>2 su bardağı ceviz</li>
                            <li>2 su bardağı antep fıstığı</li>
                            <li>3 su bardağı labne peyniri</li>
                        </h6>
                        <Link to="/baklava">Daha Etraflı</Link>
                    </div>
                    <Rate allowHalf defaultValue={0} />
                </div>
            </div>
            <div className={style.end}>
                <Link to="/tumtarifler">BÜTÜN TARİFLER<BiRightArrow style={{ fontSize: "18px", color: "crimson" }} /></Link>
            </div>
        </div>
    )
}

export default Section4
