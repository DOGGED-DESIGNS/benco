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

            <p className=" p2 p-4 mt-auto  mx-auto max-w-[40ch]  text-justify ">
              Ben Co-De Light Limited is built on quality, trust, and dependable
              service delivery. We operate across construction, agriculture,
              hospitality, land surveying, and export, bringing excellence to
              every sector we serve. Our focus is simple: deliver real value,
              build lasting relationships, and grow sustainably.
            </p>
          </div>
        </div>
      </div>

      {/* out mission */}
      <div className=" px-2">
        <div className="  my-20 space-y-8  max-w-screen-lg w-full mx-auto flex flex-col">
          <h1 className=" h1 p-2  text-4xl mr-auto">OUR MISSION</h1>
          <h1 className="  p2 max-w-[40ch] p-2   ml-auto text-justify">
            {" "}
            Our mission is to deliver high-quality, reliable, and innovative
            services across construction, agriculture, hospitality, land
            surveying, and export operations, while fostering sustainable
            growth, customer satisfaction, and positive impact in every
            community we serve.
          </h1>
        </div>
        <div className="  my-20 space-y-8  max-w-screen-lg w-full mx-auto flex flex-col">
          <h1 className=" h1  text-4xl ml-auto p-2">OUR OBJECTIVE</h1>
          <h1 className="  p-2 p2 max-w-[40ch]   mr-auto text-justify">
            <ol className=" space-y-4  list-decimal list-inside text-justify">
              <li className=" py-4 border-b ">
                Quality Excellence To consistently provide superior services
                that meet and exceed industry standards across all sectors of
                operation.
              </li>
              <li className=" py-4 border-b ">
                Customer Satisfaction To build long-term relationships with
                clients through professionalism, transparency, and dependable
                service delivery.
              </li>
              <li className=" py-4 border-b ">
                Sustainable Growth To grow responsibly by adopting sustainable
                practices that support economic development and environmental
                stewardship.
              </li>
              <li className=" py-4 border-b ">
                Operational Diversity To strengthen and expand our diversified
                business portfolio, ensuring stability and resilience across
                multiple industries.
              </li>
              <li className=" py-4 border-b ">
                Innovation and Efficiency To embrace modern techniques,
                technology, and best practices that improve efficiency, safety,
                and overall performance.
              </li>
              <li className=" py-4 border-b ">
                Community Development To contribute positively to local
                communities through job creation, ethical business practices,
                and social responsibility.
              </li>
            </ol>
          </h1>
        </div>
      </div>

      <div className=" my-20 px-5 max-w-screen-lg w-full mx-auto">
        <h1 className=" p-2 text-4xl h1 text-center">
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
                  We go beyond basic service delivery to create real value in
                  every project. Our approach focuses on long-term benefits, not
                  short-term gains. This ensures our clients get results that
                  truly make a difference.
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
