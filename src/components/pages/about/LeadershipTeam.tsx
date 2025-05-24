import React from "react";
import Image from "next/image";
import { ArrowLeftRightIcon } from "lucide-react";

const LeadershipTeam = () => {
  const teamMembers = [
    {
      name: "Abdul Shakoor",
      role: "Chief Executive Officer",
      image: "/abdul-shakoor.jpg",
      bio: "A visionary leader with extensive experience in business strategy and digital transformation. Abdul brings over a decade of expertise in scaling businesses and driving innovation. His leadership vision focuses on creating sustainable growth through technological excellence and client-centric solutions.",
      expertise: [
        "Business Strategy",
        "Digital Transformation",
        "Team Leadership",
      ],
    },
    {
      name: "Muhammad Hassan Ali",
      role: "Chief Technology Officer",
      image: "/hassan-ali.jpg",
      bio: "A technology innovator with deep expertise in software architecture and emerging technologies. Hassan has pioneered several groundbreaking solutions in the industry, bringing cutting-edge innovations to MZAS. His technical leadership has been instrumental in establishing our reputation for technological excellence.",
      expertise: [
        "Software Architecture",
        "Emerging Technologies",
        "Technical Innovation",
      ],
    },
  ];

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-semibold text-center">
          Our Leadership Team
        </h2>
        <p className="text-[var(--color-text-muted)] text-lg max-w-3xl mx-auto text-center">
          Meet the visionaries behind MZAS, driving innovation and excellence in
          every project we undertake.
        </p>
      </div>

      <div className="flex flex-col gap-16">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row gap-8 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div
              className={`w-full lg:w-1/3 flex justify-center items-center gap-6 ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="relative group">
                <div className="relative h-72 w-72 rounded-full overflow-hidden border-4 border-[var(--color-primary)] shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={288}
                    height={288}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 288px"
                    priority={index === 0}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-100 transition-opacity duration-300" />
                </div>
                {/* Decorative circles */}
                <div className="absolute -inset-4 rounded-full border-2 border-dashed -z-10 border-[var(--color-primary)]/40 transition-all duration-300" />
                <div className="absolute -inset-8 rounded-full border border-dashed -z-20 border-[var(--color-primary)]/20 transition-all duration-300" />
              </div>

              <div className="hidden md:flex items-center justify-center">
                <ArrowLeftRightIcon className="size-10 text-[var(--color-primary)]" />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-2/3">
              <div className="flex flex-col gap-6 p-6 rounded-xl border border-dashed bg-[var(--color-background)] border-[var(--color-primary)] transition-all duration-300">
                <div className="flex flex-col gap-2">
                  <h3 className="text-3xl font-semibold">{member.name}</h3>
                  <p className="text-[var(--color-primary)] text-xl">
                    {member.role}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-[var(--color-text-muted)] text-lg">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 rounded-full text-sm bg-[var(--color-primary)]/10 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipTeam;
