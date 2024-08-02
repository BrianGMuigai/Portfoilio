import Link from "next/link";
import React from "react";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaNodeJs, FaReact } from "react-icons/fa6";
import { SiSpringboot, SiTailwindcss } from "react-icons/si";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Projects() {
    const projects =[
        {
            title: "Banking System",
            tech:[ FaReact,SiTailwindcss,SiSpringboot,AiOutlineConsoleSql],
            Link:"https://banking-app-kappa-sage.vercel.app/",
            cover:"/BankingApp.png",
            background:"bg-indigo-500"
        },
        {
            title: "Personal Porfolio",
            tech:[ FaReact,SiTailwindcss,FaNodeJs,AiOutlineConsoleSql],
            Link:"https://localhost:3000",
            cover:"/pic1.png",
            background:"bg-green-500"
        },
        {
            title: "Real Estate App",
            tech:[ FaReact,SiTailwindcss,SiSpringboot,AiOutlineConsoleSql],
            Link:"https://localhost:3000",
            cover:"/pic1.png",
            background:"bg-indigo-500"
        },
        {
            title: "School Library App",
            tech:[ FaReact,SiTailwindcss,FaNodeJs,AiOutlineConsoleSql],
            Link:"https://localhost:3000",
            cover:"/pic2.png",
            background:"bg-green-500"
        },
        {
            title: "Eccommerce App",
            tech:[ FaReact,SiTailwindcss,SiSpringboot,AiOutlineConsoleSql],
            Link:"https://localhost:3000",
            cover:"/pic1.png",
            background:"bg-indigo-500"
        },
        {
            title: "Car Rental System",
            tech:[ FaReact,SiTailwindcss,FaNodeJs,AiOutlineConsoleSql],
            Link:"https://localhost:3000",
            cover:"/pic2.png",
            background:"bg-green-500"
        },

    ]
  return <div className =" py-10 p-5 sm:p-0">
      <Title
     text="Projects 🎨" className =" flex flex-col items-center justify-center rotate-6 " />  
     <div className = "grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project,index)=>{
            return (
                <Link href = {project.Link} key={index}>
                    <div className = {cn( "p-5 rounded-md" ,project.background)}>
                          <DirectionAwareHover
                            imageUrl={project.cover}
                            className ="w-full space-5 cursor-pointer"
                            >
                                <div className = "space-y-5">
                            <h1  className= "text-2xl font-bold">{project.title}</h1>
                            <div className = "flex items-center gap-5">
                                {project.tech.map((Icon, index)=>{
                                    return(
                                        <Icon className="w-8 h-8" key ={index}/>
                                    );
                                })}
                            </div>
                             </div>
                          </DirectionAwareHover>
                    </div>
                </Link>
            );
        })}

     </div>
       
    </div>
}
