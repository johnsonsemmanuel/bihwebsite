import PageShell from "@/components/PageShell";

export default function PrivacyPolicy() {
  return (
    <PageShell>
      <section className="px-6 pt-32 pb-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-3xl font-bold sm:text-4xl" style={{ color: "var(--text-primary)" }}>
            Privacy Policy
          </h1>
          <div className="space-y-6 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            <p>Last updated: June 2026</p>

            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>1. Information We Collect</h2>
            <p>
              We collect information you provide directly, such as your name, email address,
              and company details when you apply to our programs or contact us. We also collect
              usage data about how you interact with our website.
            </p>

            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>2. How We Use Your Information</h2>
            <p>
              We use your information to evaluate your application, communicate with you about
              our programs, improve our services, and send relevant updates. We never sell your
              personal data to third parties.
            </p>

            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>3. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your information.
              This includes encryption at rest and in transit, access controls, and regular
              security audits.
            </p>

            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>4. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data at any time.
              Contact us at privacy@bluespace.vc to exercise these rights.
            </p>

            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>5. Contact</h2>
            <p>
              For questions about this policy, contact us at privacy@bluespace.vc or through
              our contact page.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
