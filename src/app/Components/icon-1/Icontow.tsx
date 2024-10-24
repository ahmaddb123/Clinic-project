import "./Icontow.css"
import Image from "next/image"
import React from 'react'

function Iconone() {
  return (
    <div className="Container-image-icon-1">
        <Image src={"/logo.png"} alt="" width={100} height={100} />
    </div>
  )
}

export default Iconone