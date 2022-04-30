import React from 'react'
import yemek1 from "../../Components/Img/eats-1.jpg"
import yemek2 from "../../Components/Img/eats-2.jpg"
import style from "../../Components/Section1/Section1.module.css"
import refika from "../../Components/Img/refika.jpg"
import refika2 from "../../Components/Img/refika-2.jpg"
import Ant from '../Ant/Ant'
function Section1() {
    return (
        <div>
            <Ant />
            <div className={style.refika}>
                <div className={style.section0}>
                    <div className={style.section1}>
                        <img src={yemek1} />
                        <div className={style.eat1}>
                            <p>Bütün Yemək Çeşidləri</p>
                        </div>
                    </div>
                    <div className={style.section2}>
                        <img src={yemek2} />
                        <div className={style.eat2}>
                            <p>Kabab Tarifleri</p>
                        </div>
                    </div>
                </div>
                <div className={style.img1}>
                    <img src={refika} />
                    <div className={style.img2}>
                        <a target="_blank" href="https://www.youtube.com/watch?v=8FlZe7Fk0wc"><img src={refika2} /></a>
                        <div className={style.text}>
                            <p>Aslıhan Gürbüzlə Kiçik Söhbətlər | Merve Aksakla Cheesecake Hazırlayıram :D <p style={{ color: "crimson" }}>11.06.2018</p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1
