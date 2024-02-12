'use client'
import React from 'react'
import { items,handles } from './data'
import Image from 'next/image'
import logo from '../../../public/auv1.png'

const Footer = () => {
  return (
    <footer className='footer-gradient h-[200px] sm:h-[300px] md:h-[400px]'>

    <div className={`flex flex-col p-[10px] border-t-[0.5px] w-[98%] font-apple border-slate-500 mx-auto h-[100%]`}> 


    <div className='flex flex-row h-[100%]'>
<div className='flex justify-center items-center'>

    <Image src={logo} alt="logo" className='min-w-[70px] max-w-[120px] sm:w-[12vw] w-[15vw] lg:w-[12.5vw] ml-[10vw]'/>
</div>

  <div className='flex flex-col flex-wrap pt-[10px] h-[70%] ml-[0vw]'>
          {items.map((footerLink,index) => (
            <a key={index} href={footerLink.link} target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-all duration-300 ease-in text-center mx-[2vw] mt-[20%]'>
              <span className='text-primary text-[5%] md:text-[1vw] hover:text-white cursor-pointer '>  
                {footerLink.name}
              </span>
            </a>
          ))}
        </div>

        <div className='flex flex-row ml-[25vw]'>
  {handles.map((social,index)=>(
  <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
  <Image key={index} src={social.icon} alt={social.name} className={`${index !== handles.length-1 ? "mr-6" : "mr-2"} h-[20px] w-[20px] lg:h-[25px] lg:w-[25px] items-center`}/>
  </a>
))}
  </div> 
      </div>
     
<div className=' flex justify-center items-center md:flex-row flex-col pt-6'>
  <p className=' font-medium  text-white'>
  @priyanshu_singh
  </p>
</div> 
    </div>
    </footer>
  )
}

export default Footer