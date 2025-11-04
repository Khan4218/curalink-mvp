# CuraLink — Patient & Researcher Discovery Platform (MVP)

CuraLink is an AI-assisted platform designed to connect **patients** and **researchers** by simplifying discovery of **clinical trials**, **health experts**, and **medical publications**.

This MVP was built for a healthcare hackathon challenge, focusing on **clean UI/UX**, **personalized recommendations**, and a fully functional **dual-user flow** (Patients + Researchers) using **Next.js 14 App Router**.

---

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

