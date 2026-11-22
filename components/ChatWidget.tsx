import Script from "next/script";

/**
 * Site chat widget slot. bippibot.com has no chat embed in this repo yet, so this
 * renders nothing until the embed is configured with env vars on the service:
 *
 *   NEXT_PUBLIC_CHAT_WIDGET_SRC            script URL from the chat provider (required)
 *   NEXT_PUBLIC_CHAT_WIDGET_ID             optional, sent as data-widget-id
 *   NEXT_PUBLIC_CHAT_WIDGET_RESOURCES_URL  optional, sent as data-resources-url
 *
 * (LeadConnector/HighLevel chat uses all three.) NEXT_PUBLIC_* values are read at
 * build time, so redeploy after setting them.
 */
export default function ChatWidget() {
  const src = process.env.NEXT_PUBLIC_CHAT_WIDGET_SRC;
  if (!src) return null;
  const id = process.env.NEXT_PUBLIC_CHAT_WIDGET_ID;
  const resources = process.env.NEXT_PUBLIC_CHAT_WIDGET_RESOURCES_URL;
  return (
    <Script
      id="bippibot-chat-widget"
      src={src}
      strategy="lazyOnload"
      {...(id ? { "data-widget-id": id } : {})}
      {...(resources ? { "data-resources-url": resources } : {})}
    />
  );
}
