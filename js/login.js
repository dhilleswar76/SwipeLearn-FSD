const USERS_KEY = 'swipelearn-users';
const SESSION_KEY = 'swipelearn-session';

const authTitle = document.getElementById('auth-title');
const authSubtitle = document.getElementById('auth-subtitle');
const authForm = document.getElementById('auth-form');
const nameGroup = document.getElementById('name-group');
const nameInput = document.getElementById('auth-name');
const emailInput = document.getElementById('auth-email');
const passwordInput = document.getElementById('auth-password');
const messageEl = document.getElementById('auth-message');
const submitBtn = document.getElementById('btn-auth-submit');
const toggleBtn = document.getElementById('btn-toggle-mode');

let mode = 'login';
const goHome = () => { window.location.href = '../index.html'; };

function readUsers() {
  try {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    return Array.isArray(users) ? users : [];
  } catch {
    return [];
  }
}

function writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function setMessage(text, type = '') {
  messageEl.textContent = text;
  messageEl.classList.remove('error', 'success');
  if (type) messageEl.classList.add(type);
}

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

function switchMode(nextMode) {
  mode = nextMode;
  const isSignup = mode === 'signup';

  authTitle.textContent = isSignup ? 'Create Account' : 'Welcome Back';
  authSubtitle.textContent = isSignup
    ? 'Sign up to save your progress on this device.'
    : 'Log in to continue your learning journey.';

  nameGroup.classList.toggle('is-hidden', !isSignup);
  nameInput.required = isSignup;

  submitBtn.innerHTML = isSignup
    ? '<span>Sign Up</span><i class="fa-solid fa-user-plus"></i>'
    : '<span>Log In</span><i class="fa-solid fa-right-to-bracket"></i>';

  toggleBtn.textContent = isSignup
    ? 'Already have an account? Log in'
    : 'Need an account? Sign up';

  setMessage('');
}

function createSession(user) {
  const session = {
    name: user.name,
    email: user.email,
    loggedInAt: new Date().toISOString()
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

function signup(name, email, password) {
  if (!name || name.trim().length < 2) {
    setMessage('Please enter a valid name.', 'error');
    return;
  }

  if (password.length < 6) {
    setMessage('Password must be at least 6 characters.', 'error');
    return;
  }

  const users = readUsers();
  const normalized = normalizeEmail(email);
  const exists = users.some((u) => u.email === normalized);

  if (exists) {
    setMessage('Account already exists. Please log in.', 'error');
    return;
  }

  const newUser = {
    name: name.trim(),
    email: normalized,
    password
  };

  users.push(newUser);
  writeUsers(users);
  createSession(newUser);
  setMessage('Account created. Redirecting...', 'success');
  setTimeout(goHome, 400);
}

function login(email, password) {
  const users = readUsers();
  const normalized = normalizeEmail(email);
  const user = users.find((u) => u.email === normalized && u.password === password);

  if (!user) {
    setMessage('Invalid email or password.', 'error');
    return;
  }

  createSession(user);
  setMessage('Login successful. Redirecting...', 'success');
  setTimeout(goHome, 300);
}

if (localStorage.getItem(SESSION_KEY)) {
  goHome();
}

toggleBtn.addEventListener('click', () => {
  switchMode(mode === 'login' ? 'signup' : 'login');
});

authForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (mode === 'signup') {
    signup(nameInput.value, email, password);
    return;
  }

  login(email, password);
});

switchMode('login');


