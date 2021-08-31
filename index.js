// Import stylesheets
import './style.css';

window.toggleNavigation = () => toggleElement('nav');
window.toggleFilters = () => toggleElement('filters');
window.toggleDetail = () => toggleElement('detail');

function toggleElement(id) {
  var element = document.getElementById(id);
  element.classList.toggle('collapsed');
}
