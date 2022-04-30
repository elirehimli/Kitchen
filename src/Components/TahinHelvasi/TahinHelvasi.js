import React from 'react'
import style from "../../Components/TahinHelvasi/TahinHelvasi.module.css"
import tahin from "../../Components/Img/tahin.jpg"
function TahinHelvasi() {
    return (
        <div>
            <div className={style.homee}>
                <div className={style.corba}>
                    <div>
                        <img src={tahin} />
                    </div>
                    <div className={style.h1}>
                        <h1>ASAN TAHİN HALVASI RESEPTİ</h1>
                        <hr style={{ width: "600px", backgroundColor: "orange" }} />
                        <div>
                            <h1>10 dakika</h1>
                            <article>PİŞİRME ZAMANI</article>
                            <hr style={{ width: "600px", backgroundColor: "orange" }} />
                        </div>
                        <div>
                            <h1>İçindekiler</h1>
                            <article>1 bardak şeker (200 gr)</article>
                            <article>Yarım çay bardağı (60 ml)</article>
                            <article>1 bardak tahin (260 gr)</article>
                            <article>1 tutam tuz</article>
                            <article>1 paket vanilin</article>
                            <article>1 avuç Antep fıstığı</article>
                            <article>Dondurman</article>
                        </div>
                    </div>
                </div>
                <p>
                    •           1 bardak şekerin üzerine yarım çay bardağı su ilave edin ve ocağa koyup altını açın.

                    •           Kısık ateşte şeker eriyinceye kadar usul usul 8 dakika pişirin.

                    •           1 bardak tahini bir kaseye dökün. Üzerine 1 tutam tuz, 1 paket vanilin ve ince kıyılmış 1 avuç Antep fıstığı ekleyin.

                    •           Kaynayan şerbeti üzerine döküp hızlıca karıştırın.

                    •           Yağlı kağıt serilmiş dikdörtgen bir kaseye helvayı dökün, kaşık ile üzerini düzleyin.

                    •           Dolapta soğuyup sertleştikten sonra dilimleyip afiyetle yiyebilirsiniz.
                </p>
                <hr style={{ width: "1000px", backgroundColor: "orange" }} />
                <article style={{fontSize:"25px",fontWeight:"600",fontFamily:"arial"}}>İzleyin:</article>
                <iframe width="680" height="382" src="https://www.youtube.com/embed/ophsioewBDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default TahinHelvasi
