"use client";
export const runtime = "edge";

import React from "react";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useTransform, useSpring, motionValue } from "framer-motion";
import { Space_Mono } from "next/font/google";
import Header from "@/components/Header";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const scrollY = motionValue(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const smoothScrollXNegative = useSpring(useTransform(scrollY, (y) => y * -0.5), {
    stiffness: 200, // Increased stiffness for faster response
    damping: 30,    // Reduced damping for quicker animations
  });

  const smoothScrollXPositive = useSpring(useTransform(scrollY, (y) => y * 0.5), {
    stiffness: 250, // Increased stiffness for faster response
    damping: 40,    // Reduced damping for quicker animations
  });

  const renderImage = (src: string, alt: string) => (
    <div className="relative w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] md:w-[35vw] md:h-[35vw]">
      <Image
        src={src}
        alt={alt}
        fill // Replaces layout="fill"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 35vw, 33vw"
        className="object-contain" // Use Tailwind CSS for object-fit
      />
    </div>
  );

  return (
    <main className="min-h-screen bg-[#141715] text-[#adadba] overflow-x-hidden flex flex-col items-center pt-20">
      <footer className="w-full flex justify-between items-center py-4 px-8 bg-[#14171500] text-[#adadba] z-70 fixed top-0">
        <p className={`${spaceMono.className}`}>Basement ehf.</p>
        <a
          href="mailto:skarpi@basement.is"
          className={`text-[#adadba] hover:underline ${spaceMono.className}`}
        >
          Hafðu samband
        </a>
      </footer>

      <Header></Header>


      <section id="pictures" className="w-full mt-40 md:mt-40 lg:mt-60 relative pt-20">
        <div className="flex flex-col space-y-20  z-45">
          {/* Left to right pictures */}
          <article
            id="pictures-ltr"
            className="w-full h-auto overflow-visible relative"
            aria-label="Left to right scrolling pictures"
          >
            <div className="flex justify-center">
              <motion.div
                style={{ x: smoothScrollXNegative, y: 0, position: "fixed", top: "40%" }}
                className="flex space-x-50 md:space-x-100 lg:space-x-130 transform -translate-y-1/2"
              >
                {renderImage("/myndir/IMG_3724.JPG", "Mynd 1")}
                {renderImage("/myndir/IMG_6870.JPG", "Mynd 2")}
                {renderImage("/myndir/IMG_6878.JPG", "Mynd 5")}
              </motion.div>
            </div>
          </article>

          {/* Right to left pictures */}
          <article
            id="pictures-rtl"
            className="w-full h-auto overflow-hidden"
            aria-label="Right to left scrolling pictures"
          >
            <div className="flex justify-center">
              <motion.div
                style={{ x: smoothScrollXPositive, y: 0, position: "fixed", top: "40%" }}
                className="flex space-x-50 md:space-x-100 lg:space-x-130 transform -translate-y-1/50 -translate-x-2/3"
              >
                {renderImage("/myndir/IMG_6877.JPG", "Mynd 4")}
                {renderImage("/myndir/IMG_6879.JPG", "Mynd 5")}
                {renderImage("/myndir/IMG_6871.JPG", "Mynd 3")}
              </motion.div>
            </div>
          </article>
        </div>
      </section>

      <section
        id="program"
        className="text-center tracking-widest leading-8 w-3/4 md:w-1/3 lg:w-1/4 mx-auto my-5 pt-5 md:my-[4%] md:pt-[4%] lg:my-[4%] lg:pt-[6%] z-50 relative"
        ref={contentRef}
        aria-labelledby="program-title"
      >
        <div
          ref={ref}
          className={`transition-opacity ${inView ? "opacity-100" : "opacity-0"} ${spaceMono.className}`}
          suppressHydrationWarning={true}
        >
          <p>
            Basement er viðburðarfyrirtæki, stofnað 2022 með víðtæka þekkingu á framleiðslu viðburða.
          </p>
          <p>&nbsp;</p>
          <p>Við sérhæfum okkur í lifandi viðburðum (live events).</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>
            <i className={`${spaceMono.className} text-2xl bg-white text-[#141715] px-[5px] font-bold uppercase`}>
              2024
            </i>
          </p>
          <p>&nbsp;</p>
          <p>Gulleggið - Atvinnudagar Háskóla Íslands - Kynning á nýjum Pepsi max umbúðum - Háskóladagurinn - Ferðamálavika í Grósku - Októberfest SHÍ - Iceland Airwaves - Jólamarkaðurinn við Austurvöll - Jülevenner Emmsjé Gauta - Gróska - Novasvellið við Ingólfstorg - 
          </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>
            <i className={`${spaceMono.className} text-2xl bg-white text-[#141715] px-[5px] font-bold uppercase`}>
              2023
            </i>
          </p>
          <p>&nbsp;</p>
          <p>Söngvakeppni sjónvarpsins - Vorhátíð Icelandair - Backstreet Boys í Laugardalshöll - Color Run - The Rift Gravel Race - EVE Fanfest - Riff - Októberfest SHÍ - Tónlistarveisla Bylgjunnar á Menningarnótt - Jólakvosin - 
          </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>
            <i className={`${spaceMono.className} text-2xl bg-white text-[#141715] px-[5px] font-bold uppercase`}>
              2022
            </i>
          </p>
          <p>&nbsp;</p>
          <p>Októberfest SHÍ - Iceland Airwaves - Sigur Rós í Laugardalshöll - Jólagestir Björgvins - Jülevenner Emmsjé Gauta - Árshátíð Marel - Árshátíð Sýnar - 
          </p>
        </div>
      </section>
    </main>
  );
}