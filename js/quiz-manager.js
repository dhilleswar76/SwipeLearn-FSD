import { getEl, shuffle } from './utils.js';

export class QuizManager {
  constructor() {
    this.currentQuiz = null;
    this.currentQuestion = 0;
    this.score = 0;
    this.totalQuestions = 0;
    this.selectedAnswer = null;
    this.listeners = [];
  }

  loadQuiz(quizData) {
    this.currentQuiz = Array.isArray(quizData) ? quizData : [];
    this.currentQuestion = 0;
    this.score = 0;
    this.totalQuestions = this.currentQuiz.length;
    this.selectedAnswer = null;
    const scoreText = getEl('quiz-score-text');
    if (scoreText) scoreText.textContent = '0';
    this.render();
  }

  render() {
    if (this.currentQuestion >= this.totalQuestions) {
      this.emit('complete', {
        score: this.score,
        total: this.totalQuestions
      });
      return;
    }

    const q = this.currentQuiz[this.currentQuestion];
    if (!q || !Array.isArray(q.opts)) {
      this.emit('complete', {
        score: this.score,
        total: this.totalQuestions
      });
      return;
    }

    const qEl = getEl('quiz-question');
    const optionsEl = getEl('quiz-options');
    const progressBar = getEl('quiz-progress-bar');
    const qNum = getEl('quiz-q-num');
    const btnNext = getEl('btn-next');
    const scoreText = getEl('quiz-score-text');

    qEl.textContent = q.q;

    const progress = ((this.currentQuestion + 1) / this.totalQuestions) * 100;
    progressBar.style.width = progress + '%';
    qNum.textContent = `${this.currentQuestion + 1} / ${this.totalQuestions}`;
    if (scoreText) scoreText.textContent = String(this.score);

    optionsEl.innerHTML = '';
    q.opts.forEach((opt, idx) => {
      const div = document.createElement('div');
      div.className = 'quiz-option';
      const letter = document.createElement('div');
      letter.className = 'opt-letter';
      letter.textContent = String.fromCharCode(65 + idx);

      const text = document.createElement('span');
      text.textContent = opt;

      div.appendChild(letter);
      div.appendChild(text);

      div.addEventListener('click', () => {
        this.selectAnswer(idx);
      });

      optionsEl.appendChild(div);
    });

    btnNext.classList.add('is-hidden');
    const nextLabel = this.currentQuestion === this.totalQuestions - 1 ? 'Finish Quiz' : 'Next';
    btnNext.innerHTML = `${nextLabel} <i class="fa-solid fa-arrow-right"></i>`;
    this.selectedAnswer = null;
  }

  selectAnswer(optionIndex) {
    if (this.selectedAnswer !== null) return;

    this.selectedAnswer = optionIndex;
    const q = this.currentQuiz[this.currentQuestion];
    const options = document.querySelectorAll('.quiz-option');

    const isCorrect = optionIndex === q.ans;
    if (isCorrect) {
      this.score++;
      const scoreText = getEl('quiz-score-text');
      if (scoreText) scoreText.textContent = String(this.score);
      options[optionIndex].classList.add('correct');
    } else {
      options[optionIndex].classList.add('wrong');
      options[q.ans].classList.add('correct');
    }

    options.forEach((opt, idx) => {
      opt.classList.add('disabled');
    });

    const btnNext = getEl('btn-next');
    btnNext.classList.remove('is-hidden');

    this.emit('answer', { optionIndex, isCorrect });
  }

  nextQuestion() {
    if (this.selectedAnswer === null) return;

    const btnNext = getEl('btn-next');
    if (btnNext) btnNext.classList.add('is-hidden');

    this.currentQuestion++;
    this.render();
  }

  getScore() {
    return { score: this.score, total: this.totalQuestions };
  }

  on(event, callback) {
    this.listeners.push({ event, callback });
  }

  emit(event, data) {
    this.listeners
      .filter(l => l.event === event)
      .forEach(l => l.callback(data));
  }
}


