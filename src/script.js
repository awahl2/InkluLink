document.querySelectorAll('.feature').forEach(feature => {
  const checkbox = feature.querySelector('input[type="checkbox"]');
  // Set initial state on load
  if (checkbox.checked) {
    feature.classList.add('show-description');
  }
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      feature.classList.add('show-description');
    } else {
      feature.classList.remove('show-description');
    }
  });
});
