import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full  flex items-center justify-center bg-[var(--color-background)] overflow-hidden transition-colors duration-300">
      {/* Background shapes */}
      <div className="absolute left-0 top-0 w-2/3 h-full bg-gradient-to-br from-[var(--color-primary)]/30 to-[var(--color-secondary)]/10 rounded-br-[8rem] -z-10" />
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tr from-[var(--color-secondary)]/20 to-transparent rounded-tl-[6rem] blur-2xl -z-10" />

      <div className=" w-full flex flex-col md:flex-row md:items-center md:justify-between gap-12 ">
        {/* Left: Text Content */}
        <div className="flex-1 max-w-xl text-left">
          <span className="uppercase text-xs font-semibold tracking-widest text-[var(--color-primary)] mb-2 block">
            Introducing
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text)] mb-4 leading-tight">
            APPMICRON
          </h1>
          <p className="text-[var(--color-text-muted)] text-base md:text-lg mb-8 max-w-md">
            Ut non quam risus. Praesent venenatis aliquam rhoncus. Mauris sit
            amet rhoncus risus, vel ullamcorper leo.
          </p>
          <Button variant="outline" size="lg" className="px-8 py-3 font-bold">
            EXPLORE
          </Button>
        </div>

        {/* Right: Clean image area */}
        <div className="flex-1 flex items-center justify-center min-h-[340px] min-w-[270px]">
          {/* Place your image here */}
          <div className="max-w-[270px] max-h-[340px] sm:max-w-[380px] sm:max-h-[480px] flex items-center justify-center rounded-3xl bg-[var(--color-background-alt)] border-dashed border-2 border-[var(--color-border)] overflow-hidden">
            {/* Example placeholder image, replace src with your image */}
            <Image
              src="/hero-image.png"
              alt="App showcase"
              className="object-contain w-full h-full"
              width={380}
              height={480}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
