# HipHop Princess Top Ranking App

## Overview
Interactive K-pop/hip-hop themed web application where users can create custom top rankings of competition show participants. Features a pyramid-style ranking system with drag-and-drop functionality.

## Project Structure
- **Frontend Only**: Pure client-side application with static HTML/CSS/JS
- **Main Page** (`index.html`): Interactive ranking pyramid with search and filtering
- **Participants Page** (`participants.html`): Detailed contestant profiles
- **Server**: Simple Express.js static file server for development

## Current State
✅ **Successfully Set Up for Replit Environment**
- Configured Node.js Express server on port 5000
- Set up workflow: "HipHop Princess Server" 
- Configured deployment target: autoscale (static website)
- Server properly configured with 0.0.0.0 host for Replit proxy
- Cache disabled for development

## Features
- Interactive pyramid ranking system (1-40 participants)
- Search and filter contestants by name
- Country-based categorization (Korea/Japan)
- Download rankings as PNG images
- Responsive design with country-specific styling

## Technical Details
- **Port**: 5000 (frontend)
- **Host**: 0.0.0.0 (configured for Replit environment)
- **Dependencies**: Express.js for static file serving
- **External Resources**: Images hosted on imgur.com and catbox.moe

## Project Architecture
Simple static website architecture:
```
├── index.html          # Main ranking interface
├── participants.html   # Participant profiles
├── script.js          # Main application logic
├── participants.js    # Participant data and profile rendering
├── style.css          # Main page styling
├── participants.css   # Participants page styling
├── server.js          # Express static file server
└── package.json       # Node.js dependencies
```

## Recent Changes
- **2025-09-13**: Initial Replit environment setup
  - Created Express.js server for static file serving
  - Configured proper host settings (0.0.0.0:5000)
  - Set up workflow and deployment configuration
  - Added cache-control headers for development
  - Project successfully imported and running