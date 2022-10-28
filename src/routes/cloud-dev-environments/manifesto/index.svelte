<script lang="ts">
  import {
    ManifestoItems,
    ManifestoBenefits,
  } from "$lib/contents/cde-manifesto";
  import List from "$lib/components/cloud-dev-environments/manifesto/list.svelte";
  import Description from "$lib/components/cloud-dev-environments/manifesto/description.svelte";
  import Benefits from "$lib/components/cloud-dev-environments/manifesto/benefits.svelte";
  import Explore from "$lib/components/explore.svelte";
</script>

<Description />
<List manifestoItems={ManifestoItems} />
<Benefits benefits={ManifestoBenefits} />

<Explore contents={{ title: "Try it out" }} />
