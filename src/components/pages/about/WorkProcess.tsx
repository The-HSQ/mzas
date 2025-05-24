import React from "react";
import { Search, Palette, Code, Rocket, Wrench } from "lucide-react";

const WorkProcess = () => {
  const processSteps = [
    {
      title: "Discovery",
      description:
        "We begin by understanding your business needs, goals, and challenges through in-depth consultations and research.",
      icon: Search,
    },
    {
      title: "Design",
      description:
        "Our team creates intuitive, user-centered designs that align with your brand and business objectives.",
      icon: Palette,
    },
    {
      title: "Development",
      description:
        "We build robust, scalable solutions using cutting-edge technologies and best practices.",
      icon: Code,
    },
    {
      title: "Launch",
      description:
        "We ensure a smooth deployment with thorough testing and quality assurance processes.",
      icon: Rocket,
    },
    {
      title: "Support",
      description:
        "Our commitment continues with ongoing maintenance, updates, and support to ensure long-term success.",
      icon: Wrench,
    },
  ];

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-3 justify-center items-center">
        <h2 className="text-3xl font-semibold">Our Process</h2>
        <p className="text-[var(--color-text-muted)] text-lg max-w-3xl text-center">
          We follow a proven methodology to ensure successful project delivery
          and maximum value for our clients.
        </p>
      </div>

      <div className="relative">
        {/* Process Timeline */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--color-border)] -translate-x-1/2" />

        <div className="flex flex-col gap-12">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`relative flex md:items-center gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-[var(--color-primary)] -translate-x-1/2 -translate-y-1/2" />

              {/* Content */}
              <div className="flex-1">
                <div className="p-6 rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-background)] hover:border-[var(--color-primary)] transition-all duration-300">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <step.icon className="w-8 h-8 text-[var(--color-primary)]" />
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-[var(--color-text-muted)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
