# CuraLink — Patient & Researcher Discovery Platform (MVP)

CuraLink is an AI-assisted platform designed to connect **patients** and **researchers** by simplifying discovery of **clinical trials**, **health experts**, and **medical publications**.

This MVP was built for a healthcare hackathon challenge, focusing on **clean UI/UX**, **personalized recommendations**, and a fully functional **dual-user flow** (Patients + Researchers) using **Next.js 14 App Router**.

---

## Professional Git Workflow (Used in This Project)

Throughout the CuraLink MVP development, I followed a clean, industry-standard Git workflow.
Each feature was isolated, documented, reviewed, and merged properly.

## Branch List Snapshot
feat/add-trial-page
feat/onboarding-upgrade
feat/patient-dashboard-ui
feat/patient-experts-page
feat/patient-favorites-page
feat/patient-forums-page
feat/patient-publications-page
feat/patient-trials-page
feat/researcher-collaborators
feat/researcher-dashboard
feat/researcher-favorites
feat/researcher-forums
fix/patient-dashboard-links
main
refractor/landing-page
refractor/patient-researcher-sidebar
refractor/sidebar



## 🚀 Features Overview

### ✅ **Patient Experience**
| Feature | Status |
|--------|--------|
| Patient onboarding (condition, location, tags) | ✅ Completed |
| Personalized dashboard | ✅ Completed |
| Clinical trials search + status filter | ✅ Completed |
| Health experts search | ✅ Completed |
| Publications search | ✅ Completed |
| AI-generated summaries (placeholder) | ✅ Completed |
| Save to Favorites (trials, experts, publications) | ✅ Completed |
| Patient forums (ask + view threads) | ✅ Completed |

### ✅ **Researcher Experience**
| Feature | Status |
|--------|--------|
| Researcher dashboard | ✅ Completed |
| Add New Trial form | ✅ Completed |
| Collaborator search | ✅ Completed |
| Save collaborators to Favorites | ✅ Completed |
| Respond to patient questions in forums | ✅ Completed |

### ✅ **Shared System**
- LocalStorage-based Favorites system  
- Dynamic routing for forum threads  
- Clean SaaS-style sidebar layouts  
- Role-based layout separation (Patient vs Researcher)  
- Centralized JSON mock data for MVP  
- Premium design and optimized UI spacing  

---

## 📸 Screenshots 
You can paste real app screenshots here:
[Landing-Page](curalink-mvp/public/Screenshot-landing-page.png)
[Patient-Dashboard](curalink-mvp/public/screenshot-patient-dashboard.png)
[Patient-Onboarding](curalink-mvp/public/screenshot-patient-onboarding.png)
[researcher-Onboarding](curalink-mvp/public/screenshot-researcher-onboarding-page.png)


---

## 🧩 Project Structure (Next.js App Router)

app
├── components
│   ├── PatientSidebar.tsx
│   └── ResearcherSidebar.tsx
├── data
│   ├── collaborators.json
│   ├── experts.json
│   ├── forums.json
│   ├── publications.json
│   ├── researcher-forums.json
│   ├── researcher-trials.json
│   └── trials.json
├── favicon.ico
├── globals.css
├── hooks
│   └── useFavorites.ts
├── layout.tsx
├── page.tsx
├── patient
│   ├── clinical-trials
│   │   └── page.tsx
│   ├── dashboard
│   │   └── page.tsx
│   ├── experts
│   │   └── page.tsx
│   ├── favorites
│   │   └── page.tsx
│   ├── forums
│   │   ├── ask
│   │   ├── page.tsx
│   │   └── [postId]
│   ├── layout.tsx
│   ├── onboarding
│   │   └── page.tsx
│   └── publications
│       └── page.tsx
└── researcher
    ├── add-trial
    │   └── page.tsx
    ├── collaborators
    │   └── page.tsx
    ├── dashboard
    │   └── page.tsx
    ├── favorites
    │   └── page.tsx
    ├── forums
    │   ├── [id]
    │   └── page.tsx
    ├── layout.tsx
    └── onboarding
        └── page.tsx



---

## 🧪 Tech Stack

- **Next.js 14 (App Router)**
- **React 18**
- **Tailwind CSS**
- **React Icons**
- **LocalStorage** (for favorites + profile onboarding)
- **Mock JSON data** for trials, experts, publications, forums

No backend is required for this MVP.

---

## 🧠 Personalization Logic

When a patient completes onboarding, a profile is saved:

```json
{
  "condition": "Lung Cancer",
  "location": "India",
  "tags": ["Tumor"]
}
```

All patient pages use this data to provide auto-filtered, personalized results:

Clinical trials → match trial.condition

Experts → match expert.specialty / condition

Publications → match tags (if added)

This gives a realistic “AI-powered recommendation” feel.

## ⭐ Favorites System

The Favorites system uses a universal React hook:
useFavorites()


✅ Save
✅ Remove
✅ Check if saved
✅ Persistent with localStorage
✅ Unique key system (trial-1, expert-3, etc.)

Supports:

Trials

Experts

Publications

Collaborators

## 📚 Forums System
Patient:

Ask questions

View question threads

Researcher:

View patient questions

Respond with answers

Each question resolves via dynamic route:
/patient/forums/[postId]
/researcher/forums/[id]

## 🛠️ Setup & Installation
1. Clone the repo

git clone https://github.com/Khan4218/curalink-mvp.git
cd curalink

2. Install dependencies

npm install
# or
yarn install

3. Run the app

npm run dev

App will be available at:
👉 http://localhost:3000

## 📦 Deployment (Vercel)

Deployed on vercel: https://curalink-mvp.vercel.app/

## 🎥 Demo Video (MVP)
https://loom.com/share/folder/58055b3816de486e8316eb156d9b72b3

## 🎥 Backend Architecture Overview
https://www.loom.com/share/e9857848263140fe8ee1377c8e1adf46



## 👤 Author

Akbar Khan
Full Stack Developer
Portfolio: https://mir-akbar-portfolio-react-v2.netlify.app/

GitHub: https://github.com/Khan4218


## This MVP meets all requirements for the hackathon challenge:

✅ Dual-flow: Patients & Researchers
✅ Personalized dashboards
✅ Trial/expert/publication discovery
✅ Forums
✅ Favorites
✅ Clean SaaS UI
✅ Production-ready structure

If you're reviewing this project:
Thank you — I hope you enjoy exploring CuraLink!

## 🏗️ Backend Architecture (Planned)

Although this MVP uses mock JSON data for speed (as recommended for the hackathon), the full production version of CuraLink will be powered by a scalable and secure backend architecture built with Node.js / Express or FastAPI, backed by PostgreSQL.

This section outlines how the backend will be implemented when the project moves beyond MVP.

## 1. Tech Stack (Backend)

| Layer                 | Technology                                             | Purpose                                          |
| --------------------- | ------------------------------------------------------ | ------------------------------------------------ |
| **Backend Framework** | Node.js (Express) or FastAPI                           | REST API                                         |
| **Database**          | PostgreSQL                                             | Complex relational data (trials, experts, users) |
| **ORM**               | Prisma / SQLAlchemy                                    | Schema modeling + migrations                     |
| **Authentication**    | JWT / OAuth                                            | Secure access control                            |
| **AI Layer**          | OpenAI API / LLMs                                      | Generating trial + publication summaries         |
| **External APIs**     | PubMed, ORCID, ResearchGate SCRAPE, ClinicalTrials.gov | Live data syncing                                |
| **Deployment**        | Vercel (Frontend) + Render/Fly.io (Backend)            | Hosted environment                               |


## 2. High-Level Architecture Diagram

                    ┌───────────────────────────┐
                    │         Frontend           │
                    │      Next.js (React)       │
                    └──────────────┬─────────────┘
                                   │
                        HTTPS REST API Calls
                                   │
                    ┌──────────────┴─────────────┐
                    │         Backend API         │
                    │ Node.js / FastAPI Server    │
                    ├──────────────┬─────────────┤
                    │   Auth       │  AI Summaries│
                    ├──────────────┼─────────────┤
                    │ External API Integrations   │
                    └──────────────┬─────────────┘
                                   │
                           SQL Queries
                                   │
                    ┌──────────────┴─────────────┐
                    │         PostgreSQL          │
                    │  Users / Experts / Trials   │
                    │ Publications / Favorites    │
                    └────────────────────────────┘


## Database Schema (Initial)

Users Table

| Column     | Type                         | Notes                    |
| ---------- | ---------------------------- | ------------------------ |
| id         | UUID                         | Primary key              |
| role       | ENUM('patient','researcher') | User type                |
| name       | TEXT                         | Optional                 |
| email      | TEXT                         | Auth                     |
| condition  | TEXT                         | For personalized results |
| location   | TEXT                         | City/Country             |
| created_at | TIMESTAMP                    | Default now()            |

Clinical Trials Table

| Column          | Type                     |
| --------------- | ------------------------ |
| id              | UUID                     |
| title           | TEXT                     |
| condition       | TEXT                     |
| status          | TEXT                     |
| investigator_id | UUID (FK researchers.id) |
| summary         | TEXT                     |
| location        | TEXT                     |
| contact         | TEXT                     |

Experts Table

| Column     | Type    |
| ---------- | ------- |
| id         | UUID    |
| name       | TEXT    |
| specialty  | TEXT    |
| condition  | TEXT    |
| experience | TEXT    |
| available  | BOOLEAN |
| contact    | TEXT    |

Favorites Table

| Column     | Type                                 |
| ---------- | ------------------------------------ |
| id         | UUID                                 |
| user_id    | UUID (FK users.id)                   |
| item_type  | ENUM('trial','expert','publication') |
| item_id    | UUID                                 |
| created_at | TIMESTAMP                            |


## 4. Planned API Endpoints (REST)

Authentication
POST /auth/register
POST /auth/login
GET /auth/me

Patient Personalization
GET /patients/:id/profile
PUT /patients/:id/profile

Clinical Trials
GET /trials
GET /trials/:id
POST /trials  (researcher only)
PUT /trials/:id

Experts
GET /experts
GET /experts/:id

Publications
GET /publications
GET /publications/:id

Forums
GET /forums
POST /forums
GET /forums/:id
POST /forums/:id/answer (researcher only)

Favorites
GET /users/:id/favorites
POST /favorites
DELETE /favorites/:item_id


## External API Integrations
ClinicalTrials.gov

Endpoint: https://clinicaltrials.gov/api/v2/studies

Used for: pulling real trial data using condition keywords

PubMed

Used for: fetching live publications related to conditions

ORCID

Used for: researcher profile auto-imports

AI Summaries

Powered by OpenAI GPT models

Summary generated on:

Clinical Trials

Publications

Researcher profiles


## Backend Deployment Plan
Backend Hosting

Render (free, simple)
or
Fly.io (global edge hosting)

Database

PostgreSQL on Neon.tech or Supabase

CI/CD

GitHub Actions → auto deploy to Render

Separate environments: dev, prod
