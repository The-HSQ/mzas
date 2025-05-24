import React from "react";
import { Lightbulb, Handshake, Sparkles, Users } from "lucide-react";

const CompanyValues = () => {
  const values = [
    {
      title: "Innovation",
      description:
        "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions that set industry standards.",
      icon: Lightbulb,
    },
    {
      title: "Integrity",
      description:
        "We build trust through honest communication, transparency, and ethical business practices in all our interactions.",
      icon: Handshake,
    },
    {
      title: "Technical Excellence",
      description:
        "We maintain the highest standards of code quality and technical implementation in everything we build.",
      icon: Sparkles,
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork, both within our organization and with our clients, to achieve exceptional results.",
      icon: Users,
    },
  ];

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-3 justify-center items-center">
        <h2 className="text-3xl font-semibold">Our Values & Philosophy</h2>
        <p className="text-[var(--color-text-muted)] text-lg max-w-3xl text-center">
          These core principles guide everything we do, from how we work with
          clients to how we build our solutions and grow our team.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {values.map((value, index) => (
          <div
            key={index}
            className="group p-6 rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-background)] hover:border-[var(--color-primary)] transition-all duration-300"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <value.icon className="w-8 h-8 text-[var(--color-primary)]" />
                <h3 className="text-xl font-semibold">{value.title}</h3>
              </div>
              <p className="text-[var(--color-text-muted)]">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyValues;
