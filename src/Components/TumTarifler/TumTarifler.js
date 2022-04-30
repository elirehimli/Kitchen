import React from 'react'
import style from "../../Components/TumTarifler/TumTarifler.module.css"
import tum from "../../Components/Img/eats-1.jpg"
import 'antd/dist/antd.css';
import { Statistic, Row, Col } from 'antd';
function TumTarifler() {
    const { Countdown } = Statistic;
    const deadline = Date.now() + 1000 * 60 * 60 * 12 * 2 + 1000 * 30;

    function onFinish() {
        console.log('finished!');
    }
    return (
        <div className={style.tumtarif}>
            <div style={{ width:"5%",margin:"0 auto" }}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Countdown title="" value={deadline} onFinish={onFinish} />
                    </Col>
                </Row>
            </div>
            <h1>YAXİNDA BÜTÜN YEMƏK ÇEŞİDLƏRİ İLƏ QARŞİNİZDA!</h1>
            <hr style={{ width: "15%", backgroundColor: "crimson" }} />
            <img src={tum} />
        </div>
    )
}

export default TumTarifler
