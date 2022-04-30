import React from 'react'
import style from "../../Components/BizimleCalismak/BizimleCalismak.module.css"
import { AiOutlineShareAlt } from "react-icons/ai";
import calismak from "../../Components/Img/bizimlecalismak.jpg"
import { useState } from "react"
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
function BizimleCalismak() {
    const [show, setShow] = useState(false)
    function add() {
        setShow(!show)
    }
    return (
        <div>
            <div className={style.bg}>

            </div>
            <div className={style.calismak}>
                <div className={style.calismak2}>
                    <h2>TÜRK MƏTBƏXİ BİZİMLE ÇALIŞMAQ İSTERDİNİZ?</h2>
                    <h1>BİZİMLƏ ÇALIŞMAQ İSTERMİDİNİZ?</h1>
                </div>
                <div className={style.share}>
                    <AiOutlineShareAlt onClick={add} />
                    <div style={{ display: "inline" }}>
                        {show ?
                            <>
                                <AiOutlineInstagram style={{ fontSize: "25px" }} />
                                <FaFacebookSquare style={{ fontSize: "25px" }} />
                                <AiFillTwitterCircle style={{ fontSize: "25px" }} />
                                <AiOutlineMail style={{ fontSize: "25px" }} />
                            </>
                            : null}
                    </div>
                </div>
            </div>
            <div style={{ padding: "30px" }}>
                <hr className={style.hr} />
            </div>
            <div className={style.foto}>
                <img src={calismak} />
                <h1>TÜRK MƏTBƏXİNİN MAĞAZASI – SATIŞ DANIŞMANI</h1>
            </div>
            <div className={style.text}>
                <h1>GENEL NİTELİKLER:</h1>
                <p>Türk  Mətbəxini və Refikanın brendini çox yaxşı bilmək və özünü onun bir parçası kimi görmək (arzu edilir)
                    2 və ya 4 il universitet məzunu,
                    Pərakəndə satış sahəsində ən azı 2 il iş təcrübəsi
                    Nebim V3 ticarət proqramını bilmək (üstünlük verilir)
                    Refika's Kitchen və Refika markalarını tanıyaraq, brendin prinsiplərini mənimsəyərək,
                    Dizayn mədəniyyətini Refikadan mənimsəyərək, ölkəmizin dəyərlərinə önəm verərək,
                    Yeni şeylər öyrənməyə açıq, hər zaman həm brendi, həm də özünü inkişaf etdirməyi düşünən, təşəbbüskar, çox yönlü, müxtəlif sahələrdə ideya istehsal etməyi bacaran,
                    Karyera seçimini uzunmüddətli olaraq düşünən və satışı sevən - marketinq, ünsiyyət - sosial dünya,
                    İnsan münasibətlərində və ünsiyyətdə güclü,
                    Gülümsəyən, görünüşünə və geyinməsinə diqqət yetirən,
                    Kompüter və internet dünyası ilə yaxşı tanış olan,
                    Lazım olduqda çevik iş saatlarına uyğunlaşa bilən,
                    Hərbi xidməti keçmiş və ya 2 ildən az olmayaraq hərbi xidmətdən kənarlaşdırılmış kişi namizədlər üçün;</p>
                <h1>İŞ TANITMA:</h1>
                <p>Türk mətbəxinin məhsullarının hekayə və məlumatlarını hərtərəfli öyrənmək və ətraflı şəkildə müştərilərlə paylaşmaq,
                    Müştəri məmnuniyyətinin təmin edilməsi və onların gözləntilərinin qarşılanması,
                    Fərdi və mağazanın aylıq və dövri satış hədəflərinin reallaşdırılması,
                    Məhsulların mağazanın vizual standartlarına uyğun şəkildə düzgün nümayiş etdirilməsini təmin etmək,
                    Məhsul ehtiyatının təqibini təmin etmək, düzgün planlaşdırma ilə anbardan məhsul tələb etmək,
                    Aylıq mağaza hesabının aparılması, anbarların satışla uyğunluğunun təmin edilməsi,
                    Mağazada olan məhsul və kampaniyaları müştərilərə tanıtaraq müştəri ehtiyaclarına uyğun həllər istehsal etmək,
                    Satılan məhsulların qaimə, qaimə və s. rəsmi və digər sənədlərin hazırlanması;
                    Mühasibat departamenti ilə razılaşdırılaraq gün sonu təhvil-təsliminin həyata keçirilməsi,
                    Mağazanın təmizliyinə və qaydasına diqqət yetirmək, lazımi tənzimləməni təmin etmək,</p>
                <h1>BAŞVURU ÜÇÜN:</h1>
                <p>cv@refikaninmutfagi.com e-posta adresine CV’nizi, neden Refika’nın Mutfağı ve Refika’dan ailesinde olmak istediğinize dair ön yazı ile gönderebilirsiniz.
                    Başka pozisyon noktasında gönderilen, ilan ile alâkalı olmayan başvurular değerlendirilmeyecektir.
                    Ekinde CV olmayan başvurular değerlendirilmeyecektir.
                    *  Başvuru sahipleri, paylaşacakları kişisel bilgilerinin, 6698 sayılı Kişisel Verilerin Korunması Kanunu nezdinde, başvuru sürecinde ilan sahibi tarafından kullanılmasını açık rıza ile beyan ettiğini kabul etmiş bulunmaktadır.</p>
            </div>
        </div>
    )
}

export default BizimleCalismak
