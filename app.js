import { auth, googleProvider, signInWithPopup, signOut, onAuthStateChanged } from './firebase-config.js';

// ─── STATE ───────────────────────────────────────────────────────────
let currentCategory = 'all';
let searchQuery = '';
let currentJob = null;
let currentTab = 'overview';
let bookmarks = JSON.parse(localStorage.getItem('govJobBookmarks') || '[]');
let bookmarksPanelOpen = false;

// ─── DOM REFS ─────────────────────────────────────────────────────────
const jobsGrid = document.getElementById('jobsGrid');
const jobsCount = document.getElementById('jobsCount');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('searchInput');
const categoriesEl = document.getElementById('categories');
const modalOverlay = document.getElementById('modalOverlay');
const bookmarkCount = document.getElementById('bookmarkCount');
const bookmarksPanel = document.getElementById('bookmarksPanel');
const bookmarksList = document.getElementById('bookmarksList');



// ─── INIT ─────────────────────────────────────────────────────────────
async function init() {
    checkAuth();
    renderCategories();
    renderJobs();
    bindEvents();
    updateBookmarkCount();
    bindAiChatEvents();
    bindAuthEvents();
    bindMockTestEvents();
}

function checkAuth() {
    onAuthStateChanged(auth, (user) => {
        const loginOverlay = document.getElementById('loginOverlay');
        const appContainer = document.getElementById('appContainer');

        if (user) {
            console.log("User is signed in:", user.email);
            loginOverlay.style.display = 'none';
            appContainer.style.display = 'block';
            updateUserProfileUI(user);
            syncUserWithDatabase(user);
        } else {
            console.log("No user signed in.");
            loginOverlay.style.display = 'flex';
            appContainer.style.display = 'none';
        }
    });
}

function updateUserProfileUI(user) {
    const userAvatar = document.getElementById('userAvatar');
    const userName = document.getElementById('userName');
    const userEmail = document.getElementById('userEmail');

    const fallbackUrl = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.displayName || 'Guest User');

    if (userAvatar) {
        userAvatar.referrerPolicy = 'no-referrer';
        userAvatar.src = user.photoURL || fallbackUrl;
        userAvatar.onerror = () => {
            if (userAvatar.src !== fallbackUrl) userAvatar.src = fallbackUrl;
        };
    }
    if (userName) userName.textContent = user.displayName || 'Guest User';
    if (userEmail) userEmail.textContent = user.email || '';
}

async function syncUserWithDatabase(user) {
    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                google_id: user.uid,
                email: user.email,
                name: user.displayName
            })
        });
        const data = await response.json();
        if (response.ok) {
            console.log("✅ Database sync success:", data.message);
        } else {
            console.error("❌ Database sync failed:", data.error);
        }
    } catch (error) {
        console.error("❌ Error syncing with MySQL:", error);
    }
}

function bindAuthEvents() {
    const btnLoginGoogle = document.getElementById('btnLoginGoogle');
    const btnLogout = document.getElementById('btnLogout');

    if (btnLoginGoogle) {
        btnLoginGoogle.addEventListener('click', async () => {
            try {
                await signInWithPopup(auth, googleProvider);
            } catch (error) {
                console.error("Login Error:", error);
                alert("Failed to sign in. Please try again.");
            }
        });
    }

    if (btnLogout) {
        btnLogout.addEventListener('click', async () => {
            try {
                await signOut(auth);
            } catch (error) {
                console.error("Logout Error:", error);
            }
        });
    }
}





// ─── CATEGORIES ───────────────────────────────────────────────────────
function renderCategories() {
    categoriesEl.innerHTML = CATEGORIES.map(cat => `
      <button class="cat-btn ${cat.id === currentCategory ? 'active' : ''}" data-cat="${cat.id}">
        ${cat.icon} ${cat.label}
      </button>
    `).join('');
}

// ─── FILTER JOBS ──────────────────────────────────────────────────────
function getFilteredJobs() {
    return JOBS_DATA.filter(job => {
        const matchCat = currentCategory === 'all' || job.category === currentCategory;
        const q = searchQuery.toLowerCase();
        const matchSearch = !q ||
            job.name.toLowerCase().includes(q) ||
            job.shortName.toLowerCase().includes(q) ||
            job.category.toLowerCase().includes(q) ||
            (job.overview && job.overview.toLowerCase().includes(q));
        return matchCat && matchSearch;
    });
}

// ─── RENDER JOBS GRID ─────────────────────────────────────────────────
function renderJobs() {
    const filtered = getFilteredJobs();
    jobsCount.textContent = `${filtered.length} Job${filtered.length !== 1 ? 's' : ''} Found`;

    if (!filtered.length) {
        jobsGrid.innerHTML = '';
        noResults.classList.add('visible');
        return;
    }
    noResults.classList.remove('visible');

    jobsGrid.innerHTML = filtered.map((job, i) => `
      <div class="job-card" data-id="${job.id}" style="animation-delay:${i * 0.05}s">
        <div class="card-top">
          <div class="card-icon-wrap">
            <div class="card-icon">${job.icon}</div>
            <div class="card-meta">
              <div class="card-shortname">${job.shortName}</div>
            </div>
          </div>
          <div class="card-actions">
            <button class="btn-bookmark ${bookmarks.includes(job.id) ? 'bookmarked' : ''}"
              data-id="${job.id}" title="${bookmarks.includes(job.id) ? 'Remove bookmark' : 'Bookmark'}">
              ${bookmarks.includes(job.id) ? '★' : '☆'}
            </button>
          </div>
        </div>
        <div class="card-title">${job.name}</div>
        <div class="card-tags">
          <span class="tag tag-badge" style="background:${job.badgeColor}22;color:${job.badgeColor}">
            ${job.badge}
          </span>
          <span class="tag tag-difficulty-${job.difficulty.replace(/\s/g, '-')}">
            ${job.difficulty}
          </span>
        </div>
        <div class="card-info-row">
          <div class="info-item">
            <div class="info-label">💰 Salary</div>
            <div class="info-value">${job.salary.inHand.split('–')[0].trim()}+</div>
          </div>
          <div class="info-item">
            <div class="info-label">📋 Vacancies</div>
            <div class="info-value">${job.vacancies.total}</div>
          </div>
        </div>
        <div class="card-info-row">
          <div class="info-item">
            <div class="info-label">🎓 Education</div>
            <div class="info-value" style="font-size:12px">${job.eligibility.education.split('(')[0].trim()}</div>
          </div>
          <div class="info-item">
            <div class="info-label">👤 Age</div>
            <div class="info-value" style="font-size:12px">${job.eligibility.age.split('(')[0].trim()}</div>
          </div>
        </div>
        <button class="btn-view-details" data-id="${job.id}">
          View Full Details →
        </button>
      </div>
    `).join('');
}

// ─── OPEN MODAL ───────────────────────────────────────────────────────
function openModal(jobId) {
    currentJob = JOBS_DATA.find(j => j.id === jobId);
    if (!currentJob) return;
    currentTab = 'overview';
    renderModal();
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    currentJob = null;
}

// ─── RENDER MODAL ─────────────────────────────────────────────────────
function renderModal() {
    if (!currentJob) return;
    const j = currentJob;
    const isBookmarked = bookmarks.includes(j.id);

    document.getElementById('modalContent').innerHTML = `
      <div class="modal">
        <div class="modal-header">
          <div class="modal-header-top">
            <div class="modal-job-info">
              <div class="modal-icon">${j.icon}</div>
              <div>
                <div class="modal-title">${j.name}</div>
                <div class="modal-subtitle">Conducted by <strong>${j.conductedBy}</strong></div>
              </div>
            </div>
            <div class="modal-header-actions">
              <button class="btn-modal-bookmark ${isBookmarked ? 'bookmarked' : ''}"
                id="modalBookmarkBtn" data-id="${j.id}" title="Bookmark">
                ${isBookmarked ? '★ Saved' : '☆ Save'}
              </button>
              <button class="btn-close" id="btnCloseModal" title="Close">✕</button>
            </div>
          </div>
          <div class="modal-tabs">
            <button class="tab-btn active" data-tab="overview">📋 Overview</button>
            <button class="tab-btn" data-tab="eligibility">✅ Eligibility</button>
            <button class="tab-btn" data-tab="exam">📝 Exam Pattern</button>
            <button class="tab-btn" data-tab="guidance">📋 How to Apply</button>
            <button class="tab-btn" data-tab="syllabus">📚 Syllabus</button>
            <button class="tab-btn" data-tab="salary">💰 Salary</button>
            <button class="tab-btn" data-tab="dates">📅 Key Dates</button>
            <button class="tab-btn" data-tab="tips">💡 Tips</button>
            <button class="tab-btn" data-tab="books">📖 Books Recommended</button>
            <button class="tab-btn" data-tab="papers">📄 Previous Papers</button>
          </div>
        </div>
        <div class="modal-body">
          <!-- OVERVIEW -->
          <div class="tab-panel active" id="tab-overview">
            <div class="overview-desc">${j.overview}</div>
            <div class="info-grid">
              <div class="info-card">
                <div class="info-card-label">🏢 Conducted By</div>
                <div class="info-card-value">${j.conductedBy}</div>
              </div>
              <div class="info-card">
                <div class="info-card-label">📊 Difficulty</div>
                <div class="info-card-value">${j.difficulty}</div>
              </div>
              <div class="info-card">
                <div class="info-card-label">👥 Total Vacancies</div>
                <div class="info-card-value">${j.vacancies.total}</div>
              </div>
              <div class="info-card">
                <div class="info-card-label">🌐 Official Site</div>
                <div class="info-card-value">
                  ${j.officialSite.startsWith('http') ? `
                    <a href="${j.officialSite}" target="_blank" style="color:var(--accent-light);text-decoration:none">
                      Visit Website ↗
                    </a>
                  ` : `<span style="font-size:13px; color:var(--text-muted); line-height:1.4; display:block;">${j.officialSite}</span>`}
                </div>
              </div>
            </div>
            <div class="info-card" style="margin-bottom:14px">
              <div class="info-card-label">📌 Posts Available</div>
              <div class="vacancies-list">
                ${j.vacancies.posts.map(p => `<span class="vacancy-tag">${p}</span>`).join('')}
              </div>
            </div>
          </div>

          <!-- ELIGIBILITY -->
          <div class="tab-panel" id="tab-eligibility">
            <div class="info-grid">
              <div class="info-card">
                <div class="info-card-label">🎂 Age Limit</div>
                <div class="info-card-value">${j.eligibility.age}</div>
              </div>
              <div class="info-card">
                <div class="info-card-label">🎓 Education</div>
                <div class="info-card-value">${j.eligibility.education}</div>
              </div>
              <div class="info-card">
                <div class="info-card-label">🌍 Nationality</div>
                <div class="info-card-value">${j.eligibility.nationality}</div>
              </div>
              <div class="info-card">
                <div class="info-card-label">🔄 Attempts Allowed</div>
                <div class="info-card-value">${j.eligibility.attempts}</div>
              </div>
            </div>
          </div>

          <!-- EXAM PATTERN -->
          <div class="tab-panel" id="tab-exam">
            ${j.examPattern.map((stage, i) => `
              <div class="exam-stage">
                <div class="stage-header">
                  <div class="stage-number">${i + 1}</div>
                  <div class="stage-name">${stage.stage}</div>
                  <div class="stage-mode">${stage.mode}</div>
                </div>
                <div class="stage-details">
                  <div><div class="sdl">Subjects / Marks</div><div class="sdv">${stage.subjects}</div></div>
                  <div><div class="sdl">Duration</div><div class="sdv">${stage.duration}</div></div>
                </div>
                ${stage.note ? `<div class="stage-note">⚠️ ${stage.note}</div>` : ''}
              </div>
            `).join('')}
          </div>

          <!-- SYLLABUS -->
          <div class="tab-panel" id="tab-syllabus">
            ${Object.entries(j.syllabus).map(([subject, topics]) => `
              <div class="syllabus-subject">
                <div class="subject-header" onclick="this.classList.toggle('open')">
                  <div class="subject-dot"></div>
                  <div class="subject-name">${subject}</div>
                  <div class="subject-toggle">▼</div>
                </div>
                <div class="subject-topics">
                  <div class="topics-list">
                    ${topics.map(t => `<span class="topic-tag">${t}</span>`).join('')}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- SALARY -->
          <div class="tab-panel" id="tab-salary">
            <div class="salary-hero">
              <div class="salary-amount">${j.salary.inHand}</div>
              <div class="salary-label">Estimated In-Hand Salary per Month</div>
            </div>
            <div class="info-grid" style="margin-bottom:20px">
              <div class="info-card">
                <div class="info-card-label">📄 Official Pay Scale</div>
                <div class="info-card-value">${j.salary.payScale}</div>
              </div>
            </div>
            <div class="perks-section">
              <div class="perks-title">🎁 Additional Benefits & Perks</div>
              <div class="perks-list">
                ${j.salary.perks.split(',').map(p => `
                  <div class="perk-item">
                    <span class="perk-icon">✓</span>
                    <span>${p.trim()}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- DATES -->
          <div class="tab-panel" id="tab-dates">
            <div class="overview-desc" style="margin-bottom:16px">
              📅 These are approximate dates. Always refer to the official notification for exact dates.
            </div>
            <div class="dates-grid">
              ${Object.entries(j.importantDates).map(([event, date]) => `
                <div class="date-card">
                  <div class="date-event">${event}</div>
                  <div class="date-value">${date}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- TIPS -->
          <div class="tab-panel" id="tab-tips">
            ${j.tips.map((tip, i) => `
              <div class="tip-item">
                <div class="tip-num">${i + 1}</div>
                <div class="tip-text">${tip}</div>
              </div>
            `).join('')}
          </div>

          <!-- BOOKS RECOMMENDED -->
          <div class="tab-panel" id="tab-books">
            ${j.booksRecommended && j.booksRecommended.length > 0 ?
            `<div class="perks-list">
                ${j.booksRecommended.map(book => `
                  <div class="perk-item" style="box-shadow:0 1px 3px rgba(0,0,0,0.05); border:1px solid var(--border); border-radius:8px; padding:12px 16px; margin-bottom:10px; background:#fff;">
                    <span class="perk-icon" style="background:var(--accent-light);">📖</span>
                    <span style="font-weight:500; color:var(--text-main); font-size: 15px;">${book}</span>
                  </div>
                `).join('')}
              </div>`
            : '<div class="overview-desc">No specific books recommended yet. Please refer to standard materials.</div>'
        }
          </div>

          <!-- PREVIOUS PAPERS -->
          <div class="tab-panel" id="tab-papers">
            ${j.previousPapers ? `
              <div class="perks-list">
                  <div class="perk-item" style="box-shadow:0 1px 3px rgba(0,0,0,0.05); border:1px solid var(--border); border-radius:8px; padding:12px 16px; margin-bottom:10px; background:#fff;">
                    <span class="perk-icon" style="background:var(--accent-light);">📄</span>
                    <a href="${j.previousPapers}" target="_blank" style="font-weight:500; color:var(--text-main); font-size: 15px; text-decoration: none;">View Previous Year Papers ↗</a>
                  </div>
              </div>
            ` : '<div class="overview-desc">Previous year papers will be updated soon.</div>'}
          </div>

          <!-- HOW TO APPLY -->
          <div class="tab-panel" id="tab-guidance">
            <div class="guidance-intro">Follow these steps carefully to apply for <strong>${j.name}</strong>:</div>
            <div class="guidance-list">
              ${(j.applicationSteps || ["Application details will be updated soon."]).map((step, idx) => `
                <div class="guidance-step">
                  <div class="step-num">${idx + 1}</div>
                  <div class="step-text">${step}</div>
                </div>
              `).join('')}
            </div>
            <div class="guidance-footer" style="display: flex; gap: 12px; flex-wrap: wrap;">
              ${j.officialSite.startsWith('http') ? `
                <a href="${j.officialSite}" target="_blank" class="btn-primary" style="display:inline-block; text-decoration:none; margin-top: 16px;">
                  Apply via Official Website ↗
                </a>
              ` : ''}
              ${j.schoolEduSite ? `
                <a href="${j.schoolEduSite}" target="_blank" class="btn-primary" style="display:inline-block; text-decoration:none; margin-top: 16px; background: #4f46e5;">
                  School Education Dept ↗
                </a>
              ` : ''}
              ${j.tetExamSite ? `
                <a href="${j.tetExamSite}" target="_blank" class="btn-primary" style="display:inline-block; text-decoration:none; margin-top: 16px; background: #0891b2;">
                  TET Exam Portal ↗
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
    `;

    // bind modal inner events
    document.getElementById('btnCloseModal').addEventListener('click', closeModal);
    document.getElementById('modalBookmarkBtn').addEventListener('click', (e) => {
        toggleBookmark(j.id);
        renderModal(); // re-render to update button
    });

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
        });
    });
}

// ─── BOOKMARKS ────────────────────────────────────────────────────────
function toggleBookmark(jobId) {
    if (bookmarks.includes(jobId)) {
        bookmarks = bookmarks.filter(id => id !== jobId);
    } else {
        bookmarks.push(jobId);
    }
    localStorage.setItem('govJobBookmarks', JSON.stringify(bookmarks));
    updateBookmarkCount();
    renderJobs();
    renderBookmarksPanel();
}

function updateBookmarkCount() {
    const n = bookmarks.length;
    bookmarkCount.textContent = n;
    bookmarkCount.classList.toggle('visible', n > 0);
}

function renderBookmarksPanel() {
    if (!bookmarks.length) {
        bookmarksList.innerHTML = `
        <div class="empty-bookmarks">
          <div class="empty-bookmarks-icon">☆</div>
          <p>No saved jobs yet.<br>Tap ☆ on any job to save it.</p>
        </div>`;
        return;
    }
    bookmarksList.innerHTML = bookmarks.map(id => {
        const j = JOBS_DATA.find(job => job.id === id);
        if (!j) return '';
        return `
        <div class="bookmark-card" data-id="${j.id}">
          <div class="bookmark-card-icon">${j.icon}</div>
          <div class="bookmark-card-info">
            <div class="bookmark-card-name">${j.name}</div>
            <div class="bookmark-card-salary">${j.salary.inHand}</div>
          </div>
          <button class="btn-bookmark bookmarked" data-id="${j.id}" title="Remove">★</button>
        </div>`;
    }).join('');
}

// ─── EVENTS ───────────────────────────────────────────────────────────
function bindEvents() {
    // category filter
    categoriesEl.addEventListener('click', (e) => {
        const btn = e.target.closest('.cat-btn');
        if (!btn) return;
        currentCategory = btn.dataset.cat;
        renderCategories();
        renderJobs();
    });

    // search — live suggestions
    const searchSuggestions = document.getElementById('searchSuggestions');
    let activeIndex = -1;

    function showSuggestions(query) {
        if (!query.trim()) {
            hideSuggestions();
            searchQuery = '';
            renderJobs();
            return;
        }
        searchQuery = query;
        renderJobs();

        const q = query.toLowerCase();
        const matches = JOBS_DATA.filter(job =>
            job.name.toLowerCase().includes(q) ||
            job.shortName.toLowerCase().includes(q) ||
            job.category.toLowerCase().includes(q) ||
            (job.overview && job.overview.toLowerCase().includes(q))
        ).slice(0, 6);

        if (!matches.length) {
            searchSuggestions.innerHTML = `<div class="suggestions-empty">No matching jobs found</div>`;
            searchSuggestions.classList.add('visible');
            return;
        }

        searchSuggestions.innerHTML = matches.map((job, i) => `
        <div class="suggestion-item" data-id="${job.id}" data-index="${i}">
          <div class="suggestion-icon">${job.icon}</div>
          <div class="suggestion-info">
            <div class="suggestion-name">${job.name}</div>
            <div class="suggestion-meta">${job.conductedBy}</div>
          </div>
          <div class="suggestion-badge">${job.shortName}</div>
        </div>
      `).join('');

        activeIndex = -1;
        searchSuggestions.classList.add('visible');
    }

    function hideSuggestions() {
        searchSuggestions.classList.remove('visible');
        activeIndex = -1;
    }

    searchInput.addEventListener('input', (e) => {
        showSuggestions(e.target.value);
    });

    searchInput.addEventListener('keydown', (e) => {
        const items = searchSuggestions.querySelectorAll('.suggestion-item');
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            activeIndex = Math.min(activeIndex + 1, items.length - 1);
            items.forEach((el, i) => el.classList.toggle('active', i === activeIndex));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            activeIndex = Math.max(activeIndex - 1, -1);
            items.forEach((el, i) => el.classList.toggle('active', i === activeIndex));
        } else if (e.key === 'Enter') {
            if (activeIndex >= 0 && items[activeIndex]) {
                const id = items[activeIndex].dataset.id;
                hideSuggestions();
                searchInput.blur();
                openModal(id);
            } else {
                hideSuggestions();
                document.getElementById('jobsGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else if (e.key === 'Escape') {
            hideSuggestions();
        }
    });

    searchSuggestions.addEventListener('click', (e) => {
        const item = e.target.closest('.suggestion-item');
        if (!item) return;
        hideSuggestions();
        searchInput.value = '';
        searchQuery = '';
        renderJobs();
        openModal(item.dataset.id);
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
            hideSuggestions();
        }
    });

    searchInput.addEventListener('focus', (e) => {
        if (e.target.value.trim()) showSuggestions(e.target.value);
    });

    // card clicks
    jobsGrid.addEventListener('click', (e) => {
        const viewBtn = e.target.closest('.btn-view-details');
        const card = e.target.closest('.job-card');
        const bookmarkBtn = e.target.closest('.btn-bookmark');

        if (bookmarkBtn) {
            e.stopPropagation();
            toggleBookmark(bookmarkBtn.dataset.id);
            return;
        }
        if (viewBtn || card) {
            const id = (viewBtn || card).dataset.id;
            openModal(id);
            return;
        }
    });

    // close modal on overlay click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (!modalOverlay.classList.contains('active')) return;
            closeModal();
        }
    });

    // Bookmarks panel
    document.getElementById('btnBookmarks').addEventListener('click', () => {
        bookmarksPanelOpen = !bookmarksPanelOpen;
        bookmarksPanel.classList.toggle('open', bookmarksPanelOpen);
        renderBookmarksPanel();
    });

    document.getElementById('btnCloseBookmarks').addEventListener('click', () => {
        bookmarksPanelOpen = false;
        bookmarksPanel.classList.remove('open');
    });

    bookmarksList.addEventListener('click', (e) => {
        const card = e.target.closest('.bookmark-card');
        const removeBtn = e.target.closest('.btn-bookmark');
        if (removeBtn) {
            toggleBookmark(removeBtn.dataset.id);
            return;
        }
        if (card) {
            bookmarksPanelOpen = false;
            bookmarksPanel.classList.remove('open');
            openModal(card.dataset.id);
        }
    });

    // Logo click → reset
    document.getElementById('logo').addEventListener('click', () => {
        currentCategory = 'all';
        searchQuery = '';
        searchInput.value = '';
        renderCategories();
        renderJobs();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ─── AI CHAT WIDGET ───────────────────────────────────────────────────
const aiChatFab = document.getElementById('aiChatFab');
const aiChatWindow = document.getElementById('aiChatWindow');
const btnCloseChat = document.getElementById('btnCloseChat');
const aiChatMessages = document.getElementById('aiChatMessages');
const aiChatInput = document.getElementById('aiChatInput');
const aiChatSend = document.getElementById('aiChatSend');

function bindAiChatEvents() {
    if (!aiChatFab) return;

    aiChatFab.addEventListener('click', () => {
        aiChatWindow.classList.add('active');
        aiChatInput.focus();
    });

    btnCloseChat.addEventListener('click', () => {
        aiChatWindow.classList.remove('active');
    });

    aiChatInput.addEventListener('input', () => {
        aiChatSend.disabled = aiChatInput.value.trim().length === 0;
    });

    aiChatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !aiChatSend.disabled) {
            handleAiSearch();
        }
    });

    aiChatSend.addEventListener('click', () => {
        if (!aiChatSend.disabled) {
            handleAiSearch();
        }
    });
}

function appendMessage(text, isAi = false, isTyping = false) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `ai-message ${isAi ? 'ai-received' : 'ai-sent'}`;
    if (isTyping) {
        msgDiv.classList.add('ai-message-typing');
        msgDiv.innerHTML = `<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>`;
    } else {
        msgDiv.innerHTML = `<p>${text}</p>`;
    }
    aiChatMessages.appendChild(msgDiv);
    aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
    return msgDiv;
}

async function handleAiSearch() {
    const query = aiChatInput.value.trim();
    if (!query) return;

    // Add user message
    appendMessage(query, false);
    aiChatInput.value = '';
    aiChatSend.disabled = true;

    // Add typing indicator
    const typingIndicator = appendMessage('', true, true);

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: query })
        });

        const data = await response.json();
        typingIndicator.remove();

        if (!response.ok) {
            appendMessage(data.error || "Sorry, I am having trouble connecting to the server.", true);
        } else {
            appendMessage(data.reply, true);
        }
    } catch (error) {
        typingIndicator.remove();
        appendMessage("Unable to connect to the AI server. Please ensure the backend is running on port 3000.", true);
        console.error("AI Fetch Error:", error);
    }
}

// ─── START ────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);
// ─── MOCK TEST SYSTEM ──────────────────────────────────────────────────
let mtState = {
    testId: null,
    questions: [],
    idx: 0,
    answers: {},
    timerId: null,
    timeSecs: 0
};

function bindMockTestEvents() {
    const btnMockTestsNav = document.getElementById('btnMockTestsNav');
    const overlay = document.getElementById('mockTestOverlay');
    const btnClose = document.getElementById('btnCloseMock');
    const jobSelect = document.getElementById('jobSelect');
    const btnStart = document.getElementById('btnStartTest');

    if (btnMockTestsNav) {
        btnMockTestsNav.addEventListener('click', () => {
            overlay.style.display = 'flex';
            switchMockView('mockLanding');
            loadJobDropdown();
            fetchRecentResults();
        });
    }

    if (btnClose) {
        btnClose.addEventListener('click', () => {
            if (mtState.timerId) clearInterval(mtState.timerId);
            overlay.style.display = 'none';
            if (typeof renderJobs === 'function') renderJobs();
        });
    }

    if (jobSelect) {
        jobSelect.addEventListener('change', (e) => {
            if (btnStart) btnStart.disabled = !e.target.value;
        });
    }

    if (btnStart) {
        btnStart.addEventListener('click', async () => {
            btnStart.disabled = true;
            btnStart.textContent = 'Loading...';
            await startSelectedTest(jobSelect.value);
            btnStart.disabled = false;
            btnStart.textContent = 'Start Exam';
        });
    }

    document.getElementById('btnNextQue').addEventListener('click', () => navigateQuestion(1));
    document.getElementById('btnPrevQue').addEventListener('click', () => navigateQuestion(-1));
    document.getElementById('btnSubmitTest').addEventListener('click', submitTest);

    // Create Back Button Event if btnBackToLanding exists, or try directly binding
    const btnBack = document.getElementById('btnBackToLanding');
    if (btnBack) {
        btnBack.addEventListener('click', () => {
            switchMockView('mockLanding');
            fetchRecentResults();
        });
    }
}

function switchMockView(viewId) {
    document.querySelectorAll('.mock-content').forEach(el => el.style.display = 'none');
    const target = document.getElementById(viewId);
    if (target) target.style.display = 'block'; // active is display: block for users original CSS
    target.classList.add('active');
    const timer = document.getElementById('mockTimer');
    if (timer) timer.style.display = viewId === 'mockTestInterface' ? 'flex' : 'none';
}

function loadJobDropdown() {
    const select = document.getElementById('jobSelect');
    const currentVal = select.value;
    select.innerHTML = '<option value="">-- Click to choose an exam --</option>';
    JOBS_DATA.forEach(j => {
        const opt = document.createElement('option');
        opt.value = j.id;
        opt.textContent = j.name;
        select.appendChild(opt);
    });
    select.value = currentVal;
}

async function fetchRecentResults() {
    if (!auth.currentUser) return;
    const list = document.getElementById('resultsList');
    if (!list) return;
    list.innerHTML = 'Loading...';
    try {
        const res = await fetch(`/api/results?google_id=${auth.currentUser.uid}`);
        if (!res.ok) throw new Error('API Error');
        const data = await res.json();
        if (data.length === 0) {
            list.innerHTML = '<div class="empty-state">No previous attempts found.</div>';
        } else {
            list.innerHTML = data.map(r => `
        <div class="result-item">
          <div class="result-item-info">
            <h4>${r.title}</h4>
            <span>${new Date(r.completed_at).toLocaleString()}</span>
          </div>
          <div class="result-item-actions" style="display: flex; gap: 12px; align-items: center;">
            <div class="result-item-score">${r.score}</div>
            <button class="btn-nav" style="padding: 6px 12px; font-size: 13px;" onclick="reviewPastAttempt(${r.id})">Review</button>
          </div>
        </div>
      `).join('');
        }
    } catch (e) {
        list.innerHTML = '<div class="empty-state">Error loading results.</div>';
    }
}

async function startSelectedTest(jobId) {
    if (!auth.currentUser) {
        alert("Please sign in with Google to take mock tests.");
        return;
    }
    try {
        const tRes = await fetch(`/api/tests?job_id=${jobId}`);
        const tests = await tRes.json();
        if (!tests.length) {
            alert("No mock tests available for this job yet. (Try UPSC or SSC CGL!)");
            return;
        }
        const test = tests[0];

        const qRes = await fetch(`/api/tests/${test.id}/questions`);
        const qs = await qRes.json();
        if (!qs.length) {
            alert("No questions found in this test.");
            return;
        }

        mtState.testId = test.id;
        mtState.questions = qs;
        mtState.idx = 0;
        mtState.answers = {};
        mtState.timeSecs = test.duration_minutes * 60;

        const totalQueNum = document.getElementById('totalQueNum');
        if (totalQueNum) totalQueNum.textContent = qs.length;

        switchMockView('mockTestInterface');
        renderQuestionPalette();
        renderCurrentQuestion();
        startTimer();
    } catch (error) {
        console.error(error);
        alert("Failed to start test.");
    }
}

function startTimer() {
    if (mtState.timerId) clearInterval(mtState.timerId);
    const display = document.getElementById('timerDisplay');
    const update = () => {
        if (mtState.timeSecs <= 0) {
            clearInterval(mtState.timerId);
            submitTest();
            return;
        }
        mtState.timeSecs--;
        const m = Math.floor(mtState.timeSecs / 60).toString().padStart(2, '0');
        const s = (mtState.timeSecs % 60).toString().padStart(2, '0');
        display.textContent = `${m}:${s}`;
    };
    update();
    mtState.timerId = setInterval(update, 1000);
}

function renderQuestionPalette() {
    const p = document.getElementById('quePalette');
    p.innerHTML = mtState.questions.map((q, i) => `
    <button class="pal-btn" onclick="goToQuestion(${i})" id="palBtn${i}">${i + 1}</button>
  `).join('');
}

window.goToQuestion = function (i) {
    mtState.idx = i;
    renderCurrentQuestion();
};

function renderCurrentQuestion() {
    const q = mtState.questions[mtState.idx];
    document.getElementById('currQueNum').textContent = mtState.idx + 1;
    document.getElementById('questionContainer').innerHTML = `
    <div class="que-text">${mtState.idx + 1}. ${q.question_text}</div>
    <div class="options-grid">
      ${[1, 2, 3, 4].map(num => `
        <label class="option-btn ${mtState.answers[q.id] == num ? 'selected' : ''}" onclick="selectOption(${q.id}, ${num}, this)">
          <input type="radio" name="mock_q" value="${num}" style="display:none;" ${mtState.answers[q.id] == num ? 'checked' : ''}>
          <div class="opt-letter">${['A', 'B', 'C', 'D'][num - 1]}</div>
          ${q['option' + num]}
        </label>
      `).join('')}
    </div>
  `;

    document.querySelectorAll('.pal-btn').forEach((b, i) => {
        b.classList.remove('current');
        if (i === mtState.idx) b.classList.add('current');
    });

    const prevBtn = document.getElementById('btnPrevQue');
    const nextBtn = document.getElementById('btnNextQue');
    if (prevBtn) prevBtn.disabled = mtState.idx === 0;
    if (nextBtn) nextBtn.disabled = mtState.idx === mtState.questions.length - 1;
}

window.selectOption = function (qId, val, element) {
    mtState.answers[qId] = val;
    const list = element.closest('.options-grid');
    list.querySelectorAll('.option-btn').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    const btn = document.getElementById('palBtn' + mtState.idx);
    if (btn) btn.classList.add('answered');
};

function navigateQuestion(dir) {
    const newIdx = mtState.idx + dir;
    if (newIdx >= 0 && newIdx < mtState.questions.length) {
        mtState.idx = newIdx;
        renderCurrentQuestion();
    }
}

window.reviewPastAttempt = async function (attemptId) {
    try {
        const res = await fetch(`/api/results/${attemptId}`);
        if (!res.ok) throw new Error('Failed to fetch attempt details');
        const result = await res.json();

        const qRes = await fetch(`/api/tests/${result.test_id}/questions`);
        const qs = await qRes.json();

        mtState.testId = result.test_id;
        mtState.questions = qs;

        showResults(result);
    } catch (e) {
        console.error(e);
        alert('Error loading past attempt.');
    }
};

async function submitTest() {
    if (!auth.currentUser) {
        alert("Please sign in first.");
        return;
    }
    if (mtState.timerId) clearInterval(mtState.timerId);
    const btn = document.getElementById('btnSubmitTest');
    if (btn) {
        btn.textContent = 'Submitting...';
        btn.disabled = true;
    }

    try {
        const res = await fetch('/api/tests/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                google_id: auth.currentUser.uid,
                test_id: mtState.testId,
                answers: mtState.answers
            })
        });
        const result = await res.json();
        showResults(result);
    } catch (e) {
        console.error(e);
        alert("Failed to submit.");
    } finally {
        if (btn) {
            btn.textContent = 'Submit Final Exam';
            btn.disabled = false;
        }
    }
}

function showResults(data) {
    switchMockView('mockResult');
    document.getElementById('finalScore').textContent = data.score;
    document.getElementById('maxScore').textContent = data.total;
    const acc = data.total > 0 ? Math.round((data.score / data.total) * 100) : 0;
    document.getElementById('accuracyVal').textContent = `${acc}%`;

    const details = document.getElementById('resultDetails');
    details.innerHTML = data.feedback.map((fb, idx) => {
        const qObj = mtState.questions.find(q => q.id == fb.question_id);
        const userVal = fb.user_answer ? qObj['option' + fb.user_answer] : 'Not Answered';
        const correctVal = qObj['option' + fb.correct_answer];

        return `
      <div class="review-item">
        <div class="review-que">Q${idx + 1}: ${qObj.question_text}</div>
        <div class="review-ans">
          <span class="status-badge ${fb.is_correct ? 'correct' : 'incorrect'}">Your Answer: ${userVal}</span>
          ${!fb.is_correct ? `<span class="status-badge correct">Correct: ${correctVal}</span>` : ''}
        </div>
      </div>
    `;
    }).join('');
}
