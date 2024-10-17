import "./Icon.css"
import Image from "next/image"
import React from 'react'

function Icon() {
  return (
    <div className="Container-image-icon">
        <Image src={"/lungs.png"} alt="" width={200} height={200} />
    </div>
  )
}

export default Icon