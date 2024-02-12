'use client'
import React from 'react'
import { items, handles } from './data'
import Image from 'next/image'
import logo from '../../../public/auv1.png'
import { MapPinIcon } from "@heroicons/react/24/solid";


const Footer = () => {
  return (
    <div className='bg-black'>

      <footer className='footer-gradient h-full sm:h-[400px]'>

        <div className={`flex flex-col p-[10px] border-t-[1px] pt-[40px] sm:pb-[0px] sm:border-t-[0.5px] w-[98%] font-apple border-slate-700 mx-auto h-[100%]`}>


          <div className='flex flex-col sm:flex-row h-[100%] justify-center sm:justify-around items-center gap-[10vw]'>

            <div className='flex flex-col gap-6 justify-center items-center w-full sm:w-auto'>
              <Image src={logo} alt="logo" className='min-w-[70px] max-w-[120px] sm:w-[12vw]  lg:w-[12.5vw]' />
              <div className='flex flex-row text-white gap-1 w-full justify-center '>
                <MapPinIcon className="text-gray-300 w-[15px] h-[15px]" />
                <div className=' text-[13px] '>
                  Main Building,<br />
                  ZHCET,AMU,<br />
                  Aligarh,202002
                </div>
              </div>
            </div>


          <div className='flex flex-row gap-32 sm:gap-[15vw]'>

            <div className='flex flex-col flex-wrap h-[100%] items-center justify-center'>
              <div className='text-white text-[15px] sm:text-[18px] font-bold'>
                Explore
              </div>
              {items.map((footerLink, index) => (
                <a key={index} href={footerLink.link} target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-all duration-300 ease-in text-center  mt-[1px] sm:mt-[3px]'>
                  <span className='text-gray-400 text-[11px] sm:text-[13px] hover:text-blue-400 cursor-pointer '>
                    {footerLink.name}
                  </span>
                </a>
              ))}
            </div>

            <div className='flex flex-col flex-wrap h-[100%] items-center justify-center'>
              <div className='text-white text-[15px] sm:text-[18px] font-bold'>
                QuickLinks
              </div>
              {items.map((footerLink, index) => (
                <a key={index} href={footerLink.link} target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-all duration-300 ease-in text-center  mt-[1px] sm:mt-[3px]'>
                  <span className='text-gray-400 text-[11px] sm:text-[13px] hover:text-blue-400 cursor-pointer '>
                    {footerLink.name}
                  </span>
                </a>
              ))}
            </div>
          </div>


            <div className='flex flex-col justify-around items-center gap-10 font-poppins'>

              <div className='flex flex-col justify-center items-center gap-2 '>
                <div className='text-white text-[14px]'>
                  Follow Us
                </div>
                <div className='flex flex-row h-[100%] items-center justify-center'>
                  {handles.map((social, index) => (
                    <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                      <Image key={index} src={social.icon} alt={social.name} className={`${index !== handles.length - 1 ? "mr-5" : "mr-2"}  h-[18px] w-[18px] items-center hover:scale-110`} />
                    </a>
                  ))}
                </div>
              </div>

              <div className='flex flex-col items-center text-center justify-center text-white text-[12px] sm:text-[15px] gap-1'>
                <div>
                  Contact us
                </div>
                <div>
                  icon with number
                </div>
                <div>
                  icon email@gmail.com
                </div>
              </div>
            </div>
          </div>

        <div className=' flex border-t-[1px] border-slate-600 pt-[10px] mt-[20px] justify-center items-center md:flex-row flex-col'>
  <p className=' font-medium text-gray-500 text-[12px]'>
Developed by Priyanshu Singh 
  </p>
</div>  
        </div>
      </footer>
    </div>
  )
}

export default Footer