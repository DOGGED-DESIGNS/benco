"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Loader, Loader2 } from "lucide-react";
import { Borehole, Construct } from "./svgs";
import { AnimatePresence, motion } from "motion/react";

export default function Featured() {
  const [toggle, setToggle] = useState<Boolean>(true);
  const fetcher = async ({ pageParam = 1 }) => {
    const res = await fetch(
      `https://www.bencodelighlimited.com.ng/api/draw?page=${pageParam}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch");

    return res.json(); // { items: [...], nextPage: number | undefined }
  };

  //   useEffect(() => {
  //     fetcher();
  //   }, []);

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["infinit"],
    queryFn: fetcher,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  return (
    <div id="featured" className="  my-20">
      <p className=" h1 text-center uppercase "> FEATURED PROJECTS</p>

      {/* featured project loop */}

      <div className=" my-8 flex   ">
        <div className=" flex w-[300px] relative    mx-auto ">
          <motion.div
            // onClick={() => setToggle(!toggle)}
            transition={{
              type: "tween",
            }}
            initial={{
              left: 0,
              position: "absolute",
              height: "100%",
              width: "50%",
            }}
            animate={
              toggle
                ? {
                    left: "50%",
                    position: "absolute",
                  }
                : {
                    left: 0,
                    position: "absolute",
                  }
            }
            className="  absolute z-20 border-primary border cursor-pointer  left-0"
          ></motion.div>
          <div className="flex-1 flex   " onClick={() => setToggle(false)}>
            <Button variant={"ghost"} className="     mx-auto rounded-none">
              <Borehole className="w-8 h-8 fill-current p2 text-primary" />{" "}
              BoreHole
            </Button>
          </div>
          <div onClick={() => setToggle(true)} className="  flex-1 flex">
            <Button
              variant={"ghost"}
              className="  text-center  mx-auto  rounded-none"
            >
              <Construct className="w-8 h-8 p2 fill-current text-primary" />
              Construction
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {toggle ? (
          <>
            {isLoading && (
              <div className=" my-4  w-full flex">
                <div className=" space-x-2 mx-auto">
                  <Loader2 className=" text-primary mx-auto animate-spin" />{" "}
                  LOADING..
                </div>{" "}
              </div>
            )}
            {error && (
              <div>
                {" "}
                <p className=" text-red-800 p2 uppercase text-center  ">
                  {" "}
                  Something went wrong{" "}
                </p>{" "}
              </div>
            )}

            <motion.div
              key={"first"}
              exit={{
                y: -10,
                opacity: 0,
              }}
              animate={{
                y: 10,
                opacity: 1,
              }}
              className=" mt-8 px-10 gap-10   max-w-screen-lg w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  "
            >
              {data?.pages.map((page) =>
                page.items.map((item: any) => (
                  <>
                    <div>
                      <div className=" border relative w-full aspect-[9/10]">
                        <Image
                          fill
                          alt="image"
                          src={item.url}
                          className=" w-full h-full object-cover object-top "
                        />
                      </div>
                      <p className=" mt-2 text-black  p2 uppercase text-center font-semibold">
                        {item.des}
                      </p>
                    </div>
                  </>
                ))
              )}
            </motion.div>
          </>
        ) : (
          <motion.div
            exit={{
              y: -10,
              opacity: 0,
            }}
            animate={{
              y: 10,
              opacity: 1,
            }}
            key={"second"}
            className=" mt-8 px-10 gap-10   max-w-screen-lg w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  "
          >
            <div>
              <div className=" border relative w-full aspect-[9/10]">
                <Image
                  fill
                  alt="image"
                  src={"/bore1.jpg"}
                  className=" w-full h-full object-cover object-top "
                />
              </div>
              {/* <p className=" mt-2 text-black  p2 uppercase text-center font-semibold">
                testing oo
              </p> */}
            </div>
            <div>
              <div className=" border relative w-full aspect-[9/10]">
                <Image
                  fill
                  alt="image"
                  src={"/bore2.jpg"}
                  className=" w-full h-full object-cover object-top "
                />
              </div>
              {/* <p className=" mt-2 text-black  p2 uppercase text-center font-semibold">
                testing oo
              </p> */}
            </div>
            <div>
              <div className=" border relative w-full aspect-[9/10]">
                <Image
                  fill
                  alt="image"
                  src={"/bore3.jpg"}
                  className=" w-full h-full object-cover object-top "
                />
              </div>
              {/* <p className=" mt-2 text-black  p2 uppercase text-center font-semibold">
                testing oo
              </p> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {hasNextPage && (
        <div className=" mt-8 flex">
          <Button
            variant={"outline"}
            size={"lg"}
            className=" mx-auto border-primary text-primary p2 font-bold rounded-none"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? (
              <>
                {" "}
                <Loader className=" text-primary animate-spin" /> Loadmore{" "}
              </>
            ) : (
              "Load More"
            )}
          </Button>
        </div>
      )}

      {/* <div className=" mt-8 flex">
        <Button
          variant={"outline"}
          size={"lg"}
          className=" mx-auto border-primary text-primary p2 font-bold rounded-none"
        >
          {" "}
          SEE MORE{" "}
        </Button>
      </div> */}
    </div>
  );
}
