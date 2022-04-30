import React from 'react'
import style from "../../Components/BulgurluPilav/BulgurluPilav.module.css"
import bulgur from "../../Components/Img/bulgur.jpg"
function BulgurluPilav() {
    return (
        <div>
            <div className={style.homee}>
                <div className={style.corba}>
                    <div>
                        <img src={bulgur} />
                    </div>
                    <div className={style.h1}>
                        <h1>BULGURLU MÜCANDARA PİLAVI TARİFİ</h1>
                        <hr style={{ width: "600px", backgroundColor: "orange" }} />
                        <div>
                            <h1>35 dakika</h1>
                            <article>PİŞİRME ZAMANI</article>
                            <hr style={{ width: "600px", backgroundColor: "orange" }} />
                        </div>
                        <div>
                            <h1>İçindekiler</h1>
                            <article>1,5 su bardağı bulgur</article>
                            <article>1 su bardağı yeşil mercimek</article>
                            <article>2 adet soğan</article>
                            <article>½ çay bardağı zeytinyağı</article>
                            <article>1 tatlı kaşığı tuz</article>
                        </div>
                    </div>
                </div>
                <p>
                    1 su bardağı yeşil mercimeği 4 bardak suda haşlayın.
                    Bu sırada başka bir tencereye ½ çay bardağı zeytinyağı koyun ve 2 adet soğanı piyazlık doğrayın.
                    Piyazlık doğradığınız soğanları zeytinyağlı tencereye koyun ve iyice kavurun.
                    Soğanlar kahverengileşmeye başladığında yarısını başka bir tavaya ayırın.
                    Tencereye yıkanıp temizlenmiş 1,5 su bardağı bulguru ilave edin ve kavurun.
                    5 dakika kaynayıp hafif dişe gelir durumda olan mercimekleri suyu ile tencereye ilave edin ve karıştırın. 1 tatlı kaşığı tuz ekleyip kapağını kapatın, pişirmeye devam edin.
                    Pilav piştikten sonra temiz bir mutfak bezi kapatıp 15 dakika dinlendirin.
                    Ayırdığınız soğanları çıtır çıtır olana kadar kavurun.
                    Pilav piştikten sonra üzerine çıtır çıtır olan soğanlarını da ekleyip afiyetle yiyebilirsiniz.
                </p>
                <hr style={{ width: "1000px", backgroundColor: "orange" }} />
                <article style={{fontSize:"25px",fontWeight:"600",fontFamily:"arial"}}>İzleyin:</article>
                <iframe width="680" height="382" src="https://www.youtube.com/embed/aYKMVBBatEc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default BulgurluPilav
