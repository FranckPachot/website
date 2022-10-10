<script lang="ts">
  import { onMount } from "svelte";

  export let link: string = "";

  onMount(() => {
    // @ts-ignore
    window?.twttr?.widgets.load();
  });
</script>

<svelte:head>
  <script
    async
    src="https://platform.twitter.com/widgets.js"
    charset="utf-8"></script>
</svelte:head>

<div>
  <blockquote class="twitter-tweet">
    {#if Object.keys($$slots).length !== 0}
      <slot />
    {:else}
      <p>{"Loading..."}</p>
    {/if}
    <a href={link}>source tweet</a>
  </blockquote>
</div>
