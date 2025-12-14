"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";

export default function Featured() {
  const fetcher = async ({ pageParam = 1 }) => {
    const res = await fetch(`/api/draw?page=${pageParam}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error("Failed to fetch");

    return res.json(); // { items: [...], nextPage: number | undefined }
  };

  //   useEffect(() => {
  //     fetcher();
  //   }, []);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["infinit"],
      queryFn: fetcher,
      initialPageParam: 1,
      getNextPageParam: (lastPage) => lastPage.nextPage,
    });

  return (
    <div className=" my-10">
      <p className=" h1 text-center"> FEATURED PROJECTS</p>

      {/* featured project loop */}

      <div className=" mt-8 px-10 gap-10   max-w-screen-lg w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
        {data?.pages.map((page) =>
          page.items.map((item: any) => (
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
          ))
        )}
      </div>

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
