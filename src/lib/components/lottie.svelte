<script lang="ts">
  import type { Lottie } from "$lib/types/lottie";

  import { onMount } from "svelte";

  export let lottie: Lottie;

  let player: HTMLElement;
  const { src, style, id } = lottie;

  const handleOnLoad = () => {
    // @ts-ignore
    LottieInteractivity.create({
      player: `#${id}`,
      mode: "scroll",
      actions: [
        {
          visibility: [0.25, 1.0],
          type: "play",
        },
      ],
    });
  };

  onMount(() => {
    player.addEventListener("load", handleOnLoad);

    return () => player.removeEventListener("load", handleOnLoad);
  });
</script>

<svelte:head>
  <script
    src="https://unpkg.com/@lottiefiles/lottie-player@1.5.7/dist/lottie-player.js"
    defer></script>
  <script
    src="https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js"
    defer></script>
</svelte:head>

<lottie-player
  {id}
  {src}
  bind:this={player}
  background="transparent"
  speed="1"
  {style}
  loop={false}
  autoplay
/>
