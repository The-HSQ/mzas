import React from "react";
import {
  Smartphone,
  Palette,
  TrendingUp,
  Globe,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Flutter App Development",
      description:
        "We specialize in cross-platform mobile app development using Flutter. Our apps are high-performing, visually appealing, and optimized for both iOS and Android devices.",
      icon: Smartphone,
      features: [
        "Cross-platform Development",
        "iOS & Android Optimization",
        "High-performance Apps",
        "Custom Mobile Solutions",
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "We create intuitive and modern user interfaces with a focus on user experience. From concept to clickable prototypes, our designs reflect your brand identity.",
      icon: Palette,
      features: [
        "User Interface Design",
        "User Experience Design",
        "Interactive Prototypes",
        "Brand Identity Integration",
      ],
    },
    {
      title: "Digital Marketing & ASO",
      description:
        "Boost your digital presence with our strategic digital marketing services and App Store Optimization for maximum visibility.",
      icon: TrendingUp,
      features: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Content Marketing",
        "App Store Optimization (ASO)",
        "PPC Campaigns",
      ],
    },
    {
      title: "Web App Development",
      description:
        "We build dynamic, responsive, and SEO-friendly web applications using modern technologies for optimal performance.",
      icon: Globe,
      features: [
        "React.js & Next.js Development",
        "Responsive Web Design",
        "SEO Optimization",
        "Custom Web Solutions",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      {/* Hero Section */}
      <section className="flex flex-col gap-3 justify-center items-center">
        <h1 className="text-4xl font-bold tracking-tight">Our Services</h1>
        <p className="text-lg text-[var(--color-text-muted)] max-w-3xl text-center">
          Comprehensive business solutions designed to drive your success in the
          digital age. From strategy to implementation, we&apos;re here to help
          you achieve your goals.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-background)] hover:border-[var(--color-primary)] transition-colors h-full flex flex-col cursor-default"
          >
            <div className="flex items-start gap-4 flex-1">
              <div className="p-2 sm:p-3 rounded-lg bg-[var(--color-primary)]/10 shrink-0">
                <service.icon className=" size-5 sm:size-6 text-[var(--color-primary)]" />
              </div>
              <div className="space-y-4 flex-1">
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h2>
                  <p className="text-[var(--color-text-muted)] text-sm">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-[var(--color-text-muted)] text-sm"
                    >
                      <span className="text-[var(--color-primary)]">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;
