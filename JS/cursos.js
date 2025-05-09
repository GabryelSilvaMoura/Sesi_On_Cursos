const boxes = document.querySelectorAll('.box');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Só anima uma vez
        }
    });
}, {
    threshold: 0.5
});

// Observa todos os elementos
boxes.forEach(box => observer.observe(box));