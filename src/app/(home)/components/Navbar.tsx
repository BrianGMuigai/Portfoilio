import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Navbar = ({className}:{className?:string}) => {
    const socials =[
        {
            Link:"https://www.linkedin.com/in/brian-muigai",
            Label:"Linkedin",
            Icon:FaLinkedin 
        },
        {
            Link:"https://www.github.com/BrianGMuigai",
            Label:"Github",
            Icon:IoLogoGithub,
        },
        {
            Link:"https://www.x.com/Brian_G_Muigai",
            Label:"Twitter",
            Icon:FaXTwitter,
        },
    ];

  return (
    <nav className ={cn("py-10 flex justify-between items-center animate-move-down", className)}>
       
       <h1 className= "text-3xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2"> Brian Muigai  👨🏻‍💻</h1>
      
      <div className= "flex items-center gap-5">
        {socials.map((social,index)=>{
         
         const Icon = social.Icon
         return (<Link href = {social.Link} key ={index} aria-label ={social.Label}>
            <Icon className ="w-6 h-6 hover:scale-125 transition-all"/>
            </Link>
            );
         })}
      </div>
    </nav>
  )
}

export default Navbar
