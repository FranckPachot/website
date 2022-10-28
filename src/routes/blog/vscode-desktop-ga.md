---
author: jeanp413, iqqbot, mustard-mh, akosyakov, loujaybee
date: Wednesday, 3 Nov 2022 14:44:00 UTC
excerpt: Lorem
image: webstorm-rubymine-announcement-gitpod.webp
slug: vscode-desktop-ga
subtitle: Lorem
teaserImage: webstorm-rubymine-announcement-gitpod.webp
title: VS Code Desktop with Gitpod is now GA
---

<script context="module">
  export const prerender = true;
</script>

Today, we continue to expand support for our editors by moving VS Code Desktop to [General Availability](/docs/help/public-roadmap/release-cycle). At Gitpod we have a [value](https://www.gitpod.io/blog/gitpod-core-values) _Integrate, don't dictate_ which means that we believe in the power of your choice. It's your developer environment, and the tools you're most productive with.

`youtube: kI6firDA0Bw`

## Getting Started

There are currently two supported ways to open a VS Code Desktop session connected to a Gitpod workspace, either by choosing VS Code Desktop as your default preference, or directly from within VS Code Browser itself.

### From VS Code Browser

1. Start a new Gitpod workspace
2. Open the command palette (⇧⌘P or Ctrl+Shift+P)
3. Type "Open in VS Code" and hit Enter

You will now be redirected to VS Code Desktop.

![Open VS Code via the Command Palette](/images/editors/open-in-vscode-command-palette-light-theme.png)
![Open VS Code via the Command Palette](/images/editors/open-in-vscode-command-palette-dark-theme.png)
_Open VS Code via the Command Palette from within VS Code Browser_

### On Workspace Start

1. Navigate to your [Gitpod preferences](https://gitpod.io/preferences)
2. Select "VS Code" (without the browser label)
3. Restart any running workspaces

When the workspace starts, you will be prompted to open VS Code Desktop. You can also access your workspace using VS Code Browser, or copy SSH credentials from this page.

![Open VS Code Desktop from the workspace start page](/images/editors/vscode-desktop-splash-light-theme.png)
![Open VS Code Desktop from the workspace start page](/images/editors/vscode-desktop-splash-dark-theme.png)
_Open VS Code Desktop from the workspace start page_

![Selecting VS Code Desktop as an editor preference](/images/editors/select-vscode-desktop-preference-light-theme.png)
![Selecting VS Code Desktop as an editor preference](/images/editors/select-vscode-desktop-preference-dark-theme.png)
_Selecting VS Code Desktop as an editor preference_

## Learn more about VS Code Desktop with Gitpod

**Documentation**

- [VS Code Desktop](/docs/references/ides-and-editors/vscode)
- [VS Code extensions](/docs/references/ides-and-editors/vscode-extensions)
- [VS Code Settings Sync](/docs/references/ides-and-editors/settings-sync)

**Blog posts**

- [VS Code Desktop and SSH explained](/blog/vscode-desktop-ssh-updates)
- [From Theia to OpenVSCode Server - A history of Cloud IDEs](/blog/cloud-ide-history)
