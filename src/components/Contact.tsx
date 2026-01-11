"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Whatsapp } from "./svgs";
import { Copy, LocateFixed, Mail } from "lucide-react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "bencodelightconstruction@gmail.com";
  const phone = "+234 903 667 0283";

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 1500);
    toast.success("Email copied to clipboard");
  };

  const handleCopyPhone = async () => {
    await navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 1500);
    toast.success("Phone number copied to clipboard");
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-section-title"
      className="max-w-screen-lg w-full my-10 mx-auto px-8"
    >
      <h2
        id="contact-section-title"
        className="text-center uppercase font-bold h1"
      >
        Contact
      </h2>

      <div className="mt-10 max-w-screen-sm mx-auto space-y-10">
        {/* Direct Contact Card */}
        <article>
          <Card className="rounded-none bg-gradient-to-tr from-primary/40">
            <CardHeader>
              <CardTitle className="text-center">
                Talk to the Manager Directly
              </CardTitle>
              <CardDescription className="text-center mt-4">
                Chat on WhatsApp or call directly
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center">
              <Button
                className="w-full uppercase flex items-center justify-center gap-2"
                onClick={handleCopyPhone}
              >
                <Whatsapp className="fill-current text-white" />
                {copiedPhone ? "✓ Copied" : phone}
              </Button>
            </CardFooter>
          </Card>
        </article>

        {/* Location Card */}
        <article>
          <Card className="rounded-none">
            <CardHeader>
              <LocateFixed
                className="mx-auto mb-4 text-primary"
                aria-hidden="true"
              />
              <CardTitle className="text-center uppercase p2">
                Location
              </CardTitle>
              <CardDescription className="text-center font-bold text-primary p2">
                No. 1 Ogoja Road, Abakaliki, Edward Nkwegu Close, near Anglican
                Cathedral, Abakaliki
              </CardDescription>
            </CardHeader>
          </Card>
        </article>

        {/* Email Card */}
        <article>
          <Card className="rounded-none">
            <CardHeader>
              <Mail className="mx-auto mb-3 text-primary" aria-hidden="true" />
              <CardTitle className="text-center uppercase p2 mt-4">
                Email
              </CardTitle>
              <CardDescription className="text-center font-bold text-primary p2">
                {email}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center mt-4">
              <Button
                onClick={handleCopyEmail}
                variant="outline"
                size="lg"
                className="rounded-none w-full"
              >
                {copiedEmail ? "✓ Copied" : "Copy Email"}
              </Button>
            </CardFooter>
          </Card>
        </article>
      </div>
    </section>
  );
}
