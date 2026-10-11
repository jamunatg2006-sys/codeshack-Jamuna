# 📌 Useful Git Commands Guide

A simple, practical guide to the most essential Git commands I use regularly for version control and collaborating on GitHub.

---

## 1. `git clone` — Copy a Repository to Your Computer
Downloads an existing repository from GitHub to your local machine.

- **Command:**
  ```bash
  git clone <repository-url>
  ```
- **Example:**
  ```bash
  git clone https://github.com/jamunatg2006-sys/codeshack-Jamuna.git
  ```
- **When to use:** When starting work on a new project or cloning a project to a new computer.

---

## 2. `git status` — Check the Current State
Shows which files have been modified, staged, or remain untracked.

- **Command:**
  ```bash
  git status
  ```
- **Example Output:**
  ```text
  On branch main
  Changes not staged for commit:
    modified:   README.md
  ```
- **When to use:** Run this before adding or committing files to see what has changed.

---

## 3. `git add` — Stage Files for Commit
Tells Git which modified or new files to include in the next commit.

- **Stage a specific file:**
  ```bash
  git add README.md
  ```
- **Stage all changes in the project:**
  ```bash
  git add .
  ```
- **When to use:** After editing code, stage the files before saving them with a commit.

---

## 4. `git commit` — Save Your Staged Changes
Creates a snapshot of your staged files along with a clear, descriptive message.

- **Command:**
  ```bash
  git commit -m "Your clear description here"
  ```
- **Example:**
  ```bash
  git commit -m "feat: add interactive learning quote modal for LeetCode"
  ```
- **When to use:** Whenever you complete a logical unit of work (like fixing a bug, adding a component, or updating docs).

---

## 5. `git push` — Upload Commits to GitHub
Sends your local commits to your remote repository on GitHub so your work is backed up and visible online.

- **Command:**
  ```bash
  git push origin <branch-name>
  ```
- **Example:**
  ```bash
  git push origin main
  ```
- **When to use:** After making one or more local commits and you are ready to update GitHub.

---

## 6. `git pull` — Fetch and Merge Latest Remote Changes
Downloads new changes from GitHub and automatically merges them into your current local branch.

- **Command:**
  ```bash
  git pull origin main
  ```
- **When to use:** At the start of each coding session or before creating a new branch to keep your local code up to date.

---

## 7. `git log` — View Commit History
Displays the history of commits in the repository.

- **Full log:**
  ```bash
  git log
  ```
- **Clean one-line summary:**
  ```bash
  git log --oneline
  ```
- **Example Output:**
  ```text
  655db31 docs(readme): rewrite readme with simple language and 10 clear rules
  1e9e942 feat(leetcode): replace external profile link with interactive learning quote modal
  82c9e6b feat(routes): configure multi-page routes, SEO metadata, and portfolio documentation
  ```
- **When to use:** To review recent commits, inspect commit hashes, or verify your git history.

---

## 8. `git branch` — Manage Project Branches
Lists, creates, or deletes branches to work on features safely without affecting the main codebase.

- **List all branches:**
  ```bash
  git branch
  ```
- **Create a new branch:**
  ```bash
  git branch feature/new-component
  ```
- **Delete a branch:**
  ```bash
  git branch -d feature/new-component
  ```
- **When to use:** To isolate new experimental features or bug fixes from the `main` branch.

---

## 9. `git checkout` / `git switch` — Switch Between Branches
Moves your working directory to another branch.

- **Switch to an existing branch:**
  ```bash
  git switch feature/new-component
  # or
  git checkout feature/new-component
  ```
- **Create and switch to a new branch in one command:**
  ```bash
  git switch -c feature/dark-mode
  # or
  git checkout -b feature/dark-mode
  ```
- **When to use:** When switching tasks or starting a new feature branch.

---

## 10. `git diff` — Inspect Exact Changes
Shows the exact line-by-line differences between your current code and the last committed version.

- **View unstaged changes:**
  ```bash
  git diff
  ```
- **View staged changes:**
  ```bash
  git diff --staged
  ```
- **When to use:** Before running `git add` to review what lines were added, changed, or deleted.

---

## 💡 Quick Everyday Workflow Cheat Sheet

Whenever I work on my portfolio, I follow this simple sequence:

```bash
# 1. Check current status
git status

# 2. Stage the modified files
git add .

# 3. Save snapshot with a descriptive message
git commit -m "feat: update project details"

# 4. Push safely to GitHub
git push origin main
```

---

*Authored by Jamuna T G &bull; Sir MVIT Bengaluru*
