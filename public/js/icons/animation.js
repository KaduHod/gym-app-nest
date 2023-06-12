const icons = [...document.getElementsByClassName('app-icon')];
const toggleSpin = ({target}) => target.classList.toggle('rotate-180');
const applySpin = (el) => el.addEventListener('click', toggleSpin);
icons.forEach(applySpin);