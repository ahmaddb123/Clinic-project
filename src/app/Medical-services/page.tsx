import React from "react";
import "./Medical-services.css";
import Image from "next/image";
import { medicalServices } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import Icontow from "../Components/icon-2/Icontow";
import Iconone from "../Components/icon-1/Icontow";
function MedicalServices() {
  return (
    <div className="services">
      <Icontow/>
      <div className="container mx-auto">
        <h1>الخدمات الطبية المقدمة في العيادة <FontAwesomeIcon icon={faUserDoctor} />  : </h1>
        <p>
          تقدم العيادة مجموعة شاملة من الخدمات الطبية المتخصصة التي تهدف إلى
          تلبية احتياجات المرضى من مختلف الأعمار. تشمل خدمات العيادة تشخيص وعلاج
          أمراض الجهاز التنفسي وحساسية الصدر والامراض الباطنية، بالإضافة إلى تقديم الرعاية للمرضى
          الذين يعانون من أمراض مزمنة وحالات حرجة. يعتمد الطبيب على أحدث
          التقنيات الطبية ويقدم خطط علاجية مخصصة لكل مريض، لضمان الحصول على أفضل
          رعاية صحية ممكنة وتحسين نوعية حياة المرضى ومتابعتهم حتى الشفاء , يقوم الطبيب بعلاج الحالات التالية : 
        </p>
        <ul>
          {medicalServices.map((data, index) => (
            <li className="" key={index}>
              <div className="text-serv">
              <h4>{data.title} :</h4>
              <p>{data.description}</p>
              </div>
              <div className="cont-img">
               <Iconone/>
              <Image
                src={`/${data.imageUrl}`}
                alt=""
                width={300}
                height={300}
                className="img-serv"
              />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MedicalServices;
