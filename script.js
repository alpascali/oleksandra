document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Mostra apenas a seção "About Me" no início
    document.getElementById("about").classList.add("active");

    // Adiciona evento de clique nos links do menu
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evita o scroll automático

            const targetId = this.getAttribute("href").substring(1); // Remove '#'
            
            // Oculta todas as seções
            sections.forEach(section => section.classList.remove("active"));

            // Mostra a seção correspondente ao link clicado
            document.getElementById(targetId).classList.add("active");
        });
    });
});

// Função para exibir preview de arquivos PDF e Power BI
function showPreview(fileUrl) {
    const previewFrame = document.getElementById("file-frame");
    const previewContainer = document.getElementById("file-preview");

    if (fileUrl.endsWith(".pdf")) {
        previewFrame.src = fileUrl;
        previewContainer.style.display = "block";
    } else if (fileUrl.endsWith(".pbix")) {
        alert("Power BI files cannot be previewed directly in the browser. Please download the file.");
        previewContainer.style.display = "none";
    }
}

// Função para filtrar os projetos por categoria
function filterProjects(category) {
    const allProjects = document.querySelectorAll(".project-card");

    allProjects.forEach(project => {
        if (category === "all" || project.classList.contains(category)) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}

//INTERESTS
document.querySelectorAll('.accordion-title').forEach(item => {
    item.addEventListener('click', () => {
        // Close any open accordion content
        const activeItem = document.querySelector('.accordion-item.active');
        if (activeItem && activeItem !== item.parentElement) {
            activeItem.classList.remove('active');
        }
        // Toggle the clicked accordion item
        item.parentElement.classList.toggle('active');
    });
});
