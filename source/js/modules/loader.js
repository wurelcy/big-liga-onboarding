const loader = () => {
  const loaderBlock = document.querySelector('.loader');
  const MAX_WIDTH = '1023px';
  const hiddenClass = 'loader--hidden';
  const animationClass = 'intro__animate';
  const intro = document.querySelector('.intro');

  const hideLoader = () => {
    loaderBlock.classList.add(hiddenClass);
    intro.classList.add(animationClass);
  };

  if (loaderBlock) {
    window.addEventListener('keypress', (evt) => {
      if (evt.key === 'Enter') {
        hideLoader();
      }
    });

    if (window.matchMedia('(max-width:' + MAX_WIDTH + ')').matches) {
      window.addEventListener('click', () => {
        hideLoader();
      });
    }
  }
};

export {loader};
