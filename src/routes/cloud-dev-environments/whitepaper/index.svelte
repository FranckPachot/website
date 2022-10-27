<script lang="ts">
  import Hero from "$lib/components/cloud-dev-environments/whitepaper/hero.svelte";
  import Download from "$lib/components/cloud-dev-environments/whitepaper/download.svelte";
  import YoullLearn from "$lib/components/cloud-dev-environments/whitepaper/youll-learn.svelte";
  import VoicesFromTheIndustry from "$lib/components/cloud-dev-environments/whitepaper/voices-from-the-industry.svelte";
  import Articles from "$lib/components/articles.svelte";
  import Explore from "$lib/components/explore.svelte";
</script>

<div class="flex items-start">
  <div class="max-w-2xl">
    <Hero
      description="Curious how to supercharge your engineers with continuous development in the cloud? In this whitepaper we’ll establish the concept of cloud development environments (CDEs)."
      title="Cloud development environments"
      label="Whitepaper"
    />

    <Download
      class="lgx:hidden"
      toType="getting-started-with-nuaware"
      eventType="Whitepaper"
    />
    <YoullLearn />
    <VoicesFromTheIndustry />
  </div>
  <Download
    toType="getting-started-with-nuaware"
    class="hidden lgx:block"
    eventType="Whitepaper"
  />
</div>
<Articles
  title="Additional resources"
  text="If you are curious to learn more on remote development, 
    have a read through these blog posts."
  textMaxW="max-w-2xl"
  slugs={[
    "gitpod-jetbrains",
    "cloud-based-development-for-everyone",
    "i-said-goodbye-to-local-development-and-so-can-you",
  ]}
/>

<Explore contents={{ title: "Try it out" }} />
