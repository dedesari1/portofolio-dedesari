  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scroller');
    } else {
      header.classList.remove('scroller');
    }
  });
