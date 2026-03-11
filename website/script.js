// Script para carregar o iframe com o tour 360
document.addEventListener('DOMContentLoaded', function() {
    function toDateTimeLocalString(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    }

    function getTomorrowAtEightDateTimeLocal() {
        const now = new Date();
        now.setDate(now.getDate() + 1);
        now.setHours(8, 0, 0, 0);
        return toDateTimeLocalString(now);
    }

    function getTomorrowAtEightDateObj() {
        const now = new Date();
        now.setDate(now.getDate() + 1);
        now.setHours(8, 0, 0, 0);
        return now;
    }

    function parseDateTimeValue(value) {
        if (!value) {
            return null;
        }

        const normalized = value.replace(' ', 'T');
        const parsed = new Date(normalized);
        return Number.isNaN(parsed.getTime()) ? null : parsed;
    }

    function hasValidMinuteStep(dateValue) {
        const selected = new Date(dateValue);
        const minute = selected.getMinutes();
        return minute === 0 || minute === 30;
    }

    function applyVisitConstraints(form) {
        const dateTimeInput = form.querySelector('input[name="visit_datetime"]');

        if (!dateTimeInput) {
            return;
        }

        const defaultDate = getTomorrowAtEightDateObj();
        dateTimeInput.value = getTomorrowAtEightDateTimeLocal();

        if (window.flatpickr) {
            if (window.flatpickr?.l10ns?.pt) {
                window.flatpickr.localize(window.flatpickr.l10ns.pt);
            }

            window.flatpickr(dateTimeInput, {
                enableTime: true,
                time_24hr: true,
                dateFormat: 'Y-m-d H:i',
                minuteIncrement: 30,
                minDate: 'today',
                minTime: '08:00',
                maxTime: '17:00',
                defaultDate,
                allowInput: false,
                clickOpens: true
            });
        }
    }

    function isValidVisitDateTime(form) {
        const dateTimeInput = form.querySelector('input[name="visit_datetime"]');

        if (!dateTimeInput || !dateTimeInput.value) {
            return true;
        }

        const selected = parseDateTimeValue(dateTimeInput.value);
        if (!selected) {
            return false;
        }
        const hours = selected.getHours();
        const inBusinessHours = hours >= 8 && (hours < 17 || (hours === 17 && selected.getMinutes() === 0));

        return selected.getTime() >= Date.now() && hasValidMinuteStep(dateTimeInput.value) && inBusinessHours;
    }

    // Envio dos formulários de contato por e-mail
    const forms = document.querySelectorAll('.contact-form');
    forms.forEach((form) => {
        applyVisitConstraints(form);

        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            if (!isValidVisitDateTime(form)) {
                alert('Escolha data e horário válidos para visita: de 08:00 até 17:00, com minutos 00 ou 30.');
                return;
            }

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn ? submitBtn.textContent : 'Enviar';

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Enviando...';
            }

            const formData = new FormData(form);
            const cardTitle = form.closest('.property-card')?.querySelector('h3')?.textContent?.trim();
            const adInterest = cardTitle || 'Contato geral (seção de contato)';
            formData.set('ad_interest', adInterest);

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
                    submitBtn.textContent = originalBtnText;
                }
            }
        });
    });
    
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
