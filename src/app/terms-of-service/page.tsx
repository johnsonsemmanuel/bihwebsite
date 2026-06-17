import PageShell from "@/components/PageShell";

export default function TermsOfService() {
  return (
    <PageShell>
      <section className="px-6 pt-32 pb-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-3xl font-bold sm:text-4xl" style={{ color: "var(--text-primary)" }}>
            Terms of Service
          </h1>
          <div className="space-y-6 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            <p>Last updated: June 2026</p>

            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the BlueSPACE Innovation Hub website and services, you agree
              to be bound by these Terms of Service. If you do not agree, please do not use our
              services.
            </p>

            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>2. Program Applications</h2>
            <p>
              Submitting an application does not guarantee acceptance into any program. We review
              every application and respond within 48 hours. We reserve the right to reject any
              application at our discretion.
            </p>

            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>3. Investment Terms</h2>
            <p>
              Investment amounts and terms are determined on a case-by-case basis and documented
              in separate legal agreements. No investment is guaranteed by the submission of an
              application or participation in a program.
            </p>

            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, is the
              property of BlueSPACE Innovation Hub and protected by applicable intellectual
              property laws.
            </p>

            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>5. Limitation of Liability</h2>
            <p>
              BlueSPACE Innovation Hub shall not be liable for any indirect, incidental, special,
              or consequential damages arising from your use of our website or services.
            </p>

            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>6. Changes</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be posted on
              this page with an updated revision date.
            </p>

            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>7. Contact</h2>
            <p>
              For questions about these terms, contact us at legal@bluespace.vc.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
