document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded!");

    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.1)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });
});