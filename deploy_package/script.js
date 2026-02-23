// Script para carregar o iframe com o tour 360
document.addEventListener('DOMContentLoaded', function() {
    // Detectar se estamos em produção ou desenvolvimento
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    
    // URL do tour 360 - ATUALIZE PARA SEU DOMÍNIO!
    const tourUrl = isDevelopment 
        ? 'http://localhost:5173/' 
        : 'https://seu-dominio.com/tour360/';
    
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
            }
        });
    });
});
