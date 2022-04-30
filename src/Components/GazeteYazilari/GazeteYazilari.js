import React from 'react'
import style from "../../Components/GazeteYazilari/GazeteYazilari.module.css"
import gazete1 from "../Img/gazete1.jpg"
import gazete2 from "../Img/gazete2.jpg"
import gazete3 from "../Img/gazete3.jpg"
import gazete4 from "../Img/gazete4.jpg"
import gazete5 from "../Img/gazete5.jpg"
import gazete6 from "../Img/gazete6.jpg"
import gazete7 from "../Img/gazete7.jpg"
import gazete8 from "../Img/gazete8.jpg"
import gazete9 from "../Img/gazete9.jpg"
import { useState } from "react"
function GazeteYazilari() {
    const [show, setShow] = useState(false)
    const [showw, setShoww] = useState(false)
    const [showww, setShowww] = useState(false)
    function add() {
        setShow(!show)
    }
    function addd() {
        setShoww(!showw)
    }
    function adddd() {
        setShowww(!showww)
    }

    const [pasta, setPasta] = useState(false)
    const [pastaa, setPastaa] = useState(false)
    const [pastaaa, setPastaaa] = useState(false)
    function click() {
        setPasta(!pasta)
    }
    function clickk() {
        setPastaa(!pastaa)
    }
    function clickkk() {
        setPastaaa(!pastaaa)
    }
    return (
        <div>
            <div className={style.section2}>
                <div className={style.textt}>
                    <h1>QAZET YAZILARI</h1>
                </div>
                <div className={style.kebab}>
                </div>
                <div className={style.kebabdis}>
                    <div className={style.wid}>
                        <img src={gazete1} />
                        <div className={style.sis}>
                            <h1>SİZ QƏHVƏNİ  HAZIRLAMAQI BİLİRSİNİZ?</h1>
                            <p>Həftənin İpucu: Yumurtanızı seçərkən üzərindəki rəqəmlərə baxın.</p>
                            {
                                show ? <p> Mesela 3 TR 1067919K3 Baştaki numara yumurtanın üretim yöntemini</p> : null
                            }
                            <article style={{ color: "brown", cursor: "pointer", fontSize: "16px", fontWeight: "600" }} onClick={add}>{show ? <article>Geri Dön</article> : <article>Devami icin tıklayın</article>}</article>
                        </div>
                    </div>
                    <div className={style.wid}>
                        <img src={gazete2} />
                        <div className={style.sis}>
                            <h1>BAHARIN BÜTÜN RƏNGLERİ</h1>
                            <p>Biliyorsunuz Cumartesi ekleri size kısa öz ve kıymetli bilgileri,</p>
                            {
                                showw ? <p>en güvenilir kaynaklardan biri olarak vermek için</p> : null
                            }
                            <article style={{ color: "brown", cursor: "pointer", fontSize: "16px", fontWeight: "600" }} onClick={addd}>{showw ? <article>Geri Dön</article> : <article>Devami icin tıklayın</article>}</article>
                        </div>
                    </div>
                    <div className={style.wid}>
                        <img src={gazete3} />
                        <div className={style.sis}>
                            <h1>Günah hiss etmədən Zövq</h1>
                            <p>Fransız Mutfağı’nı, Fransız Mutfağı yapan 3 şey nedir diye sormuşlar.</p>
                            {
                                showww ? <p> Cavab: “Tereyağ, tereyağ, tereyağ”. Bu anlayışın.</p> : null
                            }
                            <article style={{ color: "brown", cursor: "pointer", fontSize: "16px", fontWeight: "600" }} onClick={adddd}>{showww ? <article>Geri Dön</article> : <article>Devami icin tıklayın</article>}</article>
                        </div>
                    </div>
                </div>


                <div className={style.kebab}>
                </div>
                <div className={style.kebabdis}>
                    <div className={style.wid}>
                        <img src={gazete4} />
                        <div className={style.sis}>
                            <h1>EVDE QURUDULMUŞ MEYVE</h1>
                            <p>Kurutma, bir saklama yöntemi..</p>
                            {
                                pasta ? <p> Mevsiminde ziyadesi ile olan güzellikleri farklı aylarda tüketebilmeyi sunan bir yöntem aslında.</p> : null
                            }
                            <article style={{ color: "brown", cursor: "pointer", fontSize: "16px", fontWeight: "600" }} onClick={click}>{pasta ? <article>Geri Dön</article> : <article>Devami icin tıklayın</article>}</article>
                        </div>
                    </div>
                    <div className={style.wid}>
                        <img src={gazete5} />
                        <div className={style.sis}>
                            <h1>AŞKIN PASTASI OLSA…</h1>
                            <p>Bu sevgililer gününe “aşkın pastasını” yapmak istedim.</p>
                            {
                                pastaa ? <p>Neden mi? Sevgiliye verilecek en kıymetli şeyin zaman, emek</p> : null
                            }
                            <article style={{ color: "brown", cursor: "pointer", fontSize: "16px", fontWeight: "600" }} onClick={clickk}>{pastaa ? <article>Geri Dön</article> : <article>Devami icin tıklayın</article>}</article>
                        </div>
                    </div>
                    <div className={style.wid}>
                        <img src={gazete6} />
                        <div className={style.sis}>
                            <h1>ET YEMEDENDE PROTEN ALINMAZ</h1>
                            <h1></h1>
                            <p>Son zamanlarda bir tarafta ete sevgilisi gibi davranan,</p>
                            {
                                pastaaa ? <p>onla seksi hareketler yapmaya çalışan garip giyinimli, birbirini.</p> : null
                            }
                            <article style={{ color: "brown", cursor: "pointer", fontSize: "16px", fontWeight: "600" }} onClick={clickkk}>{pastaaa ? <article>Geri Dön</article> : <article>Devami icin tıklayın</article>}</article>
                        </div>
                    </div>
                </div>
                

                <div className={style.kebabdis}>
                    <div className={style.wid}>
                        <img src={gazete7} />
                        <div className={style.sis}>
                            <h1>GÖNÜLÇELEN BAŞLANGIÇ</h1>
                            <p>İster kebapçı, isterse havalı, incili,</p>
                            {
                                pasta ? <p> yıldızlı restoran olsun başta verilen minik bir bedava ve iştah açan</p> : null
                            }
                            <article style={{ color: "brown", cursor: "pointer", fontSize: "16px", fontWeight: "600" }} onClick={click}>{pasta ? <article>Geri Dön</article> : <article>Devami icin tıklayın</article>}</article>
                        </div>
                    </div>
                    <div className={style.wid}>
                        <img src={gazete8} />
                        <div className={style.sis}>
                            <h1>FOTOĞRAF SAHTEGERÇEK AYRIMI</h1>
                            <p>  Bu iki resim arasındaki 5 temel benzerliği bulabilir misiniz? 1)</p>
                            {
                                pastaa ? <p>İkisi de ağız sulandırmak için</p> : null
                            }
                            <article style={{ color: "brown", cursor: "pointer", fontSize: "16px", fontWeight: "600" }} onClick={clickk}>{pastaa ? <article>Geri Dön</article> : <article>Devami icin tıklayın</article>}</article>
                        </div>
                    </div>
                    <div className={style.wid}>
                        <img src={gazete9} />
                        <div className={style.sis}>
                            <h1>10 DAKİKALIK YILBAŞI MEZELERİ</h1>
                            <p>Koca bir yılı devirmeye bir gün kaldı…</p>
                            {
                                pastaaa ? <p>Çok yorulduk, üzüldük, heyecanlandık, endişelendik ve çoğu zaman ‘an’dan</p> : null
                            }
                            <article style={{ color: "brown", cursor: "pointer", fontSize: "16px", fontWeight: "600" }} onClick={clickkk}>{pastaaa ? <article>Geri Dön</article> : <article>Devami icin tıklayın</article>}</article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GazeteYazilari
