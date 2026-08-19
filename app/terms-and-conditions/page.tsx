export const metadata = { title: "Terms and Conditions | BippiBot" };

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold text-[var(--navy-900)] sm:text-4xl">Terms and Conditions</h1>

      <div className="mt-10 space-y-6 text-sm leading-relaxed text-[var(--slate-500)]">
        <p>
          StreamCities, LLC operates the website at https://bippibot.com (the &ldquo;Service&rdquo;). By accessing
          this site, you accept and comply with these terms.
        </p>

        <div>
          <h2 className="text-lg font-semibold text-[var(--navy-900)]">Intellectual Property</h2>
          <p className="mt-2">
            The Service and its original content, features, and functionality are and will remain the exclusive
            property of StreamCities, LLC and its licensors.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[var(--navy-900)]">Third-Party Links</h2>
          <p className="mt-2">
            We assume no responsibility for external websites or their content, and users should review their
            separate privacy policies and terms.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[var(--navy-900)]">Termination</h2>
          <p className="mt-2">
            We may terminate or suspend access to our Service immediately, without prior notice or liability, for
            any reason whatsoever, including, without limitation, if you breach the Terms.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[var(--navy-900)]">Service Disclaimer</h2>
          <p className="mt-2">
            Your use of the Service is at your sole risk. The Service is provided on an &ldquo;AS IS&rdquo; and
            &ldquo;AS AVAILABLE&rdquo; basis, with no warranties expressed or implied.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[var(--navy-900)]">Governing Law</h2>
          <p className="mt-2">These terms follow Canadian law, without regard to conflict of law principles.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[var(--navy-900)]">Modifications</h2>
          <p className="mt-2">
            We reserve discretion to modify these terms, providing 60 days&apos; notice for material changes.
            Continued use of the Service implies acceptance.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[var(--navy-900)]">Contact</h2>
          <p className="mt-2">Users with questions should reach out through the methods listed on our contact page.</p>
        </div>
      </div>

      <p className="mt-12 text-sm font-medium text-[var(--navy-900)]">
        Copyright &copy; {new Date().getFullYear()} StreamCities, LLC. All Rights Reserved.
      </p>
    </section>
  );
}
