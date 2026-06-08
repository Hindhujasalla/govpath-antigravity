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
  
  if(btnMockTestsNav) {
    btnMockTestsNav.addEventListener('click', () => {
      overlay.style.display = 'flex';
      switchMockView('mockLanding');
      loadJobDropdown();
      fetchRecentResults();
    });
  }

  if(btnClose) {
    btnClose.addEventListener('click', () => {
      if(mtState.timerId) clearInterval(mtState.timerId);
      overlay.style.display = 'none';
      if(typeof renderJobs === 'function') renderJobs();
    });
  }

  if(jobSelect) {
    jobSelect.addEventListener('change', (e) => {
      if(btnStart) btnStart.disabled = !e.target.value;
    });
  }

  if(btnStart) {
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
  if(btnBack) {
    btnBack.addEventListener('click', () => {
      switchMockView('mockLanding');
      fetchRecentResults();
    });
  }
}

function switchMockView(viewId) {
  document.querySelectorAll('.mock-content').forEach(el => el.style.display = 'none');
  const target = document.getElementById(viewId);
  if(target) target.style.display = 'block'; // active is display: block for users original CSS
  target.classList.add('active');
  const timer = document.getElementById('mockTimer');
  if(timer) timer.style.display = viewId === 'mockTestInterface' ? 'flex' : 'none';
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
  if(!auth.currentUser) return;
  const list = document.getElementById('resultsList');
  if(!list) return;
  list.innerHTML = 'Loading...';
  try {
    const res = await fetch(`/api/results?google_id=${auth.currentUser.uid}`);
    if(!res.ok) throw new Error('API Error');
    const data = await res.json();
    if(data.length === 0) {
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
  } catch(e) {
    list.innerHTML = '<div class="empty-state">Error loading results.</div>';
  }
}

async function startSelectedTest(jobId) {
  if(!auth.currentUser) {
      alert("Please sign in with Google to take mock tests.");
      return;
  }
  try {
    const tRes = await fetch(`/api/tests?job_id=${jobId}`);
    const tests = await tRes.json();
    if(!tests.length) {
      alert("No mock tests available for this job yet. (Try UPSC or SSC CGL!)");
      return;
    }
    const test = tests[0]; 
    
    const qRes = await fetch(`/api/tests/${test.id}/questions`);
    const qs = await qRes.json();
    if(!qs.length) {
      alert("No questions found in this test.");
      return;
    }

    mtState.testId = test.id;
    mtState.questions = qs;
    mtState.idx = 0;
    mtState.answers = {};
    mtState.timeSecs = test.duration_minutes * 60;

    const totalQueNum = document.getElementById('totalQueNum');
    if(totalQueNum) totalQueNum.textContent = qs.length;
    
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
  if(mtState.timerId) clearInterval(mtState.timerId);
  const display = document.getElementById('timerDisplay');
  const update = () => {
    if(mtState.timeSecs <= 0) {
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
    <button class="pal-btn" onclick="goToQuestion(${i})" id="palBtn${i}">${i+1}</button>
  `).join('');
}

window.goToQuestion = function(i) {
  mtState.idx = i;
  renderCurrentQuestion();
};

function renderCurrentQuestion() {
  const q = mtState.questions[mtState.idx];
  document.getElementById('currQueNum').textContent = mtState.idx + 1;
  document.getElementById('questionContainer').innerHTML = `
    <div class="que-text">${mtState.idx + 1}. ${q.question_text}</div>
    <div class="options-grid">
      ${[1,2,3,4].map(num => `
        <label class="option-btn ${mtState.answers[q.id] == num ? 'selected' : ''}" onclick="selectOption(${q.id}, ${num}, this)">
          <input type="radio" name="mock_q" value="${num}" style="display:none;" ${mtState.answers[q.id] == num ? 'checked' : ''}>
          <div class="opt-letter">${['A','B','C','D'][num-1]}</div>
          ${q['option'+num]}
        </label>
      `).join('')}
    </div>
  `;

  document.querySelectorAll('.pal-btn').forEach((b, i) => {
    b.classList.remove('current');
    if(i === mtState.idx) b.classList.add('current');
  });

  const prevBtn = document.getElementById('btnPrevQue');
  const nextBtn = document.getElementById('btnNextQue');
  if(prevBtn) prevBtn.disabled = mtState.idx === 0;
  if(nextBtn) nextBtn.disabled = mtState.idx === mtState.questions.length - 1;
}

window.selectOption = function(qId, val, element) {
  mtState.answers[qId] = val;
  const list = element.closest('.options-grid');
  list.querySelectorAll('.option-btn').forEach(el => el.classList.remove('selected'));
  element.classList.add('selected');
  const btn = document.getElementById('palBtn' + mtState.idx);
  if(btn) btn.classList.add('answered');
};

function navigateQuestion(dir) {
  const newIdx = mtState.idx + dir;
  if(newIdx >= 0 && newIdx < mtState.questions.length) {
    mtState.idx = newIdx;
    renderCurrentQuestion();
  }
}

window.reviewPastAttempt = async function(attemptId) {
  try {
    const res = await fetch(`/api/results/${attemptId}`);
    if (!res.ok) throw new Error('Failed to fetch attempt details');
    const result = await res.json();
    
    const qRes = await fetch(`/api/tests/${result.test_id}/questions`);
    const qs = await qRes.json();
    
    mtState.testId = result.test_id;
    mtState.questions = qs;
    
    showResults(result);
  } catch(e) {
    console.error(e);
    alert('Error loading past attempt.');
  }
};

async function submitTest() {
  if(!auth.currentUser) {
    alert("Please sign in first."); 
    return;
  }
  if(mtState.timerId) clearInterval(mtState.timerId);
  const btn = document.getElementById('btnSubmitTest');
  if(btn) {
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
    if(btn) {
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
    const userVal = fb.user_answer ? qObj['option'+fb.user_answer] : 'Not Answered';
    const correctVal = qObj['option'+fb.correct_answer];
    
    return `
      <div class="review-item">
        <div class="review-que">Q${idx+1}: ${qObj.question_text}</div>
        <div class="review-ans">
          <span class="status-badge ${fb.is_correct ? 'correct' : 'incorrect'}">Your Answer: ${userVal}</span>
          ${!fb.is_correct ? `<span class="status-badge correct">Correct: ${correctVal}</span>` : ''}
        </div>
      </div>
    `;
  }).join('');
}
