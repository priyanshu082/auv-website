'use client'

import Link from "next/link";
import { navBottom } from "./data";
import { motion } from "framer-motion";
import logo from './img/auv1.png'
import Image from "next/image";
import { fadeIn, slideIn, textVariant } from "../../utils/motion";
import { useRef, useState } from "react";
import Pop from "./Pop";

const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  const [active ,setActive]=useState("")

  const nav=useRef(null);



  return (
    <motion.div
      className="bg-black flex flex-row justify-between items-center pt-[20px]" >

      <Link 
      onClick={()=>setActive("HOME")}
      href="/" 
      className="w-4/12 flex justify-start">
        <motion.div 
        variants={textVariant(1)}
        className="font-bold font-secondary text-[28px]">
          MTS-AUV
          </motion.div>
      </Link>


      <motion.div className="hidden md:flex flex-row lg:w-7/12 md:w-8/12  justify-end ml-[100px] pt-[5px]">
        {navBottom.map((items, index) => (
          <Link
          onClick={()=>setActive(items.name)}
           href={items.link} key={index} 
           className={`${active===items.name ? "text-white scale-125" : "text-black"} button flex flex-col justify-normal items-center font-secondary text-[25px]` }>
            {items.name}
            <div className="transition-line"/>
          </Link>
        ))}
      </motion.div>

        <motion.div>
          <div onClick={()=>(setToggle(!toggle))}
          className={`md:hidden `}>
          <div className={`bar bar1 ${toggle ? 'change' : ''}`}></div>
          <div className={`bar bar2 ${toggle ? 'change' : ''}`}></div>
          <div className={`bar bar3 ${toggle ? 'change' : ''}`}></div>
          </div>
         <Pop
        toggle={toggle}
        setToggle={setToggle}/>
          </motion.div>
    </motion.div>
  )
}

export default Navbar