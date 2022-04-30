import React from 'react'
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import style from "../Ant/Ant.module.css"
import refika1 from "../Img/img-1.jpg"
import refika2 from "../Img/img-2.jpg"
import refika3 from "../Img/img-3.jpg"
function Ant() {
    const contentStyle = {
        height: '500px',
        color: '#fff',
        lineHeight: '150px',
        textAlign: 'center',
        background: '#364d79',  
    };

    return (
        <div className={style.ant}>
            <Carousel autoplay>
                <div className={style.img1}>
                    <img src={refika1} />
                </div>
                <div className={style.img2}>
                    <img src={refika2} />
                </div>
                <div className={style.img3}>
                    <img src={refika3} />
                </div>
            </Carousel>
        </div>
    )
}

export default Ant
