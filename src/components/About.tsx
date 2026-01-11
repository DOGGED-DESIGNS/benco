import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function About() {
  return (
    <section
      aria-labelledby="about-section-title"
      className="px-3 py-5 my-20 gap-10 grid grid-cols-1 max-w-screen-lg w-full mx-auto md:grid-cols-2"
    >
      {/* Image */}
      <div>
        <div className="relative w-full overflow-hidden aspect-video">
          <Image
            src="/aboutpagejojo.png"
            alt="Ben Co-De Light Limited construction and service operations"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
            priority
          />
          <div className="absolute bg-primary h-5 left-0 top-0 w-[20%]" />
        </div>
      </div>

      {/* Content */}
      <div className="self-center">
        {/* H2 because this is a section, NOT the page title */}
        <h2
          id="about-section-title"
          className="uppercase text-center font-bold mb-6 h2"
        >
          About Us
        </h2>

        <p className="p2 max-w-prose mx-auto text-center">
          Ben Co-De Light Limited is built on quality, trust, and dependable
          service delivery. We operate across construction, agriculture,
          hospitality, land surveying, and export services—bringing excellence
          to every sector we serve. Our focus is to deliver real value, build
          lasting relationships, and grow sustainably.
        </p>

        <div className="mt-8 flex justify-center">
          <Link href="/about">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary font-bold rounded-none"
            >
              Learn more about Ben Co-De Light Limited
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
