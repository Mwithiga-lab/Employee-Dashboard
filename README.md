Project Details
Type: Individual or Teams (same as API project)

Objective: Build an interactive and functional admin dashboard to manage and visualize data served by your API.

Purpose
This project helps you understand how frontend applications interact with APIs and databases to enable real-time data management. Admin dashboards are essential in production systems for operations like user management, data moderation, analytics, etc.

Tools & Stack Options
	Frontend Options
React + Material UI (recommended)
React + Tailwind CSS + Headless UI
Vue + Vuetify (optional)
Any other component library with prebuilt UI blocks
	Backend
Use the API you built in last week's project
Backend should expose necessary endpoints (with auth)
	Tools & Add-ons
Axios or Fetch for HTTP requests
React Hook Form or Formik (for forms)
Redux / Zustand (for state, optional)
React Router (for navigation)
Role-based logic via your backend or local context
Project Description
You’ll build a dashboard interface for authenticated admins (or users with special permissions) to perform tasks like:

	Admin Dashboard Features (Core)
Authentication
Login page for admin users
Token storage (e.g., localStorage)
Data Management
List, edit, delete, and create resources via the API
Example: Manage posts, tasks, users, notes, etc.
Search & Filtering
Real-time filtering by name, date, status, etc.
Pagination or Lazy Loading (optional)
Role-Based Access
Example: Admins can delete; editors can only update
User Interface
Sidebar for navigation
Responsive design
Status indicators, alerts, confirmation modals
Suggested UI Structure
Sidebar: Navigation (Users, Tasks, Posts, etc.)
Top Bar: Logged-in user info, logout button
Main Content:
Resource tables (Paginated)
Buttons for Create/Edit/Delete
Filter/search bar
Login Page: Form for admin authentication
Suggested Timeline (5 Days)
Day 1 (May 19): Setup & Authentication
Set up React project
Build Login page and authentication logic
Secure routes (admin-only views)
    Deliverable: Login page + access control setup

Day 2: Data Display (CRUD Read)
Build dashboard layout (sidebar + content)
Fetch and display API data in a table
Add loading states and error handling
    Deliverable: View for at least one resource (e.g., posts or tasks)

Day 3: Create/Edit/Delete
Build forms for create and edit actions
Handle delete with confirmation modal
Add feedback messages
    Deliverable: Full CRUD on one resource via dashboard

Day 4: Filtering & Role-based Access
Add filtering/search functionality
Integrate user roles (via backend or mock logic)
Hide or disable UI actions based on roles
    Deliverable: Search + role-based access logic

Day 5: Polish & Present
Polish UI: Icons, spacing, responsive layout
Optional: Add charts or simple metrics (e.g., number of users)
Record a short demo or prepare to present live
    Deliverable: Completed dashboard + deployment or walkthrough

Submission Requirements
Live demo or video recording (2–4 minutes)
GitHub repo with clean structure and README
Link to working dashboard (if deployed)
Optional: Screenshot gallery (if hosting isn't possible)
