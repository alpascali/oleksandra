document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".sidebar-nav ul li a");

    // Scroll suave para links do menu
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Destacar item ativo conforme scroll
    window.addEventListener("scroll", function () {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Ajuste para topo fixo
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
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

// Exemplo de toggle para Interests (opcional)
const interestItems = document.querySelectorAll(".interest-item");
interestItems.forEach(item => {
    item.addEventListener("click", function () {
        const sub = this.querySelector(".sub-interests");
        if (sub) {
            sub.style.display = sub.style.display === "block" ? "none" : "block";
        }
    });
});
