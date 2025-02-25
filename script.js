document.addEventListener("DOMContentLoaded", function () {
    console.log("Bienvenido a mi portafolio");

    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
    });

    window.addEventListener("scroll", () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
                section.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            }
        });
    });
});

