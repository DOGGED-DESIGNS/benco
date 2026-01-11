"use client";
import { motion } from "motion/react";
import {
  Bar,
  Borehole,
  Construct,
  Drawing,
  Estate,
  Export,
  Import,
  Piggery,
  Sales,
  Survey,
  Urban,
} from "./svgs";

const services: { name: string; icon: React.ReactNode }[] = [
  {
    name: "Building Drawings",
    icon: <Drawing className="w-20 h-20 fill-current text-primary" />,
  },
  {
    name: "Import of Modern Building Materials",
    icon: <Import className="w-20 h-20 fill-current text-primary" />,
  },
  {
    name: "Export of Modern Building Materials",
    icon: <Export className="w-20 h-20 fill-current text-primary" />,
  },
  {
    name: "Building Construction",
    icon: <Construct className="w-20 h-20 fill-current text-primary" />,
  },
  {
    name: "Estate Development",
    icon: <Estate className="w-20 h-20 fill-current text-primary" />,
  },
  {
    name: "Land and Geological Survey",
    icon: <Survey className="w-20 h-20 fill-current text-primary" />,
  },
  {
    name: "Urban and Regional Planning",
    icon: <Urban className="w-20 h-20 fill-current text-primary" />,
  },
  {
    name: "Borehole Drilling and Installation",
    icon: <Borehole className="w-20 h-20 fill-current text-primary" />,
  },
  {
    name: "Sales of All Kinds of Building Materials",
    icon: <Sales className="w-20 h-20 fill-current text-primary" />,
  },
  {
    name: "Piggery and Agro Services",
    icon: <Piggery className="w-20 h-20 fill-current text-primary" />,
  },
  {
    name: "Bar and Restaurants",
    icon: <Bar className="w-20 h-20 fill-current text-primary" />,
  },
];

export default function Services() {
  return (
    <section aria-labelledby="services-title" className="px-10 my-20">
      {/* Section Title */}
      <h2
        id="services-title"
        className="text-center uppercase font-bold mb-10 h2"
      >
        Our Services
      </h2>

      <div className="relative p-4 max-w-xl w-full mx-auto overflow-x-hidden">
        {/* Left & Right gradient masks */}
        <div className="absolute top-0 left-0 h-full w-[13%] bg-gradient-to-r from-white z-10" />
        <div className="absolute top-0 right-0 h-full w-[13%] bg-gradient-to-l from-white z-10" />

        {/* Services Scroller */}
        <motion.ul
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          {[...services, ...services].map((service, index) => (
            <li
              key={index}
              className="flex flex-col items-center gap-2 flex-shrink-0"
              aria-hidden={index >= services.length ? true : false} // hide duplicate copy for screen readers
            >
              {/* SVG with aria-label */}
              <span aria-label={service.name}>{service.icon}</span>

              <h3 className="text-center uppercase max-w-[14ch] break-words h6 m-0">
                {service.name}
              </h3>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
