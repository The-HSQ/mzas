import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  LineChart,
  Settings,
  Shield,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Digital Transformation",
    description:
      "Modernize your business with cutting-edge digital solutions tailored to your needs.",
    icon: Code2,
    features: [
      "Custom Software Development",
      "Cloud Migration",
      "Digital Process Automation",
      "Legacy System Modernization",
    ],
  },
  {
    title: "Business Consulting",
    description:
      "Strategic guidance to optimize your operations and drive growth.",
    icon: LineChart,
    features: [
      "Business Strategy Development",
      "Process Optimization",
      "Market Analysis",
      "Growth Planning",
    ],
  },
  {
    title: "IT Infrastructure",
    description:
      "Robust and scalable infrastructure solutions for your business.",
    icon: Settings,
    features: [
      "Network Setup & Management",
      "Cloud Infrastructure",
      "Security Implementation",
      "System Integration",
    ],
  },
  {
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your business assets.",
    icon: Shield,
    features: [
      "Security Assessment",
      "Threat Detection",
      "Compliance Management",
      "Security Training",
    ],
  },
  {
    title: "Team Augmentation",
    description: "Enhance your team with skilled professionals on demand.",
    icon: Users,
    features: [
      "Technical Staffing",
      "Project Teams",
      "Expert Consultants",
      "Training & Development",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Our Services</h1>
        <p className="text-lg text-[var(--color-text-muted)] max-w-3xl">
          Comprehensive business solutions designed to drive your success in the
          digital age. From strategy to implementation, we're here to help you
          achieve your goals.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-8 rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-background)] hover:border-[var(--color-primary)] transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[var(--color-primary)]/10">
                <service.icon className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <div className="space-y-4 flex-1">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    {service.title}
                  </h2>
                  <p className="text-[var(--color-text-muted)]">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-[var(--color-text-muted)]"
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

      {/* CTA Section */}
      <section className="rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-background)] p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-[var(--color-text-muted)] mb-6 max-w-2xl mx-auto">
          Let's discuss how our services can help you achieve your business
          goals. Our team of experts is ready to provide tailored solutions for
          your needs.
        </p>
        <Button asChild size="lg" className="gap-2">
          <Link href="/contact">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </section>
    </div>
  );
}
