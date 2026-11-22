/**
 * Preview/staging deployments set SITE_NOINDEX=1 so nothing on them gets
 * indexed. Production leaves it unset, so pages stay indexable there.
 */
export const SITE_NOINDEX = process.env.SITE_NOINDEX === "1" || process.env.SITE_NOINDEX === "true";
