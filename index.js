/* ================================================================
   TODO ITEM CARD — index.js
   Handles all behaviour as required by the spec:

   1. Time-remaining  — calculates from DUE_DATE, updates every 30s
   2. Checkbox toggle — strikes title, changes status badge to "Done"
   3. Edit button     — console.log("edit clicked")   [spec requirement]
   4. Delete button   — alert("Delete clicked")       [spec requirement]
   ================================================================ */

'use strict';

/* ── Due date ────────────────────────────────────────────────
   Fixed date used for time-remaining calculation.
   Change this to any future date for your submission.
   ──────────────────────────────────────────────────────────── */
const DUE_DATE = new Date('2026-04-30T18:00:00Z');

/* ── Time-remaining logic ───────────────────────────────────── */
function getTimeRemaining() {
  const diff     = DUE_DATE - Date.now();
  const abs      = Math.abs(diff);
  const totalMin = Math.floor(abs / 60_000);
  const totalHrs = Math.floor(abs / 3_600_000);
  const totalDay = Math.floor(abs / 86_400_000);

  /* "Due now!" — within the last/next minute */
  if (abs < 60_000) {
    return { text: 'Due now!', cls: 'due-soon' };
  }

  /* Past the deadline */
  if (diff < 0) {
    if (totalMin < 60) return { text: `Overdue by ${totalMin} minute${totalMin === 1 ? '' : 's'}`, cls: 'overdue' };
    if (totalHrs < 24) return { text: `Overdue by ${totalHrs} hour${totalHrs   === 1 ? '' : 's'}`, cls: 'overdue' };
    return               { text: `Overdue by ${totalDay} day${totalDay   === 1 ? '' : 's'}`,        cls: 'overdue' };
  }

  /* Still ahead */
  if (totalMin < 60) return { text: `Due in ${totalMin} minute${totalMin === 1 ? '' : 's'}`, cls: 'due-soon'  };
  if (totalHrs < 24) return { text: `Due in ${totalHrs} hour${totalHrs   === 1 ? '' : 's'}`, cls: 'due-soon'  };
  if (totalDay === 1) return { text: 'Due tomorrow',                                          cls: 'due-soon'  };
  return                     { text: `Due in ${totalDay} days`,                               cls: 'on-track'  };
}

/* Write the time-remaining <time> element */
function updateTimeRemaining() {
  const el = document.getElementById('time-remaining');
  if (!el) return;

  const { text, cls } = getTimeRemaining();

  el.textContent = text;
  /* Reset all state classes then apply the current one */
  el.classList.remove('overdue', 'due-soon', 'on-track');
  if (cls) el.classList.add(cls);
  /* Keep datetime in sync */
  el.setAttribute('datetime', DUE_DATE.toISOString());
}

/* ── Checkbox toggle ────────────────────────────────────────── */
/* Spec: when toggled — strike-through title + change status to "Done" */
function initCheckbox() {
  const checkbox = document.getElementById('complete-toggle');
  const card     = document.querySelector('[data-testid="test-todo-card"]');
  const statusEl = document.getElementById('todo-status');

  checkbox.addEventListener('change', function () {
    const done = this.checked;

    /* Visual: strike title + dim description */
    card.classList.toggle('is-done', done);

    /* Status badge: text + aria-label + colour class */
    statusEl.textContent = done ? 'Done' : 'In Progress';
    statusEl.setAttribute('aria-label', done ? 'Status: Done' : 'Status: In Progress');
    statusEl.classList.toggle('done', done);
  });
}

/* ── Edit button ────────────────────────────────────────────── */
/* Spec: console.log("edit clicked") */
function initEdit() {
  document.querySelector('[data-testid="test-todo-edit-button"]')
    .addEventListener('click', () => {
      console.log('edit clicked');
    });
}

/* ── Delete button ──────────────────────────────────────────── */
/* Spec: alert("Delete clicked") */
function initDelete() {
  document.querySelector('[data-testid="test-todo-delete-button"]')
    .addEventListener('click', () => {
      alert('Delete clicked');
    });
}

/* ── Init ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  /* Show correct time-remaining immediately on load */
  updateTimeRemaining();

  /* Refresh every 30 seconds */
  setInterval(updateTimeRemaining, 30_000);

  initCheckbox();
  initEdit();
  initDelete();
});