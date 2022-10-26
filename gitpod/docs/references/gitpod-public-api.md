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

It helps you to manage Gitpod Workspaces directly through gRPC APIs.

# API Reference

## Workspaces

> **⚠️ Warning:** JS/TS Clients requires atleast `Node 17`

- [List all workspaces](#list-all-workspaces)
- [Get a workspace](#get-a-workspace)
- [Create & start workspace](#create--start-workspace)
- [Get owner token](#get-owner-token)
- [Stop workspace](#stop-workspace)

### List all workspaces

It lists all the workspaces belongs to the authenticated user.

**Usage**: `listWorkspaces()`

**Request Parameters**:

| Parameter                   | Description                                                   | Type  | Required |
| --------------------------- | ------------------------------------------------------------- | ----- | -------- |
| `pageSize`                  | It is maximum number of results we expect                     | Int32 | false    |
| `fieldMask` (_coming soon_) | It used to specify a subset of fields that should be returned | Int32 | false    |

#### **Reponse Parameters**:

| Parameter         | Description                                                                                                              | Type   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------ | ------ |
| `next_page_token` | Next Page Token                                                                                                          | string |
| `workspaceId`     | Workspace Id                                                                                                             | string |
| `ownerId`         | User Id                                                                                                                  | string |
| `projectId`       | Project Id                                                                                                               | string |
| `context`         | `contextUrl` with details of git or prebuild or snapshot                                                                 | string |
| `status`          | will return Instance Id if currently assigned Instance Id to this workspace. Empty when there is no Instance Id assigned | string |

### Get a workspace

It only returns a single workspace to the authenticated user.

### Create & start workspace

It creates and start a new/ old workspace to the authenticated user.

### Get owner token

It returns the owner token of authenticated user.

#### Stop workspace

It stops a running workspace (instance).
