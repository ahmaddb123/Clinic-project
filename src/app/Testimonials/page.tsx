import React from "react";
import "./Testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { testimonials } from "../data";
import Image from "next/image";

function Testimonials() {
  return (
    <div className="Testimonials">
      <div className="container mx-auto">
        <h1>
          التقييمات والشهادات <FontAwesomeIcon icon={faUserDoctor} /> :
        </h1>
        <p className="desc">
          نحن نعتز بتقديم أفضل مستوى من الرعاية الطبية لمرضانا، ونسعى دائمًا
          لتحقيق أعلى معايير الجودة في التشخيص والعلاج. في هذا القسم، نشارك معكم
          بعضًا من تجارب المرضى الذين وثقوا بنا وشاركوا آرائهم حول خدماتنا.
          تفضلوا بقراءة شهاداتهم لتتعرفوا على مستوى الخدمة والاهتمام الذي نقدمه
          لكل مريض.
        </p>
        {testimonials.map((data, index) => (
          <div className="card" key={index}>
            <div className="text-testimonials">
            <h4>{data.name} :</h4>
            <p>{data.feedback}</p>
            </div>
            <Image src={`/${data.imageUrl}`} alt="" width={200} height={200} className="img-test" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
