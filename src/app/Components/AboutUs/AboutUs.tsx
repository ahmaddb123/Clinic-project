import Image from "next/image";
import React from "react";
import "./about.css"
import { faLungsVirus, faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icontow from "../icon-2/Icontow";

function AboutUs() {
  return (
    <div className="about-us">
      <Icontow/>
      <div className="container mx-auto flex items-center justify-center">
        <div className="container-image">
          <Image src={"/dr-6 (1).jpg"} alt="" width={600} height={600} className="img" />
        </div>
        <div className="container-about">
          <h1 className="">نبذة عن الدكتور <FontAwesomeIcon icon={faLungsVirus} /> : </h1>
          <h3>الدكتور عبد السلام الشامي <FontAwesomeIcon icon={faStethoscope} /></h3>
          <ul>
            <li>
              حاصل على درجة الدكتوراة في أمراض الصدر والجهاز التنفسي وحاصل على
              زمالة كلية أطباء الصدر الأمريكية
            </li>
            <li>خبرة تصل لأكثر من 40 عاماً في مجال الأمراض الباطنية وأمراض الجهاز التنفسي وحساسية الصدر </li>
            <li> يختص في معالجة الأمراض المتعلقة في الجهاز التنفسي وحساسية الصدر وضيق التنفس والسدة الرئوية وكافة الأمراض التي تصيب الجهاز التنفسي, إلى جانب ذلك، يعالج الأمراض الباطنية. </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
