//malditas animaciones
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav a');
    const sections = Array.from(navLinks)
        .map(link => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    if (!sections.length)
        return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = '#' + entry.target.id;
                navLinks.forEach(link => {
                    link.classList.toggle('activate', link.getAttribute('href') === id);
                });
            }
        });
    }, { rootMargin: '-40% 0px -50% 0px' });
    sections.forEach(section = observer.obseve(section));
});