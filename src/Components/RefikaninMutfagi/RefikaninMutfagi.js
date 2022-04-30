import React from "react";
import style from "../../Components/RefikaninMutfagi/RefikaninMutfagi.module.css";
import mut1 from "../../Components/Img/mut1.jpg";
import mut2 from "../../Components/Img/mut2.jpg";
import mut3 from "../../Components/Img/mut3.jpg";
import mut4 from "../../Components/Img/mut4.jpg";
import mut5 from "../../Components/Img/mut5.jpg";
import mut6 from "../../Components/Img/mut6.jpg";
import mut7 from "../../Components/Img/mut7.jpg";
import mut8 from "../../Components/Img/mut8.jpg";
import mut9 from "../../Components/Img/mut9.jpg";
import "antd/dist/antd.css";
import { Pagination } from "antd";
import { Link } from "react-router-dom";
function RefikaninMutfagi() {
  return (
    <div className={style.mutfag}>
      <div className={style.head}>
        <h1>MƏTBƏX</h1>
      </div>
      <div className={style.display}>
        <div className={style.text5}>
          <img src={mut8} />
          <h2>GƏLİN, 30 APREL TAXMUTDA GÖRÜŞƏK!</h2>
          <article>
          30 Apreldə İstanbulun ən ləzzətli festivalı At TimeOut
            olacağıq.
          </article>
        </div>
        <div className={style.text5}>
          <img src={mut2} />
          <h2>ŞƏNBƏ GÜNÜ SAAT 14.00-16.00 BİRLİK OLAQ!</h2>
          <article>
          Şənbə günü Kuzguncuk'a gəlin, dolaşın, tanış olun, söhbət edin.
            etməkş
          </article>
        </div>
        <div className={style.text5}>
          <img src={mut3} />
          <h2>SAAT 13.15-də DERYA BAYKAL İLƏ GÜLÜŞƏCƏM!</h2>
          <article>
          Derya Baykal həyatımda iştirak etdiyim ilk televiziya proqramı oldu. mənə
            günün nə qədər olduğunu heç vaxt bilmirsən
          </article>
        </div>

        <div className={style.text5}>
          <img src={mut9} />
          <h2>TEZ RESEPTLER KİTABI RƏFLƏRDƏDİR!</h2>
          <article>
            TV’de izlenme rekorları kıran ‘Hızlı Tarifler’ programındaki
            tarifleri sizler için iki kapak altında topladık
          </article>
        </div>
        <div className={style.text5}>
          <img src={mut5} />
          <h2>CO. TƏZİQ ALTINDA FƏRQLİDİR!</h2>
          <article>
          Kimimiz fitin çalacağından qorxduq, kimimiz dedi:
            bişmiş yeməklər. Mənim belə vaxtım var
          </article>
        </div>
        <div className={style.text5}>
          <img src={mut6} />
          <h2>NTV EKRANINDA “REFİKƏDƏN TEZ RESEPTLER” BAŞLAYIR.</h2>
          <article>
           2 Mart Bazar ertəsi saat 19:30-da NTV-də “Refikədən Sürətli Reseptlər”
            ekranda başlayır.
          </article>
        </div>

        <div className={style.text5}>
          <img src={mut7} />
          <h2>JAMIE MAGAZINE TÜRKİYƏ SENTYABR SAYISININ QÜVVƏSİ OLDUQ</h2>
          <article>
         Jamie Magazine Turkey-in sentyabr sayındakı əncir məqaləmiz və
            Bizim şəklimiz üz qabığında idi.
          </article>
        </div>
        <div className={style.text5}>
          <img src={mut8} />
          <h2>SAAT 13.15-də DERYA BAYKAL İLƏ GÜLÜŞƏCƏM!</h2>
          <article>
            Bereketin, kudretin, güzelliğin, bonkörlüğün, estetiğin, heyecanın
            ve tutkunun bir meyvede birleşmiş hali nar ile.
          </article>
        </div>
        <div className={style.text5}>
          <img src={mut9} />
          <h2>REFİKƏNİN MƏTƏBXƏSİ SU KUTUSU MÜALİCƏ MAŞINLARINA ÜSTÜN VERİR.</h2>
          <article>
            Refika’nın Mutfağı’ı WATERBOX arıtma makineleri kullanıyor..
          </article>
        </div>
      </div>
      <div className={style.pagination}>
        <Link to="/page2">
          <Pagination defaultCurrent={1} total={20} />
        </Link>
      </div>
    </div>
  );
}

export default RefikaninMutfagi;
