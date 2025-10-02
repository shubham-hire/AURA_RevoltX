# AURA_RevoltX 🕒

[![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-backend-blue?logo=express)](https://expressjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-MVP-orange)](#)

AURA_RevoltX is a **modern product advertisement website** focused on showcasing smart & stylish watches. This project serves as an MVP for building a scalable e-commerce-like platform with secure user management, product display, and frontend/backend integration.

---

## 📌 Project Motivation

The goal of AURA_RevoltX is to:

1. Provide a **clean and visually appealing interface** to showcase products.
2. Build a **scalable full-stack architecture** for future e-commerce expansion.
3. Give hands-on experience with **Node.js, Express, and frontend integration**.
4. Serve as a **learning platform** to explore authentication, API design, and dynamic content.

---

## 🧱 Tech Stack & Architecture

| Layer        | Technology / Tools                                        | Purpose                                     |
| ------------ | --------------------------------------------------------- | ------------------------------------------- |
| Frontend     | HTML, CSS, JavaScript                                     | Responsive UI and client-side interactivity |
| Backend      | Node.js, Express                                          | Server-side logic and API routing           |
| Database     | users.json (mock DB, replaceable with MongoDB/PostgreSQL) | Stores user credentials and mock data       |
| Package Mgmt | npm                                                       | Dependency management                       |
| Versioning   | Git, GitHub                                               | Source control                              |

**Architecture Overview:**

- **Frontend** serves static assets and interacts with backend APIs for user login/registration.
- **Backend** handles HTTP requests, authentication, and serves dynamic responses.
- **Mock DB (`users.json`)** stores minimal user data for MVP testing.

---

## 🚀 Features

### Core Features (MVP)

- **Minimalist UI/UX** for showcasing watches
- **Responsive frontend** (desktop & mobile)
- **User registration and login** using JSON storage
- **API routes** for basic authentication
- **Structured project layout** for future expansion

### Planned / Roadmap Features

- Replace JSON storage with a **real database** (MongoDB/PostgreSQL)
- **Password hashing** and security improvements
- **JWT-based authentication** and session management
- Product **CRUD operations** (add/edit/delete watches)
- **Search, filtering, and sorting** for products
- **Cart and checkout** functionality
- Payment gateway integration (e.g., Stripe, PayPal)
- CI/CD pipelines for deployment
- Automated **unit and integration tests**

---

## 🛠️ Installation & Usage

### Prerequisites

- Node.js (v18+ recommended)
- npm (comes with Node.js)

### Setup Steps

1. Clone the repository

```bash

git clone https://github.com/shubham-hire/AURA_RevoltX.git
	cd AURA_RevoltX
install dependancies:
	npm install
start the server:
	node server.js
open browser at:
	http://localhost:3000


AURA_RevoltX/
│
├── public/             # Static frontend assets (HTML, CSS, images)
├── server.js           # Entry point (Express server)
├── users.js            # User routes / API logic
├── users.json          # Mock database for MVP
├── package.json
├── package-lock.json
└── README.md

---

### LICENSE (MIT)

```text
MIT License

Copyright (c) 2025 Shubham Hire

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
