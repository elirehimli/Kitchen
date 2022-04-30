import React from 'react'
import style from "../Section2/Section2.module.css"
import kebab1 from "../Img/kebab1.jpg"
import lule from "../Img/lule.jpg"
import Kababgoy from "../Img/Kababgoy.jpg"
import Sekerbura from "../Img/Sekerbura.jpg"
import paxlava from "../Img/paxlava.jpg"
import sorcorey from "../Img/sorcorey.jpg"
import { useState } from "react"
function Section2() {
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
        <div className={style.section2}>
            <div className={style.textt}>
                <h1>TARİFLER</h1>
                <p>Yemək ve Mətbəx Dair Her şey</p>
            </div>
            <div className={style.kebab}>
                <h1>Kabab Çeşidləri</h1>
            </div>
            <div className={style.kebabdis}>
                <div className={style.wid}>
                    <img src={kebab1} />
                    <div className={style.sis}>
                        <h1>Şiş Kabab</h1>
                        <p>
Ədviyyatlı Dadli Şiş kababı, Pideli Toyuq Kababı, Mayalı Şiş Küftə, Qatıqlı Göbələk Şorbası</p>
                        {
                            show ? <p>Kıymalı Çökertme Kabab, Qazanda Orman Kabab, Evdə İsti Adana Kababı, Tərəvəzli Şişli Küftə, Xəmirli Asan Xəmir, Yufkalı Şiş Kabab, Ev Kabab Reseptləri seçdiyimiz reseptlərdən bəziləridir. Xülasə, tam axtardığınız mövzu üçün 11 resept xüsusi olaraq seçilmişdir.</p> : null
                        }
                        <article style={{ color: "brown", cursor: "pointer", fontSize: "16px", fontWeight: "600" }} onClick={add}>{show ? <article>Geri Dön</article> : <article>Davam etmək üçün klikləyin</article>}</article>
                    </div>
                </div>
                <div className={style.wid}>
                    <img src={lule} />
                    <div className={style.sis}>
                        <h1>Lülə Kabab</h1>
                        <p>Et çeşitleri ve kuyruk yağını ayrı ayrı satır ya da keskin bıçaklar yardımıyla çekin.</p>
                        {
                            showw ? <p>Ətin teksturasını korlamamaq üçün ətçəkən və ya ət maşınından istifadə etməyin.Şişlərin üzərinə kabab məhlulu qoymaq üçün əllərinizi az miqdarda yağla yağlayın. </p> : null
                        }
                        <article style={{ color: "brown", cursor: "pointer", fontSize: "16px", fontWeight: "600" }} onClick={addd}>{showw ? <article>Geri Dön</article> : <article>Davam etmək üçün klikləyin</article>}</article>
                    </div>
                </div>
                <div className={style.wid}>
                    <img src={Kababgoy} />
                    <div className={style.sis}>
                        <h1>Göylü Kabab</h1>
                        <p>Demək olar ki, hər yeməkdə ikinci dərəcəli aktyor kimi oynadığımız soğana bu dəfə baş rolu verir.</p>
                        {
                            showww ? <p>
                            Soğan kababını ilk dəfə dadacaq hər kəsə təəccüblü və əfsanəvi dad təqdim edirik. Sınadığınız zaman nə demək istədiyimizi biləcəksiniz.</p> : null
                        }
                        <article style={{ color: "brown", cursor: "pointer", fontSize: "16px", fontWeight: "600" }} onClick={adddd}>{showww ? <article>Geri Dön</article> : <article>Davam etmək üçün klikləyin</article>}</article>
                    </div>
                </div>
            </div>


            <div className={style.kebab}>
                <h1>Şirniyat Çeşidler</h1>
            </div>
            <div className={style.kebabdis}>
                <div className={style.wid}>
                    <img src={Sekerbura} />
                    <div className={style.sis}>
                        <h1>Şəkərbura</h1>
                        <p>Əvvəlcə şərbət paxlava hazırlanana qədər tam soyumağa hazırlanır.</p>
                        {
                            pasta ? <p>Sobadan aldığımız zaman ilk temperaturun çıxmasını 2 dəqiqə gözləyək və soyuq şərbəti əlavə edək. Şirniyyatımız bir neçə saat dincəldikdən sonra xidmətə hazırdır. Ertəsi gün daha dadlı olur. Nuş olsun.</p> : null
                        }
                        <article style={{ color: "brown", cursor: "pointer", fontSize: "16px", fontWeight: "600" }} onClick={click}>{pasta ? <article>Geri Dön</article> : <article>Davam etmək üçün klikləyin</article>}</article>
                    </div>
                </div>
                <div className={style.wid}>
                    <img src={paxlava} />
                    <div className={style.sis}>
                        <h1>Paxlava</h1>
                        <p>
Xırtıldayan kroketlər, fındıq parçaları və karamelize şəkərdən ibarətdir. Fındıq karamelinin soyuyan və bərkidən xırdalanmış formasına krokvant deyilir.</p>
                        {
                            pastaa ? <p>Çörəkxanalardan alıb zövqlə istehlak etdiyiniz krokan tortunu evdə hazırlamağa cəhd etmək istəyirsinizsə, reseptimiz sizə çox uyğundur. Bəs siz nəyi gözləyirsiniz?</p> : null
                        }
                        <article style={{ color: "brown", cursor: "pointer", fontSize: "16px", fontWeight: "600" }} onClick={clickk}>{pastaa ? <article>Geri Dön</article> : <article>Davam etmək üçün klikləyin</article>}</article>
                    </div>
                </div>
                <div className={style.wid}>
                    <img src={sorcorey} />
                    <div className={style.sis}>
                        <h1>Şorçörəy</h1>
                        <p>2,5 stəkan suya 2 stəkan şəkər tozu əlavə edib, arada qarışdıraraq qaynamasını gözləyin.</p>
                        {
                            pastaaa ? <p>
                            Qaynadıqdan sonra içinə bir neçə damcı limon sıxıb qarışdırın və ocaqdan götürün. Şəkər-su nisbətini öz zövqünüzə görə dəyişə bilərsiniz.</p> : null
                        }
                        <article style={{ color: "brown", cursor: "pointer", fontSize: "16px", fontWeight: "600" }} onClick={clickkk}>{pastaaa ? <article>Geri Dön</article> : <article>Davam etmək üçün klikləyin</article>}</article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2
