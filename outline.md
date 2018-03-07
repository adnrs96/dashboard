# Dashboard
> Application management dashboard
> Domain `app.asyncy.com`
> Organizations have their own subdomain and unique resources. e.g. `uber.asyncy.com` [$$]

```
/                      Welcome and login
/gh                    List teams you are member of
  /+                   Create Team 1:1 with a GitHub Username
  /:owner              List applications owned by this teams
                       List GitHub Teams and their permissions
    /+                 Create Application
    /:app              Single Application view
```

# `/gh/:owner`
> List applications

Drag-drop story running https://cl.ly/3R2G3e3E121m

# `/gh/:owner/+`
> Create new Application

[Type: App Name]
[Choose: GitHub Repository]
Submit -> {stories/apps/new}

# `/gh/:owner/:app`
> Single Application page

#### Tab: Overview
> Cards of details

- High-level metrics
- Important activity feed
- Stats on stories executed
- Error rates
- Production checks

#### Tab: Storylines
> List recent story executions

[Type: Search Bar] to filter by states and other arguments


#### Tab: Metrics
> Dashboard of metrics


#### Tab: Activity
> Feed of application changes

[Button: Subscribe]
[Button: Webhooks]

List of actions with user avatars.
Actions would include:
- Deploys
- Config changes
- Rollbacks
- CI statuses

#### Tab: Access
[Button: Grant Access] -> Model
  - [Choose: GitHub Team]
  - [Choose: Permission Scope]
  - [Button: Submit] -> {stories/permissions/new}

List GitHub Teams and their permission scope

#### Tab: Services
> Listing containers and their requested environment variables

List of services that are used in the Application.
Each item included:
- Container avatar
- Error rates
- Frequency of call or other metric
- [Button: Configure]

#### Tab: Settings

Sections
- Name
  - [Type: New Name]
  - [Button: Submit] -> {stories/apps/rename}
- Info
  - Storyscript Version
    - [Button: Upgrade] -> {stories/apps/upgrade}
- Domains and certificates
  - Your App is found at `https://{app}.asyncyapp.com`
  - [Button: Add Domain] -> {stories/domains/new}
- Maintenance Mode
  - [Toggle: Turn application off]
- Log Drains (LogDNA)
- Error Handling (Sentry)
- Notifications
  - Slack
  - Webhooks
  - Email
- Delete App
  - [Button: Delete application] -> Model
    - [Type: Application name]
    - [Button: Submit] -> {stories/apps/destory}
