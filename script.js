document.addEventListener('DOMContentLoaded', () => {
    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Mobile Menu Toggle ---
    const menuIcon = document.getElementById('mobile-menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            alert('Menú móvil en construcción.');
        });
    }

    // --- 3D Tilt Effect for Cards ---
    const cards = document.querySelectorAll('.service-card, .hero-img');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate rotation based on cursor position
            const xRotation = -((y - rect.height / 2) / 20);
            const yRotation = (x - rect.width / 2) / 20;

            card.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // --- Scroll Animations ---
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0) scale(1)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = 0;
        // Keep initial transform simple to avoid conflict with tilt
        // We will just fade them in
        card.style.transition = 'opacity 0.8s ease, transform 0.5s ease';
        observer.observe(card);
    });
});
