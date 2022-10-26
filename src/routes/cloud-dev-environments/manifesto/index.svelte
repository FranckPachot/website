<script lang="ts">
  import List from "$lib/components/cloud-dev-environments/manifesto/list.svelte";
  import Description from "$lib/components/cloud-dev-environments/manifesto/description.svelte";
  import Benefits from "$lib/components/cloud-dev-environments/manifesto/benefits.svelte";
</script>

<Description />
<List
  manifestoItems={[
    {
      description: "A fresh disposable development environment for every task.",
      heading: "Ephemeral",
      subHeading: "(over long lived)",
    },
    {
      description: "A fresh disposable development environment for every task.",
      heading: "Ephemeral",
      subHeading: "(over long lived)",
    },
    {
      description: "A fresh disposable development environment for every task.",
      heading: "Ephemeral",
      subHeading: "(over long lived)",
    },
  ]}
/>
<Benefits
  benefits={[
    {
      heading: "Safe and Secure",
      description:
        "Cloud Development Environments are short-lived, which shortens the attack windows in which resources, secrets or infrastructure could be at risk. Because CDEs are ephemeral, secrets and other keys are inherently tightly scoped and short-lived, i.e. should they get compromised they would not be of much use for long. Continuous development environments are isolated from other work which reduces the impact of supply chain attacks. E.g. arbitrary code execution as part of a software build can only affect what’s in the CDE, and not everything that’s running on your laptop. ",
    },
    {
      heading: "Safe and Secure",
      description: "Cloud Development Environments are ",
    },
    {
      heading: "Safe and Secure",
      description:
        "Cloud Development Environments are short-lived, which shortens the attack windows in which resources, secrets or infrastructure could be at risk. Because CDEs are ephemeral, secrets and other keys are inherently tightly scoped and short-lived, i.e. should they get compromised they would not be of much use for long. Continuous development environments are isolated from other work which reduces the impact of supply chain attacks. E.g. arbitrary code execution as part of a software build can only affect what’s in the CDE, and not everything that’s running on your laptop. ",
    },

    {
      heading: "Safe and Secure",
      description:
        "Cloud Development Environments are short-lived, which shortens the attack windows in which resources, secrets or infrastructure could be at risk. Because CDEs are ephemeral, secrets and other keys are inherently tightly scoped and short-lived, i.e. should they get compromised they would not be of much use for long. Continuous development environments are isolated from other work which reduces the impact of supply chain attacks. E.g. arbitrary code execution as part of a software build can only affect what’s in the CDE, and not everything that’s running on your laptop. ",
    },
    {
      heading: "Safe and Secure",
      description:
        "Cloud Development Environments are short-lived, which shortens the attack windows in which resources, secrets or infrastructure could be at risk. Because CDEs are ephemeral, secrets and other keys are inherently tightly scoped and short-lived, i.e. should they get compromised they would not be of much use for long. Continuous development environments are isolated from other work which reduces the impact of supply chain attacks. E.g. arbitrary code execution as part of a software build can only affect what’s in the CDE, and not everything that’s running on your laptop. ",
    },
  ]}
/>
