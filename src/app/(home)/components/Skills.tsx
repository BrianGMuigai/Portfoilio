"use client";

import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si"
import { SiSpringboot } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPython } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { AiOutlineConsoleSql } from "react-icons/ai";


const Skills = () => {
    const skills=[
        {
         text:"React",
         Icon:FaReact ,
        },
        {
          text:"Next.js",
          Icon: SiNextdotjs,
         },
         {
          text:"Tailwind",
          Icon:SiTailwindcss,
         },
         {
          text:"Springboot",
          Icon: SiSpringboot, 
         },
         {
          text:"SQL",
          Icon:AiOutlineConsoleSql,
         }, 
         {
          text:"Node.js",
          Icon:FaNodeJs,
         },
         {
          text:"JavaScript",
          Icon:IoLogoJavascript,
         },
         {
          text:"Java",
          Icon:FaJava,
         },
         {
          text:"Python",
          Icon:SiPython,
         }, 
                   
      ];
  return (
    <div className =" max-w-5xl max-auto px-8">
  <Title
     text="Skills 🔪" className =" flex flex-col items-center justify-center -rotate-6 " />  
         <HoverEffect items={skills}/>
    </div>

  );
}

export default Skills
