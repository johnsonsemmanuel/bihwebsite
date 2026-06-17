"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";

const contactInfo = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "hello@bluespace.vc",
    href: "mailto:hello@bluespace.vc",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Visit",
    value: "SF / NYC / Remote",
    href: "#",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Response Time",
    value: "Within 48 hours",
    href: null,
  },
];

function InputField({ label, id, type, placeholder, isTextarea }: {
  label: string; id: string; type: string; placeholder: string; isTextarea?: boolean;
}) {
  const Comp = isTextarea ? "textarea" : "input";
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
        {label}
      </label>
      <Comp
        id={id}
        type={isTextarea ? undefined : type}
        rows={isTextarea ? 4 : undefined}
        className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#60a5fa] focus:ring-1 focus:ring-[#60a5fa]/30"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-primary)",
        }}
        placeholder={placeholder}
      />
    </div>
  );
}

export default function Contact({ hideHeading }: { hideHeading?: boolean }) {
  return (
    <section id="contact" className="px-6 py-24" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-6xl">
        {!hideHeading && (
          <AnimatedSection className="mb-16 text-center">
            <span className="mb-3 block text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--text-secondary)" }}>
              Get Started
            </span>
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl" style={{ color: "var(--text-primary)" }}>
              Ready to Build?
            </h2>
            <p className="mx-auto max-w-xl text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Tell us about your company. We review every application personally
              and respond within 48 hours.
            </p>
          </AnimatedSection>
        )}

        <div className="grid gap-8 lg:grid-cols-5">
          <AnimatedSection className="lg:col-span-2" delay={0.1}>
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  className="flex items-center gap-4 rounded-2xl border p-5"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}
                  whileHover={{ x: 4 }}
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "var(--bg-primary)", color: "var(--accent)" }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
                      {info.label}
                    </div>
                    {info.href ? (
                      <a href={info.href} className="text-sm font-semibold transition-colors hover:text-[#60a5fa]" style={{ color: "var(--text-primary)" }}>
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                        {info.value}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-3" delay={0.2}>
            <form
              className="rounded-2xl border p-8"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="mb-6 text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
                Apply Now
              </h3>
              <div className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <InputField label="Full Name" id="name" type="text" placeholder="Your name" />
                  <InputField label="Email" id="email" type="email" placeholder="you@company.com" />
                </div>
                <InputField label="Company" id="company" type="text" placeholder="Startup name (optional)" />
                <InputField label="Tell us about your startup" id="message" type="text" placeholder="What stage are you at? What do you need?" isTextarea />
                <Button type="submit" size="lg" className="w-full">
                  Submit Application
                </Button>
                <p className="text-center text-xs" style={{ color: "var(--text-secondary)" }}>
                  We respect your privacy. No spam, ever.
                </p>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
