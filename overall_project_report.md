# GovPath Project Report

## Overview
**GovPath** is a premium, state-of-the-art web application designed to be the ultimate guide for government job aspirants in India. It provides a centralized, searchable, and highly detailed database of various competitive exams, complemented by an integrated AI assistant to help users navigate their preparation journey.

---

## Key Features

### 1. Comprehensive Exam Database
- **Search & Filter**: Users can instantly search for exams (e.g., UPSC, SSC, Banking, Railway) and filter them by categories (Central, State, Banking, Defence, etc.).
- **Rich Job Details**: Each exam entry provides in-depth information, including:
  - **Overview & Conducted By**: Essential background on the exam.
  - **Eligibility**: Age, education, and attempt limits.
  - **Syllabus**: Detailed breakdown by subject and stage.
  - **Exam Pattern**: Clear explanation of prelims, mains, and interview stages.
  - **Salary & Perks**: Real-world monthly in-hand salaries and government benefits.
  - **Preparation Tips**: Expert-curated advice for success.
  - **Recommended Books**: Standard references for every subject.

### 2. AI-Powered Assistant (✨ GovPath AI Guide)
- Integrated **Gemini 2.5 Flash** chat widget.
- Capable of answering specific queries about exam dates, preparation strategies, and clarification on syllabus topics.
- Personalized guidance available directly within the app.

### 3. User Experience & Personalization
- **Mandatory Google Login**: Secure authentication via Google OAuth ensures a personalized experience.
- **Bookmarks**: Users can "Star" exams to save them to their personalized "Saved" list for quick access.
- **Premium UI**: Modern dark/light-compatible design with smooth animations, hero stats, and a responsive layout that works across devices.

---

## Technology Stack

| Component | Technology |
| :--- | :--- |
| **Frontend** | HTML5, Vanilla JavaScript, Vanilla CSS |
| **Backend** | Node.js, Express.js |
| **AI Engine** | Google Generative AI (Gemini 2.5 Flash) |
| **Database** | MySQL (via `mysql2`) |
| **Authentication** | Google OAuth (Firebase Frontend + Node.js Backend Sync) |
| **Environment** | Dotenv for secure configuration |

---

## Codebase Structure

- **`index.html`**: The main entry point, containing the application layout, login overlay, and AI chat widget structure.
- **`app.js`**: Core frontend logic handling exam filtering, bookmarking, modal management, and AI chat interactions.
- **`data.js`**: The central "source of truth" containing the massive `JOBS_DATA` array with detailed JSON objects for every exam.
- **`server.js`**: Node.js backend providing top-level API endpoints for AI chat (`/api/chat`) and user status sync (`/api/auth/login`).
- **`db.js`**: Database connection pooling and initialization logic.
- **`styles.css`**: Extensive custom CSS defining the premium look and feel, including layout, animations, and component styling.
- **`firebase-config.js`**: Configuration and logic for Google Authentication signature using Firebase.

---

## Current Status & Roadmap

> [!NOTE]
> The project has recently been refactored to prioritize core functionality and stable data structures.

- **Current State**: Fully functional search, detailed view, and AI chat. Mandatory login flow is active.
- **Recent Updates**:
  - Integration of **Telangana state exams** (Group 1-4).
  - Refined AI prompt for specialized government job guidance.
  - Enhanced mobile responsiveness for the jobs grid.
- **Future Enhancements**:
  - Real-time notification for new exam releases.
  - User-specific study trackers.
  - Document storage for admit cards and notifications.

---

*This report provides a snapshot of the GovPath ecosystem as of April 2026.*
