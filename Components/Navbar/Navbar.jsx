'use client'

import Link from "next/link";
import { navBottom } from "./data";
import { motion } from "framer-motion";
import logo from './img/auv1.png'
import Image from "next/image";

import { useRef, useState } from "react";
import Pop from "./Pop";

const Navbar = () => {

  const [toggle, setToggle] =useState(false)
  const [active ,setActive]=useState("")

  const nav=useRef(null);



  return (
    <motion.div
      className="bg-black flex flex-row justify-between items-center pt-[20px]" >

      <Link 
      onClick={()=>setActive("HOME")}
      href="/" 
      className="w-4/12 flex justify-start">
          <Image src={logo} height={80} width={80}/>
      </Link>


      <motion.div className="hidden md:flex flex-row lg:w-7/12 md:w-8/12  justify-end ml-[100px] pt-[5px]">
        {navBottom.map((items, index) => (
          <Link
          onClick={()=>setActive(items.name)}
           href={items.link} key={index} 
           className={`${active===items.name ? "text-gray-300 scale-110" : "gradient-text"} button flex flex-col justify-normal items-center font-poppins font-bold text-[22px] hover:scale-110` }>
            {items.name}
            {/* <div className="transition-line"/> */}
          </Link>
        ))}
      </motion.div>

        {/* <motion.div>
          <div onClick={()=>(setToggle(!toggle))}
          className={`md:hidden `}>
          <div className={`bar bar1 ${toggle ? 'change' : ''}`}></div>
          <div className={`bar bar2 ${toggle ? 'change' : ''}`}></div>
          <div className={`bar bar3 ${toggle ? 'change' : ''}`}></div>
          </div>
          <Pop
        toggle={toggle}
        setToggle={setToggle}/>
          </motion.div> */}
    </motion.div>
  )
}

export default Navbar