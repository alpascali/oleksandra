document.addEventListener("DOMContentLoaded", function () {
    const projectLinks = document.querySelectorAll(".project-card a");
    const pdfPreview = document.createElement("div");
    pdfPreview.classList.add("pdf-preview");
    pdfPreview.innerHTML = '<iframe id="pdf-frame" width="100%" height="500px" style="border: none;"></iframe>';
    document.body.appendChild(pdfPreview);

    projectLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const pdfUrl = this.getAttribute("href");
            document.getElementById("pdf-frame").src = pdfUrl;
            pdfPreview.style.display = "block";
            window.scrollTo({ top: pdfPreview.offsetTop, behavior: "smooth" });
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
