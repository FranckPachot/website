<script lang="ts" context="module">
  export const load: Load = async ({ fetch, url }) => {
    const slug = url.pathname.replace(/\//g, "__");
    const res = await fetch(`/api/${slug}.docs.json`);

    const version =
      versions.filter((item) => item.name === url.pathname.split("/")[2])
        .length > 0
        ? url.pathname.split("/")[2]
        : "Saas";

    const sidebars = Object.entries(
      import.meta.globEager("/src/lib/contents/docs/versioned_sidebars/*ts")
    ).reduce((acc, [path, data]) => {
      const filename = path.split("/").pop().replace(/\.ts$/, "");
      acc[filename.toLowerCase()] = data.MENU;
      return acc;
    }, {});

    try {
      const data = await res.clone().json();
      return { props: { docsMeta: data, sidebars, version } };
    } catch (e) {
      return {
        error: e,
      };
    }
  };
</script>

<script lang="ts">
  import Menu from "$lib/components/docs/menu.svelte";
  import { versions } from "$lib/contents/docs/versions";
  import MobileMenu from "$lib/components/docs/mobile-menu/index.svelte";
  import Search from "$lib/components/docs/search.svelte";
  import "$lib/assets/markdown-commons.scss";
  import { docsMeta as docsMetaStore } from "$lib/stores/docs-meta";
  import OnThisPageNav from "$lib/components/navigation/on-this-page-nav.svelte";
  import type { DocsMeta } from "$lib/types/docs-meta";
  import EditInGitpod from "$lib/components/docs/edit-in-gitpod.svelte";
  import displayBanner from "$lib/stores/display-banner";
  import { onMount, setContext } from "svelte";
  import type { MenuEntry } from "$lib/types/menu-entry";
  import type { Load } from "@sveltejs/kit";
  import { sidebarKey } from "$lib/contents/docs/key";
  import VersionSwitch from "$lib/components/docs/version-switch.svelte";

  let extendSticky: boolean = false;
  export let sidebars: { [key: string]: MenuEntry[] };
  export let version: string;

  $: activeSidebar = sidebars[version.toLowerCase()];

  $: {
    setContext(sidebarKey, activeSidebar);
  }

  onMount(() => {
    extendSticky = $displayBanner;
  });
  export let docsMeta: DocsMeta;

  $: docsMetaStore.set(docsMeta);
</script>

<style lang="postcss">
  .extended-sticky {
    @apply top-24;
  }
</style>

<div class="pb-10 lg:flex lg:pt-10">
  <div
    class:extended-sticky={extendSticky}
    class="hidden z-20 sticky top-24 self-start lg:block lg:w-1/5"
  >
    <Search docSearchInputSelector="algolia-mobile" />
    <Menu MENU={activeSidebar} />
  </div>
  <div class="lg:w-3/5 lg:pl-4">
    <div class="block lg:hidden relative">
      <Search />
      <VersionSwitch {version} />
    </div>
    <MobileMenu MENU={activeSidebar} />
    <div class="lg:border-l lg:border-r lg:border-divider">
      <slot />
    </div>
  </div>
  <div
    class:extended-sticky={extendSticky}
    class="lg:w-1/5 flex-col top-24 self-start sticky gap-4 pl-8 hidden lg:flex max-w-none flex-auto min-w-0"
  >
    <div class="lg:mb-4 relative">
      <VersionSwitch {version} />
      <EditInGitpod />
    </div>
    <OnThisPageNav />
  </div>
</div>
