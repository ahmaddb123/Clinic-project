import React from "react";
import "./footer.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faMobileScreen, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="container-img-footer">
        <Image
          src={"/logo.png"}
          alt=""
          width={100}
          height={100}
          className="img-footer"
        />
        <h1>الأستاذ الدكتور عبد السلام الشامي</h1>
      </div>
      <div className="container mx-auto">
        <div className=" card-footer footer-number">
          <div className="card-contact number">
            <h4>تواصلوا معنا على الأرقام التالية :</h4>
            <span>
              <FontAwesomeIcon icon={faPhone} /> : 0244915141
            </span>
            <span>
              <FontAwesomeIcon icon={faMobileScreen} /> : 01207887859
            </span>
          </div>
        </div>
        <div className=" card-footer footer-address">
          <h4>عنوان العيادة :</h4>
          <p>
            مصر - القاهرة - مدينة العبور - الحي الأول - سنتر لؤلؤة العبور -
            الدور الثالث
          </p>
        </div>
        <div className=" card-footer footer-media">
          <h1>تواصلوا معنا :</h1>
          <div className="container-brand-contact ">
            <Link href={"https://www.facebook.com/drshamyclinic"}>
              <FontAwesomeIcon icon={faFacebook} className="brand Facebook" />
            </Link>
            <Link
              href={
                "https://www.tiktok.com/@dr_shamyclinic2020?_t=8qVCQUUhl4M&_r=1"
              }
            >
              <FontAwesomeIcon icon={faTiktok} className="brand Tiktok" />
            </Link>
            <Link href={"https://www.instagram.com/dr_shamy2020/"}>
              <FontAwesomeIcon icon={faInstagram} className="brand Instagram" />
            </Link>
            <Link href={"https://wa.me/201207887859"}>
              <FontAwesomeIcon icon={faWhatsapp} className="brand Whatsapp" />
            </Link>
          </div>
        </div>
      </div>
      <p className="created">Created by Ahmed Dyab</p>
    </div>
  );
}
