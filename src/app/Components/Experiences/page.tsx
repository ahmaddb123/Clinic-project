import React from 'react'
import "./Experiences.css"
import Image from 'next/image'
import { doctorExperiences } from '@/app/data'

function Experiences() {
  return (
    <div className='Experiences'>
      <div className='container mx-auto'>
        <div className='container-img-experiences'>
          <Image src={"/dr-4.jpg"} alt='' width={450} height={450} className='img-experiences'/>
        </div>
        <div className='Experiences-info'>
          <ul>
          <h1>خبرات الدكتور عبد السلام الشامي</h1 >
            {doctorExperiences.map(data => (
              <li key={data.id}>
                <h2>{data.id}- {data.title}</h2>
                <p>{data.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experiences