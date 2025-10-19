# MyPockets

MyPockets is a personal budgeting and finance tracking web application built with React and Tailwind CSS.  
It helps users plan budgets, track expenses, visualize analytics, and manage transactions in one place.  

---

## Features

- **Responsive Design**: Optimized layout for small, medium, and large screens.  
- **Dynamic Navigation**: Collapsible mobile-friendly navigation bar using a hamburger menu.  
- **Budget Tracking**: Users can input, view, and manage their budget and expenses.  
- **Local Storage Persistence**: Budget and transaction data remain saved between sessions without needing a backend.  
- **Analytics Dashboard**: Displays visual summaries of spending and investments.  
- **User Profile Section**: Displays user name and profile image in the header.  
- **Footer Component**: Stays fixed at the bottom of the page across all screens.  

---

## Tech Stack

- **Frontend**: React  
- **Styling**: Tailwind CSS  
- **Routing**: React Router  
- **Icons**: Lucide React  
- **Data Persistence**: Local Storage  

---

## Folder Structure

# MyPockets

MyPockets is a personal budgeting and finance tracking web application built with React and Tailwind CSS.  
It helps users plan budgets, track expenses, visualize analytics, and manage transactions in one place.  

---

## Features

- **Responsive Design**: Optimized layout for small, medium, and large screens.  
- **Dynamic Navigation**: Collapsible mobile-friendly navigation bar using a hamburger menu.  
- **Budget Tracking**: Users can input, view, and manage their budget and expenses.  
- **Local Storage Persistence**: Budget and transaction data remain saved between sessions without needing a backend.  
- **Analytics Dashboard**: Displays visual summaries of spending and investments.  
- **User Profile Section**: Displays user name and profile image in the header.  
- **Footer Component**: Stays fixed at the bottom of the page across all screens.  

---

## Tech Stack

- **Frontend**: React  
- **Styling**: Tailwind CSS  
- **Routing**: React Router  
- **Icons**: Lucide React  
- **Data Persistence**: Local Storage  

---

## Folder Structure

my-pockets/
│
├── public/
│ ├── transaction.json
│ └── images/
│ └── profile.jpg
│
├── src/
│ ├── components/
│ │ ├── NavBar.jsx
│ │ ├── Greetings.jsx
│ │ ├── Footer.jsx
│ │ ├── History.jsx
│ │ ├── Tips.jsx
│ │ ├── Home.jsx
│ │ ├── Investment.jsx
│ │ └── AnalyticsCom.jsx
│ │
│ ├── pages/
│ │ ├── Budget.jsx
│ │ └── BudgetContext.jsx
│ │
│ ├── App.jsx
│ └── index.js
│
└── package.json


---

## Installation and Setup

1. **Clone this repository**
   ```bash
   git clone https://github.com/ThabangP07/My_Pockets.git
   cd My_Pockets

## Usage

Navigate between pages using the sidebar or hamburger menu.

Add transactions in the Budget page; data automatically saves to local storage.

View spending summaries under the Analytics page.

Pages like tips, history, and investment from the navigation panel are still to be developed stay tuned for that.

## Responsiveness

Small Screens (sm):
The navigation collapses into a hamburger menu, and the greeting, profile, and search bar adjust into a vertical layout.

Medium and Large Screens (md+):
Sidebar navigation and main content display side-by-side for easier desktop use.

## Future Enhancements

Add backend integration (e.g., Firebase or Express API).

Implement user authentication.

Add chart filters and export options in the analytics section.

Improve accessibility and dark mode support.

## Author

Developed by: Thabang Phoshoko
Year: 2025