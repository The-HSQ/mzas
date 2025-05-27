import React from "react";
import { Quote } from "lucide-react";

const CompanyStory = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* Company Background */}
      <div className="flex flex-col gap-6">
        <h2 className="text-4xl font-semibold text-center">Our Story</h2>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-[var(--color-primary)]">
            When We Started
          </h3>
          <p className="text-[var(--color-text-muted)] text-lg">
            Founded in 2023, MZAS emerged from a vision to revolutionize the
            digital landscape. Our journey began with a simple yet powerful
            idea: to create innovative solutions that empower businesses to
            thrive in the digital age.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className=" mx-auto w-68 sm:w-full lg:w-3/4 relative flex flex-col gap-4 p-8 rounded-xl border border-dashed bg-[var(--color-background)] border-[var(--color-primary)] transition-colors">
        {/* Decorative Quotes */}
        <Quote className="absolute top-12 -left-6 size-12 text-[var(--color-primary)] rotate-205 " />
        <Quote className="absolute bottom-0 -right-6 size-12 text-[var(--color-primary)] rotate-25 " />

        <h3 className="text-2xl font-semibold">Our Vision</h3>
        <div className="relative">
          <p className="text-[var(--color-text-muted)] text-lg italic">
            To be the leading provider of innovative business solutions,
            recognized globally for our expertise, reliability, and unwavering
            commitment to client success. We envision a future where every
            business can leverage technology to achieve its full potential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyStory;
