"use client";
import React, { useState } from "react";
import { ChevronDown, Facebook, InstagramIcon, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <div className="  flex  bg-slate-200 items-center  py-4 px-2 w-full">
        <div className=" bg-primary p-2">
          <div className=" relative  bg-primary w-12 gap-3 aspect-square">
            <Image
              alt="logo"
              src={"/logo.png"}
              fill
              className=" object-cover object-top h-full w-full"
            />
          </div>
        </div>

        <div className=" flex gap-2 ml-auto">
          <InstagramIcon />
          <Facebook />
        </div>
      </div>

      <motion.div className=" flex flex-col   bg-primary py-3 px-3">
        <div onClick={() => setToggle(!toggle)} className="   my-auto flex  ">
          <div className="ml-auto">
            {toggle ? (
              <X className=" border h-8 w-8 text-white" />
            ) : (
              <Menu className=" border h-8 w-8 text-white" />
            )}
          </div>
        </div>

        {/* links */}
      </motion.div>
      <AnimatePresence key={"move"} mode="wait">
        {toggle && (
          <motion.div
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
              href={"#"}
              className=" hover:bg-slate-300/20 p-2 rounded-md duration-300 transition-all  text-white font-semibold p2 uppercase"
            >
              HOME
            </Link>
            <Link
              href={"#"}
              className=" hover:bg-slate-300/20 p-2 rounded-md duration-300 transition-all  text-white font-semibold p2 uppercase"
            >
              ABOUT
            </Link>
            <Link
              href={"#"}
              className=" flex gap-1 hover:bg-slate-300/20 p-2 rounded-md duration-300 transition-all  text-white font-semibold p2 uppercase"
            >
              SERVICES <ChevronDown />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
