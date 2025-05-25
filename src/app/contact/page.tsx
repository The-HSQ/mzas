"use client";

import { MapPin, Phone, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Maryland, USA",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 301 221 5994",
  },
  // {
  //   icon: Mail,
  //   title: "Email Us",
  //   details: "",
  // },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* Hero Section */}
      <div className="flex flex-col gap-3 justify-center items-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Contact Us
        </h1>
        <p className="text-base md:text-lg text-[var(--color-text-muted)] max-w-3xl text-center">
          Have questions or ready to start a project? We&apos;re here to help.
          Reach out to us and let&apos;s discuss how we can support your
          business goals.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {/* Contact Information */}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 sm:p-6 rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-background)]"
              >
                <div className="p-2 sm:p-3 rounded-lg bg-[var(--color-primary)]/10 shrink-0">
                  <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-primary)]" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm sm:text-base mb-1">
                    {info.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--color-text-muted)] break-words">
                    {info.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Hours */}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">Business Hours</h2>
          <div className="p-4 sm:p-6 rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-background)]">
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-2 text-sm sm:text-base">
                <span className="text-[var(--color-text-muted)]">
                  Monday - Friday
                </span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-2 text-sm sm:text-base">
                <span className="text-[var(--color-text-muted)]">
                  Saturday - Sunday
                </span>
                <span className="font-medium">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
