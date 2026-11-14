"use client";

import { useRouter } from "next/navigation";
import { useRef, useState, type FormEvent } from "react";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-[var(--line-200)] bg-white px-3.5 py-3 text-base text-[var(--navy-900)] outline-none placeholder:text-[var(--slate-400)] focus:border-[var(--blue-500)] focus:shadow-[0_0_0_3px_rgba(47,111,237,0.14)]";

export function PlaybookForm({ initialError }: { initialError?: string }) {
  const router = useRouter();
  const [error, setError] = useState(initialError ?? null);
  const [pending, setPending] = useState(false);
  const pendingRef = useRef(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pendingRef.current) return;
    pendingRef.current = true;
    setPending(true);
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/map-pack-playbook", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          first_name: data.get("first_name"),
          email: data.get("email"),
          business_name: data.get("business_name"),
          bippibot_hp: data.get("bippibot_hp"),
        }),
      });
      const body = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok) {
        setError(body?.error || "Something went wrong. Please try again.");
        pendingRef.current = false;
        setPending(false);
        return;
      }
      router.push("/map-pack-playbook/thanks");
    } catch {
      setError("Something went wrong. Please try again, or email support@bippibot.com.");
      pendingRef.current = false;
      setPending(false);
    }
  }

  return (
    <form
      id="playbook-form"
      action="/api/map-pack-playbook"
      method="post"
      onSubmit={onSubmit}
      className="relative scroll-mt-24 rounded-3xl bg-white p-6 text-[var(--navy-900)] shadow-[0_24px_50px_rgba(0,0,0,0.28)] sm:p-7"
    >
      <div className="pointer-events-none absolute h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Leave this blank
          <input tabIndex={-1} autoComplete="off" name="bippibot_hp" defaultValue="" />
        </label>
      </div>

      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--blue-500)]">Free download</p>
      <h2 className="mt-1 text-2xl font-bold">Send me the playbook</h2>
      <p className="mt-1 text-sm text-[var(--slate-500)]">The download button is on the next page. We don&apos;t email the file.</p>

      <div className="mt-5">
        <label htmlFor="first_name" className="block text-sm font-semibold">
          First name
        </label>
        <input id="first_name" name="first_name" required maxLength={80} autoComplete="given-name" autoCapitalize="words" placeholder="Alex" className={inputClass} />
      </div>
      <div className="mt-4">
        <label htmlFor="email" className="block text-sm font-semibold">
          Email
        </label>
        <input id="email" name="email" type="email" inputMode="email" required maxLength={254} autoComplete="email" placeholder="you@yourbusiness.com" className={inputClass} />
      </div>
      <div className="mt-4">
        <label htmlFor="business_name" className="block text-sm font-semibold">
          Business name <span className="font-medium text-[var(--slate-400)]">(optional)</span>
        </label>
        <input id="business_name" name="business_name" maxLength={120} autoComplete="organization" placeholder="Your business" className={inputClass} />
      </div>

      {error ? (
        <p role="alert" className="mt-4 text-sm font-semibold text-red-600">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        aria-busy={pending}
        className="mt-5 w-full rounded-full bg-gradient-to-r from-[var(--blue-500)] to-[var(--teal-500)] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:opacity-90 disabled:opacity-60"
      >
        {pending ? "Sending…" : "Get the free playbook"}
      </button>
      <p className="mt-3 text-xs leading-relaxed text-[var(--slate-500)]">
        We&apos;ll use your name and email to give you this download and to follow up about BippiBot. We don&apos;t sell your information.{" "}
        <a href="/privacy-policy" className="font-semibold text-[var(--blue-500)] underline underline-offset-2">
          Privacy policy
        </a>
        .
      </p>
    </form>
  );
}
