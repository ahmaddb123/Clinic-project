import Link from "next/link";
import React, { useRef } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faMobileScreen, faPhone } from "@fortawesome/free-solid-svg-icons";
interface NavProps {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const Nav: React.FC<NavProps> = ({ isActive, setIsActive }) => {
  const navRef = useRef<HTMLUListElement | null>(null);

  const close = () => {
    if (navRef.current && isActive) {
      navRef.current.classList.remove("active");
      setIsActive(false);
    }
  };

  return (
    <div className="">
      <ul ref={navRef} className={`nav ${isActive ? "active" : ""}`}>
        <li onClick={close}>
          <Link className="link" href={"/"}>
            الصفحة الرئيسية
          </Link>
        </li>
        <li onClick={close}>
          <Link className="link" href={"/Medical-services"}>
            الخدمات الطبية
          </Link>
        </li>
        <li onClick={close}>
          <Link className="link" href={"/Testimonials"}>
          التقييمات والشهادات
          </Link>
        </li>
        <li onClick={close}>
          <Link className="link" href={"/Article"}>
            مقالات طبية
          </Link>
        </li>
        <li onClick={close}>
          <Link className="link" href={"/Contact-us"}>
            إتصل بنا
          </Link>
        </li>
        <li className="location">
          العنوان : القاهرة العبور الحي الأول سنتر اللؤلؤة الدور الثالث
        </li>
        <li className="concat">
          تواصلوا معنا على الأرقام التالية :{" "}
          <span>
            <FontAwesomeIcon icon={faPhone} /> : 0244915141
          </span>{" "}
          <span>
            <FontAwesomeIcon icon={faMobileScreen} /> : 01207887859
          </span>
        </li>
        <li className="container-brand">
          <Link href={"https://www.facebook.com/drshamyclinic"}>
            <FontAwesomeIcon icon={faFacebook} className="brand Facebook" />
          </Link>
          <Link href={"https://www.tiktok.com/@dr_shamyclinic2020?_t=8qVCQUUhl4M&_r=1"}>
            <FontAwesomeIcon icon={faTiktok} className="brand Tiktok" />
          </Link>
          <Link href={"profile.php?id=61556084533982&mibextid=ZbWKwL"}>
            <FontAwesomeIcon icon={faInstagram} className="brand Instagram" />
          </Link>
          <Link href={"https://wa.me/201207887859"}>
            <FontAwesomeIcon icon={faWhatsapp} className="brand Whatsapp" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
