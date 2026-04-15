# HNG14 Frontend Track — Stage 0 Task
## Testable Todo Item Card

A clean, accessible, spec-compliant Todo Item Card built with vanilla HTML, CSS, and JavaScript. Submitted as Stage 0 of the HNG14 Frontend Wizards track.


## Live Demo

🔗 [https://justinaenayio-idu.github.io/To-Do-Item-Card-HNG14-Frontend/](https://justinaenayio-idu.github.io/To-Do-Item-Card-HNG14-Frontend/)


## Repository

📁 [https://github.com/justinaenayio-idu/To-Do-Item-Card-HNG14-Frontend](https://github.com/justinaenayio-idu/To-Do-Item-Card-HNG14-Frontend.git)


## Project Structure

HNG14-FrontendTrack-Task/
├── index.html       # Card markup — all data-testid attributes, semantic HTML
├── index.css        # Design system — dark theme, responsive layout, animations
└── index.js         # Behaviour — time remaining, checkbox toggle, edit, delete


## Features

- **13 required `data-testid` attributes** — all present and exactly named for automated tests

- **Live time remaining** — calculates from due date, updates every 30 seconds, shows friendly text ("Due in X days", "Due tomorrow", "Overdue by X hours", "Due now!")

- **Checkbox toggle** — strikes through the title and flips the status badge to "Done" on check; reverts on uncheck

- **Edit button** — logs `edit clicked` to the browser console

- **Delete button** — fires `alert("Delete clicked")`

- **Fully accessible** — WCAG AA contrast, visible focus rings, `aria-label` on all interactive elements, `aria-live` on the live countdown, correct tab order (checkbox → edit → delete)

- **Responsive** — full-width on mobile (320px), centred max-width card on tablet/desktop (up to 1200px), no horizontal overflow at any screen size


## Spec Compliance

| Requirement | Element | `data-testid` |
|---|---|---|
| Card container | `<article>` | `test-todo-card` |

| Task title | `<h2>` | `test-todo-title` |

| Task description | `<p>` | `test-todo-description` |

| Priority badge | `<span>` | `test-todo-priority` |

| Due date | `<time datetime="...">` | `test-todo-due-date` |

| Time remaining | `<time datetime="...">` | `test-todo-time-remaining` |

| Status indicator | `<span>` | `test-todo-status` |

| Completion toggle | `<input type="checkbox">` | `test-todo-complete-toggle` |

| Tags list | `<ul role="list">` | `test-todo-tags` |

| Work tag | `<li role="listitem">` | `test-todo-tag-work` |

| Urgent tag | `<li role="listitem">` | `test-todo-tag-urgent` |

| Edit button | `<button>` | `test-todo-edit-button` |

| Delete button | `<button>` | `test-todo-delete-button` |


## Design

- **Theme:** Dark slate (`#181c27`) with electric teal accent (`#28d9b0`)
- **Fonts:** Syne (heading) · Instrument Sans (body)
- **Contrast:** All text tiers pass WCAG AA (14.9:1 / 5.9:1 / 3.8:1)


## Running Locally

Clone the repo and serve with any static file server:

```bash
git clone https://github.com/justinaenayio-idu/HNG14-FrontendTrack-Task.git

npx serve .
```

Then open [http://localhost:3000](http://localhost:3000).

> **Note:** Do not open `index.html` directly as a `file://` URL — some browsers block loading separate `.css` and `.js` files that way. Always use a local server.


## Built With

- HTML5 (semantic elements)
- CSS3 (custom properties, grid, flexbox, `@keyframes`)
- Vanilla JavaScript (ES6+, no frameworks or dependencies)


## Author

**Justina Enayio-Idu**
HNG14 Frontend Wizards Track — Stage 0
