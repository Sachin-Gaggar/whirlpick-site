const modes = ['system', 'light', 'dark'];
const controls = [...document.querySelectorAll('[data-mode]')];
function apply(mode) {
  const value = modes.includes(mode) ? mode : 'system';
  document.documentElement.dataset.appearance = value;
  controls.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.mode === value)));
}
let initial = 'system';
try { initial = localStorage.getItem('whirlpick-site-appearance') || initial; } catch {}
apply(initial);
controls.forEach(button => button.addEventListener('click', () => {
  apply(button.dataset.mode);
  try { localStorage.setItem('whirlpick-site-appearance', button.dataset.mode); } catch {}
}));
