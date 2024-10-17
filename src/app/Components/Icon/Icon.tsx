import "./Icon.css"
import Image from "next/image"
import React from 'react'

function Icon() {
  return (
    <div className="Container-image-icon">
        <Image src={"/lungs.png"} alt="" width={100} height={100} />
    </div>
  )
}

export default Icon