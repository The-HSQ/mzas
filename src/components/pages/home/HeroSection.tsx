"use client";

import React from "react";
import { Button } from "../../ui/button";
import { motion } from "framer-motion";
// import SnakeTrailFollower from "@/components/ui/SnakeTrailFollower";
// import RotatingCircleGrid from "@/components/pages/home/RotatingCircleGrid";
// import Image from "next/image";
// import { Linkedin } from "lucide-react";

const HeroSection = () => {
  // const imageRef = useRef<HTMLDivElement>(null);
  // const [isHoveringImage, setIsHoveringImage] = React.useState(false);

  return (
    <section className="relative w-full flex items-center justify-center  overflow-hidden py-10 lg:py-0 ">
      {/* Background shapes */}
      {/* <div className="absolute left-0 top-0 w-2/3 h-full bg-gradient-to-br from-[var(--color-primary)]/30 to-[var(--color-secondary)]/10 rounded-br-[8rem] -z-10" />
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tr from-[var(--color-secondary)]/20 to-transparent rounded-tl-[6rem] blur-2xl -z-10" /> */}

      <div className=" w-full flex flex-col md:flex-row md:items-center md:justify-between gap-12 ">
        {/* Left: Text Content */}
        <div className="flex-1 max-w-xl text-left pl-[1rem] pr-[1rem] lg:pl-[2rem] lg:pr-[0rem]">
          <span className="uppercase text-xs font-semibold tracking-widest text-[var(--color-primary)] mb-2 block">
            Welcome to MZAS LLC
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--color-text)] mb-6 leading-tight">
            Innovative Digital Solutions
          </h1>
          <p className="text-[var(--color-text-muted)] text-xl md:text-2xl mb-8 max-w-md font-medium">
            Apps & Websites Tailored to Your Vision
          </p>
          <div className="flex gap-4">
            <Button
              onClick={() => {
                window.location.href = "/contact";
              }}
              variant="outline"
              size="lg"
              className="px-8 py-3 font-bold border-2 border-[var(--color-primary)] dark:border-[var(--color-primary)] bg-[var(--color-primary)] dark:bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] dark:hover:bg-[var(--color-primary-hover)] hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)] text-white text-shadow-md dark:text-[var(--color-text)]"
            >
              Contact Us
            </Button>

            {/* <Link
              href="https://www.linkedin.com/company/mzasllc"
              target="_blank"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors p-1.5 hover:bg-[var(--color-background-alt)] rounded-full hover:shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5" />
            </Link> */}
          </div>
        </div>

        {/* Right: Clean image area */}
        <div
          // ref={imageRef}
          // onMouseEnter={() => setIsHoveringImage(true)}
          // onMouseLeave={() => setIsHoveringImage(false)}
          className="flex-1 flex items-center justify-center min-h-[340px] min-w-[270px] relative py-0 lg:py-10 pr-[1rem] pl-[1rem] lg:pr-[2rem] lg:pl-[0rem] overflow-hidden "
          // style={{
          //   backgroundImage:
          //     "radial-gradient(circle at 2px 2px, var(--color-primary) 1px, transparent 1px)",
          //   backgroundSize: "35px 35px",
          //   backgroundPosition: "repeat",
          // }}
        >
          {/* Place your image here */}
          <motion.div
            className="max-w-[270px] max-h-[340px] sm:max-w-[380px] sm:max-h-[480px] flex items-center justify-center rounded-3xl bg-[var(--color-background-alt)] border-dashed border border-[var(--color-primary)]/75 overflow-hidden"
            // animate={{ opacity: isHoveringImage ? 0.15 : 1 }}
            // transition={{ duration: 0.3 }}
          >
            {/* <Image
              src="/hero-image.png"
              alt="App showcase"
              loading="lazy"
              className="object-contain w-full h-full"
              width={380}
              height={480}
            /> */}

            <video
              src="/videos/hero-3.mp4"
              autoPlay
              muted
              loop
              className="object-contain w-full h-full"
            />
          </motion.div>

          {/* <SnakeTrailFollower
            containerRef={imageRef as React.RefObject<HTMLDivElement>}
          /> */}

          {/* <div className="absolute left-0 top-0">
            <RotatingCircleGrid
              // isHoveringImage={isHoveringImage}
              isHoveringImage={false}
              rows={23}
              columns={31}
              size={15}
              gap={10}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
