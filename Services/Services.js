document.addEventListener("DOMContentLoaded", function () {
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    dropdownButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
            const dropdownContent = this.nextElementSibling;

            // Toggle visibility of the dropdown content
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    });
});
