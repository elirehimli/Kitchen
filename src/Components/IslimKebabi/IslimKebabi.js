import React from 'react'
import style from "../../Components/IslimKebabi/IslimKebabi.module.css"
import islim from "../Img/islim.jpg"
function IslimKebabi() {
    return (
        <div>
            <div className={style.homee}>
                <div className={style.corba}>
                    <div>
                        <img src={islim} />
                    </div>
                    <div className={style.h1}>
                        <h1>İSLİM KEBAB RESEPTİ</h1>
                        <hr style={{ width: "600px", backgroundColor: "orange" }} />
                        <div>
                            <h1>35 dakika</h1>
                            <article>PİŞİRME ZAMANI</article>
                            <hr style={{ width: "600px", backgroundColor: "orange" }} />
                        </div>
                        <div>
                            <h1>İçindekiler</h1>
                            <article>Yarım kg dana kıyma</article>
                            <article>1 iri soğan</article>
                            <article>1 yumurta</article>
                            <article>5 çorba kaşığı köfte baharı</article>
                        </div>
                    </div>
                </div>
                <p>
                    •           Fırını ızgara + fan modunda 250 derece de çalıştırın.

                    •           Yarım kg dana döş kıymaya rendelenmiş 1 soğan, 1 yumurta, 5 çorba kaşığı köfte baharı ve 2 çorba kaşığı zeytinyağı ekleyip yoğurun.

                    •           Tatlar birbirine geçtikten sonra, ince kıyılmış 10 dal maydanozu ekleyin ve yoğurmaya devam edin.

                    •           Köfteden yaklaşık 50 grlık parçalar alıp yuvarlayın. Bu şekilde yaklaşık 16 tane köfte çıkacak.

                    •           Patlıcanın sadece iki yüzünü soyacak ile alacalı soyun. Soyduğunuz kısım dışa gelecek şekilde,  8mm kalınlığında üç parçaya dilimleyin.

                    •           Fırın tepsisine yağlı kağıt koyun, patlıcanları dizin.

                    •           Üzerlerine tuz serpin, 6 çorba kaşığı zeytinyağını bir fırçayla patlıcanların her iki yüzüne de sürün.

                    •           Aralarına köfteleri dizin. Tepsiyi fırına koyup 10 dakika pişirin.

                    •           5. dakikadan sonra patlıcan ve köftelerin diğer yüzünü çevirin.

                    •           Sos tenceresine 2 çorba kaşığı zeytinyağını ekleyin. Üzerine ince kıyılmış 3 diş sarımsak ve 1 çorba kaşığı domates salçası ekleyip kavurmaya başlayın.

                    •         Birer çay kaşığı tuz, karabiber ve kekiği de tencereye ekleyin.

                    •           Rendelenmiş 3 domatesi ve domatesin asidini dengelemek içinse 1’er tatlı kaşığı şeker ve sirke ekleyin.

                    •           Domatesin cinsine göre suyunu bırakması farklılık gösterebilir, çok su salmadıysa yarım bardak sıcak su ekleyebilirsiniz.

                    •           Patlıcanları artı şeklinde tezgaha koyun. Ortasına 2 tane köfteyi yerleştirin, üzerine kürdan batırın. Kürdanın yukarda kalan kısmına  dilerseniz dilim dilerseniz yarım ay şeklinde kesilmiş domates ve bir parça da biber koyun.

                    •           İslim kebaplarını tepsiye dizin ve domates sosunu üzerine gezdirin.

                    •           Fırının ısısını 180 dereceye düşürüp alt-üst çalıştırın ve fırının orta rafına yerleştirin.

                    •           Fırından çıkan islim kebaplarını sosuyla birlikte pilavın üzerine yerleştirin. Son olarak maydanoz yapraklarını serpiştirince hazır. Afiyet Olsun !
                </p>
                <hr style={{ width: "1000px", backgroundColor: "orange" }} />
                <article style={{ fontSize: "25px", fontWeight: "600", fontFamily: "arial" }}>İzleyin:</article>
                <iframe width="680" height="382" src="https://www.youtube.com/embed/ophsioewBDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default IslimKebabi
