---
section: languages
title: JavaScript in Gitpod
---

<script context="module">
  export const prerender = true;
</script>

# JavaScript in Gitpod

Gitpod comes with great built-in support for JavaScript, TypeScript, and tools like Node.js, npm, & yarn pre-installed with [Gitpod workspace image](https://www.gitpod.io/docs/configure/workspaces/workspace-image). This guide walks you through how to fully configure a JavaScript application using Gitpod.

## Prerequisites

This guide assumes familiarity with:

[Docker](https://docs.docker.com/), [YAML](https://yaml.org/spec/1.1/), [Linux](https://www.linux.org/), [Bash](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html) and Linux [environment variables](https://wiki.archlinux.org/title/environment_variables).

## Getting started / Quick Start

`youtube: w65POyu3ZUQ`

To see a full working Node/TypeScript application, take a look at [gitpod-io/template-typescript-node](https://github.com/gitpod-io/template-typescript-node). To update an existing JavaScript application, follow the steps below in this guide.

<a href="https://gitpod.io/#https://github.com/gitpod-io/template-typescript-node">
    <img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Push" align="center" >
</a>

## Start tasks

Many JavaScript projects these days use some sort of build tool for things like bundling, linting, code-splitting and so on and they also use a package manager, typically either npm or Yarn for managing dependencies.

You can automate the process of installing dependencies and starting any tasks like `build`, `lint`, `test` and so on at the workspace startup, for doing so please create a [.gitpod.yml](/docs/references/gitpod-yml) file in the root of your project and add the tasks you want to be automated. An example might look like this:

```yaml
tasks:
  - init: npm install && npm run build
    command: npm run dev
```

<span aria-hidden="true">👆</span> In the above example, we are telling Gitpod to run what is in the `init` phase at the time of workspace initialization and then afterwards run whatever is in the `command` phase.

Read more about [start tasks](/docs/configure/workspaces/tasks).

## Node Versions

Gitpod comes with the latest stable Node.js version pre-installed but let's say your project uses a different version of `node` (say `14.8.0` for example), well the good news is that Gitpod also comes with `nvm` (a tool used to manage multiple active Node.js versions) installed. To install and configure the desired version of node create a [.gitpod.Dockerfile](/docs/configure/workspaces/workspace-image) and add the following to it:

```dockerfile
FROM gitpod/workspace-full:latest

RUN bash -c 'VERSION="14.8.0" \
    && source $HOME/.nvm/nvm.sh && nvm install $VERSION \
    && nvm use $VERSION && nvm alias default $VERSION'

RUN echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix
```

and then in your [.gitpod.yml](/docs/references/gitpod-yml) reference your [.gitpod.Dockerfile](/docs/configure/workspaces/workspace-image) as shown below:

```yaml
image:
  file: .gitpod.Dockerfile
```

Then, after committing your changes, start a new workspace, the version for that workspace will be what you’ve specified in your [.gitpod.Dockerfile](/docs/configure/workspaces/workspace-image).

## Using ESLint for linting

If your project's `package.json` does not mention ESLint as a dependency then you have to install it first. For installing it add the following to the end of the `init` phase of your [.gitpod.yml](/docs/references/gitpod-yml) as shown:

```yaml
tasks:
  - init: npm install && npm run build && npm install -g eslint
```

and then search for `eslint` in the extensions tab and then install it from there using the install button as shown in the screenshot.

![Install ESLint in Gitpod](.../../../static/images/docs/eslint-extension.png)

## Making Live Reload work in Rollup based projects like Svelte

This section was moved into [Svelte guide](/docs/introduction/languages/svelte).

## Further Reading

- [Sustainable Node.js development with only a browser](/blog/node-js-development).
- [Developing a Nuxt.js app entirely in your browser](/blog/developing-nuxtjs-in-browser)
- [Gitpodifying — The Ultimate Guide](/guides/gitpodify)
- [Debugging Node.js applications in Theia](/blog/node-js-gitpod)
