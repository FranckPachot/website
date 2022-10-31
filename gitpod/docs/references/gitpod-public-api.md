---
section: gitpod-public-api
title: Gitpod public API
---

<script context="module">
  export const prerender = true;
</script>

# Gitpod public API

> **⚠️ Warning:** The Public API is currently in active development. Gitpod may change the API contract **at any time** before the API is finally released as Generally Available. Use the API at your own risk. Also see [Release Cycle](/docs/help/public-roadmap/release-cycle) for the guarantees that Gitpod make for our features at various points in our release cycle.

## About the Gitpod API

Gitpod public API automating the management of Gitpod Workspaces directly via gRPC APIs. 

## Authentication

Authentication is currently under development. 

## Client libraries support

Public API currently supports JavaScript/TypeScript (Node). Client libraries in Go are currently planned. 

---

# API Reference

> **⚠️ Warning:** JS/TS Clients requires atleast [`Node 17`](https://nodejs.org/)

- [Workspaces](#workspaces)
  - [List all workspaces](#list-all-workspaces)
  - [Get a workspace](#get-a-workspace)
  - [Create & start workspace](#create--start-workspace)
  - [Get owner token](#get-owner-token)
  - [Start workspace](#start-workspace)
  - [Stop workspace](#stop-workspace)
- [Teams (_Coming soon_)](#teams-coming-soon)
  - [Create a team](#create-a-team)
  - List all teams
  - Get a team
  - Update a team
  - Delete a team

---

## Workspaces

### List all workspaces

It lists all the workspaces belongs to the authenticated user.

**Usage**: `listWorkspaces()`

**Request Parameters**:

| Parameter  |                Description                | Type  | Required |
| :--------: | :---------------------------------------: | :---: | :------: |
| `pageSize` | It is maximum number of results we expect | Int32 |  false   |

<br>

**Response Parameters**:

|    Parameter    |                                                       Description                                                        |  Type  |
| :-------------: | :----------------------------------------------------------------------------------------------------------------------: | :----: |
| `nextPageToken` |                                                     Next Page Token                                                      | string |
|  `workspaceId`  |                                                       Workspace Id                                                       | string |
|    `ownerId`    |                                                         User Id                                                          | string |
|   `projectId`   |                                                        Project Id                                                        | string |
|    `context`    |                                 `contextUrl` with details of git or prebuild or snapshot                                 | string |
|    `status`     | will return Instance Id if currently assigned Instance Id to this workspace. Empty when there is no Instance Id assigned | string |

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

It creates and start a new workspace to the authenticated user.

**Usage**: `createAndStartWorkspace()`

**Request Parameters**:

|  Parameter   |                Description                |  Type  | Required |
| :----------: | :---------------------------------------: | :----: | :------: |
| `contextUrl` | Context Url - git or prebuild or snapshot | string |   true   |
| `prebuildId` |      Prebuild Id, if prebuild exists      | string |  false   |

<br>

**Response Parameters**:

|   Parameter   |                Description                |  Type  |
| :-----------: | :---------------------------------------: | :----: |
| `workspaceId` | Workspace Id of created/started workspace | string |

### Get owner token

It returns the owner token of a workspace.

**Usage**: `getOwnerToken()`

**Request Parameters**:

|   Parameter   | Description  |  Type  | Required |
| :-----------: | :----------: | :----: | :------: |
| `workspaceId` | Workspace Id | string |   true   |

<br>

**Response Parameters**:

| Parameter | Description |  Type  |
| :-------: | :---------: | :----: |
|  `token`  | Owner Token | string |

### Start workspace

It starts an older workspace (instance).

**Usage**: `startWorkspace()`

**Request Parameters**:

|   Parameter   |              Description              |  Type  | Required |
| :-----------: | :-----------------------------------: | :----: | :------: |
| `workspaceId` | Workspace Id that needs to be stopped | string |   true   |

<br>

**Response Parameters**:

|   Parameter    |         Description          |  Type  |
| :------------: | :--------------------------: | :----: |
|  `instanceId`  |         Instance Id          | string |
| `workspaceUrl` | URL of the started workspace | string |

### Stop workspace

It stops a running workspace (instance).

**Usage**: `stopWorkspace()`

**Request Parameters**:

|   Parameter   |              Description              |  Type  | Required |
| :-----------: | :-----------------------------------: | :----: | :------: |
| `workspaceId` | Workspace Id that needs to be stopped | string |   true   |

<br>

**Response**: A message of Workspace Stopped.

---

## Teams (_Coming soon_)

### Create a team

It creates a team.

**Usage**: `createTeam()`

**Request Parameters**:

| Parameter | Description |  Type  | Required |
| :-------: | :---------: | :----: | :------: |
|  `name `  |  Team name  | string |   true   |

<br>

**Response Parameters**:

| Parameter |         Description          |  Type  |
| :-------: | :--------------------------: | :----: |
|   `id`    |         UUID of Team         | string |
|  `name`   |         Name of team         | string |
|  `slug`   | Short version of a Team name | string |
| `members` |  List of members in a team   | array  |
