<script lang="ts">
  import {
    ManifestoItems,
    ManifestoBenefits,
  } from "$lib/contents/cde-manifesto";
  import List from "$lib/components/cloud-dev-environments/manifesto/list.svelte";
  import Description from "$lib/components/cloud-dev-environments/manifesto/description.svelte";
  import Benefits from "$lib/components/cloud-dev-environments/manifesto/benefits.svelte";
  import Explore from "$lib/components/explore.svelte";
  import Whitepaper from "$lib/components/cloud-dev-environments/manifesto/whitepaper.svelte";
  import Hero from "$lib/components/cloud-dev-environments/manifesto/hero.svelte";
</script>

<Hero
  subtitle="Manifesto"
  title="Cloud developer environments (CDEs)"
  text="Unleash developer productivity and collaboration by supercharging how you develop."
  image={{
    src: "/images/cde/hero.png",
    alt: "Spawning new developer environments on click",
    darkSrc: "/images/cde/hero-dark.png",
  }}
  btnPrimary={{
    text: "View 7 principles",
    href: "#principles",
  }}
/>

<Description />
<List manifestoItems={ManifestoItems} />
<Benefits benefits={ManifestoBenefits} />

<Whitepaper />
<Explore contents={{ title: "Try it out" }} />
