import { isComingSoon, type FeatureKey } from "./features";

/** "Coming soon" badge. Renders nothing once the feature's flag in features.ts is false. */
export default function ComingSoon({ feature, className = "" }: { feature: FeatureKey; className?: string }) {
  if (!isComingSoon(feature)) return null;
  return (
    <span
      data-coming-soon={feature}
      className={`ml-1.5 inline-flex translate-y-[-2px] items-center whitespace-nowrap rounded-full bg-[#FDE68A] px-2 py-0.5 align-middle text-[11px] font-extrabold uppercase leading-4 tracking-wide text-[#7A2E0E] ${className}`}
    >
      Coming soon
    </span>
  );
}
