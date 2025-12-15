import { Book, House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function About() {
  return (
    <div className=" px-3 py-5 mt-8  gap-10 grid grid-cols-1 max-w-screen-lg w-full mx-auto md:grid-cols-2">
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
        <h1 className=" h1  text-center font-bold mb-10 "> About Us </h1>

        <p className=" line-clamp-4   p2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi illum
          dolor atque natus dolore? Temporibus vel veniam accusamus eligendi non
          architecto eos voluptates. Praesentium natus delectus eius consequatur
          recusandae optio illum commodi possimus ad quo! Est adipisci tempora
          repellendus, suscipit quibusdam aliquam dignissimos ipsa possimus!
          Alias officia ipsum libero quas!
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
