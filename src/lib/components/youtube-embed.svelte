<script lang="ts">
  import LiteYouTube from "svelte-lite-youtube-embed";
  import { trackEvent } from "./segment.svelte";
  import Share from "./share.svelte";
  import Card from "$lib/components/ui-library/card";
  import type { ShareLink } from "$lib/types/share-link";

  export let embedId: string;
  export let title: string;

  const videoLoadedSuccessfully = () => {
    trackEvent("screencast_started", {
      id: embedId,
      name: title,
      url: window.location.href,
      path: window.location.pathname,
    });
  };

  export const youtubeURL = `https://youtube.com/watch?v=${embedId}`;

  const shareLinks: ShareLink[] = [
    {
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        youtubeURL
      )}`,
      icon: {
        src: "/svg/brands/twitter.svg",
        alt: "Twitter",
      },
      trackingName: "twitter",
    },
    {
      href: `http://www.reddit.com/submit?url=${encodeURIComponent(
        youtubeURL
      )}`,
      icon: {
        src: "/svg/brands/reddit.svg",
        alt: "Reddit",
      },
      trackingName: "reddit",
    },
    {
      name: "Hacker News",
      href: `http://news.ycombinator.com/submitlink?u=${encodeURIComponent(
        youtubeURL
      )}`,
      icon: {
        src: "/svg/brands/hackernews.svg",
        alt: "HackerNews",
      },
      trackingName: "hackernews",
    },
  ];
</script>

<style lang="postcss">
  div :global(.youtube::after) {
    display: block;
    content: "";
    padding-top: 56.25%;
  }
  div :global(.lite-youtube) {
    max-width: 100%;
    aspect-ratio: 16 / 9;
  }
</style>

<div class="flex-grow">
  <Card
    size="small"
    class="relative overflow-hidden max-w-full shadow-normal aspect-video"
    stroked={false}
  >
    <div class=".liteyoutube">
      <LiteYouTube
        videoId={`${embedId}`}
        videoTitle={`${title}`}
        params="enablejsapi=1"
        posterQuality="maxresdefault"
        noCookie={true}
        on:iframeLoaded={videoLoadedSuccessfully}
      />
    </div>
  </Card>
  <Share
    text="Share this video"
    {shareLinks}
    class="share justify-end mx-auto mt-xx-small"
  />
</div>
