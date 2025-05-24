import React from "react";
import { TrendingUp, Scale, Lightbulb, Gift } from "lucide-react";

const Careers = () => {
  const benefits = [
    {
      title: "Growth Opportunities",
      description: "Continuous learning and career development programs",
      icon: TrendingUp,
    },
    {
      title: "Work-Life Balance",
      description: "Flexible hours and remote work options",
      icon: Scale,
    },
    {
      title: "Innovative Environment",
      description: "Work with cutting-edge technologies and modern tools",
      icon: Lightbulb,
    },
    {
      title: "Competitive Benefits",
      description: "Health insurance, paid time off, and more",
      icon: Gift,
    },
  ];

  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-semibold">Join Our Team</h2>
        <p className="text-[var(--color-text-muted)] text-lg max-w-3xl">
          We&apos;re always looking for talented individuals who share our
          passion for innovation and excellence. Join us in our mission to
          transform businesses through digital solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Benefits Section */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-semibold">Why Join MZAS?</h3>
          <div className="grid gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-background)] hover:border-[var(--color-primary)] transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <benefit.icon className="w-8 h-8 text-[var(--color-primary)]" />
                  <div>
                    <h4 className="text-lg font-semibold">{benefit.title}</h4>
                    <p className="text-[var(--color-text-muted)]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-6 p-8 rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-background)]">
          <h3 className="text-2xl font-semibold">Interested in Joining?</h3>
          <p className="text-[var(--color-text-muted)] text-lg">
            We&apos;re committed to creating an environment where you can thrive
            and grow. Here&apos;s what you&apos;ll get when you join our team:
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:careers@mzas.com"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary)]/90 transition-colors"
            >
              Send Us Your Resume
            </a>
            <p className="text-sm text-[var(--color-text-muted)] text-center">
              Or reach out to us at{" "}
              <a
                href="mailto:careers@mzas.com"
                className="text-[var(--color-primary)] hover:underline"
              >
                careers@mzas.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
