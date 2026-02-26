// Script para carregar o iframe com o tour 360
document.addEventListener('DOMContentLoaded', function() {
    // Detectar se estamos em produção ou desenvolvimento
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    
    // URL do tour 360
    const tourUrl = isDevelopment 
        ? 'http://localhost:5173/' 
        : 'https://psicologialaviahumanista.com.br/tour360/';
    
    // Atualizar src do iframe
    const iframe = document.getElementById('tour-iframe');
    iframe.src = tourUrl;
    
    // Form validation (opcional)
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Obrigado pela sua mensagem! Entraremos em contato em breve.');
            form.reset();
        });
    }
    
    // Scroll smooth para navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                // rolar suavemente até a seção correspondente
                const target = document.querySelector(href);
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Toggle do menu mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('open');
            navToggle.classList.toggle('open');
        });
    }
});
