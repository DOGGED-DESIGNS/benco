"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Loader, Loader2 } from "lucide-react";
import { Borehole, Construct } from "./svgs";
import { AnimatePresence, motion } from "motion/react";

export default function Featured() {
  const [toggle, setToggle] = useState<boolean>(true);

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
    <section
      id="featured"
      aria-labelledby="featured-projects-title"
      className="my-20 px-10"
    >
      {/* Section Title */}
      <h2
        id="featured-projects-title"
        className="text-center uppercase font-bold mb-10 h2"
      >
        Featured Projects
      </h2>

      {/* Toggle Buttons */}
      <div className="my-8 flex justify-center">
        <div className="flex w-[300px] relative mx-auto">
          <motion.div
            transition={{ type: "tween" }}
            initial={{
              left: 0,
              position: "absolute",
              height: "100%",
              width: "50%",
            }}
            animate={
              toggle
                ? { left: "50%", position: "absolute" }
                : { left: 0, position: "absolute" }
            }
            className="absolute z-20 border-primary border cursor-pointer left-0"
          />

          <Button
            variant="ghost"
            className="flex-1 mx-auto rounded-none flex items-center justify-center"
            onClick={() => setToggle(false)}
            aria-pressed={!toggle}
          >
            <Borehole className="w-8 h-8 fill-current text-primary mr-2" />{" "}
            Borehole
          </Button>

          <Button
            variant="ghost"
            className="flex-1 mx-auto rounded-none flex items-center justify-center"
            onClick={() => setToggle(true)}
            aria-pressed={toggle}
          >
            <Construct className="w-8 h-8 fill-current text-primary mr-2" />{" "}
            Construction
          </Button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {toggle ? (
          <>
            {/* Loading / Error */}
            {isLoading && (
              <div className="flex justify-center my-4">
                <Loader2 className="text-primary animate-spin mx-auto" />
                <span className="sr-only">Loading featured projects...</span>
              </div>
            )}
            {error && (
              <p className="text-red-800 uppercase text-center p2">
                Something went wrong
              </p>
            )}

            {/* Featured Projects Grid */}
            <motion.div
              key="construction"
              exit={{ y: -10, opacity: 0 }}
              animate={{ y: 10, opacity: 1 }}
              className="mt-8 px-10 gap-10 max-w-screen-lg w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
              {data?.pages.map((page) =>
                page.items.map((item: any, idx: number) => (
                  <article key={idx} className="border rounded overflow-hidden">
                    <div className="relative w-full aspect-[9/10]">
                      <Image
                        src={item.url}
                        alt={`Project: ${item.des}`}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <h3 className="mt-2 text-center font-semibold uppercase p2 text-black">
                      {item.des}
                    </h3>
                  </article>
                ))
              )}
            </motion.div>

            {/* Load More */}
            {hasNextPage && (
              <div className="flex justify-center mt-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="mx-auto border-primary text-primary font-bold rounded-none"
                  onClick={() => fetchNextPage()}
                  disabled={isFetchingNextPage}
                >
                  {isFetchingNextPage ? (
                    <>
                      <Loader className="text-primary animate-spin mr-2" />
                      Loading...
                    </>
                  ) : (
                    "Load More"
                  )}
                </Button>
              </div>
            )}
          </>
        ) : (
          <motion.div
            key="borehole"
            exit={{ y: -10, opacity: 0 }}
            animate={{ y: 10, opacity: 1 }}
            className="mt-8 px-10 gap-10 max-w-screen-lg w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {/* Static Borehole Images */}
            {["/bore1.jpg", "/bore2.jpg", "/bore3.jpg"].map((src, idx) => (
              <article key={idx} className="border rounded overflow-hidden">
                <div className="relative w-full aspect-[9/10]">
                  <Image
                    src={src}
                    alt={`Borehole project ${idx + 1}`}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </article>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
