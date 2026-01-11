"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Facebook, Instagram, Ticktok } from "./svgs";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const refnav = useRef<HTMLUListElement>(null);
  const [height, setHeight] = useState(56);

  useEffect(() => {
    if (toggle && refnav.current) {
      setHeight(refnav.current.offsetHeight + 72);
    } else {
      setHeight(56);
    }
  }, [toggle]);

  return (
    <nav aria-label="Main navigation">
      {/* ===== Top bar ===== */}
      <div className="flex bg-slate-200 items-center gap-4 py-4 px-2 w-full">
        {/* Logo / Brand (NO h1 in navbar) */}
        <Link href="/" className="flex bg-primary gap-4 items-center p-2">
          <div className="relative w-12 aspect-square">
            <Image
              alt="BenCo De Light Limited logo"
              src="/benlogo.png"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <span className="block  font-bold text-sm">
              BENCO DE LIGHT LIMITED
            </span>
            <span className="block text-xs uppercase tracking-wider text-white">
              God our Reinforcer
            </span>
          </div>
        </Link>

        {/* Social links */}
        <div className="ml-auto flex gap-6 pr-4">
          <Link
            href="https://vm.tiktok.com/ZSHKSV6kxBoW7-TBYlO/"
            target="_blank"
            aria-label="BenCo De Light on TikTok"
          >
            <Ticktok className="h-5 w-5 md:h-7 md:w-7 fill-current text-black" />
          </Link>

          <Link
            href="https://www.facebook.com/profile.php?id=100094464217223"
            target="_blank"
            aria-label="BenCo De Light on Facebook"
          >
            <Facebook className="h-5 w-5 md:h-7 md:w-7 fill-current text-black" />
          </Link>

          {/* Optional Instagram */}
          {/* 
          <Link
            href="https://instagram.com/yourpage"
            target="_blank"
            aria-label="BenCo De Light on Instagram"
          >
            <Instagram className="h-5 w-5 md:h-7 md:w-7 fill-current text-black" />
          </Link>
          */}
        </div>
      </div>

      {/* ===== Mobile menu ===== */}
      <motion.div
        style={{ height }}
        className="bg-primary px-3 py-3 transition-all duration-200 ease-in-out"
      >
        {/* Toggle button (NOT a div) */}
        <button
          onClick={() => setToggle(!toggle)}
          aria-expanded={toggle}
          aria-controls="primary-navigation"
          className="flex w-full items-center"
        >
          <span className="font-bold uppercase">RC-1783284</span>
          <span className="ml-auto">
            {toggle ? (
              <X className="h-8 w-8 text-white" />
            ) : (
              <Menu className="h-8 w-8 text-white" />
            )}
          </span>
        </button>

        <AnimatePresence>
          {toggle && (
            <motion.ul
              id="primary-navigation"
              ref={refnav}
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              className="mt-4 space-y-3"
            >
              <li>
                <Link
                  href="/"
                  onClick={() => setToggle(false)}
                  className="block p-2 rounded-md text-white font-semibold uppercase hover:bg-slate-300/20"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  onClick={() => setToggle(false)}
                  className="block p-2 rounded-md text-white font-semibold uppercase hover:bg-slate-300/20"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/projects"
                  onClick={() => setToggle(false)}
                  className="block p-2 rounded-md text-white font-semibold uppercase hover:bg-slate-300/20"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  onClick={() => setToggle(false)}
                  className="flex items-center gap-1 p-2 rounded-md text-white font-semibold uppercase hover:bg-slate-300/20"
                >
                  Services <ChevronDown />
                </Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}
