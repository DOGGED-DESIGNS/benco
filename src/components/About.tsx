import { Book, House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function About() {
  return (
    <div className=" px-3 py-5 my-20  m gap-10 grid grid-cols-1 max-w-screen-lg w-full mx-auto md:grid-cols-2">
      <div>
        <div className=" relative w-full  overflow-hidden  aspect-video ">
          <Image
            alt="img"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-cover object-top"
            src={"/aboutpagejojo.png"}
          />
          <div className="absolute bg-primary h-5 left-0 top-0 w-[20%]" />
        </div>
      </div>

      <div className=" self-center">
        <h1 className=" h1 uppercase text-center font-bold mb-10 ">
          {" "}
          About Us{" "}
        </h1>

        <p className=" line-clamp-4   p2">
          Ben Co-De Light Limited is built on quality, trust, and dependable
          service delivery. We operate across construction, agriculture,
          hospitality, land surveying, and export, bringing excellence to every
          sector we serve. Our focus is simple: deliver real value, build
          lasting relationships, and grow sustainably.
        </p>

        <Link href={"/about"} className=" flex mt-10  ">
          <Button
            variant={"outline"}
            size={"lg"}
            className=" mx-auto border-primary text-primary p2 font-bold rounded-none"
          >
            {" "}
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
}
