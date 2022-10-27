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

It helps you to manage Gitpod Workspaces directly through gRPC APIs. Currently, all of the Authorization is on the server side, but it would be changed in future & will require a `authToken` (_coming soon_) to make an request to the APIs.

# API Reference

## Workspaces

> **⚠️ Warning:** JS/TS Clients requires atleast [`Node 17`](https://nodejs.org/)

- [List all workspaces](#list-all-workspaces)
- [Get a workspace](#get-a-workspace)
- [Create & start workspace](#create--start-workspace)
- [Get owner token](#get-owner-token)
- [Stop workspace](#stop-workspace)

### List all workspaces

It lists all the workspaces belongs to the authenticated user.

**Usage**: `listWorkspaces()`

**Request Parameters**:

| Parameter  |                Description                | Type  | Required |
| :--------: | :---------------------------------------: | :---: | :------: |
| `pageSize` | It is maximum number of results we expect | Int32 |  false   |

<br>

**Response Parameters**:

|     Parameter     |                                                       Description                                                        |  Type  |
| :---------------: | :----------------------------------------------------------------------------------------------------------------------: | :----: |
| `next_page_token` |                                                     Next Page Token                                                      | string |
|   `workspaceId`   |                                                       Workspace Id                                                       | string |
|     `ownerId`     |                                                         User Id                                                          | string |
|    `projectId`    |                                                        Project Id                                                        | string |
|     `context`     |                                 `contextUrl` with details of git or prebuild or snapshot                                 | string |
|     `status`      | will return Instance Id if currently assigned Instance Id to this workspace. Empty when there is no Instance Id assigned | string |

### Get a workspace

It only returns a single workspace to the authenticated user.

**Usage**: `getWorkspace()`

**Request Parameters**:

|   Parameter   | Description  |  Type  | Required |
| :-----------: | :----------: | :----: | :------: |
| `workspaceId` | Workspace Id | string |   true   |

<br>

**Response Parameters**:

|   Parameter   |                                                       Description                                                        |  Type  |
| :-----------: | :----------------------------------------------------------------------------------------------------------------------: | :----: |
| `workspaceId` |                                                       Workspace Id                                                       | string |
|   `ownerId`   |                                                         User Id                                                          | string |
|  `projectId`  |                                                        Project Id                                                        | string |
|   `context`   |                                 `contextUrl` with details of git or prebuild or snapshot                                 | string |
|   `status`    | will return Instance Id if currently assigned Instance Id to this workspace. Empty when there is no Instance Id assigned | string |

### Create & start workspace

It creates and start a new/ old workspace to the authenticated user.

**Usage**: `createAndStartWorkspace()`

**Request Parameters**:

|     Parameter      |                                Description                                 |  Type  | Required |
| :----------------: | :------------------------------------------------------------------------: | :----: | :------: |
| `idempotencyToken` | Token that is used by the server to identify and discard replayed requests | string |   true   |
|    `contextUrl`    |                 Context Url - git or prebuild or snapshot                  | string |   true   |
|    `prebuildId`    |                       Prebuild Id if prebuild exists                       | string |  false   |

<br>

**Response Parameters**:

|   Parameter   |                Description                |  Type  | Required |
| :-----------: | :---------------------------------------: | :----: | :------: |
| `workspaceId` | Workspace Id of created/started workspace | string |   true   |

### Get owner token

It returns the owner token of authenticated user.

#### Stop workspace

It stops a running workspace (instance).
