import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import Provider from "@/components/Provider";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Construction Company in Ebonyi state (Ben Co-De Light Limited)",
    template: "%s - Ben Co-De Light Limited",
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  description:
    "Ben Co-De Light Limited is a diversified company delivering quality construction and building services, agricultural development, bar and restaurant operations, land surveying, and export services. We are committed to excellence, reliability, and sustainable growth across every sector we serve.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="  scroll-smooth" lang="en">
      <body
        className={`${inter.className} scroll-smooth overflow-x-hidden text-black `}
      >
        <Provider>
          <Navbar />
          {children}
          <Footer />

          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
