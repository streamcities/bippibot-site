/**
 * Features that are promised on the page but not built yet.
 *
 * While `comingSoon` is true, the page shows a "Coming soon" badge next to every
 * mention of the feature and uses copy that does not claim it works today.
 * When a feature ships, flip its flag to false: the badges disappear and the
 * copy switches to the "live" wording. Nothing else needs to change.
 */
export const FEATURES = {
  /** The bot noticing on its own that a new listing went live. */
  listingMonitoring: { comingSoon: true },
  /** The 24/7 AI assistant on each listing's landing page. */
  listingChatbot: { comingSoon: true },
} as const;

export type FeatureKey = keyof typeof FEATURES;

export const isComingSoon = (f: FeatureKey): boolean => FEATURES[f].comingSoon;
