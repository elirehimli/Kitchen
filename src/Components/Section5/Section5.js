import React from 'react'
import style from "../../Components/Section5/Section5.module.css"
import 'antd/dist/antd.css';
import { Image } from 'antd';
import slider1 from "../../Components/Img/sliderfoto1.jpg"
import slider2 from "../../Components/Img/sliderfoto2.jpg"
import slider3 from "../../Components/Img/sliderfoto3.jpg"
import slider4 from "../../Components/Img/sliderfoto4.jpg"
import { ImYoutube2 } from "react-icons/im";
function Section5() {
    return (
        <div className={style.section5}>
            <h1>YEMƏK DƏRSLƏRİ</h1>
            <div style={{ paddingBottom: "30px" }}>
                <hr style={{ width: "15%", height: "2px", backgroundColor: "crimson" }} />
                <a target="_blank" href="https://www.youtube.com/channel/UCO3MaQR-Vh6cgBZRlD44jWg">
                    <ImYoutube2 style={{ fontSize: "60px", color: "#c4302b" }} /></a>
            </div>
            <div className={style.slider}>
                <Image.PreviewGroup>
                    <Image width={300} src={slider1} />
                    <Image width={300} src={slider2} />
                    <Image width={300} src={slider3} />
                    <Image width={300} src={slider4} />
                </Image.PreviewGroup>
            </div>
        </div>
    )
}

export default Section5
