import crypto from "node:crypto";
import type { AnalyticsPayload, PageProps } from "../types/analytics";

declare global {
  interface Window {
    prevPages?: string[];
  }
}

export const generateHash = async (value: string) => {
  const hash = crypto.createHash("sha512").update(value).digest("hex");
  return hash;
};

const getPageProps = (): PageProps => {
  return {
    path: window.location.pathname,
    url: window.location.href,
    search: window.location.search,
    title: document.title,
    referrer: window.prevPages
      ? window.prevPages[window.prevPages.length - 1]
      : undefined,
  };
};

export const trackPage = async () => {
  const pageProps = getPageProps();
  const body: AnalyticsPayload = {
    type: "page",
    props: pageProps,
    context: { page: pageProps },
  };

  await fetch("/api/analytics", {
    method: "POST",
    body: JSON.stringify(body),
  });
};
