"use client";

import { usePathname } from "next/navigation";

/** Renders children everywhere except the given paths (used to give landing pages their own minimal chrome). */
export default function HideOnPaths({ paths, children }: { paths: string[]; children: React.ReactNode }) {
  const p = usePathname() || "";
  if (paths.some((x) => p === x || p.startsWith(x + "/"))) return null;
  return <>{children}</>;
}
