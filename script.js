/**
 * FRONTEND QUIZ WEBSITE ARCHITECTURE & LOGIC
 * Topic: N.R. Narayana Murthy – Role of Western Values in Contemporary Indian Society
 * Features: 35 MCQs, Student Roll Spinner (1-82), Audio Synthesizer, Projector Mode, Free Navigation
 */

// ==========================================================================
// 1. QUIZ QUESTION BANK (Exact 35 MCQs from PDF)
// ==========================================================================
const QUESTIONS_DATA = [
    {
        id: 1,
        question: "Where was this speech delivered?",
        options: [
            "Indian Institute of Management Bangalore",
            "Indian School of Business",
            "XLRI Jamshedpur",
            "Lal Bahadur Shastri Institute of Management"
        ],
        answer: 3 // D
    },
    {
        id: 2,
        question: "On which date was the speech delivered?",
        options: [
            "15 August 2002",
            "2 October 2002",
            "26 January 2002",
            "14 November 2002"
        ],
        answer: 1 // B
    },
    {
        id: 3,
        question: "What award was Narayana Murthy receiving at the time of this speech?",
        options: [
            "Padma Vibhushan",
            "Lal Bahadur Shastri Award for Public Administration and Management Sciences",
            "Ramon Magsaysay Award",
            "Businessman of the Year Award"
        ],
        answer: 1 // B
    },
    {
        id: 4,
        question: "According to Murthy, what primarily drives progress and defines the quality of life in any society?",
        options: [
            "Technology",
            "Economic policies",
            "Values",
            "Education system"
        ],
        answer: 2 // C
    },
    {
        id: 5,
        question: "The word “community” is derived from which two Latin words?",
        options: [
            "Com (together) and unus (one)",
            "Socius (ally) and civis (citizen)",
            "Populus (people) and res (affair)",
            "Familia (family) and natio (birth)"
        ],
        answer: 0 // A
    },
    {
        id: 6,
        question: "What Vedic saying does Murthy quote regarding individual and collective living?",
        options: [
            "“Vasudhaiva Kutumbakam”",
            "“Man can live individually, but can survive only collectively”",
            "“Satyam vada, dharmam chara”",
            "“Ahimsa paramo dharma”"
        ],
        answer: 1 // B
    },
    {
        id: 7,
        question: "How does Murthy define a value system?",
        options: [
            "A set of religious rules",
            "The protocol for behaviour that enhances trust, confidence and commitment of community members",
            "A legal code enforced by the state",
            "Traditional customs passed down generations"
        ],
        answer: 1 // B
    },
    {
        id: 8,
        question: "What are the two pillars of the cultural value system according to Murthy?",
        options: [
            "Loyalty to nation and loyalty to religion",
            "Loyalty to family and loyalty to community",
            "Loyalty to self and loyalty to society",
            "Loyalty to tradition and loyalty to progress"
        ],
        answer: 1 // B
    },
    {
        id: 9,
        question: "Which Indian values does Murthy highlight as strengths?",
        options: [
            "Strong public cleanliness and punctuality",
            "Deep-rooted family values – Mathru devo bhava and Pithru devo bhava",
            "High respect for contractual obligations",
            "Strong sense of meritocracy"
        ],
        answer: 1 // B
    },
    {
        id: 10,
        question: "According to Murthy, the success of Infosys belongs as much to whom as to the founders themselves?",
        options: [
            "The government",
            "The founders’ families",
            "Foreign investors",
            "Employees only"
        ],
        answer: 1 // B
    },
    {
        id: 11,
        question: "What major gap does Murthy identify between Indian family behaviour and community behaviour?",
        options: [
            "Indians neglect family but care for community",
            "Strong family loyalty is not reflected in community behaviour (littering, corruption, breaking contracts)",
            "Indians are equally responsible in both",
            "Community behaviour is stronger than family behaviour"
        ],
        answer: 1 // B
    },
    {
        id: 12,
        question: "In which Western countries does Murthy say individuals show stronger societal orientation?",
        options: [
            "Only the United States",
            "US, Canada, Europe, Australia and New Zealand",
            "Only European countries",
            "Only English-speaking countries"
        ],
        answer: 1 // B
    },
    {
        id: 13,
        question: "What examples does Murthy give of Western respect for the public good?",
        options: [
            "Parks free of litter, clean streets, public toilets free of graffiti",
            "Large private houses and expensive cars",
            "High military spending",
            "Strict immigration laws"
        ],
        answer: 0 // A
    },
    {
        id: 14,
        question: "What does Murthy say about corruption in Western societies compared to India?",
        options: [
            "Western societies have higher corruption",
            "Western societies are relatively corruption-free due to individual responsibility",
            "Corruption levels are the same",
            "Corruption is not an issue in either society"
        ],
        answer: 1 // B
    },
    {
        id: 15,
        question: "What examples of apathy toward community matters does Murthy give?",
        options: [
            "Delay in building a water grid connecting India’s rivers, thermal power plant for Bangalore (decided in 1983 but not started), and Milan subway in Bombay remaining in a deplorable state for 40 years",
            "Lack of interest in sports",
            "Neglect of temples and religious places",
            "Low voter turnout"
        ],
        answer: 0 // A
    },
    {
        id: 16,
        question: "According to Murthy, what is the historical reason for Indian apathy toward public issues?",
        options: [
            "Colonial education system",
            "Centuries of foreign rule leading people to believe public issues belong to rulers and Indians only execute orders",
            "Influence of socialist policies",
            "Overpopulation"
        ],
        answer: 1 // B
    },
    {
        id: 17,
        question: "Which Aristotle quote does Murthy use?",
        options: [
            "“Man is a political animal”",
            "“We are what we repeatedly do”",
            "“The unexamined life is not worth living”",
            "“Virtue is a mean between extremes”"
        ],
        answer: 1 // B
    },
    {
        id: 18,
        question: "What intellectual problem does Murthy say has hindered India’s progress?",
        options: [
            "Lack of intelligence",
            "Intellectual arrogance – gloating about the past while ignoring current lack of accomplishment",
            "Excessive humility",
            "Over-dependence on Western knowledge"
        ],
        answer: 1 // B
    },
    {
        id: 19,
        question: "Who observed a thousand years ago that Indian pundits considered it below their dignity to even argue with him?",
        options: [
            "Al-Biruni (Al Barouni)",
            "Ibn Battuta",
            "Marco Polo",
            "Megasthenes"
        ],
        answer: 0 // A
    },
    {
        id: 20,
        question: "What does Murthy call the most important attribute of a progressive society?",
        options: [
            "Military strength",
            "Respect for those who have accomplished more and willingness to learn from them",
            "Large population",
            "Ancient heritage"
        ],
        answer: 1 // B
    },
    {
        id: 21,
        question: "Which Thomas Carlyle quote does Murthy use?",
        options: [
            "“The greatest of faults is to be conscious of none”",
            "“Work is worship”",
            "“History is the biography of great men”",
            "“Silence is golden”"
        ],
        answer: 0 // A
    },
    {
        id: 22,
        question: "What Western sense of accountability does Murthy recommend India adopt?",
        options: [
            "Accountability only for junior officers",
            "Everyone is held responsible for their actions regardless of position",
            "Accountability only in the private sector",
            "No personal accountability"
        ],
        answer: 1 // B
    },
    {
        id: 23,
        question: "What examples of lack of accountability in India does Murthy give?",
        options: [
            "Politicians forgetting to file tax returns for a decade and managers of loss-making PSUs facing no repercussions",
            "Teachers not taking classes",
            "Doctors charging high fees",
            "Lawyers delaying cases"
        ],
        answer: 0 // A
    },
    {
        id: 24,
        question: "What does Murthy say about dignity of labour in the West versus India?",
        options: [
            "Both societies value all work equally",
            "West respects honest labour of every kind; India often reveres only intellectual work",
            "India respects manual labour more",
            "Dignity of labour is not important"
        ],
        answer: 1 // B
    },
    {
        id: 25,
        question: "Which Rudyard Kipling observation does Murthy quote?",
        options: [
            "“East is East and West is West”",
            "“A Westerner can be friendly without being intimate, while an Easterner tends to be intimate without being friendly”",
            "“The white man’s burden”",
            "“If you can keep your head when all about you...”"
        ],
        answer: 1 // B
    },
    {
        id: 26,
        question: "What does Murthy say about “Indian Standard Time”?",
        options: [
            "It is a sign of cultural uniqueness",
            "It has become synonymous with being late and deadlines are rarely met",
            "It is more efficient than Western time",
            "It reflects flexibility"
        ],
        answer: 1 // B
    },
    {
        id: 27,
        question: "According to Murthy, what does Western professionalism include?",
        options: [
            "Feudal thinking and dependence on bosses",
            "Meritocracy, independent thinking, and performance evaluation free from personal prejudice",
            "Preference for being told what to do",
            "Ignoring personal relationships at work"
        ],
        answer: 1 // B
    },
    {
        id: 28,
        question: "What does Murthy say many bright Indians still suffer from?",
        options: [
            "Lack of intelligence",
            "Feudal thinking – preferring to be told what to do rather than showing independence",
            "Over-confidence",
            "Lack of education"
        ],
        answer: 1 // B
    },
    {
        id: 29,
        question: "What does Murthy say about contractual obligations in the West versus India?",
        options: [
            "Contracts are frequently broken in the West",
            "In the West contracts are seldom dishonoured; in India integrity shown in marriage vows is not extended to the public domain",
            "Both societies treat contracts the same way",
            "Indians are more honest in contracts"
        ],
        answer: 1 // B
    },
    {
        id: 30,
        question: "What examples of lack of intellectual honesty does Murthy give?",
        options: [
            "Reneging on corporate contracts and students defaulting on overseas education loans",
            "Not paying temple donations",
            "Avoiding family responsibilities",
            "Not voting in elections"
        ],
        answer: 0 // A
    },
    {
        id: 31,
        question: "Which Dwight Eisenhower quote does Murthy use?",
        options: [
            "“The only thing we have to fear is fear itself”",
            "“A people that values its privileges above its principles soon loses both”",
            "“I like Ike”",
            "“Military-industrial complex”"
        ],
        answer: 1 // B
    },
    {
        id: 32,
        question: "According to Murthy, culture (quoting Henry Beecher) is that which helps us:",
        options: [
            "Preserve ancient traditions",
            "Work for the betterment of all",
            "Compete with other nations",
            "Maintain social hierarchy"
        ],
        answer: 1 // B
    },
    {
        id: 33,
        question: "What does Murthy urge Indians to do with Western values?",
        options: [
            "Completely replace Indian values",
            "Assimilate positive Western values into Indian culture",
            "Reject all Western influence",
            "Adopt only Western economic systems"
        ],
        answer: 1 // B
    },
    {
        id: 34,
        question: "Which Gandhi quote does Murthy use toward the end?",
        options: [
            "“Be the change you wish to see in the world”",
            "“There is enough in this world for everyone’s need, but not enough for everyone’s greed”",
            "“An eye for an eye makes the whole world blind”",
            "“Live as if you were to die tomorrow”"
        ],
        answer: 1 // B
    },
    {
        id: 35,
        question: "What is Murthy’s final message to the audience?",
        options: [
            "Focus only on personal success",
            "Extend family values to the nation, work for the maximum welfare of all (Samasta janaanaam sukhino bhavantu), and let the present generation set an example for the next",
            "Wait for the government to solve all problems",
            "Emigrate to Western countries"
        ],
        answer: 1 // B
    }
];

// Total roll numbers range (1 to 82)
const MAX_ROLL_NUMBERS = 82;
// Dropped / Excluded Roll Numbers
const EXCLUDED_ROLL_NUMBERS = [4, 10, 38, 43, 54, 55, 69, 79, 80];
const TOTAL_VALID_ROLL_NUMBERS = MAX_ROLL_NUMBERS - EXCLUDED_ROLL_NUMBERS.length; // 73

// ==========================================================================
// 2. STATE MANAGEMENT
// ==========================================================================
let state = {
    currentQuestionIndex: 0,
    usedRollNumbers: [],
    currentRollNumber: null,
    hasSpunForCurrentQuestion: false,
    isAnsweredCorrectly: false,
    soundEnabled: true,
    isSpinning: false
};

// ==========================================================================
// 3. WEB AUDIO SYNTHESIZER (No External Files Required)
// ==========================================================================
class SoundFX {
    constructor() {
        this.ctx = null;
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.ctx = new AudioContext();
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    playTick() {
        if (!state.soundEnabled) return;
        this.init();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440 + Math.random() * 200, this.ctx.currentTime);
        
        gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.04);
    }

    playStopChime() {
        if (!state.soundEnabled) return;
        this.init();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.15); // A5

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.3);
    }

    playCorrect() {
        if (!state.soundEnabled) return;
        this.init();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6

        notes.forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + i * 0.08);

            gain.gain.setValueAtTime(0.12, now + i * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.25);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now + i * 0.08);
            osc.stop(now + i * 0.08 + 0.25);
        });
    }

    playWrong() {
        if (!state.soundEnabled) return;
        this.init();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        
        // Classic game show dual-pulse buzzer sound effect
        const pulses = [
            { start: 0, duration: 0.16, freq1: 175, freq2: 138 },
            { start: 0.18, duration: 0.26, freq1: 125, freq2: 98 }
        ];

        pulses.forEach(p => {
            const osc1 = this.ctx.createOscillator();
            const osc2 = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc1.type = 'sawtooth';
            osc2.type = 'square';

            osc1.frequency.setValueAtTime(p.freq1, now + p.start);
            osc2.frequency.setValueAtTime(p.freq2, now + p.start);

            gain.gain.setValueAtTime(0.14, now + p.start);
            gain.gain.exponentialRampToValueAtTime(0.001, now + p.start + p.duration);

            osc1.connect(gain);
            osc2.connect(gain);
            gain.connect(this.ctx.destination);

            osc1.start(now + p.start);
            osc2.start(now + p.start);
            osc1.stop(now + p.start + p.duration);
            osc2.stop(now + p.start + p.duration);
        });
    }

    playVictory() {
        if (!state.soundEnabled) return;
        this.init();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const tune = [
            { f: 523.25, d: 0.15, t: 0 },
            { f: 659.25, d: 0.15, t: 0.15 },
            { f: 783.99, d: 0.15, t: 0.30 },
            { f: 1046.50, d: 0.40, t: 0.45 }
        ];

        tune.forEach(note => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(note.f, now + note.t);

            gain.gain.setValueAtTime(0.15, now + note.t);
            gain.gain.exponentialRampToValueAtTime(0.001, now + note.t + note.d);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now + note.t);
            osc.stop(now + note.t + note.d);
        });
    }

    playTimeUp() {
        if (!state.soundEnabled) return;
        this.init();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(220, now + 0.4);

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.4);
    }
}

const sfx = new SoundFX();

// Roll Timer State
let rollTimerState = {
    intervalId: null
};

// ==========================================================================
// 4. DOM ELEMENTS CACHE
// ==========================================================================
const DOM = {
    // Screens
    welcomeScreen: document.getElementById('welcome-screen'),
    quizScreen: document.getElementById('quiz-screen'),
    globalHeader: document.getElementById('global-header'),
    
    // Header Info
    progressText: document.getElementById('progress-text'),
    soundBtn: document.getElementById('btn-sound'),
    soundIcon: document.getElementById('sound-icon'),
    fullscreenBtn: document.getElementById('btn-fullscreen'),
    stopHeaderBtn: document.getElementById('btn-stop-header'),
    resetHeaderBtn: document.getElementById('btn-reset-header'),

    // Welcome Screen
    startQuizBtn: document.getElementById('btn-start-quiz'),

    // Question Section
    progressBarFill: document.getElementById('progress-bar-fill'),
    questionBadge: document.getElementById('question-badge'),
    questionStatusTag: document.getElementById('question-status-tag'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    optionCards: document.querySelectorAll('.option-card'),
    feedbackBanner: document.getElementById('feedback-banner'),
    feedbackContent: document.getElementById('feedback-content'),
    prevQuestionBtn: document.getElementById('btn-prev-question'),
    stopNavBtn: document.getElementById('btn-stop-nav'),
    nextQuestionBtn: document.getElementById('btn-next-question'),

    // Spinner Section
    poolCounter: document.getElementById('pool-counter'),
    spinnerNumberDisplay: document.getElementById('spinner-number-display'),
    selectedRollBanner: document.getElementById('selected-roll-banner'),
    currentRollNumDisplay: document.getElementById('current-roll-num'),
    spinBtn: document.getElementById('btn-spin'),
    spinBtnText: document.getElementById('btn-spin-text'),
    historyCount: document.getElementById('history-count'),
    modalHistoryCount: document.getElementById('modal-history-count'),
    historyTagsContainer: document.getElementById('history-tags-container'),
    showHistoryBtn: document.getElementById('btn-show-history'),
    historyModal: document.getElementById('history-modal'),
    closeHistoryBtn: document.getElementById('btn-close-history'),

    // Student Roll Timer
    timerContainer: document.getElementById('roll-timer-container'),
    timerDisplay: document.getElementById('timer-display'),
    timerBarFill: document.getElementById('timer-bar-fill'),
    timerIcon: document.getElementById('timer-icon'),

    // Modals
    resetModal: document.getElementById('reset-modal'),
    confirmResetBtn: document.getElementById('btn-confirm-reset'),
    cancelResetBtn: document.getElementById('btn-cancel-reset'),

    completionModal: document.getElementById('completion-modal'),
    finalQuestions: document.getElementById('final-questions'),
    finalRolls: document.getElementById('final-rolls'),
    restartQuizBtn: document.getElementById('btn-restart-quiz'),
    homeQuizBtn: document.getElementById('btn-home-quiz')
};

// ==========================================================================
// 5. APPLICATION CONTROLLER LOGIC
// ==========================================================================

function initApp() {
    // REQUIREMENT: Any time we open the page, always show the first slide (Welcome Screen)!
    resetQuizState();
    setupEventListeners();
    updateSoundUI();
    showWelcomeScreen();
}

function resetQuizState() {
    state = {
        currentQuestionIndex: 0,
        usedRollNumbers: [],
        currentRollNumber: null,
        hasSpunForCurrentQuestion: false,
        isAnsweredCorrectly: false,
        soundEnabled: state.soundEnabled,
        isSpinning: false
    };
}

function setupEventListeners() {
    // Welcome Screen Start Button
    DOM.startQuizBtn.addEventListener('click', () => {
        sfx.init();
        showQuizScreen();
    });

    // Option Clicks
    DOM.optionCards.forEach(card => {
        card.addEventListener('click', () => {
            const index = parseInt(card.getAttribute('data-index'), 10);
            handleOptionSelect(index);
        });
    });

    // Spin Button
    DOM.spinBtn.addEventListener('click', () => {
        handleSpinClick();
    });

    // Navigation Buttons (Left/Right Arrows)
    DOM.prevQuestionBtn.addEventListener('click', () => {
        handlePrevQuestion();
    });

    DOM.nextQuestionBtn.addEventListener('click', () => {
        handleNextQuestion();
    });

    // Keyboard Arrow Keys Navigation (Left Arrow ←, Right Arrow →)
    document.addEventListener('keydown', (e) => {
        // Only navigate if Quiz Screen is active and modals are not open
        const isModalOpen = !DOM.resetModal.classList.contains('hidden') || 
                            !DOM.completionModal.classList.contains('hidden') ||
                            (DOM.historyModal && !DOM.historyModal.classList.contains('hidden'));

        if (!DOM.quizScreen.classList.contains('hidden') && !isModalOpen) {
            if (e.key === 'ArrowLeft') {
                handlePrevQuestion();
            } else if (e.key === 'ArrowRight') {
                handleNextQuestion();
            }
        }
        if (e.key === 'Escape') {
            hideHistoryModal();
            hideResetModal();
        }
    });

    // Stop Quiz Buttons (Header & Navigation Bar)
    if (DOM.stopHeaderBtn) {
        DOM.stopHeaderBtn.addEventListener('click', () => {
            handleQuizCompletion();
        });
    }

    if (DOM.stopNavBtn) {
        DOM.stopNavBtn.addEventListener('click', () => {
            handleQuizCompletion();
        });
    }

    // Header Controls
    DOM.soundBtn.addEventListener('click', () => {
        state.soundEnabled = !state.soundEnabled;
        updateSoundUI();
    });

    DOM.fullscreenBtn.addEventListener('click', () => {
        toggleFullscreen();
    });

    DOM.resetHeaderBtn.addEventListener('click', () => {
        showResetModal();
    });

    // Reset Modal
    DOM.confirmResetBtn.addEventListener('click', () => {
        resetQuiz();
        hideResetModal();
    });

    DOM.cancelResetBtn.addEventListener('click', () => {
        hideResetModal();
    });

    // Restart / Welcome Buttons (Completion Screen)
    DOM.restartQuizBtn.addEventListener('click', () => {
        DOM.completionModal.classList.add('hidden');
        resetQuiz();
    });

    if (DOM.homeQuizBtn) {
        DOM.homeQuizBtn.addEventListener('click', () => {
            DOM.completionModal.classList.add('hidden');
            resetQuizState();
            showWelcomeScreen();
        });
    }

    // Selected Students Modal Handlers
    if (DOM.showHistoryBtn) {
        DOM.showHistoryBtn.addEventListener('click', () => {
            showHistoryModal();
        });
    }

    if (DOM.closeHistoryBtn) {
        DOM.closeHistoryBtn.addEventListener('click', () => {
            hideHistoryModal();
        });
    }

    if (DOM.historyModal) {
        DOM.historyModal.addEventListener('click', (e) => {
            if (e.target === DOM.historyModal) {
                hideHistoryModal();
            }
        });
    }
}

// Screen Navigation
function showWelcomeScreen() {
    stopRollTimer();
    DOM.welcomeScreen.classList.remove('hidden');
    DOM.welcomeScreen.classList.add('active');
    DOM.quizScreen.classList.add('hidden');
    DOM.globalHeader.classList.add('hidden');
}

function showQuizScreen() {
    DOM.welcomeScreen.classList.add('hidden');
    DOM.quizScreen.classList.remove('hidden');
    DOM.globalHeader.classList.remove('hidden');
    renderCurrentQuestion();
    updateSpinnerUI();
    updateHistoryUI();
    updateHeaderStats();
}

// --------------------------------------------------------------------------
// 6. QUESTION & NAVIGATION LOGIC
// --------------------------------------------------------------------------

function renderCurrentQuestion() {
    stopRollTimer();
    const qData = QUESTIONS_DATA[state.currentQuestionIndex];
    if (!qData) {
        handleQuizCompletion();
        return;
    }

    // Question Number & Text
    DOM.questionBadge.textContent = `Question ${state.currentQuestionIndex + 1} of ${QUESTIONS_DATA.length}`;
    DOM.questionText.textContent = qData.question;

    // Progress Fill %
    const progressPercent = ((state.currentQuestionIndex + 1) / QUESTIONS_DATA.length) * 100;
    DOM.progressBarFill.style.width = `${progressPercent}%`;

    // Render Option Texts
    DOM.optionCards.forEach((card, idx) => {
        const optionTextSpan = card.querySelector('.option-text');
        optionTextSpan.textContent = qData.options[idx];
        
        // Reset classes & state
        card.classList.remove('correct', 'wrong');
        card.disabled = false;
    });

    // Reset feedback banner
    hideFeedbackBanner();

    // PREV button is always enabled (on Question 1, PREV goes back to Welcome screen)
    DOM.prevQuestionBtn.disabled = false;

    // Status Tag Logic
    updateStatusTag();
}

function updateStatusTag() {
    if (state.isAnsweredCorrectly) {
        DOM.questionStatusTag.className = 'status-tag status-correct';
        DOM.questionStatusTag.textContent = '✅ Answered Correctly';
    } else if (state.hasSpunForCurrentQuestion) {
        DOM.questionStatusTag.className = 'status-tag status-spun';
        DOM.questionStatusTag.textContent = `🎯 Roll No. ${state.currentRollNumber} Selected`;
    } else {
        DOM.questionStatusTag.className = 'status-tag status-waiting';
        DOM.questionStatusTag.textContent = '⏳ Ready for Answer / Spin';
    }
}

function handleOptionSelect(selectedIndex) {
    if (state.isSpinning) return;
    if (state.isAnsweredCorrectly) return;

    const qData = QUESTIONS_DATA[state.currentQuestionIndex];
    const selectedCard = DOM.optionCards[selectedIndex];

    if (selectedIndex === qData.answer) {
        // CORRECT ANSWER
        selectedCard.classList.remove('wrong');
        selectedCard.classList.add('correct');
        
        state.isAnsweredCorrectly = true;
        stopRollTimer();
        
        sfx.playCorrect();
        showFeedbackBanner('correct', '🎉 Correct Answer!');

        // Lock options after correct answer
        DOM.optionCards.forEach(card => card.disabled = true);
        
        updateStatusTag();
    } else {
        // INCORRECT ANSWER
        selectedCard.classList.add('wrong');
        sfx.playWrong();
        showFeedbackBanner('wrong', '❌ Wrong Answer! Try Again.');
    }
}

function showFeedbackBanner(type, message) {
    DOM.feedbackBanner.classList.remove('hidden', 'feedback-wrong', 'feedback-correct');
    if (type === 'correct') {
        DOM.feedbackBanner.classList.add('feedback-correct');
    } else {
        DOM.feedbackBanner.classList.add('feedback-wrong');
    }
    DOM.feedbackContent.innerHTML = message;
}

function hideFeedbackBanner() {
    DOM.feedbackBanner.classList.add('hidden');
}

// FREE QUESTION NAVIGATION
function handleNextQuestion() {
    if (state.currentQuestionIndex < QUESTIONS_DATA.length - 1) {
        state.currentQuestionIndex += 1;
        state.hasSpunForCurrentQuestion = false;
        state.currentRollNumber = null;
        state.isAnsweredCorrectly = false;

        renderCurrentQuestion();
        updateSpinnerUI();
        updateHeaderStats();
    } else {
        handleQuizCompletion();
    }
}

function handlePrevQuestion() {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
        state.hasSpunForCurrentQuestion = false;
        state.currentRollNumber = null;
        state.isAnsweredCorrectly = false;

        renderCurrentQuestion();
        updateSpinnerUI();
        updateHeaderStats();
    } else if (state.currentQuestionIndex === 0) {
        // On Question 1, going PREV takes the user back to the Greeting/Welcome Slide!
        showWelcomeScreen();
    }
}

// --------------------------------------------------------------------------
// 7. STUDENT ROLL TIMER LOGIC (45 Seconds Countdown)
// --------------------------------------------------------------------------

function startRollTimer(durationSeconds = 45) {
    stopRollTimer();

    if (!DOM.timerContainer) return;

    const totalMs = durationSeconds * 1000;
    const endTime = Date.now() + totalMs;

    DOM.timerContainer.classList.remove('hidden', 'timer-warning', 'timer-danger', 'timer-expired');
    DOM.timerIcon.textContent = '⏱️';
    DOM.timerDisplay.textContent = `${durationSeconds}s`;
    DOM.timerBarFill.style.width = '100%';

    let lastSecondsBeep = durationSeconds;

    rollTimerState.intervalId = setInterval(() => {
        const remainingMs = Math.max(0, endTime - Date.now());
        const remainingSeconds = Math.ceil(remainingMs / 1000);
        const percent = (remainingMs / totalMs) * 100;

        DOM.timerDisplay.textContent = `${remainingSeconds}s`;
        DOM.timerBarFill.style.width = `${percent}%`;

        if (remainingSeconds <= 5 && remainingSeconds > 0) {
            DOM.timerContainer.classList.remove('timer-warning');
            DOM.timerContainer.classList.add('timer-danger');
            if (remainingSeconds !== lastSecondsBeep) {
                lastSecondsBeep = remainingSeconds;
                sfx.playTick();
            }
        } else if (remainingSeconds <= 15) {
            DOM.timerContainer.classList.add('timer-warning');
        }

        if (remainingMs <= 0) {
            clearInterval(rollTimerState.intervalId);
            rollTimerState.intervalId = null;

            DOM.timerContainer.classList.remove('timer-danger', 'timer-warning');
            DOM.timerContainer.classList.add('timer-expired');
            DOM.timerDisplay.textContent = "0s (Time's Up!)";
            DOM.timerIcon.textContent = '⏰';
            DOM.timerBarFill.style.width = '0%';
            sfx.playTimeUp();
        }
    }, 100);
}

function stopRollTimer() {
    if (rollTimerState.intervalId) {
        clearInterval(rollTimerState.intervalId);
        rollTimerState.intervalId = null;
    }
    if (DOM.timerContainer) {
        DOM.timerContainer.classList.add('hidden');
        DOM.timerContainer.classList.remove('timer-warning', 'timer-danger', 'timer-expired');
    }
}

// --------------------------------------------------------------------------
// 8. ROLL NUMBER SPINNER LOGIC (Excludes Dropped Rolls: 4, 10, 38, 43, 54, 55, 69, 79, 80)
// --------------------------------------------------------------------------

function getAvailableRollNumbers() {
    const available = [];
    for (let i = 1; i <= MAX_ROLL_NUMBERS; i++) {
        if (!state.usedRollNumbers.includes(i) && !EXCLUDED_ROLL_NUMBERS.includes(i)) {
            available.push(i);
        }
    }
    return available;
}

function handleSpinClick() {
    if (state.isSpinning) return;

    const available = getAvailableRollNumbers();
    
    if (available.length === 0) {
        showFeedbackBanner('wrong', `⚠️ All ${TOTAL_VALID_ROLL_NUMBERS} Active Student Roll Numbers have been selected!`);
        return;
    }

    stopRollTimer();
    state.isSpinning = true;
    DOM.spinBtn.disabled = true;
    DOM.spinBtnText.textContent = 'SPINNING...';
    DOM.spinnerNumberDisplay.classList.add('spinning');
    DOM.selectedRollBanner.classList.add('hidden');

    let counter = 0;
    const totalSpinTicks = 25; // number of random display flashes
    const spinInterval = setInterval(() => {
        // Flash only from available active roll numbers so excluded ones never appear
        const randomIdx = Math.floor(Math.random() * available.length);
        DOM.spinnerNumberDisplay.textContent = available[randomIdx];
        sfx.playTick();

        counter++;
        if (counter >= totalSpinTicks) {
            clearInterval(spinInterval);
            finishSpin(available);
        }
    }, 70);
}

function finishSpin(availablePool) {
    const randomIndex = Math.floor(Math.random() * availablePool.length);
    const chosenRoll = availablePool[randomIndex];

    state.usedRollNumbers.push(chosenRoll);
    state.currentRollNumber = chosenRoll;
    state.hasSpunForCurrentQuestion = true;
    state.isSpinning = false;

    // Update UI
    DOM.spinnerNumberDisplay.classList.remove('spinning');
    DOM.spinnerNumberDisplay.textContent = chosenRoll;
    DOM.currentRollNumDisplay.textContent = chosenRoll;
    DOM.selectedRollBanner.classList.remove('hidden');
    
    DOM.spinBtn.disabled = false;
    DOM.spinBtnText.textContent = 'SPIN AGAIN';

    sfx.playStopChime();

    // Start 45-second timer right when roll number appears!
    startRollTimer(45);

    // If banner had warning, clear it
    if (DOM.feedbackContent.textContent.includes('Please spin')) {
        hideFeedbackBanner();
    }

    updateStatusTag();
    updateSpinnerUI();
    updateHistoryUI();
}

function updateSpinnerUI() {
    const remaining = TOTAL_VALID_ROLL_NUMBERS - state.usedRollNumbers.length;
    DOM.poolCounter.textContent = `Pool: ${remaining} / ${TOTAL_VALID_ROLL_NUMBERS}`;

    if (state.hasSpunForCurrentQuestion && state.currentRollNumber) {
        DOM.spinnerNumberDisplay.textContent = state.currentRollNumber;
        DOM.currentRollNumDisplay.textContent = state.currentRollNumber;
        DOM.selectedRollBanner.classList.remove('hidden');
        DOM.spinBtnText.textContent = 'SPIN AGAIN';
    } else {
        DOM.spinnerNumberDisplay.textContent = '❓';
        DOM.selectedRollBanner.classList.add('hidden');
        DOM.spinBtnText.textContent = 'SPIN ROLL NO.';
    }
}

function updateHistoryUI() {
    if (DOM.historyCount) DOM.historyCount.textContent = state.usedRollNumbers.length;
    if (DOM.modalHistoryCount) DOM.modalHistoryCount.textContent = state.usedRollNumbers.length;
    
    if (DOM.historyTagsContainer) {
        if (state.usedRollNumbers.length === 0) {
            DOM.historyTagsContainer.innerHTML = '<span class="history-empty-text">No roll numbers spun yet</span>';
            return;
        }

        // Render history tags in reverse (most recent first)
        const reversed = [...state.usedRollNumbers].reverse();
        DOM.historyTagsContainer.innerHTML = reversed
            .map(num => `<span class="roll-tag">Roll ${num}</span>`)
            .join('');
    }
}

function showHistoryModal() {
    if (DOM.historyModal) {
        updateHistoryUI();
        DOM.historyModal.classList.remove('hidden');
    }
}

function hideHistoryModal() {
    if (DOM.historyModal) {
        DOM.historyModal.classList.add('hidden');
    }
}

// --------------------------------------------------------------------------
// 8. HEADER STATS, SOUND, PROJECTOR & MODAL LOGIC
// --------------------------------------------------------------------------

function updateHeaderStats() {
    DOM.progressText.textContent = `${Math.min(state.currentQuestionIndex + 1, QUESTIONS_DATA.length)} / ${QUESTIONS_DATA.length}`;
}

function updateSoundUI() {
    if (state.soundEnabled) {
        DOM.soundIcon.textContent = '🔊';
        DOM.soundBtn.querySelector('.btn-tooltip').textContent = 'Sound ON';
    } else {
        DOM.soundIcon.textContent = '🔇';
        DOM.soundBtn.querySelector('.btn-tooltip').textContent = 'Sound OFF';
    }
}

function toggleFullscreen() {
    document.body.classList.toggle('projector-mode');
    
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.warn(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

function showResetModal() {
    DOM.resetModal.classList.remove('hidden');
}

function hideResetModal() {
    DOM.resetModal.classList.add('hidden');
}

function resetQuiz() {
    state = {
        currentQuestionIndex: 0,
        usedRollNumbers: [],
        currentRollNumber: null,
        hasSpunForCurrentQuestion: false,
        isAnsweredCorrectly: false,
        soundEnabled: state.soundEnabled,
        isSpinning: false
    };

    renderCurrentQuestion();
    updateSpinnerUI();
    updateHistoryUI();
    updateHeaderStats();
    hideFeedbackBanner();

    // Ensure we are on the quiz screen showing Question 1
    DOM.welcomeScreen.classList.add('hidden');
    DOM.quizScreen.classList.remove('hidden');
    DOM.globalHeader.classList.remove('hidden');
}

function handleQuizCompletion() {
    stopRollTimer();
    sfx.playVictory();
    
    // Calculate attended questions count out of 35
    const questionsAttended = Math.min(state.currentQuestionIndex + 1, QUESTIONS_DATA.length);

    DOM.finalQuestions.textContent = `${questionsAttended} / ${QUESTIONS_DATA.length}`;
    DOM.finalRolls.textContent = state.usedRollNumbers.length;

    DOM.completionModal.classList.remove('hidden');
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});
