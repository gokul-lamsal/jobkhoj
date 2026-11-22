# Admin Layout — nav spec

Reference for wiring the `/admin` area into an `AdminLayout` built on the
existing `AdminCompanyLayout` pattern (`src/components/AdminCompanyShared/AdminCompanyLayout.jsx`).

## Sidebar

**Logo (top)**
- Purple circle containing `L` (or `LL`)
- Text: `Lunar Portal`

**Section label:** `ADMINISTRATION`

| Item | Route | Icon | Notes |
| --- | --- | --- | --- |
| Overview | `/admin` | `FiGrid` (alt: `FiLayoutDashboard`) | Active item — indigo pill (`bg-indigo-50 text-indigo-700`) |
| Pending companies | `/admin/pending-companies` | `FiBuilding` (alt: `FiBriefcase`) | Rose badge showing `4` (`bg-rose-500 text-white`) |
| Users | `/admin/users` | `FiUser` (alt: `FiUsers`) | — |
| Jobs | `/admin/jobs` | `FiBriefcase` (alt: `FiFileText`) | — |

**Bottom**
| Item | Icon |
| --- | --- |
| Log out | `FiLogOut` |

All icons from `react-icons/fi`.

## Top bar

Reuse `AdminCompanyTopBar` (`src/components/AdminCompanyShared/AdminCompanyTopBar.jsx`).

- Bell icon — notifications
- Purple avatar circle: `PA`
- Name: `Platform Admin`
- Role: `Admin`

`AdminCompanyTopBar` already accepts:

```js
profile = { initials, name, subtitle }
```

Pass:

```js
{ initials: "PA", name: "Platform Admin", subtitle: "Admin" }
```

## navGroups

```jsx
import { FiBuilding, FiBriefcase, FiGrid, FiUser } from "react-icons/fi";

const navGroups = [
  {
    label: "ADMINISTRATION",
    links: [
      { title: "Overview", to: "/admin", icon: FiGrid, end: true },
      { title: "Pending companies", to: "/admin/pending-companies", icon: FiBuilding, badge: 4 },
      { title: "Users", to: "/admin/users", icon: FiUser },
      { title: "Jobs", to: "/admin/jobs", icon: FiBriefcase },
    ],
  },
];
```

`AdminCompanyLayout` already supports exactly this shape:

```jsx
<AdminCompanyLayout
  logoTo="/admin"
  navGroups={navGroups}
  profile={{ initials: "PA", name: "Platform Admin", subtitle: "Admin" }}
  onLogout={handleLogout}
/>
```

## Route wiring (suggested)

```jsx
{
  path: "/admin",
  element: <RoleProtectedRoute allowedRoles={"admin"} />,
  children: [
    {
      element: <AdminLayout />, // or AdminCompanyLayout directly
      children: [
        { path: "", element: <AdminOverview /> },
      ],
    },
  ],
},
```

`RoleProtectedRoute` (`src/components/auth/RoleProtectedRoute.jsx`) compares
`user.role !== allowedRoles`, so pass `allowedRoles="admin"`.

## Page content outline (from design)

Main panel heading: **Platform overview** / "A quick look at how the portal is doing."

Stat cards:

| Card | Value | Sub-label |
| --- | --- | --- |
| Total users | 1,284 | +24 this week (emerald) |
| Job seekers | 1,102 | 86% of users (emerald) |
| Companies | 181 | 120 approved (emerald) |
| Pending approval | 4 | Needs review (amber) |
| Total jobs | 536 | 412 active (emerald) |
| Applications | 3,906 | +120 this week (emerald) |

Each card has a soft-tinted icon tile on the right (indigo / sky / violet / amber / emerald / indigo).

**Platform breakdown** — three rows with labels + counts on the right and colored progress bars:
- Users — 1102 seekers · 181 companies (blue, split)
- Companies — 120 approved · 61 other (emerald + amber)
- Jobs — 412 active · 124 inactive (violet + gray)

**Companies waiting for approval** — list rows with initials avatar (gradient), name, `email · location`, and actions:
- Approve — emerald solid/solid-tint button
- Reject — rose tint button
- Header action: "View all 4 >"
