import React from "react";

const Milestones = () => {
  const achievements = [
    {
      title: "Projects Completed",
      value: "50+",
      description: "Successful projects delivered to satisfied clients",
    },
    {
      title: "Client Satisfaction",
      value: "98%",
      description: "Client retention and satisfaction rate",
    },
    {
      title: "Team Growth",
      value: "3x",
      description: "Team size growth since inception",
    },
    {
      title: "Technologies",
      value: "15+",
      description: "Modern technologies mastered",
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "Company Founded",
      description:
        "MZAS was established with a vision to revolutionize digital solutions",
    },
    {
      year: "2023",
      title: "First Major Project",
      description: "Successfully delivered our first enterprise-level solution",
    },
    {
      year: "2024",
      title: "Team Expansion",
      description:
        "Expanded our team to include top talent in development and design",
    },
    {
      year: "2024",
      title: "Innovation Award",
      description:
        "Recognized for innovative solutions in digital transformation",
    },
  ];

  return (
    <section className="flex flex-col gap-12">
      {/* Stats Section */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-semibold">Our Achievements</h2>
          <p className="text-[var(--color-text-muted)] text-lg">
            We&apos;ve achieved significant milestones since our founding, and
            we&apos;re just getting started.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-background)] hover:border-[var(--color-primary)] transition-all duration-300"
            >
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-bold text-[var(--color-primary)]">
                  {achievement.value}
                </span>
                <h3 className="text-xl font-semibold">{achievement.title}</h3>
                <p className="text-[var(--color-text-muted)] text-sm">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="flex flex-col gap-8">
        <h3 className="text-2xl font-semibold">Key Milestones</h3>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[var(--color-border)]" />

          <div className="flex flex-col gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pl-8">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[var(--color-primary)] -translate-x-1/2" />

                <div className="p-6 rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-background)] hover:border-[var(--color-primary)] transition-all duration-300">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-semibold text-[var(--color-primary)]">
                        {milestone.year}
                      </span>
                      <h4 className="text-xl font-semibold">
                        {milestone.title}
                      </h4>
                    </div>
                    <p className="text-[var(--color-text-muted)]">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
