import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--navy-950)] text-[var(--lavender-300)]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--blue-500)] to-[var(--teal-500)] text-sm font-bold text-white">
                B
              </span>
              <span className="text-base font-bold text-white">BippiBot</span>
            </div>
            <p className="text-sm leading-relaxed text-[var(--lavender-300)]/80">
              The local team that makes your business run on autopilot. Built in Sanibel Island, FL and Las Vegas, NV.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-white">Services</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/packages" className="hover:text-white">Automation Packages</Link></li>
              <li><Link href="/real-estate-video" className="hover:text-white">Real Estate Video</Link></li>
              <li><Link href="/newsletters" className="hover:text-white">Client Newsletters</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-white">Company</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about-us" className="hover:text-white">About</Link></li>
              <li><Link href="/contact-us" className="hover:text-white">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-white">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-white">Get in touch</p>
            <ul className="space-y-2 text-sm">
              <li>(775) 441-7200</li>
              <li>support@bippibot.com</li>
              <li>Mon&ndash;Fri, 9am&ndash;5pm PT</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-[var(--lavender-300)]/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} StreamCities, LLC. All Rights Reserved.</p>
          <p>Sanibel Island, FL &middot; Las Vegas, NV</p>
        </div>
      </div>
    </footer>
  );
}
