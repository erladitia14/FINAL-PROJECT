const collapseDiv = document.querySelector('.collapse');
const collapseContent = document.querySelector('.collapse-content');

collapseContent.addEventListener('click', function() {
  collapseDiv.classList.toggle('collapse-plus');
  collapseDiv.classList.toggle('collapse-minus');
});