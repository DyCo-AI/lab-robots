const finder = document.querySelector('#page-finder');
finder.addEventListener('input', () => {
  const words = finder.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
  let matches = 0;
  document.querySelectorAll('.nav-group').forEach(group => {
    let visible = 0;
    group.querySelectorAll('.nav-link').forEach(link => {
      link.hidden = !words.every(word => link.dataset.search.toLowerCase().includes(word));
      if (!link.hidden) visible++;
    });
    group.hidden = visible === 0;
    matches += visible;
  });
  document.querySelector('#no-results').hidden = matches > 0;
});
const toggle = document.querySelector('#menu-toggle');
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(expanded));
  document.querySelector('#sidebar').classList.toggle('open', expanded);
});
