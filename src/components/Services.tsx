"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import {
  Bar,
  Borehole,
  Construct,
  Drawing,
  Estate,
  Export,
  Import,
  Piggery,
  Sales,
  Survey,
  Urban,
} from "./svgs";

const mover: { name: string; img: React.ReactNode }[] = [
  {
    name: "building drawings",
    img: <Drawing className=" w-20 h-20 fill-current text-primary" />,
  },
  {
    name: "Import of modern building materials",
    img: <Import className=" w-20 h-20 fill-current text-primary" />,
  },
  {
    name: "Export of modern building materials",
    img: <Export className=" w-20 h-20 fill-current text-primary" />,
  },
  {
    name: "building construction",
    img: <Construct className=" w-20 h-20 fill-current text-primary" />,
  },
  {
    name: "estate developer",
    img: <Estate className=" w-20 h-20 fill-current text-primary" />,
  },

  {
    name: "Land and geological survery",
    img: <Survey className=" w-20 h-20 fill-current text-primary" />,
  },
  {
    name: "Urban and Regional planning",
    img: <Urban className=" w-20 h-20 fill-current text-primary" />,
  },
  {
    name: "boreholes drilling and installation",
    img: <Borehole className=" w-20 h-20 fill-current text-primary" />,
  },
  {
    name: "sales of all kind of building materials",
    img: <Sales className=" w-20 h-20 fill-current text-primary" />,
  },
  {
    name: "piggery and agro",
    img: <Piggery className=" w-20 h-20 fill-current text-primary" />,
  },
  {
    name: "bar and restaurants",
    img: <Bar className=" w-20 h-20 fill-current text-primary" />,
  },
];

export default function Services() {
  return (
    <div className=" px-10 my-20">
      <p className=" text-center uppercase h1">Our Services</p>

      <div className="p-4 relative    max-w-xl w-full mx-auto overflow-x-hidden">
        {/* this is the left */}
        <div className="z-10 absolute top-0 left-0 h-full w-[13%] bg-gradient-to-r  from-white " />
        {/* this is the right */}
        <div className="z-10 absolute top-0 right-0 h-full w-[13%] bg-gradient-to-l  from-white " />

        <div />
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {[...mover, ...mover].map((info, index) => (
            <div
              key={index}
              className="  justify-center items-center flex flex-col  flex-shrink-0 gap-2  "
            >
              {info.img}
              <p className=" uppercase  max-w-[14ch] text-center break-words h6 m-0 ">
                {info.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
