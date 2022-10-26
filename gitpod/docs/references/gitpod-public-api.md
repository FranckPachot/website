---
section: gitpod-public-api
title: Gitpod public API
---

<script context="module">
  export const prerender = true;
</script>

# Gitpod public API

> **⚠️ Warning:** Public API is currently in development and may change frequently before it reaches General Availability.

## About the Gitpod API

It helps you to manage Gitpod Workspaces directly through REST APIs.

## API Reference

- [List all workspaces](#list-all-workspaces)
- [Get a workspace](#get-a-workspace)
- [Create & start workspace](#create--start-workspace)
- [Get owner token](#get-owner-token)

### List all workspaces

It lists all the workspaces belongs to the authenticated user.

### Get a workspace

It only returns a single workspace to the authenticated user.

### Create & start workspace

It creates and start a new/ old workspace to the authenticated user.

### Get owner token

It returns the owner token of authenticated user.
