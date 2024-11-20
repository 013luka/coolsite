document.addEventListener("DOMContentLoaded", () => {
    // Log interactions when social links are clicked
    const socialLinks = document.querySelectorAll(".social-link");

    socialLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            const platform = link.classList.contains("youtube")
                ? "YouTube"
                : link.classList.contains("discord")
                ? "Discord"
                : "Other";
            console.log(`User clicked on: ${platform}`);
        });
    });
});
