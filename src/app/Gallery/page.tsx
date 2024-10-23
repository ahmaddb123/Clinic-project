"use client"
import React, { useState } from "react";
import "./Gallery.css";
import { galleryImages, galleryVideos } from "../data";
import Image from "next/image";
import Icontow from "../Components/icon-2/Icontow";
import { faFilm, faImage, faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Gallery() {
  const [show, setShow] = useState(true); // الحالة لتحديد ما إذا كانت الصور أو الفيديوهات مرئية

  return (
    <div className="Gallery">
      <Icontow />
      <div className="container mx-auto">
        <h1>معرض الصور والفيديوهات <FontAwesomeIcon icon={faPhotoFilm} /> :</h1>
        <p>
          مرحبًا بكم في معرض الصور والفيديوهات الخاص بنا! هنا يمكنكم استعراض مجموعة من الصور
          التي تعكس خدمات العيادة وبيئة العمل لدينا. تجدون أيضًا صور وفيديوهات من صفحة
          الفيسبوك الخاصة بنا، حيث نشارك لحظات مميزة من أحداثنا ومناسباتنا.
          نتطلع إلى خدمتكم دائمًا!
        </p>
<div className="option">
<h1 
          className={`title-gallery ${show ? 'active' : ''}`} 
          onClick={() => { setShow(true); }}
        >
          الصور <FontAwesomeIcon icon={faImage} /> 
        </h1>
        
        <h1 
          className={`title-gallery ${!show ? 'active' : ''}`} 
          onClick={() => { setShow(false); }}
        >
          الفيديوهات <FontAwesomeIcon icon={faFilm} /> 
        </h1>
</div>
        
        <div className="cont-imgs">
          {show && galleryImages.map((img) => (
            <div key={img.id} className="container-img-gallery">
              <Image src={`/${img.imageName}`} alt="" width={400} height={400} />
            </div>
          ))}
        </div>
        
        <div className="cont-ved">
          {!show && galleryVideos.map((ved) => (
            <div key={ved.id} className="container-ved-gallery">
              <video controls width={400} height={400} src={`/${ved.videoUrl}`} />
            </div>
          ))}
        </div>
     
      </div>
    </div>
  );
}

export default Gallery;
