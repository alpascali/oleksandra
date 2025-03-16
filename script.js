document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Mostra apenas a seção "About Me" no início
    document.getElementById("about").classList.add("active");

    // Adiciona evento de clique nos links do menu
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evita scroll automático

            const targetId = this.getAttribute("href").substring(1); // Remove '#'
            
            // Oculta todas as seções
            sections.forEach(section => section.classList.remove("active"));

            // Mostra a seção correspondente ao link clicado
            document.getElementById(targetId).classList.add("active");
        });
    });
});


    // Hide preview when clicking outside
    pdfPreview.addEventListener("click", function (event) {
        if (event.target === pdfPreview) {
            pdfPreview.style.display = "none";
        }
    });

    // Ensure profile image is loaded from the correct folder
    const profileImage = document.querySelector("#about img");
    if (profileImage) {
        profileImage.src = "images/sky.jpg";
    }
});
