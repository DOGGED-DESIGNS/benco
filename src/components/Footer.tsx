"use client";
import React from "react";
import { Facebook, Ticktok, Whatsapp } from "./svgs";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col px-5 pt-10 pb-12 bg-primary border-t border-slate-600">
      {/* Social Media Links */}
      <div className="mx-auto mb-8 flex gap-5">
        <Link
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100094464217223"
          aria-label="Facebook"
          className="group p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-[#1877F2]"
        >
          <Facebook className="fill-current h-5 w-5 group-hover:text-white transition-all duration-300 ease-in-out" />
        </Link>

        <Link
          href="https://wa.me/2349036670283"
          target="_blank"
          aria-label="WhatsApp"
          className="group p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-[#25D366]"
        >
          <Whatsapp className="fill-current h-5 w-5 group-hover:text-white transition-all duration-300 ease-in-out" />
        </Link>

        <Link
          target="_blank"
          href="https://vm.tiktok.com/ZSHKSV6kxBoW7-TBYlO/"
          aria-label="TikTok"
          className="group p-2 rounded-full transition-all duration-300 ease-in-out bg-gradient-to-r hover:from-[#25F4EE] hover:via-black hover:to-[#FF0050]"
        >
          <Ticktok className="fill-current h-5 w-5 group-hover:text-white transition-all duration-300 ease-in-out" />
        </Link>
      </div>

      {/* Footer Navigation Links */}
      <nav
        aria-label="Footer Navigation"
        className="mt-5 flex flex-wrap justify-center gap-5"
      >
        <Link href="#home" className="h6 uppercase">
          HOME
        </Link>
        <Link href="#about" className="h6 uppercase">
          ABOUT US
        </Link>
        <Link href="#contact" className="h6 uppercase">
          CONTACT US
        </Link>
        <Link href="#featured" className="h6 uppercase">
          FEATURED PROJECTS
        </Link>
      </nav>

      {/* Divider */}
      <div className="max-w-screen-xl mx-auto w-full h-px mt-3 bg-slate-500" />

      {/* Company Info */}
      <div className="mt-8 w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="h8 uppercase font-extrabold">
          &copy; 2025 All Rights Reserved
        </p>
        <p className="mx-auto text-center max-w-[50ch] line-clamp-2 h6 font-light">
          No. 1 Ogoja Road, Abakaliki, Edward Nkwegu Close, near Anglican
          Cathedral, Abakaliki
        </p>

        <div className="flex items-center gap-4">
          <div className="relative bg-primary w-12 aspect-square">
            <Image
              alt="BENCO DE LIGHT LIMITED Logo"
              src="/benlogo.png"
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <h2 className="m-0 font-semibold p2">BENCO DE LIGHT LIMITED</h2>
            <p className="p2 font-bold">RC-1783284</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
