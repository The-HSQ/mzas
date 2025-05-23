export default function AboutPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">About MZAS</h1>
        <p className="text-lg text-[var(--color-text-muted)] max-w-3xl">
          We are a team of passionate professionals dedicated to transforming
          businesses through innovative solutions and expert consulting.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4 p-6 rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-background)]">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-[var(--color-text-muted)]">
            To empower businesses with cutting-edge solutions that drive growth,
            efficiency, and success in the digital age.
          </p>
        </div>
        <div className="space-y-4 p-6 rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-background)]">
          <h2 className="text-2xl font-semibold">Our Vision</h2>
          <p className="text-[var(--color-text-muted)]">
            To be the leading provider of innovative business solutions,
            recognized for our expertise, reliability, and commitment to client
            success.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Innovation",
              description:
                "Constantly pushing boundaries to deliver cutting-edge solutions that set new industry standards.",
            },
            {
              title: "Excellence",
              description:
                "Committed to delivering the highest quality services and exceeding client expectations.",
            },
            {
              title: "Integrity",
              description:
                "Building trust through honest communication, transparency, and ethical business practices.",
            },
            {
              title: "Collaboration",
              description:
                "Working together with clients and partners to achieve shared goals and mutual success.",
            },
            {
              title: "Adaptability",
              description:
                "Staying agile and responsive to changing market needs and technological advancements.",
            },
            {
              title: "Client Focus",
              description:
                "Putting our clients' needs first and delivering personalized solutions that drive their success.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-background)] hover:border-[var(--color-primary)] transition-colors"
            >
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-[var(--color-text-muted)]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold">Our Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "John Doe",
              role: "Chief Executive Officer",
              bio: "With over 15 years of experience in business transformation and digital innovation.",
            },
            {
              name: "Jane Smith",
              role: "Chief Technology Officer",
              bio: "Expert in emerging technologies and digital strategy with a proven track record of successful implementations.",
            },
            {
              name: "Mike Johnson",
              role: "Head of Operations",
              bio: "Specialized in optimizing business processes and driving operational excellence.",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-background)]"
            >
              <div className="h-32 w-32 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                <span className="text-4xl font-bold text-[var(--color-primary)]">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-[var(--color-primary)] mb-2">{member.role}</p>
              <p className="text-[var(--color-text-muted)]">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
