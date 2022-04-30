import React from 'react'
import style from "../../Components/DugunCorbasi/DugunCorbasi.module.css"
import corba from "../../Components/Img/corba.jpg"
function DugunCorbasi() {
    return (
        <div className={style.homee}>
            <div className={style.corba}>
                <div className={style.imgg}>
                    <img src={corba} />
                </div>
                <div className={style.h1}>
                    <h1>DÜYÜ ŞORBASI RESEPTİ</h1>
                    <hr style={{ width: "600px", backgroundColor: "orange" }} />
                    <div>
                        <h1>25 Dəqiqə</h1>
                        <article>PİŞİRMƏ ZAMANI</article>
                        <hr style={{ width: "600px", backgroundColor: "orange" }} />
                    </div>
                    <div>
                        <h1>İçindekiler</h1>
                        <article>150 gr yağsız dana eti (tranç)</article>
                        <article>1/2 soğan</article>
                        <article>2 ədəd yenibahar</article>
                        <article>4 ədəd karabiber</article>
                    </div>
                </div>
            </div>
            <p>
                •           Düdüklü sobaya 2 xörək qaşığı zeytun yağı əlavə edin.

                •           Küçük küçük doğranmış 150 gr yağsız dana etine 2 tutam tuz ve 1 tutam karabiber serpip karıştırın. Isın yağa etleri ekleyip kavurun.

                •           Tencereye yarım soğan ve 2 tane yeni baharı ekleyin. İyice kavrulup kahverengileşmeye başladığında 1,5 lt sıcak suyu  ekleyin. 1 tutam tuz daha ekleyip düdüklü tencereyi kapatıp kitlendikten sonra 10 dakika pişirin.

                •           8 çorba kaşığı yoğurdun içerisine 3 çorba kaşığı unu eleyerek ekleyin. 1 yumurta sarısı, 2 diş sarımsak ve 1 limonun suyunu ekleyip güzelce çırpın.

                •           Düdüklünün kapağını açın, birer kepçe terbiyeye suyundan ekleyerek ılıştırın. Terbiyeyi tencereye ekleyin ve çırpın. 5-6 dakika kaynatın.

                •           Çorbanın yağı için 1 çorba kaşığı tereyağına 2 tutam pul biberi ekleyin. Biberler kavrulup rengini yağa verdiğinde çorbaya ilave edin. Son olarak ağız tadınıza göre tuz eklediğinizde düğün çorbanız hazır.
            </p>
            <hr style={{ width: "1000px", backgroundColor: "orange" }} />
            <article style={{ fontSize: "25px", fontWeight: "600", fontFamily: "arial" }}>İzleyin:</article>
            <iframe width="680" height="382" src="https://www.youtube.com/embed/ophsioewBDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default DugunCorbasi
