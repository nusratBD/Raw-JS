const ayahContainer = document.getElementById('ayah-container');

// Dummy ayahs
const ayahs = Array.from({ length: 20 }, (_, i) => `Ayah ${i + 1}: Lorem ipsum dolor sit amet...`);

// Render ayahs
ayahs.forEach((text, index) => {
  const div = document.createElement('div');
  div.classList.add('ayah');
  div.id = `ayah-${index}`;
  div.dataset.index = index;
  div.textContent = text;
  ayahContainer.appendChild(div);
});

// Save last read
function setLastRead(index) {
  localStorage.setItem('lastRead', index);
}

// Scroll to last read
function scrollToLastRead() {
  const saved = localStorage.getItem('lastRead');
  if (saved) {
    const el = document.getElementById(`ayah-${saved}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('active');
    }
  }
}

// Observe ayahs
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setLastRead(entry.target.dataset.index);
      document.querySelectorAll('.ayah').forEach(el => el.classList.remove('active'));
      entry.target.classList.add('active');
    }
  });
}, { threshold: 1.0 });

document.querySelectorAll('.ayah').forEach(el => observer.observe(el));

// Scroll on load
scrollToLastRead();
