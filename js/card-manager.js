import { getEl } from './utils.js';

export class CardManager {
  constructor(stage = 'branch') {
    this.stage = stage;
    this.cards = [];
    this.currentIndex = 0;
    this.listeners = [];
    this.cardStack = getEl('card-stack');
  }

  setCards(cards) {
    this.cards = cards;
    this.currentIndex = 0;
    this.render();
  }

  render() {
    this.cardStack.innerHTML = '';
    
    if (this.cards.length === 0) {
      return;
    }

    const card = this.cards[this.currentIndex];
    const cardEl = this.createCardElement(card);
    this.cardStack.appendChild(cardEl);
    this.updateCounter();
  }

  createCardElement(card) {
    const div = document.createElement('div');
    div.className = `swipe-card ${this.stage === 'branch' ? 'branch-card' : ''}`;
    div.setAttribute('data-stage', this.stage);
    div.setAttribute('role', 'button');
    div.setAttribute('tabindex', '0');
    div.setAttribute('aria-label', `Select ${card.label}`);
    div.innerHTML = `
      <div class="card-tag">${this.stage.toUpperCase()}</div>
      <div class="card-icon-wrap">
        ${card.iconClass ? `<i class="${card.iconClass}"></i>` : `<span>${card.icon}</span>`}
      </div>
      <h3 class="card-title">${card.label}</h3>
      <p class="card-desc">${card.desc}</p>
    `;

    div.addEventListener('click', () => this.selectCurrentCard());
    div.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this.selectCurrentCard();
      }
    });

    return div;
  }

  selectCurrentCard() {
    if (this.currentIndex < this.cards.length) {
      const card = this.cards[this.currentIndex];
      this.emit('pick', card);
    }
  }

  nextCard() {
    if (this.currentIndex < this.cards.length - 1) {
      this.currentIndex++;
      this.render();
    }
  }

  previousCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.render();
    }
  }

  updateCounter() {
    const counter = getEl('card-counter');
    if (counter) {
      counter.textContent = `${this.currentIndex + 1} / ${this.cards.length}`;
    }
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

