// Script para carregar o iframe com o tour 360
document.addEventListener('DOMContentLoaded', function() {
    // Envio do formulário de contato por e-mail
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Enviando...';
            }

            const formData = new FormData(form);

            try {
                const response = await fetch('https://formsubmit.co/ajax/corsatube@gmail.com', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        Accept: 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error('Falha no envio');
                }

                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                form.reset();
            } catch (_error) {
                alert('Não foi possível enviar agora. Tente novamente em alguns instantes.');
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Enviar';
                }
            }
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

    // Banner LGPD de consentimento de cookies
    const CONSENT_KEY = 'lgpd_cookie_consent';

    function setConsent(value) {
        try {
            localStorage.setItem(CONSENT_KEY, value);
        } catch (_error) {
        }
    }

    function getConsent() {
        try {
            return localStorage.getItem(CONSENT_KEY);
        } catch (_error) {
            return null;
        }
    }

    function createCookieBanner() {
        const wrapper = document.createElement('div');
        wrapper.className = 'cookie-banner';
        wrapper.setAttribute('role', 'dialog');
        wrapper.setAttribute('aria-live', 'polite');
        wrapper.setAttribute('aria-label', 'Consentimento de cookies');

        wrapper.innerHTML = `
            <div class="cookie-banner__content">
                <p class="cookie-banner__text">
                    Utilizamos cookies para melhorar sua experiência, segurança e desempenho do site, conforme a LGPD.
                </p>
                <div class="cookie-banner__actions">
                    <button type="button" class="btn btn-secondary cookie-btn-reject">Recusar</button>
                    <button type="button" class="btn btn-primary cookie-btn-accept">Aceitar</button>
                </div>
            </div>
        `;

        const acceptBtn = wrapper.querySelector('.cookie-btn-accept');
        const rejectBtn = wrapper.querySelector('.cookie-btn-reject');

        if (acceptBtn) {
            acceptBtn.addEventListener('click', function() {
                setConsent('accepted');
                wrapper.remove();
            });
        }

        if (rejectBtn) {
            rejectBtn.addEventListener('click', function() {
                setConsent('rejected');
                wrapper.remove();
            });
        }

        document.body.appendChild(wrapper);
    }

    if (!getConsent()) {
        createCookieBanner();
    }
});
