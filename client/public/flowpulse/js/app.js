// =============================================
// FlowPulse – Global App Logic
// =============================================

// ---- Sidebar Toggle (Mobile) ----
const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');
if (sidebarToggle) {
  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (sidebar && !sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });
}

// ---- Mobile Nav (Landing) ----
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
}

// ---- Notification Dropdown ----
const notifBtn = document.querySelector('.notification-btn');
const notifDropdown = document.querySelector('.notif-dropdown');
if (notifBtn && notifDropdown) {
  notifBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    notifDropdown.classList.toggle('open');
  });
  document.addEventListener('click', () => notifDropdown.classList.remove('open'));
}

// ---- Auth Tab Toggle ----
const authTabs = document.querySelectorAll('.auth-tab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
authTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    authTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.dataset.tab;
    if (loginForm) loginForm.style.display = target === 'login' ? 'flex' : 'none';
    if (registerForm) registerForm.style.display = target === 'register' ? 'flex' : 'none';
  });
});

// ---- Filter Chips ----
document.querySelectorAll('.filter-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const group = chip.closest('.filter-bar');
    if (group) group.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
  });
});

// ---- Modal helpers ----
function openModal(id) {
  const overlay = document.getElementById(id);
  if (overlay) overlay.classList.add('open');
}
function closeModal(id) {
  const overlay = document.getElementById(id);
  if (overlay) overlay.classList.remove('open');
}
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
});
document.querySelectorAll('[data-open-modal]').forEach(btn => {
  btn.addEventListener('click', () => openModal(btn.dataset.openModal));
});
document.querySelectorAll('[data-close-modal]').forEach(btn => {
  btn.addEventListener('click', () => closeModal(btn.dataset.closeModal));
});

// ---- LocalStorage Task Storage ----
function getTasks() {
  return JSON.parse(localStorage.getItem('fp_tasks') || '[]');
}
function saveTasks(tasks) {
  localStorage.setItem('fp_tasks', JSON.stringify(tasks));
}

// ---- Kanban Drag & Drop ----
let dragging = null;

function initKanban() {
  const cards = document.querySelectorAll('.task-card');
  const zones = document.querySelectorAll('.kanban-cards');

  cards.forEach(card => {
    card.setAttribute('draggable', 'true');
    card.addEventListener('dragstart', () => {
      dragging = card;
      setTimeout(() => card.classList.add('dragging'), 0);
    });
    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
      dragging = null;
      updateColCounts();
    });
  });

  zones.forEach(zone => {
    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
      zone.classList.add('drag-over');
      const afterEl = getDragAfterElement(zone, e.clientY);
      if (!afterEl) zone.appendChild(dragging);
      else zone.insertBefore(dragging, afterEl);
    });
    zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
    zone.addEventListener('drop', () => zone.classList.remove('drag-over'));
  });
}

function getDragAfterElement(container, y) {
  const draggableEls = [...container.querySelectorAll('.task-card:not(.dragging)')];
  return draggableEls.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) return { offset, element: child };
    return closest;
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function updateColCounts() {
  document.querySelectorAll('.kanban-col').forEach(col => {
    const count = col.querySelectorAll('.task-card').length;
    const badge = col.querySelector('.kanban-count');
    if (badge) badge.textContent = count;
  });
}

// ---- Add Task Form ----
const addTaskForm = document.getElementById('addTaskForm');
if (addTaskForm) {
  addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('taskTitle')?.value?.trim();
    const desc = document.getElementById('taskDesc')?.value?.trim();
    const priority = document.getElementById('taskPriority')?.value || 'medium';
    const due = document.getElementById('taskDue')?.value || '';
    const colId = document.getElementById('taskColumn')?.value || 'todo';
    if (!title) return;

    const col = document.getElementById(colId);
    if (col) {
      const zone = col.querySelector('.kanban-cards');
      if (zone) {
        const card = createTaskCard(title, desc, priority, due);
        zone.appendChild(card);
        card.setAttribute('draggable', 'true');
        card.addEventListener('dragstart', () => {
          dragging = card;
          setTimeout(() => card.classList.add('dragging'), 0);
        });
        card.addEventListener('dragend', () => {
          card.classList.remove('dragging');
          dragging = null;
          updateColCounts();
        });
      }
    }
    addTaskForm.reset();
    closeModal('addTaskModal');
    updateColCounts();
  });
}

function createTaskCard(title, desc, priority, due) {
  const card = document.createElement('div');
  card.className = `task-card priority-${priority}`;
  const priorityLabel = { high: 'badge-red', medium: 'badge-orange', low: 'badge-green' }[priority] || 'badge-orange';
  card.innerHTML = `
    <div class="task-title">${title}</div>
    ${desc ? `<div class="task-desc">${desc}</div>` : ''}
    <div class="task-meta">
      <span class="badge ${priorityLabel}">${priority}</span>
      ${due ? `<span class="task-due">📅 ${due}</span>` : ''}
    </div>`;
  return card;
}

// ---- Add Project Form ----
const addProjectForm = document.getElementById('addProjectForm');
if (addProjectForm) {
  addProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('projectName')?.value?.trim();
    const icon = document.getElementById('projectIcon')?.value || '📁';
    const color = document.getElementById('projectColor')?.value || 'purple';
    if (!name) return;
    const grid = document.querySelector('.projects-grid');
    if (grid) {
      const card = document.createElement('div');
      card.className = `project-card color-${color}`;
      card.innerHTML = `
        <div class="project-icon">${icon}</div>
        <div class="project-name">${name}</div>
        <div class="project-meta-text">Just created · 0 tasks</div>
        <div class="project-progress-label"><span>Progress</span><span>0%</span></div>
        <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:0%;background:var(--gradient-primary)"></div></div>
        <div class="project-footer"><div class="avatar-group"><div class="avatar">YO</div></div><span class="badge badge-blue">Active</span></div>`;
      grid.prepend(card);
    }
    addProjectForm.reset();
    closeModal('addProjectModal');
  });
}

// ---- Simple Bar Chart (Canvas) ----
function drawChart(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const data = [12, 19, 8, 25, 18, 30, 22];
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const W = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
  const H = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  const w = canvas.offsetWidth, h = canvas.offsetHeight;
  const max = Math.max(...data);
  const barW = (w - 60) / data.length - 8;
  const padLeft = 30, padBottom = 28, padTop = 16;
  const chartH = h - padBottom - padTop;
  ctx.clearRect(0, 0, w, h);

  // Grid lines
  ctx.strokeStyle = 'rgba(255,255,255,0.06)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = padTop + (chartH / 4) * i;
    ctx.beginPath(); ctx.moveTo(padLeft, y); ctx.lineTo(w, y); ctx.stroke();
  }

  // Bars
  data.forEach((val, i) => {
    const grad = ctx.createLinearGradient(0, padTop, 0, h - padBottom);
    grad.addColorStop(0, 'rgba(108,99,255,0.9)');
    grad.addColorStop(1, 'rgba(108,99,255,0.2)');
    ctx.fillStyle = grad;
    const bh = (val / max) * chartH;
    const x = padLeft + i * (barW + 8);
    const y = padTop + chartH - bh;
    const r = 4;
    ctx.beginPath();
    ctx.moveTo(x + r, y); ctx.lineTo(x + barW - r, y);
    ctx.quadraticCurveTo(x + barW, y, x + barW, y + r);
    ctx.lineTo(x + barW, y + bh); ctx.lineTo(x, y + bh);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.fill();

    // value label
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.font = `500 10px Inter, sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText(val, x + barW / 2, y - 4);

    // label
    ctx.fillStyle = 'rgba(136,146,176,0.8)';
    ctx.font = `400 10px Inter, sans-serif`;
    ctx.fillText(labels[i], x + barW / 2, h - padBottom + 14);
  });
}

// ---- Animate progress bars on load ----
function animateProgressBars() {
  document.querySelectorAll('.progress-bar-fill').forEach(bar => {
    const target = bar.dataset.width || bar.style.width;
    bar.style.width = '0';
    setTimeout(() => { bar.style.width = target; }, 200);
  });
}

// ---- Init on DOM ready ----
document.addEventListener('DOMContentLoaded', () => {
  initKanban();
  drawChart('weeklyChart');
  animateProgressBars();

  // Stagger fade-in for cards
  const cards = document.querySelectorAll('.stat-card, .project-card, .member-card, .feature-card');
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 80 * i);
  });
});
