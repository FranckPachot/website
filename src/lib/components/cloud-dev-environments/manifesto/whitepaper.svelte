<script lang="ts">
  import Hero from "$lib/components/whitepaper/cloud-dev-environments/hero.svelte";
  import Download from "$lib/components/whitepaper/cloud-dev-environments/download.svelte";
  import Section from "$lib/components/section.svelte";
</script>

<Section class="flex flex-wrap">
  <div class="w-full lg:w-1/2">
    <Hero
      description="Curious how to supercharge your engineers with continuous development in the cloud? In this whitepaper we’ll establish the concept of cloud development environments (CDEs)."
      title="Cloud development environments"
      label="Whitepaper"
    />
  </div>
  <div class="w-full lg:w-1/2">
    <Download toType="cde-whitepaper" eventType="Whitepaper" />
  </div>
</Section>
