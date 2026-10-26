'use strict';
// Progressive enhancement: o conteúdo é acessível mesmo quando o JavaScript está desativado.
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const progress = document.getElementById('readingProgress');
const contrastBtn = document.getElementById('contrastBtn');
const search = document.getElementById('glossarySearch');
const count = document.getElementById('glossaryCount');
const glossary = [...document.querySelectorAll('#glossaryGrid article')];
const empty = document.getElementById('glossaryEmpty');

function closeMenu() {
  menu.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.setAttribute('aria-label', 'Abrir menu');
}
menuBtn.addEventListener('click', () => {
  const expanded = menu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(expanded));
  menuBtn.setAttribute('aria-label', expanded ? 'Fechar menu' : 'Abrir menu');
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') { closeMenu(); }
});
window.addEventListener('resize', () => { if (innerWidth > 960) closeMenu(); });

function updateProgress() {
  const maxScroll = document.documentElement.scrollHeight - innerHeight;
  const value = maxScroll > 0 ? Math.min(100, Math.max(0, scrollY / maxScroll * 100)) : 0;
  progress.style.width = `${value}%`;
}
window.addEventListener('scroll', updateProgress, {passive:true});
window.addEventListener('resize', updateProgress);
updateProgress();

const contrastKey = 'brasildequem-high-contrast';
try {
  if (localStorage.getItem(contrastKey) === 'true') {
    document.body.classList.add('high-contrast');
  }
} catch (_) { /* Navegadores com armazenamento bloqueado continuam funcionais. */ }
function updateContrastLabel() {
  const active = document.body.classList.contains('high-contrast');
  contrastBtn.setAttribute('aria-pressed', String(active));
  contrastBtn.title = active ? 'Ativar tema claro' : 'Ativar tema escuro de alto contraste';
  contrastBtn.setAttribute('aria-label', active ? 'Ativar tema claro' : 'Ativar tema escuro de alto contraste');
  document.documentElement.style.colorScheme = active ? 'dark' : 'light';
}
contrastBtn.addEventListener('click', () => {
  document.body.classList.toggle('high-contrast');
  try { localStorage.setItem(contrastKey, String(document.body.classList.contains('high-contrast'))); } catch (_) {}
  updateContrastLabel();
});
updateContrastLabel();

function normalize(value) { return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR'); }
search.addEventListener('input', () => {
  const query = normalize(search.value.trim());
  let shown = 0;
  glossary.forEach(item => {
    const found = normalize(`${item.textContent} ${item.dataset.keywords || ''}`).includes(query);
    item.hidden = !found;
    if (found) shown++;
  });
  count.textContent = shown === 1 ? '1 conceito encontrado' : `${shown} conceitos encontrados`;
  empty.hidden = shown !== 0;
});

// Navegação ativa apenas como aprimoramento visual, sem bloquear links normais.
if ('IntersectionObserver' in window) {
  const items = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...menu.querySelectorAll('a')];
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + visible.target.id));
  }, {rootMargin:'-23% 0px -60% 0px', threshold:0});
  items.forEach(item => observer.observe(item));
}
