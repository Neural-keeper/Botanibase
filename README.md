# Botanibase

## Short Description
A barebones project meant to help beginner gardeners find information about which plants to plant when and care instructions. Deals with databases and data structures. Beginner project.

## Long Description
# Gardening Recommendation Demo

This is a simple backend-driven gardening recommendation demo built with **Node.js, Express, and SQLite**.

The goal of this project is to demonstrate:
- Backend API design
- SQL schema and data management
- Server-side filtering and validation
- Clear separation between frontend and backend logic

The application recommends plants based on the selected planting month.

---

## Tech Stack

- Node.js
- Express
- SQLite (via the `sqlite3` npm package)
- Plain HTML + JavaScript frontend

No cloud services or paid tools are used.

---

## Project Structure
── backend/
    ├── db/
    │ ├── schema.sql # SQL table definitions
    │ ├── seed.sql # Initial seed data
    │ └── database.js # SQLite connection and setup
    │
    ├── public/
    │ └── index.html # Simple frontend for testing
    │
    ├── server.js # Express server and API routes
    ├── package.json
└── README.md


---

## Local Setup Instructions

### 1. Install Prerequisites

Make sure you have Node.js installed:

https://nodejs.org/

You can verify installation by running:

```bash
node -v
npm -v 
```

### 2. Clone the Repository
```
git clone https://github.com/YOUR_USERNAME/gardening-recommender.git
cd gardening-recommender
```

### 3. Install Dependencies
```
npm install
```
This installs Express and sqlite3

### 4. Start the Server
```
node server.js
```
On first run, this will:

Create a local SQLite database file (garden.db)

Create tables using schema.sql

Insert seed data from seed.sql

You should see:
```
Server running at http://localhost:3001
```

### 5. Open the APP
Either click the link or go to the url given (http://localhost:3001). 

## API Overview
POST /recommend
**Request Body**
```
{
    "month": 4
}
```
**Response**
```
{
  "recommendations": [
    {
      "name": "Basil",
    }
  ]
}
```

## Process
I started with in-memory data, then migrated to a SQLite database with a defined schema and seed data. I built a backend endpoint that validates input, performs parameterized SQL queries, and transforms raw database results into explainable recommendations consumed by a frontend via fetch.

