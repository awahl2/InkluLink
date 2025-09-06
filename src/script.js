// Get switches
const colorblindToggle = document.getElementById("colorblind");
const dyslexiaToggle = document.getElementById("dyslexia");
const hearingToggle = document.getElementById("hearing");

// Temporary logging for now
colorblindToggle.addEventListener("change", () => {
  console.log("Colorblind toggle:", colorblindToggle.checked);
});

dyslexiaToggle.addEventListener("change", () => {
  console.log("Dyslexia toggle:", dyslexiaToggle.checked);
});

hearingToggle.addEventListener("change", () => {
  console.log("Hearing toggle:", hearingToggle.checked);
});
