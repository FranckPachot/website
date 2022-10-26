<script lang="ts">
  import type { ManifestoListItem } from "$lib/types/cloud-dev-environments";
  import Section from "$lib/components/section.svelte";

  export let manifestoItems: ManifestoListItem[];
</script>

<style lang="postcss">
  ol {
    list-style-type: decimal-leading-zero;
  }
</style>

<Section class="flex flex-col items-center justify-center w-full">
  <div class="mb-small md:mb-medium">
    <h2 class="text-center h2 mb-macro md:!mb-micro">
      Cloud developer environments manifesto
    </h2>

    <p class="text-large text-center mx-auto">xyz</p>
  </div>
  <ol
    class="list-outside columns-1 md:columns-2 gap-xx-large space-y-small p-medium lg:pl-x-large"
  >
    {#each manifestoItems as item}
      <li
        class="marker:mr-x-small break-inside-avoid marker:text-primary marker:text-h4"
      >
        <h4 class="h3 !mb-micro lg:!mb-xx-small">
          <span class="text-important">{@html item.heading} </span><span
            class="text-light-grey"
          >
            {item.subHeading}</span
          >
        </h4>
        <p class="text-p-large">{item.description}</p>
      </li>
    {/each}
  </ol>
</Section>
