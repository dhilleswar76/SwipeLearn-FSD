export function getEl(id) {
  return document.getElementById(id);
}

export function createElement(tag, className = '', attributes = {}) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  Object.assign(el, attributes);
  return el;
}

export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

export function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

export function formatBreadcrumb(branchName, domainName = '', topicName = '') {
  const parts = [branchName];
  if (domainName) parts.push('•');
  if (domainName) parts.push(domainName);
  if (topicName) parts.push('•');
  if (topicName) parts.push(topicName);

  return parts.map((part, idx) => {
    if (part === '•') return `<span class="bc-sep">${part}</span>`;
    if (idx === parts.length - 1) return `<b>${part}</b>`;
    return `<span>${part}</span>`;
  }).join('');
}

export function animateValue(start, end, duration, callback) {
  const startTime = Date.now();
  const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const current = start + (end - start) * progress;
    callback(current);
    if (progress < 1) requestAnimationFrame(animate);
  };
  animate();
}

export function isTouchDevice() {
  return (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0));
}

export function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function loadData(key, defaultValue = null) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
}

export function clearData(key) {
  localStorage.removeItem(key);
}


