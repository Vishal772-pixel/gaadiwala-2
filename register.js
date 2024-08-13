document.addEventListener("DOMContentLoaded", function () {
  const photoInput = document.getElementById("photoInput");
  const photoPreview = document.getElementById("photoPreview");
  const uploadButton = document.getElementById("uploadButton");
  let selectedFile = null;

  photoInput.addEventListener("change", function () {
    selectedFile = this.files[0];
  });

  uploadButton.addEventListener("click", function () {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = function (e) {
        photoPreview.src = e.target.result;
      };
      reader.readAsDataURL(selectedFile);
    } else {
      alert("Please select an image first.");
    }
  });

  const form = document.getElementById("registrationForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Registration successful!");
  });
});
