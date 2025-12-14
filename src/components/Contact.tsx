"use client";
import React, { useState } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Whatsapp } from "./svgs";
import {
  Contact2,
  Copy,
  LocateFixed,
  LocateIcon,
  LocationEdit,
  Mail,
  PhoneCall,
} from "lucide-react";

export default function Contact() {
  // const [setCopied, setCopied] = useState( false)

  const [copied, setCopied] = useState(false);

  const email = "email";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className=" max-w-screen-lg w-full my-10  mx-auto px-10  mt-10">
      <h1 className=" h1 uppercase text-center ">contact</h1>

      <div className=" mt-10 max-w-screen-sm  mx-auto">
        <Card className="  rounded-none  bg-gradient-to-tr from-primary/40">
          <CardHeader>
            <CardTitle className=" text-center">
              TALK TO THE MANAGER DIRECTLY
            </CardTitle>
            <CardDescription className=" mt-10 text-center">
              CHAT OR CALL ON WATSAPP
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className=" w-full uppercase">
              {" "}
              <Whatsapp className=" fill-current text-white" /> Whatsapp{" "}
            </Button>
          </CardFooter>
        </Card>

        {/* location and the rest one by onc */}

        <Card className=" mt-10  rounded-none">
          <CardHeader>
            <LocateFixed className=" mx-auto border mb-4 text-primary" />
            <CardTitle className="p2 text-center uppercase">
              {" "}
              LOCATION
            </CardTitle>
            <CardDescription className=" font-bold text-primary text-center p2">
              no. 1 Ogoja Road Abakaliki, Edward Nkwegu Close, near Anglican
              Abakaliki
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className=" mt-10  rounded-none">
          <CardHeader>
            <div className="   flex">
              <div className=" flex-1 "></div>
              <div>
                <Button onClick={handleCopy} variant={"ghost"} size={"icon"}>
                  {copied ? "copied ✓" : <Copy className="text-primary" />}
                </Button>
              </div>
            </div>
            <div className=" ">
              <Mail className=" mx-auto border mb-3 text-primary" />
            </div>
            <CardTitle className="p2 mt-4 text-center uppercase">
              {" "}
              email
            </CardTitle>
            <CardDescription className=" font-bold text-primary text-center p2">
              bencodelightlimited@gmail.com
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
