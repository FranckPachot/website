<script lang="ts">
  import Download from "$lib/components/whitepaper/cloud-dev-environments/download.svelte";
  import Section from "$lib/components/section.svelte";
  import WhitepaperInfo from "./whitepaper-info.svelte";
</script>

<Section class="flex items-center gap-small lg:gap-0 flex-wrap">
  <div class="w-full lg:w-1/2">
    <WhitepaperInfo
      description="Curious how to supercharge your engineers with continuous development in the cloud? In this whitepaper we’ll establish the concept of cloud development environments (CDEs)."
      title="Cloud development environments"
      label="Whitepaper"
    />
  </div>
  <div class="w-full lg:w-1/2">
    <Download class="mx-auto" toType="cde-whitepaper" eventType="Whitepaper" />
  </div>
</Section>
