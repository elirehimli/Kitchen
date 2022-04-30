import React from "react";
import mut10 from "../../Components/Img/mut10.jpg";
import mut11 from "../../Components/Img/mut11.jpg";
import mut12 from "../../Components/Img/mut12.jpg";
import mut13 from "../../Components/Img/mut13.jpg";
import mut14 from "../../Components/Img/mut14.jpg";
import mut15 from "../../Components/Img/mut15.jpg";
import mut16 from "../../Components/Img/mut16.jpg";
import mut17 from "../../Components/Img/mut17.jpg";
import mut18 from "../../Components/Img/mut18.jpg";
import style from "../../Components/Page2/Page2.module.css";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Pagination } from "antd";
function Page2() {
  return (
    <div className={style.mutfag}>
      <div className={style.head}>
        <h1>MƏTBƏX</h1>
      </div>
      <div className={style.display}>
        <div className={style.text5}>
          <img src={mut10} />
          <h2>RADİKAL HƏYAT – ​​30 ŞEF 30 MENU</h2>
          <article>
          Radikal oxucuları üçün Refikadan Ramazan menyusu təklifi; soyuq badam
            şorba, tahinli və mantılı küftə, saqqızlı kadayıf...
          </article>
        </div>
        <div className={style.text5}>
          <img src={mut11} />
          <h2>JURNALI – TÜLİN KILIÇ, MƏSUDE ÇAKIR</h2>
          <article>“Mən həmişə sevməkdən daha çox həzz almışam. Yemək bişirmək də bu sevgini sevir.
            əslində nümayiş etdirmə vəziyyətinin sadə təcəssümüdür”...
          </article>
        </div>
        <div className={style.text5}>
          <img src={mut16} />
          <h2>TRT TELEVISION MAGAZINE – ELA GÜRMAN TEKIN</h2>
          <article>
          Türkiyə mənim yeməklərimdə çuqunda bişmiş əncirli ətdir.
            oxşayır. Lakin hələ tam bişməyib.
          </article>
        </div>

        <div className={style.text5}>
          <img src={mut13} />
          <h2>ANALAR GÜNÜ Səhər yeməyi!</h2>
          <article>
          Ananızı təəccübləndirmək üçün! Müxtəlif yerli pendirlər
            Həm gözə həm damağa xitab edən pendir qabı hazırlamaq üçün istifadə edin
            mümkün...
          </article>
        </div>
        <div className={style.text5}>
          <img src={mut14} />
          <h2>CO. TƏZİQ ALTINDA FƏRQLİDİR!</h2>
          <article>
          Kimimiz fitin çalacağından qorxduq, kimimiz dedi ki,
            bişmiş yeməklər. Mənim belə vaxtım var
          </article>
        </div>
        <div className={style.text5}>
          <img src={mut15} />
          <h2>MİLLİYET CADDE – SENEM AYDIN</h2>
          <article>
          “Bəzən küçədə gedərkən ətrafımdakı qoxuya görə olur.
            mənzərədən ilham alır.
          </article>
        </div>

        <div className={style.text5}>
          <img src={mut16} />
          <h2>NAR GOURMET MÜSAHİBƏSİ</h2>
          <article>
           Jamie Magazine Turkey-in sentyabr sayındakı əncir məqaləmiz və
            Bizim şəklimiz üz qabığında idi.
          </article>
        </div>
        <div className={style.text5}>
          <img src={mut17} />
          <h2>14-17 MART ARÇELİK REFIKA!</h2>
          <article>
          Bolluğunuz, gücünüz, gözəlliyiniz, səxavətiniz, estetikanız, həyəcanınız
            və nar ilə meyvədə ehtirasın birləşməsi.
          </article>
        </div>
        <div className={style.text5}>
          <img src={mut18} />
          <h2>CNN TURK – BURADA ÇOX LAF</h2>
          <article>
           Mesut Yar'a Laf Çok verilişinin 26.03.2012-ci il buraxılışında
            Tolga Karel, Fatih Altın, Aslı Tandoğan v
          </article>
        </div>
      </div>
      <div className={style.pagination}>
        <Link to="/refikaninmutfagi">
          <Pagination defaultCurrent={2} total={20} />
        </Link>
      </div>
    </div>
  );
}

export default Page2;
