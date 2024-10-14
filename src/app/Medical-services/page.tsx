import React from "react";
import "./Medical-services.css";
import Image from "next/image";
import { medicalServices } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";
function MedicalServices() {
  return (
    <div className="services">
      <div className="container mx-auto">
        <h1>الخدمات الطبية المقدمة في العيادة <FontAwesomeIcon icon={faUserDoctor} />  : </h1>
        <p>
          تقدم العيادة مجموعة شاملة من الخدمات الطبية المتخصصة التي تهدف إلى
          تلبية احتياجات المرضى من مختلف الأعمار. تشمل خدمات العيادة تشخيص وعلاج
          أمراض الجهاز الهضمي والجهاز التنفسي، بالإضافة إلى تقديم الرعاية للمرضى
          الذين يعانون من أمراض مزمنة وحالات حرجة. يعتمد الطبيب على أحدث
          التقنيات الطبية ويقدم خطط علاجية مخصصة لكل مريض، لضمان الحصول على أفضل
          رعاية صحية ممكنة.
        </p>
        <ul>
          {medicalServices.map((data, index) => (
            <li className="" key={index}>
              <div className="text-serv">
              <h4>{data.title} :</h4>
              <p>{data.description}</p>
              </div>
              <Image
                src={`/${data.imageUrl}`}
                alt=""
                width={300}
                height={300}
                className="img-serv"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MedicalServices;
