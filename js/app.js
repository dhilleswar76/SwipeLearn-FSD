/* ═══════════════════════════════════════════
   SwipeLearn — js/app.js
   ═══════════════════════════════════════════
   Main application logic & flow
═══════════════════════════════════════════ */

import { BRANCHES_DATA } from '../data/branches.js';
import { DOMAINS_DATA } from '../data/domains.js';
import { TOPICS_DATA } from '../data/topics.js';
import { CardManager } from './card-manager.js';
import { QuizManager } from './quiz-manager.js';
import { Confetti } from './confetti.js';
import { getEl, formatBreadcrumb } from './utils.js';

export class SwipeLearnApp {
  constructor() {
    this.cardManager = null;
    this.quizManager = null;
    this.confetti = new Confetti('confetti-canvas');
    this.state = {
      currentStage: 'splash', // splash, branch, domain, topic, quiz, result
      selectedBranch: null,
      selectedDomain: null,
      selectedTopic: null
    };

    this.setupEventListeners();
  }

  setupEventListeners() {
    // Splash screen
    getEl('btn-start').addEventListener('click', () => this.startApp());

    // Navigation
    getEl('btn-back').addEventListener('click', () => this.goBack());
    getEl('btn-quiz-back').addEventListener('click', () => this.goBack());

    // Card navigation - Arrow buttons
    getEl('act-skip').addEventListener('click', () => {
      if (this.cardManager) this.cardManager.previousCard();
    });
    getEl('act-pick').addEventListener('click', () => {
      if (this.cardManager) this.cardManager.nextCard();
    });

    // Quiz
    getEl('btn-next').addEventListener('click', () => {
      if (this.quizManager) this.quizManager.nextQuestion();
    });

    // Results
    getEl('btn-retry').addEventListener('click', () => this.retryQuiz());
    getEl('btn-home').addEventListener('click', () => this.goHome());
  }

  startApp() {
    this.switchStage('cards');
    setTimeout(() => this.loadBranches(), 100);
  }

  loadBranches() {
    try {
      this.cardManager = new CardManager('branch');
      this.cardManager.setCards(BRANCHES_DATA);
      this.cardManager.on('pick', (branch) => this.selectBranch(branch));
      this.cardManager.on('skip', () => {});
      this.cardManager.on('empty', () => this.showEmpty());

      getEl('stage-label').textContent = 'Choose Your Branch';
      getEl('breadcrumb').innerHTML = '';
      getEl('btn-back').style.display = 'none';
    } catch (error) {
      console.error('Error loading branches:', error);
    }
  }

  selectBranch(branch) {
    this.state.selectedBranch = branch;
    this.switchStage('cards');
    this.loadDomains(branch.id);
  }

  selectDomain(domain) {
    this.state.selectedDomain = domain;
    this.switchStage('cards');
    this.loadTopics(domain.id);
  }

  loadDomains(branchId) {
    try {
      const domains = DOMAINS_DATA[branchId] || [];
      this.cardManager = new CardManager('domain');
      this.cardManager.setCards(domains);
      this.cardManager.on('pick', (domain) => this.selectDomain(domain));
      this.cardManager.on('skip', () => {});
      this.cardManager.on('empty', () => this.showEmpty());

      getEl('stage-label').textContent = 'Choose Your Domain';
      getEl('breadcrumb').innerHTML = formatBreadcrumb(this.state.selectedBranch.label);
      getEl('btn-back').style.display = 'flex';
    } catch (error) {
      console.error('Error loading domains:', error);
    }
  }

  loadTopics(domainId) {
    try {
      const topics = TOPICS_DATA[domainId] || [];
      this.cardManager = new CardManager('topic');
      this.cardManager.setCards(topics);
      this.cardManager.on('pick', (topic) => this.startQuiz(topic));
      this.cardManager.on('skip', () => {});
      this.cardManager.on('empty', () => this.showEmpty());

      getEl('stage-label').textContent = 'Choose Your Topic';
      getEl('breadcrumb').innerHTML = formatBreadcrumb(
        this.state.selectedBranch.label,
        this.state.selectedDomain.label
      );
      getEl('btn-back').style.display = 'flex';
    } catch (error) {
      console.error('Error loading topics:', error);
    }
  }

  startQuiz(topic) {
    this.state.selectedTopic = topic;
    this.quizManager = new QuizManager();
    this.quizManager.on('complete', (result) => this.showResult(result));
    this.quizManager.loadQuiz(topic.quiz);

    getEl('quiz-topic-label').textContent = topic.label;
    this.switchStage('quiz');
  }

  showResult(result) {
    const percentage = Math.round((result.score / result.total) * 100);
    const ringFill = getEl('ring-fill');
    const ringText = getEl('ring-text');
    const resultMsg = getEl('result-msg');
    const resultTrophy = getEl('result-trophy');

    ringText.textContent = `${result.score}/${result.total}`;

    let message = '';
    let trophy = '🏆';

    if (percentage === 100) {
      message = 'Perfect score! You\'re a master of this topic! 🌟';
      trophy = '👑';
    } else if (percentage >= 80) {
      message = 'Excellent! Outstanding performance! Keep it up!'  
      trophy = '🏆';
    } else if (percentage >= 60) {
      message = 'Good job! You\'re on the right track. Practice more!';
      trophy = '🎯';
    } else if (percentage >= 40) {
      message = 'Not bad! Review the topic and try again.';
      trophy = '📚';
    } else {
      message = 'Keep learning! This topic needs more practice.';
      trophy = '💪';
    }

    resultTrophy.textContent = trophy;
    resultMsg.textContent = message;

    const strokeDasharray = ringFill.getAttribute('stroke-dasharray');
    const offset = strokeDasharray * (1 - percentage / 100);
    ringFill.style.strokeDashoffset = offset;

    this.switchStage('result');
    this.confetti.burst();
  }

  retryQuiz() {
    if (this.state.selectedTopic) {
      this.startQuiz(this.state.selectedTopic);
    }
  }

  goBack() {
    const stage = this.state.currentStage;
    if (stage === 'quiz' || stage === 'result') {
      this.switchStage('cards');
      this.loadTopics(this.state.selectedDomain.id);
    } else if (this.state.selectedDomain) {
      this.switchStage('cards');
      this.loadDomains(this.state.selectedBranch.id);
    } else if (this.state.selectedBranch) {
      this.switchStage('cards');
      this.loadBranches();
    }
  }

  goHome() {
    this.state = {
      currentStage: 'splash',
      selectedBranch: null,
      selectedDomain: null,
      selectedTopic: null
    };
    this.switchStage('splash');
  }

  showEmpty() {
    // Handle empty state if needed
  }

  switchStage(stageName) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
      screen.classList.remove('active', 'exit');
    });

    // Show target screen
    const screen = getEl(`screen-${stageName}`);
    if (screen) {
      screen.classList.add('active');
    }

    this.state.currentStage = stageName;
  }

  init() {
    this.switchStage('splash');
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new SwipeLearnApp();
  app.init();
});
