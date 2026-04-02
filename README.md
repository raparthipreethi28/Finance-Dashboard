
# 💰 Finance Dashboard UI

![React](https://img.shields.io/badge/React-18+-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC.svg)
![Vite](https://img.shields.io/badge/Vite-Fast%20Build-purple.svg)

A **modern fintech-style Finance Dashboard** built using **React, TypeScript, and Tailwind CSS v4**.
This project demonstrates strong **frontend engineering skills**, including state management, responsive UI design, role-based UI simulation, and interactive data visualization.

The dashboard provides users with a **clear overview of financial activity**, allowing them to track income, expenses, and spending patterns through dynamic charts and structured tables.

---

# 🚀 Features

## 📊 Analytics & Insights

### Summary Cards

Displays key financial metrics:

* 💰 **Total Balance**
* 📈 **Total Income**
* 📉 **Total Expenses**

Styled with **modern gradient cards and icons** for better visual hierarchy.

### Interactive Charts

**Income vs Expense Chart**

* Smooth line chart showing financial trends
* Helps track monthly income vs spending patterns

**Spending Breakdown**

* Doughnut chart showing **category-wise expenses**
* Interactive hover tooltips

### Financial Insights

Automatically generates useful observations such as:

* Highest spending category
* Monthly spending trends
* Expense distribution analysis

---

# 💸 Transaction Management

### Transaction Table

A responsive and structured data table showing:

* Date
* Description
* Category
* Amount
* Transaction type

### Status Badges

Color indicators help users quickly identify:

* 🟢 Income
* 🔴 Expense

### Search & Filters

Users can:

* 🔍 Search transactions by description
* 📂 Filter by category
* 📊 Filter by transaction type

### Sorting

Transactions can be sorted by:

* Date
* Amount

### CRUD Simulation

(Admin role only)

* ➕ Add transaction
* ✏️ Edit transaction
* ❌ Delete transaction

---

# 🔐 Role-Based UI

The dashboard includes a **role simulation system**.

### 👁 Viewer Role

Viewer users can:

* View dashboard analytics
* View charts and insights
* Browse transactions

But **cannot modify data**.

### 🛠 Admin Role

Admin users can:

* Add transactions
* Edit existing transactions
* Delete records
* Access full dashboard functionality

### Role Switcher

A **role toggle in the navbar** allows easy switching between Admin and Viewer modes for demonstration.

---

# 🌓 Modern UI / UX

### Theme Toggle

* 🌞 Light Mode
* 🌙 Dark Mode
* Theme preference stored in **localStorage**

### Sticky Navbar

Glassmorphism style navbar with:

* backdrop blur
* smooth UI transitions

### Responsive Design

Optimized for:

* 💻 Desktop
* 📱 Mobile
* 📟 Tablet

### Tailwind CSS v4

Uses **CSS-first configuration and modern utility styling**.

---

# 🛠 Technical Approach

### Framework

* ⚛️ React 18+
* ⚡ Vite (Fast build and development)

### State Management

Uses **React Context API**

* `FinanceContext` → handles transaction data
* `AuthContext` → manages user roles

### Performance Optimization

* `useMemo` used for:

  * filtered transactions
  * sorted lists
  * financial insights calculations

### Charts

Built using:

* `Chart.js`
* `react-chartjs-2`

Provides **smooth, interactive data visualization**.

### Persistence

* Theme preference stored in **localStorage**

---

# 🏁 Getting Started

## Prerequisites

* Node.js **v18+**
* npm or yarn

---

## Installation

### 1️⃣ Clone the repository

```bash
git clone <repository-url>
cd finance-dashboard
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run development server

```bash
npm run dev
```

### 4️⃣ Open in browser

```
http://localhost:5173
```

---

# 📂 Project Structure

```
src
│
├── components
│   ├── charts
│   ├── tables
│   ├── cards
│   └── ui
│
├── contexts
│   ├── FinanceContext
│   └── AuthContext
│
├── pages
│   ├── Dashboard
│   ├── Transactions
│   └── Insights
│
├── utils
│   ├── formatCurrency
│   └── dataHelpers
│
└── data
    └── mockTransactions
```

---

# 🎯 Purpose of This Project

This project was created to demonstrate:

* Modern **React frontend architecture**
* **State management using Context API**
* **Interactive financial dashboards**
* **Responsive UI design**
* **Role-based interface simulation**

---

# 📌 Future Improvements

Possible enhancements:

* Backend integration (Node.js / Firebase)
* Real authentication system
* Export transactions to CSV
* Real-time financial updates
* Advanced analytics

---

# ⭐ If you like this project

Consider giving the repository a **star ⭐**

---
<img width="1763" height="1929" alt="image" src="https://github.com/user-attachments/assets/ecfed89f-e58c-437f-9f43-68399c491171" />


<img width="1763" height="1929" alt="image" src="https://github.com/user-attachments/assets/20a96145-9a1b-41c6-a7bb-567a6e28cd8a" />

