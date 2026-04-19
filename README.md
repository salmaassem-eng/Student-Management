# 🎓 Student Management System

A fully functional Student Management System built with **Angular 16** and **Tailwind CSS** as part of an ITI training project.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 recommended)
- Angular CLI v16

```bash
npm install -g @angular/cli@16
```

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
ng serve

# 3. Open your browser at
http://localhost:4200
```

---


## 📄 Pages & Routing

| Route | Component | Description |
|---|---|---|
| `/home` | HomeComponent | Welcome page with quick navigation |
| `/students` | StudentsComponent | Table of all students with search |
| `/add-student` | AddStudentComponent | Form to add a new student |
| `/student/:id` | StudentDetailsComponent | Full info about one student |

---

## ✨ Features

- 📋 **View all students** in a clean, responsive table
- ➕ **Add new students** with a full form
- 🗑 **Delete students** with an inline confirmation row (no browser popups)
- 👁 **View student details** on a dedicated page
- 🔍 **Search students** by first or last name in real-time
- 🟢 **GPA color coding** — Green / Yellow / Red based on score
- 🔔 **Toast notifications** using `ngx-toastr` for all actions
- 📱 **Responsive design** with Tailwind CSS

---

## 🧠 Angular Concepts Used

| Concept | Where |
|---|---|
| `Interpolation {{ }}` | All templates |
| `Property Binding [ ]` | `[students]`, `[searchText]` passed to child |
| `Event Binding ( )` | `(click)`, `(ngSubmit)` |
| `Two-way Binding [(ngModel)]` | Add student form fields |
| `*ngFor` | Rendering table rows |
| `*ngIf` | Conditional badges, GPA colors, confirm row |
| `@Input` | `StudentTableComponent` receives data from parent |
| `@Output + EventEmitter` | `StudentTableComponent` emits delete event to parent |
| `BehaviorSubject` | `StudentsService` — holds and updates student list |
| `Observable` | Exposed from service for components to subscribe |
| `async pipe` | `students$ \| async` in students template |
| `Angular Routing` | 4 routes including dynamic `/student/:id` |
| `ActivatedRoute` | Reading `:id` param in StudentDetailsComponent |
| `Services` | `StudentsService` shared across all components |

---

## 📦 Dependencies

| Package | Version | Purpose |
|---|---|---|
| `@angular/core` | 16.x | Angular framework |
| `tailwindcss` | 3.x | Utility-first CSS styling |
| `ngx-toastr` | 15.x | Toast notifications |
| `@angular/animations` | 16.x | Required for toastr animations 
## 👨‍💻 Author

Built as a training project at **ITI (Information Technology Institute)**  
Demonstrating core Angular concepts: components, routing, services, observables, and component communication.
