## Get the project

The project lives in a shared GitHub repository so everyone can contribute without overwriting each other's work.

Repository: https://github.com/gokul-lamsal/jobkhoj

### First-time setup

Clone the repository and enter the frontend folder:

```powershell
cd D:\projectOne
git clone https://github.com/gokul-lamsal/jobkhoj
cd jobkhoj\frontend
```

If you already have the project cloned, skip the `git clone` command and open your existing frontend folder.

## Install packages

From the folder containing `package.json`, install the project dependencies:

```powershell
npm install
```

You normally do not commit `node_modules`. If a teammate adds a package, pull the changes and run `npm install` again.

## Start the app

```powershell
npm run dev
```

Open the local URL printed in the terminal, usually `http://localhost:5173`.

Useful commands:

```powershell
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check source files with Oxlint
```

## Collaborating with Git branches

Everyone works in the same repository but uses a separate branch for their task. This allows multiple people to develop different pages simultaneously without directly changing the `main` branch.

For example:

- **Repository owner:** Works on `HomePage.jsx` using `feature/home`.
- **Teammate:** Works on `LoginPage.jsx` using `feature/login`.
- **Main branch:** Contains the merged, shared project.

### 1. Update the main branch

Before starting a new task, switch to `main` and download the latest changes:

```powershell
git switch main
git pull origin main
```

### 2. Create your own branch

Create a branch for the page or feature you are developing.

For the Home page:

```powershell
git switch -c feature/home
```

For the Login page, your teammate should create their branch instead:

```powershell
git switch -c feature/login
```

**Important:** Each developer should create and work on their own branch. Do not develop directly on `main`.

### 3. Work on separate files

The relevant JobKhoj frontend structure is:

```text
src/
├── App.jsx
├── main.jsx
├── index.css
├── components/
│   ├── auth/
│   ├── global/
│   └── layout/
├── context/
│   └── AuthContext.jsx
└── pages/
    ├── admin/
    ├── auth/
    │   ├── LoginPage.jsx
    │   └── RegisterPage.jsx
    ├── company/
    ├── public/
    │   └── HomePage.jsx
    └── seeker/
```

The repository owner can work on `src/pages/public/HomePage.jsx`, while a teammate works on `src/pages/auth/LoginPage.jsx`.

Coordinate changes to shared files such as `App.jsx`, `index.css`, `AuthContext.jsx`, and shared components. Assign one person to manage routing and shared configuration when possible.

### 4. Commit and push your changes

When your page is ready, review your changes:

```powershell
git status
git diff
```

Stage and commit your work:

```powershell
git add src/pages/public/HomePage.jsx
git commit -m "Build home page"
```

Push your branch to GitHub:

```powershell
git push -u origin feature/home
```

For the Login page, your teammate would use:

```powershell
git add src/pages/auth/LoginPage.jsx
git commit -m "Build login page"
git push -u origin feature/login
```

Replace the file paths and commit messages as appropriate for your actual changes.

## Merge changes through GitHub Pull Requests

Once your branch has been pushed, merge your work into `main` using a Pull Request (PR).

1. Open https://github.com/gokul-lamsal/jobkhoj.
2. Select **Pull requests → New pull request**.
3. Set the base branch to `main` and the compare branch to your feature branch, such as `feature/home`.
4. Review the changed files and create the Pull Request.
5. Review the changes, then merge the Pull Request into `main`.

Your teammate follows the same steps for `feature/login`.

After both Pull Requests are merged, `main` contains both pages.

**Note:** Git can usually merge changes automatically when developers work on separate files. If you both edit the same file or conflicting lines, GitHub may require you to resolve a merge conflict before merging.

## Get the latest merged changes

After your Pull Request or your teammate's Pull Request has been merged, update your local project:

```powershell
git switch main
git pull origin main
```

When you start another task, create a new branch from the updated `main`:

```powershell
git switch -c feature/next-task
```

## Team rules

- Never commit directly to `main;` use feature branches.
- Give every task a descriptive branch name, such as `feature/home`, `feature/login`, or `feature/register`.
- Commit only the files related to your task whenever practical.
- Push your branch and use a Pull Request to merge changes.
- Pull the latest `main` before starting a new task.
- Coordinate changes to shared files, especially `App.jsx`, routing, global styles, and authentication context.
- Do not commit `node_modules`, `.env` files containing secrets, or other generated files that should remain local.
- If a merge conflict occurs, resolve it carefully and test the app before merging.

This workflow lets the team develop different JobKhoj pages independently while keeping the shared `main` branch organized and stable.