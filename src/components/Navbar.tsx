"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Facebook, Instagram } from "./svgs";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const refnav = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(50);

  useEffect(() => {
    if (toggle && refnav.current) {
      setHeight(refnav.current.offsetHeight + 60);
    } else {
      setHeight(50); // reset to default height
    }
  }, [toggle]);

  return (
    <nav id="home">
      <div className="  flex  bg-slate-200 items-center gap-4  py-4 px-2 w-full">
        <Link href={"/"} className=" flex gap-4  items-center  bg-primary p-2">
          <div className=" relative  bg-primary w-12 gap-3 aspect-square">
            <Image
              alt="logo"
              src={"/benlogo.png"}
              fill
              className=" object-cover object-top h-full w-full"
            />
          </div>
          <div>
            <h1 className=" m-0 text-center  h8">
              BENCO DE LIGHT CONSTRUCTION
            </h1>
            <h1 className=" m-0 h8  uppercase text-center text-white tracking-wider ">
              God our rienfocer
            </h1>
          </div>
        </Link>

        <div className=" flex pr-4 gap-10 ml-auto">
          <Link href={"#"}>
            <Instagram className=" fill-current md:w-8 md:h-8 h-4 w-4  text-black" />
          </Link>
          <Link href={"#"}>
            <Facebook className="fill-current   md:w-8 md:h-8 h-4 w-4 text-black" />
          </Link>
        </div>
      </div>

      <motion.div
        style={{
          height: height,
        }}
        className=" flex flex-col transition-all duration-150 ease-in-out   bg-primary py-3 px-3"
      >
        <div onClick={() => setToggle(!toggle)} className="   my-auto flex  ">
          <div>
            <h2 className=" font-bold p2 uppercase"> RC-1783284 </h2>
          </div>
          <div className="ml-auto">
            {toggle ? (
              <X className=" border h-8 w-8 text-white" />
            ) : (
              <Menu className=" border h-8 w-8 text-white" />
            )}
          </div>
        </div>

        <AnimatePresence key={"move"} mode="wait">
          {toggle && (
            <motion.div
              ref={refnav}
              layout
              initial={{
                y: "-100%",
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: "-100%",
                opacity: 0,
              }}
              className=" bg-primary p-4  flex flex-col mt-0 space-y-4 "
            >
              <Link
                href={"#home"}
                onClick={() => setToggle(false)}
                className=" hover:bg-slate-300/20 p-2 rounded-md duration-300 transition-all  text-white font-semibold p2 uppercase"
              >
                HOME
              </Link>
              <Link
                onClick={() => setToggle(false)}
                href={"#about"}
                className=" hover:bg-slate-300/20 p-2 rounded-md duration-300 transition-all  text-white font-semibold p2 uppercase"
              >
                ABOUT
              </Link>
              <Link
                onClick={() => setToggle(false)}
                href={"#featured"}
                className=" hover:bg-slate-300/20 p-2 rounded-md duration-300 transition-all  text-white font-semibold p2 uppercase"
              >
                PROJECTS
              </Link>
              <Link
                onClick={() => setToggle(false)}
                href={"#service"}
                className=" flex gap-1 hover:bg-slate-300/20 p-2 rounded-md duration-300 transition-all  text-white font-semibold p2 uppercase"
              >
                SERVICES <ChevronDown />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* links */}
      </motion.div>
    </nav>
  );
}
