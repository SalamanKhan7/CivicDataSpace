# CivicDataSpace – Open Dataset Explorer

CivicDataSpace is a modern, responsive web application built using **Next.js (App Router)** and **Tailwind CSS** that enables users to explore open civic datasets across different sectors.

---

## What I Built

- Developed a complete UI using **Next.js App Router** and **Tailwind CSS**
- Created reusable components: `Header`, `Footer`, `DataCard`, `Sector`, etc.
- Designed responsive layout with **grid/list view** support
- Implemented **dynamic dataset cards** with:
  - Title, description, publisher, and sector tags
  - Date formatting, download count, and source website link
  - Conditional rendering of charts icon and publisher logos
- Mobile-friendly navigation with **hamburger toggle menu**
- Integrated **environment variables** for API base URL
- Wrote **unit test cases** using **React Testing Library**
- Structured project folders with **scalability and maintainability** in mind

---

## 🛠 Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Images/Links**: `next/image`, `next/link`

## More Improvement

- **State (Advanced)**: Redux (for filters and sorting)
- **Data Fetching (Advanced)**: React Query
- **Download (Advanced)**: XLSX + file-saver (Excel download)
- **Charts (Advanced)**: Recharts for dataset visualizations

---

## Folder Highlights

/app → App router structure (pages)
/components → UI components like Header, Footer, DataCard
/store → Zustand store for UI state
/hooks → React Query hooks (data fetching)
/utils → Download & formatting helpers
/tests → Unit tests for components
/public → Static assets like logos

---

## Setup Instructions

Clone the repo:
git clone https://github.com/your-username/civic-data-space.git
cd civic-data-space
npm install
NEXT_PUBLIC_API_BASE_URL=https://api.datakeep.civicdays.in
NEXT_PUBLIC_BASE_URL=https://api.datakeep.civicdays.in/api/search/dataset/
npm run dev

## Submission

GitHub Repo: https://github.com/your-username/civic-data-space
Live Demo: https://your-deployment-url.vercel.app

```

```
