const cards = document.querySelectorAll('.box');

cards.forEach(box => {
  const header = box.querySelector('.card-header');
  const content = box.querySelector('.card-content');
  
  header.addEventListener('click', () => {
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
  });
});