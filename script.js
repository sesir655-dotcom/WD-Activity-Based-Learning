const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('senderName').value.trim();
  document.getElementById('formMessage').textContent = `Thanks, ${name}! This demo form works locally; no message was sent to a server.`;
  event.target.reset();
});
