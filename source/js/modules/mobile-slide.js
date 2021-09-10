const mobileSlide = () => {
  const intro = document.querySelector('.intro');
  const loader = document.querySelector('.loader');

  if (intro) {
    const introBlock = document.querySelector('.intro__block');

    window.addEventListener('click', (evt) => {
      if (evt.target !== loader) {
        introBlock.classList.toggle('intro__block--show');
      }
    });
  }
};

export {mobileSlide};
