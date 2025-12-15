"use client";

import type { Metadata } from "next";
import {
  Experience,
  Optimize,
  Relationship,
  Value,
  Workforce,
} from "@/components/svgs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default function More() {
  return (
    <div>
      <div className=" my-10   gap-20  grid grid-cols-1  md:grid-cols-2 max-w-screen-lg w-full mx-auto">
        <div className=" mr-20 md:mr-0 ">
          <div className="relative aspect-[9/10] w-full  ">
            <Image
              fill
              src={"/main.jpg"}
              alt="manager"
              className=" w-full h-full object-cover object-center "
            />
          </div>
        </div>

        <div>
          <div className=" flex  flex-col h-full">
            <h1 className=" h1   text-4xl  text-center">
              {" "}
              WHAT BENCO DE LIGHT IS ALL ABOUT{" "}
            </h1>

            <p className=" p2  mt-auto  mx-auto max-w-[40ch]  text-justify ">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              maiores corrupti ratione aliquid mollitia esse blanditiis officiis
              cum autem hic obcaecati eius possimus velit veritatis, cumque
              voluptate minus reiciendis molestiae!{" "}
            </p>
          </div>
        </div>
      </div>

      {/* out mission */}
      <div className=" px-2">
        <div className="  my-20 space-y-8  max-w-screen-lg w-full mx-auto flex flex-col">
          <h1 className=" h1  text-4xl mr-auto">OUR MISSION</h1>
          <h1 className="  p2 max-w-[40ch]  ml-auto text-justify">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            placeat ad voluptate natus. Necessitatibus, perferendis facere.
            Quidem rem soluta perspiciatis, tempora fugit expedita est optio
            aperiam, praesentium cum, quo error corporis sint nisi laborum odit
            illo delectus nemo dicta atque repellat quia quam sed? Perspiciatis
            cupiditate aut culpa cumque in.{" "}
          </h1>
        </div>
        <div className="  my-20 space-y-8  max-w-screen-lg w-full mx-auto flex flex-col">
          <h1 className=" h1  text-4xl ml-auto">OUR OBJECTIVE</h1>
          <h1 className="  p2 max-w-[40ch]   mr-auto text-justify">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            placeat ad voluptate natus. Necessitatibus, perferendis facere.
            Quidem rem soluta perspiciatis, tempora fugit expedita est optio
            aperiam, praesentium cum, quo error corporis sint nisi laborum odit
            illo delectus nemo dicta atque repellat quia quam sed? Perspiciatis
            cupiditate aut culpa cumque in.{" "}
          </h1>
        </div>
      </div>

      <div className=" my-20 px-5 max-w-screen-lg w-full mx-auto">
        <h1 className=" text-4xl h1 text-center">
          {" "}
          WHAT WE DISTINGUISH OURSELVES FOR
        </h1>

        <div className=" grid  md:grid-cols-3  gap-10 grid-cols-1  my-10">
          <div>
            <Card className="  h-full bg-gradient-to-t from-primary/40 ">
              <CardHeader>
                <CardTitle>
                  <div className=" items-center flex ">
                    <div className=" flex-1">
                      <h1 className="  m-0 h2 capitalize">Adding Value</h1>
                    </div>
                    <div>
                      {" "}
                      <Value className="text-primary fill-current  w-10 h-10" />{" "}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Long-term solutions for better protection of asset value
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="  h-full bg-gradient-to-t from-primary/40 ">
              <CardHeader>
                <CardTitle>
                  <div className=" items-center flex ">
                    <div className=" flex-1">
                      <h1 className="  m-0 h2 capitalize">Cost Optimization</h1>
                    </div>
                    <div>
                      {" "}
                      <Optimize className="text-primary fill-current  w-10 h-10" />{" "}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Cost control through effective programme management, without
                  compromising quality
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className=" h-full bg-gradient-to-t from-primary/40 ">
              <CardHeader>
                <CardTitle>
                  <div className=" items-center flex ">
                    <div className=" flex-1">
                      <h1 className="  m-0 h2 capitalize">
                        Strong Relationship
                      </h1>
                    </div>
                    <div>
                      {" "}
                      <Relationship className="text-primary fill-current  w-10 h-10" />{" "}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Partnership approach with clients for higher performance and
                  longer-lasting relationships
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className=" h-full bg-gradient-to-t from-primary/40 ">
              <CardHeader>
                <CardTitle>
                  <div className=" items-center flex ">
                    <div className=" flex-1">
                      <h1 className="  m-0 h2 capitalize">Workforce Talent</h1>
                    </div>
                    <div>
                      {" "}
                      <Workforce className="text-primary fill-current  w-10 h-10" />{" "}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {}
                  Multidisciplinary workforce to guarantee full functionality
                  and maintenance of constructed buildings, in line with our
                  clients&apos; building management portfolio
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className=" h-full bg-gradient-to-t from-primary/40 ">
              <CardHeader>
                <CardTitle>
                  <div className=" items-center flex ">
                    <div className=" flex-1">
                      <h1 className="  m-0 h2 capitalize">Workforce Talent</h1>
                    </div>
                    <div>
                      {" "}
                      <Experience className="text-primary fill-current  w-10 h-10" />{" "}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {
                    "Unparalleled expertise gained from nearly a century of top quality services"
                  }
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
