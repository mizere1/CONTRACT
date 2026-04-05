// Lessons Data with Full Details
const lessonsData = [
  {
    id: 1,
    title: "Setting the Scene: What Are Terms?",
    icon: "📚",
    duration: "8-10 min",
    description: "Understanding the foundational concept of contract terms - what they are, their importance, and their role in contract formation.",
    file: "Setting_the_Scene__What_Are_Terms_.wav",
    captions: [
      { time: "0:00", text: "Welcome to this lesson on contract terms. We'll explore what terms are and why they're crucial in contract law." },
      { time: "1:30", text: "A term is a provision or clause in a contract that establishes rights and obligations of the parties." },
      { time: "3:00", text: "Terms can be express - clearly stated by the parties - or implied by law or custom." },
      { time: "4:45", text: "Understanding terms is essential because they form the basis of what parties have agreed to." }
    ]
  },
  {
    id: 2,
    title: "Warranties and Innominate Terms",
    icon: "⚖️",
    duration: "10-12 min",
    description: "Explore the different types of contractual terms: warranties and innominate terms, and their legal implications.",
    file: "Warranties_and_Innominate_Terms.wav",
    captions: [
      { time: "0:00", text: "In this lesson, we distinguish between warranties and innominate terms." },
      { time: "2:00", text: "A warranty is a term whose breach entitles the injured party to damages but not termination of contract." },
      { time: "4:30", text: "Innominate terms are intermediate terms - their consequences depend on the breach severity." },
      { time: "6:15", text: "Understanding this distinction is vital for determining available remedies when breach occurs." }
    ]
  },
  {
    id: 3,
    title: "Conditions: Going to the Root",
    icon: "🎯",
    duration: "9-11 min",
    description: "Learn about conditions in contracts - terms so fundamental that their breach defeats the contract's purpose.",
    file: "Conditions__Going_to_the_Root.wav",
    captions: [
      { time: "0:00", text: "Conditions are fundamental terms that go to the root of the contract." },
      { time: "1:45", text: "Breach of a condition allows the injured party to terminate the contract and claim damages." },
      { time: "3:30", text: "The distinction between conditions and warranties is crucial in contract law." },
      { time: "5:00", text: "We examine several case law examples to illustrate how courts identify conditions." }
    ]
  },
  {
    id: 4,
    title: "Incorporation: Is the Term in the Contract?",
    icon: "✍️",
    duration: "10-12 min",
    description: "Understand how terms become incorporated into contracts and what factors courts consider.",
    file: "Incorporation__Is_the_Term_in_the_Contract_.wav",
    captions: [
      { time: "0:00", text: "Incorporation refers to how terms become part of a contract." },
      { time: "2:15", text: "Terms can be incorporated through signature, notice, or course of dealing." },
      { time: "4:00", text: "Courts examine whether parties had notice of the term before entering the contract." },
      { time: "6:30", text: "The 'onerous clause' principle affects how courts view incorporation." }
    ]
  },
  {
    id: 5,
    title: "Exclusion Clauses and UCTA 1977",
    icon: "🚫",
    duration: "12-14 min",
    description: "Examine exclusion and limitation clauses, and how the Unfair Contract Terms Act 1977 regulates them.",
    file: "Exclusion_Clauses_and_UCTA_1977.wav",
    captions: [
      { time: "0:00", text: "Exclusion clauses attempt to exclude or limit contractual liability." },
      { time: "2:45", text: "The Unfair Contract Terms Act 1977 places restrictions on exclusion clauses." },
      { time: "5:00", text: "Clauses must pass the 'reasonableness test' to be enforceable in many situations." },
      { time: "7:30", text: "We examine practical examples of how courts apply these rules." }
    ]
  },
  {
    id: 6,
    title: "Misrepresentation: Elements and Statement of Fact",
    icon: "🤥",
    duration: "11-13 min",
    description: "Understand misrepresentation - false statements that induce entry into contracts and available remedies.",
    file: "Misrepresentation__Elements_and_Statement_of_Fact.wav",
    captions: [
      { time: "0:00", text: "Misrepresentation is a false statement of fact that induces someone to enter a contract." },
      { time: "2:30", text: "The statement must be of fact, not opinion or law." },
      { time: "4:15", text: "The misrepresentation must have been made by one party and relied upon by the other." },
      { time: "6:45", text: "Understanding the elements is crucial for establishing misrepresentation claims." }
    ]
  },
  {
    id: 7,
    title: "Three Types of Misrepresentation and Remedies",
    icon: "⚠️",
    duration: "13-15 min",
    description: "Learn about fraudulent, negligent, and innocent misrepresentation, and the remedies available for each.",
    file: "Three_Types_of_Misrepresentation_and_Remedies.wav",
    captions: [
      { time: "0:00", text: "There are three types of misrepresentation in contract law." },
      { time: "2:00", text: "Fraudulent misrepresentation occurs when the statement is made knowingly or recklessly." },
      { time: "4:30", text: "Negligent misrepresentation arises from careless false statements." },
      { time: "6:45", text: "Innocent misrepresentation is made without fraud or negligence." },
      { time: "9:00", text: "Remedies differ for each type, ranging from rescission to damages." }
    ]
  },
  {
    id: 8,
    title: "Mistake: Common, Mutual, Unilateral",
    icon: "❓",
    duration: "12-14 min",
    description: "Explore the doctrine of mistake and how courts handle contracts made under mistaken assumptions.",
    file: "Mistake__Common,_Mutual,_Unilateral.wav",
    captions: [
      { time: "0:00", text: "Mistake in contract law refers to parties operating under false assumptions." },
      { time: "2:15", text: "Common mistake affects both parties regarding the same matter." },
      { time: "4:30", text: "Mutual mistake occurs when parties are at cross-purposes." },
      { time: "6:45", text: "Unilateral mistake affects only one party and rarely leads to contract voidness." },
      { time: "8:30", text: "We examine key cases that illustrate each type of mistake." }
    ]
  },
  {
    id: 9,
    title: "Duress & Economic Coercion",
    icon: "💪",
    duration: "11-13 min",
    description: "Understand duress as a defense to contract enforcement and the growing recognition of economic duress.",
    file: "Duress__Economic_Coercion.wav",
    captions: [
      { time: "0:00", text: "Duress is a defense available when one party is forced to enter a contract." },
      { time: "2:30", text: "Traditional duress involved threats of death or serious bodily harm." },
      { time: "4:45", text: "Modern law recognizes economic duress as a valid defense." },
      { time: "6:30", text: "Economic duress requires an illegitimate threat causing loss of practical ability to refuse." },
      { time: "8:45", text: "We examine important case law establishing these principles." }
    ]
  },
  {
    id: 10,
    title: "Frustration: When the Contract Cannot Survive",
    icon: "🌪️",
    duration: "12-14 min",
    description: "Learn about the doctrine of frustration - when unforeseen circumstances make contract performance impossible.",
    file: "Frustration__When_the_Contract_Cannot_Survive.wav",
    captions: [
      { time: "0:00", text: "Frustration occurs when unforeseen events render contract performance impossible or fundamentally different." },
      { time: "2:45", text: "The event must be beyond the parties' control and unforeseeable at contract formation." },
      { time: "5:00", text: "Courts examine whether performance has become radically different from what was contemplated." },
      { time: "7:15", text: "The Law Reform Act addresses frustration and its effects on obligations." },
      { time: "9:30", text: "We discuss landmark cases like Krell v. Henry and Davis Contractors v. Fareham UDC." }
    ]
  },
  {
    id: 11,
    title: "Discharge by Performance",
    icon: "✅",
    duration: "10-12 min",
    description: "Understand how contracts are discharged through proper performance of contractual obligations.",
    file: "Discharge_by_Performance.wav",
    captions: [
      { time: "0:00", text: "Performance is the primary means of discharging contractual obligations." },
      { time: "2:00", text: "Substantial performance doctrine recognizes discharge even with minor breaches." },
      { time: "4:15", text: "Time of performance is important - it's usually of the essence in contracts." },
      { time: "6:30", text: "We examine what constitutes sufficient performance and when it fully discharges the contract." }
    ]
  },
  {
    id: 12,
    title: "Remedies for Breach: Damages",
    icon: "💰",
    duration: "15-17 min",
    description: "Master the law on damages - the primary remedy for breach of contract, including types and calculation methods.",
    file: "Remedies_for_Breach__Damages.wav",
    captions: [
      { time: "0:00", text: "Damages are the primary remedy for breach of contract." },
      { time: "2:30", text: "Compensatory damages aim to place the injured party in the position they would have been if the contract had been performed." },
      { time: "5:00", text: "Damages must be reasonably foreseeable to be recoverable - established by Hadley v. Baxendale." },
      { time: "7:30", text: "The injured party has a duty to mitigate their loss - they must take reasonable steps to reduce damage." },
      { time: "9:45", text: "Liquidated damages are predetermined amounts specified in the contract." },
      { time: "12:00", text: "Penalty clauses that are unreasonable are unenforceable." },
      { time: "14:15", text: "We examine calculation methods and practical examples of damages awards." }
    ]
  },
  {
    id: 13,
    title: "The Privity Rule and Its Reform",
    icon: "🔗",
    duration: "11-13 min",
    description: "Explore the doctrine of privity and how modern law has reformed this principle to allow third-party beneficiaries.",
    file: "The_Privity_Rule_and_Its_Reform.wav",
    captions: [
      { time: "0:00", text: "Privity of contract means that only parties to a contract can enforce its terms." },
      { time: "2:15", text: "The privity doctrine has been criticized as unjust, particularly regarding third-party beneficiaries." },
      { time: "4:30", text: "The Contracts (Rights of Third Parties) Act 1999 reformed this rule." },
      { time: "6:45", text: "Third parties can now enforce terms that expressly benefit them." },
      { time: "9:00", text: "We examine the scope of reform and practical implications." }
    ]
  },
  {
    id: 14,
    title: "Limitation of Actions",
    icon: "⏰",
    duration: "9-11 min",
    description: "Learn about limitation periods - the time within which legal action must be brought for breach of contract.",
    file: "Limitation_of_Actions.wav",
    captions: [
      { time: "0:00", text: "Limitation periods are statutory time limits for bringing legal action." },
      { time: "2:00", text: "For simple contracts, the limitation period is generally six years." },
      { time: "3:45", text: "For specialty contracts (under seal), the period is twelve years." },
      { time: "5:30", text: "The limitation period typically runs from the date the breach occurs." },
      { time: "7:15", text: "Understanding limitation periods is crucial for protecting legal rights." }
    ]
  },
  {
    id: 15,
    title: "Gender and Contract Law",
    icon: "⚖️🌍",
    duration: "10-12 min",
    description: "Examine how gender-related issues intersect with contract law and the evolving legal frameworks.",
    file: "Gender_and_Contract_Law.wav",
    captions: [
      { time: "0:00", text: "Gender considerations have become increasingly important in modern contract law." },
      { time: "2:30", text: "Historical gender discrimination in contract law has been largely eliminated through legislation." },
      { time: "4:45", text: "Equal pay and non-discrimination principles apply to employment contracts." },
      { time: "7:00", text: "We examine how contract law intersects with gender equality principles." }
    ]
  },
  {
    id: 16,
    title: "Malawian Law Context",
    icon: "🌍",
    duration: "12-14 min",
    description: "Apply contract law principles specifically to the Malawian legal framework and local practice.",
    file: "Malawian_Law_Context.wav",
    captions: [
      { time: "0:00", text: "Malawi's legal system is based on common law principles." },
      { time: "2:15", text: "Contract law in Malawi largely follows English common law precedents." },
      { time: "4:30", text: "However, Malawian courts have developed their own jurisprudence on contract matters." },
      { time: "6:45", text: "Understanding the local context is essential for legal practice in Malawi." },
      { time: "8:30", text: "We examine key Malawian cases and their implications for contract law." }
    ]
  }
];

// App State
const appState = {
  currentLesson: null,
  completedLessons: new Set(),
  preferences: {
    theme: 'light',
    autoPlayNext: false,
    showCaptions: true
  }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  setupEventListeners();
  renderLessons();
  updateStats();
  checkInstallPrompt();
});

// Event Listeners
function setupEventListeners() {
  // Tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Lesson cards
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.lesson-card');
    if (card) {
      const lessonId = parseInt(card.dataset.id);
      openLesson(lessonId);
    }
  });

  // Modal close
  document.getElementById('closeModal').addEventListener('click', closeLesson);
  document.getElementById('playerModal').addEventListener('click', (e) => {
    if (e.target.id === 'playerModal') closeLesson();
  });

  // Install button
  document.getElementById('installBtn').addEventListener('click', installApp);
  document.getElementById('installBannerBtn').addEventListener('click', installApp);

  // Settings
  document.getElementById('themeDark').addEventListener('click', () => setTheme('dark'));
  document.getElementById('themeLight').addEventListener('click', () => setTheme('light'));
  document.getElementById('autoPlayNext').addEventListener('change', (e) => {
    appState.preferences.autoPlayNext = e.target.checked;
    saveState();
  });
  document.getElementById('showCaptions').addEventListener('change', (e) => {
    appState.preferences.showCaptions = e.target.checked;
    saveState();
  });
  document.getElementById('exportData').addEventListener('click', exportProgress);
  document.getElementById('resetData').addEventListener('click', resetProgress);

  // Settings button
  document.getElementById('settingsBtn').addEventListener('click', () => {
    switchTab('settings');
  });
}

// Render Lessons Grid
function renderLessons() {
  const grid = document.getElementById('lessonsGrid');
  grid.innerHTML = lessonsData.map(lesson => `
    <div class="lesson-card" data-id="${lesson.id}" style="position: relative;">
      <div class="lesson-icon">${lesson.icon}</div>
      <div class="lesson-title">${lesson.title}</div>
      <div class="lesson-description">${lesson.description}</div>
      <div class="lesson-duration">⏱️ ${lesson.duration}</div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${appState.completedLessons.has(lesson.id) ? '100' : '0'}%"></div>
      </div>
    </div>
  `).join('');
}

// Open Lesson
function openLesson(id) {
  const lesson = lessonsData.find(l => l.id === id);
  if (!lesson) return;

  appState.currentLesson = id;
  document.getElementById('modalTitle').textContent = lesson.title;
  
  const playerContent = document.getElementById('playerContent');
  playerContent.innerHTML = `
    <div class="player-metadata">
      <span>📚 ${lesson.icon}</span>
      <span>⏱️ Duration: ${lesson.duration}</span>
    </div>
    
    <audio class="audio-player" controls>
      <source src="${lesson.file}" type="audio/wav">
      Your browser does not support the audio element.
    </audio>

    ${appState.preferences.showCaptions ? `
      <div class="captions-section">
        <h3 class="section-title">📝 Lesson Captions & Highlights</h3>
        ${lesson.captions.map((caption, i) => `
          <div class="caption-block">
            <div class="caption-time">${caption.time}</div>
            <div class="caption-text">${caption.text}</div>
          </div>
        `).join('')}
      </div>
    ` : ''}

    <div class="controls" style="margin-top: 1.5rem;">
      <button class="btn btn-success" id="markCompleteBtn">✓ Mark as Complete</button>
      <button class="btn btn-secondary" id="downloadBtn">⬇️ Download Lesson</button>
      <button class="btn btn-secondary" id="shareBtn">📤 Share</button>
    </div>
  `;

  // Disable mark complete if already done
  const markCompleteBtn = document.getElementById('markCompleteBtn');
  if (appState.completedLessons.has(id)) {
    markCompleteBtn.textContent = '✓ Completed';
    markCompleteBtn.disabled = true;
  }

  markCompleteBtn.addEventListener('click', () => markLessonComplete(id));
  document.getElementById('downloadBtn').addEventListener('click', () => downloadLesson(lesson));
  document.getElementById('shareBtn').addEventListener('click', () => shareLesson(lesson));

  // Focus audio player
  const audio = playerContent.querySelector('audio');
  if (audio) {
    setTimeout(() => audio.focus(), 100);
  }

  document.getElementById('playerModal').classList.add('active');
}

// Close Lesson
function closeLesson() {
  document.getElementById('playerModal').classList.remove('active');
  appState.currentLesson = null;
}

// Mark Lesson Complete
function markLessonComplete(id) {
  appState.completedLessons.add(id);
  saveState();
  renderLessons();
  updateStats();
  
  const btn = document.getElementById('markCompleteBtn');
  btn.textContent = '✓ Completed';
  btn.disabled = true;

  // Show celebration
  showNotification('🎉 Great job! Lesson marked as complete.');
}

// Update Statistics
function updateStats() {
  const completed = appState.completedLessons.size;
  const total = lessonsData.length;
  const percentage = Math.round((completed / total) * 100);

  const statsGrid = document.getElementById('statsGrid');
  if (statsGrid) {
    statsGrid.innerHTML = `
      <div class="stat-card">
        <div class="stat-value">${completed}</div>
        <div class="stat-label">Lessons Completed</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${total}</div>
        <div class="stat-label">Total Lessons</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${percentage}%</div>
        <div class="stat-label">Progress</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${Math.round((completed / total) * 20)}</div>
        <div class="stat-label">Hours Invested</div>
      </div>
    `;
  }

  const progressDetails = document.getElementById('progressDetails');
  if (progressDetails) {
    const remainingLessons = lessonsData.filter(l => !appState.completedLessons.has(l.id));
    progressDetails.innerHTML = `
      <div class="guideline-item">
        <div class="guideline-title">📈 Your Progress Overview</div>
        <div class="guideline-text">
          You have completed <strong>${completed} out of ${total}</strong> lessons (${percentage}%)<br>
          ${remainingLessons.length > 0 ? `
            <strong>Next to learn:</strong> ${remainingLessons.slice(0, 3).map(l => l.title).join(', ')}<br>
          ` : '<strong>🏆 Congratulations! You have completed all lessons!</strong><br>'}
          Average lesson duration: 11 minutes<br>
          Estimated time to completion: ${remainingLessons.length * 11} minutes
        </div>
      </div>

      ${completed > 0 ? `
        <div class="guideline-item">
          <div class="guideline-title">✨ Completed Lessons</div>
          <div class="guideline-text">
            ${Array.from(appState.completedLessons).map(id => {
              const lesson = lessonsData.find(l => l.id === id);
              return `<div style="margin-bottom: 0.5rem;">✓ ${lesson.title}</div>`;
            }).join('')}
          </div>
        </div>
      ` : ''}
    `;
  }
}

// Switch Tab
function switchTab(tabName) {
  // Update buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });

  // Update content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  document.getElementById(`${tabName}-tab`)?.classList.add('active');

  if (tabName === 'progress') {
    updateStats();
  }
}

// Theme Management
function setTheme(theme) {
  appState.preferences.theme = theme;
  saveState();
  document.documentElement.setAttribute('data-theme', theme);
  if (theme === 'dark') {
    document.documentElement.style.colorScheme = 'dark';
  } else {
    document.documentElement.style.colorScheme = 'light';
  }
}

// Download Lesson
function downloadLesson(lesson) {
  // Create a blob URL for download
  fetch(lesson.file)
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = lesson.file;
      a.click();
      window.URL.revokeObjectURL(url);
      showNotification('📥 Lesson downloaded successfully!');
    })
    .catch(() => {
      showNotification('⚠️ Download not available for this lesson');
    });
}

// Share Lesson
function shareLesson(lesson) {
  if (navigator.share) {
    navigator.share({
      title: 'Contract Law Academy',
      text: `Check out this lesson: ${lesson.title}`,
      url: window.location.href
    });
  } else {
    const text = `I'm learning "${lesson.title}" on Contract Law Academy - a comprehensive learning app for contract law fundamentals!`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    showNotification('📤 Share link copied!');
  }
}

// Export Progress
function exportProgress() {
  const data = {
    completed: Array.from(appState.completedLessons),
    timestamp: new Date().toISOString(),
    progress: `${appState.completedLessons.size}/${lessonsData.length} lessons completed`
  };

  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'contract-law-progress.json';
  a.click();
  URL.revokeObjectURL(url);

  showNotification('📊 Progress exported successfully!');
}

// Reset Progress
function resetProgress() {
  if (confirm('Are you sure? This will reset all your progress. This action cannot be undone.')) {
    appState.completedLessons.clear();
    saveState();
    renderLessons();
    updateStats();
    showNotification('🔄 Progress has been reset');
  }
}

// Notification System
function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: var(--shadow-lg);
    z-index: 2000;
    animation: slideIn 0.3s ease;
    max-width: 300px;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Install App
let deferredPrompt;

function checkInstallPrompt() {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('installBanner').classList.add('show');
    document.getElementById('installBtn').style.opacity = '1';
  });
}

function installApp() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        showNotification('🎉 App installed successfully!');
        document.getElementById('installBanner').classList.remove('show');
      }
      deferredPrompt = null;
    });
  } else {
    showNotification('⚙️ App is already installed or installation not available');
  }
}

// State Management (LocalStorage)
function saveState() {
  localStorage.setItem('contractLawState', JSON.stringify({
    completed: Array.from(appState.completedLessons),
    preferences: appState.preferences
  }));
}

function loadState() {
  const saved = localStorage.getItem('contractLawState');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      appState.completedLessons = new Set(data.completed || []);
      appState.preferences = { ...appState.preferences, ...data.preferences };
    } catch (e) {
      console.error('Error loading state:', e);
    }
  }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
