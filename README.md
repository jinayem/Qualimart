# React-Vite Monorepo

## Overview

This repository hosts a full-stack application structure using a simple monorepo layout. It combines a front-end client (built with React and Vite) and a dedicated backend service (Node/Python/etc.) within a single version-controlled repository.

## Monorepo Layout

The project is logically segmented into the following primary workspaces located under the root (`react-vite`):

| Directory | Purpose | Technology | Key Files/Notes |
| :--- | :--- | :--- | :--- |
| **`/backend`** | REST API Server | Python/Node/ | Handles all data processing, authentication, and external service integration. |
| **`/my-react-vite-app`** | Client-Side Application | React, Vite | The user interface (UI) responsible for rendering data fetched from the API. |
| **`/.gitignore`** | Configuration | Git | Defines files and directories excluded from version control (e.g., `node_modules/`, sensitive `.env` files). |
| **`package.json`** | Global Tooling | Node.js | Used for root-level scripts (e.g., `test:full`, `setup:all`) and shared development dependencies. |

## Quick Start (Local Development)

Follow these steps to set up and run the entire application stack locally:

### 1. Prerequisites

Ensure you have the following installed:
* [Node.js](https://nodejs.org/en/) (v18+)
* [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
* [Python](https://www.python.org/) (if using Python for backend)

### 2. Installation

Since this is a monorepo, you must install dependencies in both the frontend and backend directories.

```bash
# 1. Install frontend dependencies
cd my-react-vite-app
npm install

# 2. Install backend dependencies (Example for Python venv setup)
cd ../backend
python3 -m venv venv
source venv/bin/activate or venv\scripts\activate on Windows
pip install -r requirements.txt