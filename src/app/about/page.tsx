import React from "react";
import More from "./More";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BenCo De Light Limited",
  description:
    "Learn more about Ben Co-De Light Limited, a diversified company providing construction and building services, agriculture, bar and restaurant operations, land surveying, and export services. Built on integrity, quality, and sustainable growth.",
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function page() {
  return <More />;
}
