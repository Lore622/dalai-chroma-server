# Chroma Server on Render

This repo is for deploying a persistent Chroma vector store server on Render using Docker.

## Getting Started

1. Upload this repo to GitHub.
2. On Render.com, create a **Web Service**.
3. Use these settings:
   - Environment: **Docker**
   - Port: **8000**
   - Autostart: ✅

## Directory Structure

- `chroma-data/`: Volume mount for persistence (can be empty or .gitignored)