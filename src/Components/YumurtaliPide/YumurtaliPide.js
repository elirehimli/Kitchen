import React from 'react'
import style from "../../Components/YumurtaliPide/YumurtaliPide.module.css"
import yumurta from "../Img/yumurta.jpg"
function YumurtaliPide() {
    return (
        <div>
            <div className={style.homee}>
                <div className={style.corba}>
                    <div>
                        <img src={yumurta} />
                    </div>
                    <div className={style.h1}>
                        <h1>YUMURTALI PİDE TARİFİ</h1>
                        <hr style={{ width: "600px", backgroundColor: "orange" }} />
                        <div>
                            <h1>35 dakika</h1>
                            <article>PİŞİRME ZAMANI</article>
                            <hr style={{ width: "600px", backgroundColor: "orange" }} />
                        </div>
                        <div>
                            <h1>İçindekiler</h1>
                            <article>1 ramazan pidesi, mümkünse bayatlamış</article>
                            <article>1 tatlı kaşığı tereyağı</article>
                            <article>150 gr rende kaşar peynir (3-4 avuç)</article>
                        </div>
                    </div>
                </div>
                <p>
                    Fırını ızgara ayarında 220 derecede çalıştırın.
                    8 yumurtayı kırıp üzerine 2 tutam ve 2 tutam karabiber serpip çırpın.
                    5-6 dal maydanozu kabaca doğrayın. 10 adet siyah zeytinin çekirdeklerini çıkartıp doğrayın.
                    Yarım kapya biberi küp küp doğrayın. Maydanoz ve zeytinlerle beraber yumurtaya ekleyin.
                    Harcın tutması için 150 gr rendelenmiş kaşar peynirini içerisine ekleyip son bir tur daha karıştırın.
                    Ramazan pidesinin üzerini kenarlarını bırakarak alın. Üzerini alırken altında delik olursa kopardığınız parçaları elinizde biraz sıkıp hamur gibi yapıp deliklere yama yapabilirsiniz.
                    1 tatlı kaşığı tereyağını pidenin içine sürün.
                    Pideyi ve yumurtalı karışımı bu şekilde akşamdan hazırlayıp sahurda sadece pişirebilirsiniz.
                    Yumurtalı karışımı pidenin ortasına dökün. Üzerine birer çay kaşığı susam ve çörekotu serpin. Pidenin kenarlarını su ile ıslatın ki içi pişene kadar kenarları yanmasın. Fırının üstten ikinci rafına yerleştirip yaklaşık 4-5 dakika pişirin. Ardından fırını alt üst çalıştırıp pideyi tabana koyun ve öyle de 3-4 dakika pişirin. Çıtır çıtır kenarlı  yumurtalı pideniz hazır.
                </p>
                <hr style={{ width: "1000px", backgroundColor: "orange" }} />
                <article style={{ fontSize: "25px", fontWeight: "600", fontFamily: "arial" }}>İzleyin:</article>
                <iframe width="680" height="382" src="https://www.youtube.com/embed/PLBRGoYMGCM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default YumurtaliPide
