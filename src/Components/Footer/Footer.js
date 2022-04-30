import React from "react";
import style from "../../Components/Footer/Footer.module.css";
import logo from "../Img/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { GrYoutube } from "react-icons/gr";
function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.img}>
        <img src={logo} />
      </div>
      <div className={style.text1}>
        <h1>Müştəri Xidmətləri</h1>
        <p>Telefon: +90 (216) 310 10 11</p>
        <p>E-posta: info@refikadan.com</p>
      </div>
      <div className={style.text2}>
        <h1>Ünsiyyət</h1>
        <p>
          Adres:Türk Mətbəxi İcadiye cad. Bican Efendi sok. No.10 Simotas
          Binası Kuzguncuk
        </p>
      </div>
      <div className={style.icons}>
        <a
          target="_blank"
          type="fb"
          href="https://www.facebook.com/refikaninmutfagi"
        >
          <FaFacebookF />
        </a>
        <a target="_blank" type="twt" href="https://twitter.com/refikabirgul">
          <AiOutlineTwitter />
        </a>
        <a
          target="_blank"
          type="ins"
          href="https://www.instagram.com/refikabirgul/"
        >
          <AiFillInstagram />
        </a>
        <a
          target="_blank"
          type="you"
          href="https://www.youtube.com/refikaninmutfagi"
        >
          <GrYoutube />
        </a>
        <p>2021 Refikaninmutfagi.com. Tüm Hakları saklıdır.</p>
        <h1>E-Bültenimize Üye Ol</h1>
        <input placeholder="Eposta adresiniz.." />
        <button>Gönder</button>
      </div>
    </div>
  );
}

export default Footer;
