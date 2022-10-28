import type {
  ManifestoBenefit,
  ManifestoListItem,
} from "$lib/types/cloud-dev-environments";

export const ManifestoItems: ManifestoListItem[] = [
  {
    description: "A fresh disposable development environment for every task.",
    heading: "Ephemeral",
    subHeading: "over long lived",
  },
  {
    description: "Declaratively automated and history-independent",
    heading: "Reproducible",
    subHeading: "over cobbled together",
  },
  {
    description:
      "Creating unrestricted opportunities for creativity, productivity, agility and joy.",
    heading: "Easy",
    subHeading: "over arduous",
  },
  {
    description: "Isolated and self-reliant",
    heading: "Independent",
    subHeading: "over tangled",
  },
  {
    description: "Reliably and instantaneously obtainable, seemingly infinite.",
    heading: "Available",
    subHeading: "over scarce",
  },
  {
    description:
      "The means to support the most expansive development activities.",
    heading: "Resourceful",
    subHeading: "over constrained",
  },
  {
    description: "Equitable and approachable.",
    heading: "Inviting",
    subHeading: "over daunting",
  },
];

export const ManifestoBenefits: ManifestoBenefit[] = [
  {
    heading: "No configuration drift",
    description:
      "CDEs are automatically created afresh for every task. This way code and development environment always align, and all contributors operate from a consistent configuration. No more “works on my machine”.",
  },
  {
    heading: "Peace of mind",
    description:
      "CDEs are independent of each other. Breaking one has no effect on others. This provides a safe space to explore, play and experiment. Because CDEs are ephemeral, mistakes are no longer permanent. No more “fixing your laptop” after trying to use the latest version of something.",
  },
  {
    heading: "Parallelism and multi-track development",
    description:
      "Cloud Development Environments are available in abundance. Quickly reviewing the change of someone else no longer means you have to move away from what you’re currently working on. Trying out a tool or different setup no longer breaks other parallel activities. Inviting peers to what you’re currently doing does not break their current work stream.",
  },

  {
    heading: "Space to learn and play",
    description:
      "Cloud Development Environments remove the barrier to exploring code, projects and repositories. Because there is no setup effort, and no risk of breaking the environment you’re working in, CDEs offer a great space to explore and learn about new technologies.",
  },
  {
    heading: "Safe and Secure",
    description:
      "Cloud Development Environments are short-lived, which shortens the attack windows in which resources, secrets or infrastructure could be at risk. Because CDEs are ephemeral, secrets and other keys are inherently tightly scoped and short-lived, i.e. should they get compromised they would not be of much use for long. Continuous development environments are isolated from other work which reduces the impact of supply chain attacks. E.g. arbitrary code execution as part of a software build can only affect what’s in the CDE, and not everything that’s running on your laptop. ",
  },
];
