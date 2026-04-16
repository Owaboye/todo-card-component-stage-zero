# Todo Card Component (Frontend Wizards – Stage 0)

A clean, modern, and fully accessible Todo / Task Card component built as part of the Frontend Wizards Stage 0 assessment.

This project focuses on testability, accessibility, responsiveness, and real-world UI behavior.

## Live Demo:

👉 [Demo](https://deluxe-puffpuff-278ef0.netlify.app/) 

## GitHub Repository

👉 [Repo](https://github.com/Owaboye/todo-card-component-stage-zero.gi)

## Features
- Fully testable with required data-testid attributes
- Accessible (WCAG-friendly)
- Keyboard navigable
- Responsive (320px → 1200px)
- Dynamic time remaining calculation
- Interactive checkbox (marks task as complete)
- Tags / categories support
- Edit & Delete actions (mock functionality)

## Test Coverage (Key Requirements)
All required elements are implemented with exact `data-testid` values:

-   `test-todo-card`
-   `test-todo-title`
-   `test-todo-description`
-   `test-todo-priority`
-   `test-todo-due-date`
-   `test-todo-time-remaining`
-   `test-todo-status`
-   `test-todo-complete-toggle`
-   `test-todo-tags`
-   `test-todo-tag-work`
-   `test-todo-tag-urgent`
-   `test-todo-edit-button`
-   `test-todo-delete-button`

## Tech Stack

-   **React (Vite)**
-   **JavaScript (ES6+)**
-   **CSS (Flexbox + Responsive Design)**

##  Key Implementation Details

### Time Remaining Logic

-   Calculates time difference between current time and due date
-   Handles multiple states:
    -   `Due in X minutes/hours/days`
    -   `Due tomorrow`
    -   `Due now!`
    -   `Overdue by X minutes/hours/days`
-   Automatically updates every **60 seconds**

### Completion Toggle

-   Uses a real `<input type="checkbox">`
-   Updates UI dynamically:
    -   Strikes through title and description
    -   Changes status to "Done"

### Accessibility

-   Semantic HTML:
    -   `<article>`, `<h2>`, `<p>`, `<time>`, `<button>`
-   Proper labeling for checkbox
-   `aria-live="polite"` for time updates
-   Focus styles for keyboard navigation
-   Screen-reader friendly labels for priority & status


### Responsiveness

-   Mobile-first design
-   Flexible layout using `flex-wrap`
-   No horizontal overflow
-   Optimized for:
    -   Mobile (320px)
    -   Tablet
    -   Desktop (up to 1200px)

## Installation & Setup

``` bash
git clone https://github.com/your-username/todo-card.git
cd todo-card
npm install
npm run dev
```

## Build for Production

``` bash
npm run build
```

## Project Structure

    src/
    ├── components/
    │   └── TodoCard.jsx
    ├── utils/
    │   └── helpers.js
    ├── index.css
    │   
    └── main.jsx

## Future Improvements

-   Add animations (hover, transitions)
-   Convert to TypeScript
-   Make component reusable with props
-   Add dark mode
-   Integrate with backend API

## Acknowledgment

This project was built as part of the **Frontend Wizards Stage 0 Task**, focusing on real-world frontend engineering standards.

## Contact

-   GitHub: \[github.com/Owaboye\]
-   LinkedIn: \[www.linkedin.com/in/oluwasanjo-ezekiel-4b47a053\]

⭐ If you found this helpful, feel free to star the repo!
