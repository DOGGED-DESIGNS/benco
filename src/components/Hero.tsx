"use client";
import React, { useEffect, useState } from "react";
import { data } from "@/constants/data";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function Hero() {
  const [peopleindex, setPeopleindex] = useState(0);
  useEffect(() => {
    if (peopleindex < 0) {
      setPeopleindex(data.length - 1);
    }

    if (peopleindex > data.length - 1) {
      setPeopleindex(0);
    }
  }, [peopleindex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPeopleindex(peopleindex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [peopleindex]);

  return (
    <div className="after:contents-[''] overflow-hidden after:absolute after:inset-0 z-10 after:bg-slate-700/40 min-h-96 relative">
      {data.map((im, index) => {
        let mover = " translate-x-full";

        if (index === peopleindex) {
          mover = " translate-x-0  ";
        }

        if (
          index === peopleindex - 1 ||
          (peopleindex === 0 && index == data.length - 1)
        ) {
          mover = " -translate-x-full ";
        }

        return (
          <>
            <div
              className={cn(
                "    transition-all  ease-in-out duration-300  absolute inset-0",
                mover
              )}
            >
              <div className=" h-full overflow-hidden relative  w-full  ">
                <Image
                  alt="bgimage"
                  src={im.img}
                  fill
                  className=" object-cover object-center w-full h-auto"
                  sizes="100vw"
                />
              </div>
            </div>
          </>
        );
      })}

      {/* this is the description and the buttons */}

      <div className="   overflow-hidden  justify-center  flex flex-col bottom-3 top-3 md:left-32 md:right-32  left-16 right-16  z-20 absolute">
        <div>
          <AnimatePresence mode="wait">
            <motion.p
              transition={{
                delay: 0.1,
                duration: 0.3,
                type: "spring",
              }}
              initial={{
                opacity: 0,
                x: "-100%",
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: "100%",
              }}
              key={peopleindex}
              className=" max-w-[25ch] line-clamp-2 h1  font-outfit  md:text-[55px] text-2xl text-white  text-left  leading-snug "
            >
              {data[peopleindex]?.des}
            </motion.p>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            transition={{
              delay: 0.1,
              duration: 0.3,
              type: "spring",
            }}
            initial={{
              opacity: 0,
              x: "100%",
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: "-100%",
            }}
            key={peopleindex}
            className=" mr-auto mt-5  flex gap-4 "
          >
            <Button className=" rounded-none" size={"lg"}>
              {" "}
              Contact us
            </Button>
            <Button
              variant={"outline"}
              size={"lg"}
              className="rounded-none text-primary"
            >
              {" "}
              Contact us
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="z-20 absolute top-1/2 left-0 ">
        <Button onClick={() => setPeopleindex(peopleindex - 1)} size={"icon"}>
          {" "}
          <ChevronLeft />{" "}
        </Button>
      </div>
      <div className="z-20 absolute top-1/2 right-0 ">
        <Button onClick={() => setPeopleindex(peopleindex + 1)} size={"icon"}>
          {" "}
          <ChevronRight />{" "}
        </Button>
      </div>
    </div>
  );
}
