'use client'

import Link from "next/link";
import { navBottom } from "./data";
import { motion } from "framer-motion";
import Image from "next/image";

import { useRef, useState } from "react";
import Pop from "./Pop";

const Navbar = () => {

  const [toggle, setToggle] =useState(false)
  const [active ,setActive]=useState("")

  const nav=useRef(null);



  return (
    <motion.div className="z-[9999] absolute w-full">

    <motion.div
    className={`hidden md:flex justify-center items-center font-poppins font-light text-[0.9vw] pb-[8px] pt-[13px] bg-zinc-800` } >

      <Link 
      onClick={()=>setActive("HOME")}
      href="/" 
      className="text-white">
         <Image src="/apple.svg" height={17} width={17}/>
      </Link>


        {navBottom.map((items, index) => (
          <Link
          onClick={()=>setActive(items.name)}
           href={items.link} key={index} 
           className={`${active===items.name ? "text-gray-200 scale-110" : "text-[#ffffffcc]"} ml-[4vw] flex items-center font-apple hover:text-white hover:scale-105 duration-300 ease-in` }>
            {items.name}
          </Link>
        ))}
    </motion.div>

         
          <Pop
        toggle={toggle}
        setToggle={setToggle}/>
        
    </motion.div>
  )
}

export default Navbar