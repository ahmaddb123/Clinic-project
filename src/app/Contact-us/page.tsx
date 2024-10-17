import Image from "next/image";
import "./Contactus.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faGlobe,
  faLocationDot,
  faMobileScreen,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Icontow from "../Components/icon-2/Icontow";

function ContactUs() {
  return (
    <div className="Contactus">
      <Icontow/>
      <div className="container mx-auto">
        <div className="container-contact-img">
          <Image
            src={"/dr-1.jpg"}
            alt=""
            width={250}
            height={250}
            className="img-contact"
          />
          <h1>تواصلوا معنا</h1>
          <p>
            نحن هنا للإجابة على جميع استفساراتك وتقديم الدعم الذي تحتاجه. سواء
            كان لديك سؤال حول خدماتنا أو ترغب في معرفة المزيد عن عروضنا، لا
            تتردد في التواصل معنا عبر الطرق المتاحة أدناه. فريقنا متواجد
            لمساعدتك والرد على استفساراتك في أسرع وقت ممكن.
          </p>
        </div>
        <div className="container-text-contact">
          <div className="card-contact number">
            <h1>
              <FontAwesomeIcon icon={faPhone} />
            </h1>
            <h4>تواصلوا معنا على الأرقام التالية :</h4>
            <span>
              <FontAwesomeIcon icon={faPhone} /> : 0244915141
            </span>{" "}
            <span>
              <FontAwesomeIcon icon={faMobileScreen} /> : 01207887859
            </span>
          </div>
          <div className="card-contact gmail">
            <h1>
              <FontAwesomeIcon icon={faEnvelope} />
            </h1>
            <h4>البريد الألكتروني :</h4>
            <span>drshamyclinic@gmail.com</span>
          </div>
          <div className="card-contact address">
            <h1>
              <FontAwesomeIcon icon={faLocationDot} />
            </h1>
            <h4>عنوان العيادة :</h4>
            <p>
              مصر - القاهرة - مدينة العبور - الحي الأول - سنتر لؤلؤة العبور -
              الدور الثالث
            </p>
            <Link
              href={
                "https://www.google.com/maps/place/Street+3,+العبور،+محافظة+القليوبية%E2%80%AD/@30.1763142,31.4634651,17z/data=!3m1!4b1!4m6!3m5!1s0x14581a61506c2373:0x288acb12a2219669!8m2!3d30.1763142!4d31.4634651!16s%2Fg%2F11b6ydbx7s?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
              }
            >
              <FontAwesomeIcon icon={faLocationDot} /> الموقع
            </Link>
          </div>
          <div className="card-contact media">
            <h1>
              <FontAwesomeIcon icon={faGlobe} />
            </h1>
            <h4> تابعوا كل جديد في حساباتنا على وسائل التواصل الأجتماعي : </h4>
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
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="brand Instagram"
                />
              </Link>
              <Link href={"https://wa.me/201207887859"}>
                <FontAwesomeIcon icon={faWhatsapp} className="brand Whatsapp" />
              </Link>
            </div>
          </div>
          <div className="card-contact hours">
            <h1>
              <FontAwesomeIcon icon={faClock} />
            </h1>
            <h4>ساعات العمل :</h4>
            <p>من الساعة 6:00pm وحتى الساعة 10:00pm</p>
            <p>الخميس والجمعة مقفل</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
