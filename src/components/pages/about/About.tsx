import React from "react";
import CompanyStory from "./CompanyStory";
import LeadershipTeam from "./LeadershipTeam";
import CompanyValues from "./CompanyValues";
import WorkProcess from "./WorkProcess";

const About = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* Hero Section */}
      <section className="flex flex-col gap-3 justify-center items-center">
        <h1 className="text-4xl font-bold tracking-tight">About MZAS</h1>
        <p className="text-lg text-[var(--color-text-muted)] max-w-3xl text-center">
          We are a team of passionate professionals dedicated to transforming
          businesses through innovative solutions and expert consulting. Our
          commitment to excellence and innovation drives everything we do.
        </p>
      </section>

      <div className=" w-[280px] border-1 border-dashed border-[var(--color-border)] mx-auto"></div>

      {/* Company Story Section */}
      <CompanyStory />

      <div className=" w-[280px] border-1 border-dashed border-[var(--color-border)] mx-auto"></div>

      {/* Leadership Team Section */}
      <LeadershipTeam />

      <div className=" w-[280px] border-1 border-dashed border-[var(--color-border)] mx-auto"></div>

      {/* Values Section */}
      <CompanyValues />

      <div className=" w-[280px] border-1 border-dashed border-[var(--color-border)] mx-auto"></div>

      {/* Work Process Section */}
      <WorkProcess />
    </div>
  );
};

export default About;
