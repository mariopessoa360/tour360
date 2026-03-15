import { Viewer } from './vendor/photo-sphere-viewer/index.module.js';

const properties = {
    flamengo: {
        title: 'Apartamento Flamengo Vista Baía',
        subtitle: 'Rio de Janeiro - RJ',
        price: 'R$ 4.000.000,00',
        tourUrl: 'https://corsatube360.com.br/tour360/',
        meta: {
            area: '200m² Área',
            quartos: '3 Quartos',
            banheiros: '3 Banheiros',
            vagas: '2 Vagas'
        },
        sections: [
            {
                id: 'overview',
                title: 'Ambientes Principais',
                photos: [
                    { title: 'Sala 360 - Vista 1', file: 'images/cards/sala1-4k.jpg' },
                    { title: 'Sala 360 - Vista 2', file: 'images/cards/salavista1-4k.jpg' },
                    { title: 'Sala 360 - Vista 3', file: 'images/cards/salavista2-4k.jpg' },
                    { title: 'Cozinha 360', file: 'images/cards/cozinha1-4k.jpg' }
                ]
            },
            {
                id: 'quartos',
                title: 'Fotos dos Quartos',
                photos: [
                    { title: 'Quarto 1', file: 'images/cards/quarto1-4k.jpg' },
                    { title: 'Quarto 1 - Vista', file: 'images/cards/quarto1vista-4k.jpg' },
                    { title: 'Quarto 2', file: 'images/cards/quarto2-4k.jpg' }
                ]
            },
            {
                id: 'banheiros',
                title: 'Fotos dos Banheiros',
                photos: [
                    { title: 'Banheiro Social', file: 'images/cards/banheiromeio-4k.jpg' },
                    { title: 'Banheiro Antesala', file: 'images/cards/banheiroantesala-4k.jpg' },
                    { title: 'Banheiro Suíte', file: 'images/cards/banheiroquarto3-4k.jpg' }
                ]
            },
            {
                id: 'vagas',
                title: 'Fotos de Garagem / Vagas',
                photos: [
                    { title: 'Acesso 1', file: 'images/cards/corredor1-4k.jpg' },
                    { title: 'Acesso 2', file: 'images/cards/corredor2-4k.jpg' }
                ]
            }
        ]
    },
    cobertura: {
        title: 'Cobertura Zona Sul',
        subtitle: 'Rio de Janeiro - RJ',
        price: 'R$ 7.500.000,00',
        tourUrl: 'https://corsatube360.com.br/tour360/',
        meta: {
            area: '280m² Área',
            quartos: '4 Quartos',
            banheiros: '4 Banheiros',
            vagas: '3 Vagas'
        },
        sections: [
            {
                id: 'overview',
                title: 'Ambientes Principais',
                photos: [
                    { title: 'Vista Principal', file: 'images/cards/salavista1-4k.jpg' },
                    { title: 'Ambiente Integrado', file: 'images/cards/sala1-4k.jpg' },
                    { title: 'Cozinha', file: 'images/cards/cozinha1-4k.jpg' }
                ]
            },
            {
                id: 'quartos',
                title: 'Fotos dos Quartos',
                photos: [
                    { title: 'Quarto 1 - Vista', file: 'images/cards/quarto1vista-4k.jpg' },
                    { title: 'Quarto 2 - Vista', file: 'images/cards/quarto2vista-4k.jpg' },
                    { title: 'Quarto 3 - Vista', file: 'images/cards/quarto3vista-4k.jpg' }
                ]
            },
            {
                id: 'banheiros',
                title: 'Fotos dos Banheiros',
                photos: [
                    { title: 'Banheiro Social', file: 'images/cards/banheiromeio-4k.jpg' },
                    { title: 'Banheiro Antesala', file: 'images/cards/banheiroantesala-4k.jpg' },
                    { title: 'Banheiro Suíte', file: 'images/cards/banheiroquarto3-4k.jpg' }
                ]
            },
            {
                id: 'vagas',
                title: 'Fotos de Garagem / Vagas',
                photos: [
                    { title: 'Acesso 1', file: 'images/cards/corredor1-4k.jpg' },
                    { title: 'Acesso 2', file: 'images/cards/corredor2-4k.jpg' }
                ]
            }
        ]
    },
    familiar: {
        title: 'Apartamento Familiar Reformado',
        subtitle: 'Rio de Janeiro - RJ',
        price: 'R$ 3.250.000,00',
        tourUrl: 'https://corsatube360.com.br/tour360/',
        meta: {
            area: '150m² Área',
            quartos: '3 Quartos',
            banheiros: '2 Banheiros',
            vagas: '1 Vaga'
        },
        sections: [
            {
                id: 'overview',
                title: 'Ambientes Principais',
                photos: [
                    { title: 'Cozinha 360 - Vista 1', file: 'images/cards/cozinha1-4k.jpg' },
                    { title: 'Cozinha 360 - Vista 2', file: 'images/cards/cozinha2-4k.jpg' },
                    { title: 'Cozinha 360 - Vista 3', file: 'images/cards/cozinha3-4k.jpg' }
                ]
            },
            {
                id: 'quartos',
                title: 'Fotos dos Quartos',
                photos: [
                    { title: 'Quarto 1', file: 'images/cards/quarto1-4k.jpg' },
                    { title: 'Quarto 2', file: 'images/cards/quarto2-4k.jpg' },
                    { title: 'Quarto 3', file: 'images/cards/quarto3-4k.jpg' }
                ]
            },
            {
                id: 'banheiros',
                title: 'Fotos dos Banheiros',
                photos: [
                    { title: 'Banheiro Social', file: 'images/cards/banheiromeio-4k.jpg' },
                    { title: 'Banheiro Antesala', file: 'images/cards/banheiroantesala-4k.jpg' },
                    { title: 'Banheiro Suíte', file: 'images/cards/banheiroquarto3-4k.jpg' }
                ]
            },
            {
                id: 'vagas',
                title: 'Fotos de Garagem / Vagas',
                photos: [
                    { title: 'Acesso 1', file: 'images/cards/corredor1-4k.jpg' },
                    { title: 'Acesso 2', file: 'images/cards/corredor2-4k.jpg' }
                ]
            }
        ]
    }
};

function getPropertyId() {
    const url = new URL(window.location.href);
    return url.searchParams.get('property') || 'flamengo';
}

function renderMetaIcons(property) {
    const metaContainer = document.getElementById('property-meta-icons');
    if (!metaContainer || !property.meta) {
        return;
    }

    metaContainer.innerHTML = `
        <div class="property-meta">
            <button type="button" class="meta-pill meta-nav-btn" data-target="section-overview" aria-label="Ir para ambientes principais">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                </svg>
                <span>${property.meta.area}</span>
            </button>
            <button type="button" class="meta-pill meta-nav-btn" data-target="section-quartos" aria-label="Ir para fotos dos quartos">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span>${property.meta.quartos}</span>
            </button>
            <button type="button" class="meta-pill meta-nav-btn" data-target="section-banheiros" aria-label="Ir para fotos dos banheiros">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 2v6h6V2M9 16v6h6v-6M3 9h18M3 15h18"></path>
                    <rect x="2" y="3" width="20" height="18" rx="2"></rect>
                </svg>
                <span>${property.meta.banheiros}</span>
            </button>
            <button type="button" class="meta-pill meta-nav-btn" data-target="section-vagas" aria-label="Ir para fotos de vagas">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                    <circle cx="12" cy="16" r="2"></circle>
                    <path d="M8 11V7a4 4 0 0 1 8 0v4"></path>
                </svg>
                <span>${property.meta.vagas}</span>
            </button>
        </div>
    `;

    metaContainer.querySelectorAll('.meta-nav-btn').forEach((button) => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function openFullscreen(photo, propertyTitle) {
    const url = new URL('viewer-fullscreen.html', window.location.href);
    url.searchParams.set('image', photo.file);
    url.searchParams.set('title', `${propertyTitle} - ${photo.title}`);
    window.open(url.toString(), '_blank', 'noopener,noreferrer');
}

function renderPhotoCard(photo, propertyTitle) {
    const card = document.createElement('article');
    card.className = 'photo-card';

    const preview = document.createElement('div');
    preview.className = 'photo-preview';

    const viewerId = `preview-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    const viewerContainer = document.createElement('div');
    viewerContainer.className = 'photo-viewer';
    viewerContainer.id = viewerId;
    
    // Converter para URL absoluta para melhor compatibilidade mobile
    const absoluteUrl = photo.file.startsWith('http') ? photo.file : 'https://corsatube360.com.br/' + (photo.file.startsWith('/') ? photo.file.slice(1) : photo.file);
    viewerContainer.style.background = `url(${absoluteUrl}) center/cover no-repeat`;

    preview.appendChild(viewerContainer);
    card.appendChild(preview);

    let pointerStart = null;

    preview.addEventListener('pointerdown', (event) => {
        pointerStart = { x: event.clientX, y: event.clientY };
    });

    preview.addEventListener('pointerup', (event) => {
        if (!pointerStart) {
            openFullscreen(photo, propertyTitle);
            return;
        }

        const dx = Math.abs(event.clientX - pointerStart.x);
        const dy = Math.abs(event.clientY - pointerStart.y);
        pointerStart = null;

        if (dx < 8 && dy < 8) {
            openFullscreen(photo, propertyTitle);
        }
    });

    preview.addEventListener('pointercancel', () => {
        pointerStart = null;
    });

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'photo-open';
    button.textContent = `Abrir em tela cheia · ${photo.title}`;
    button.addEventListener('click', () => openFullscreen(photo, propertyTitle));
    card.appendChild(button);

    requestAnimationFrame(() => {
        try {
            new Viewer({
                container: viewerContainer,
                panorama: photo.file.startsWith('http') ? photo.file : 'https://corsatube360.com.br/' + (photo.file.startsWith('/') ? photo.file.slice(1) : photo.file),
                navbar: false,
                mousemove: true,
                mousewheel: false,
                touchmoveTwoFingers: false,
                defaultZoomLvl: 35,
                minFov: 25,
                maxFov: 100,
                loadingTxt: 'Carregando...'
            });
        } catch (error) {
            console.error('Erro no preview 360', error);
            viewerContainer.innerHTML = '';
            const absoluteUrl = photo.file.startsWith('http') ? photo.file : 'https://corsatube360.com.br/' + (photo.file.startsWith('/') ? photo.file.slice(1) : photo.file);
            viewerContainer.style.background = `url(${absoluteUrl}) center/cover no-repeat`;
        }
    });

    return card;
}

function renderPhotoSections(property, propertyTitle) {
    const sectionsContainer = document.getElementById('photos-grid');
    sectionsContainer.innerHTML = '';

    property.sections.forEach((section) => {
        const sectionElement = document.createElement('section');
        sectionElement.className = 'photo-category-section';
        sectionElement.id = `section-${section.id}`;

        const heading = document.createElement('h3');
        heading.className = 'photo-category-title';
        heading.textContent = section.title;
        sectionElement.appendChild(heading);

        const grid = document.createElement('div');
        grid.className = 'photo-category-grid';

        section.photos.forEach((photo) => {
            grid.appendChild(renderPhotoCard(photo, propertyTitle));
        });

        sectionElement.appendChild(grid);
        sectionsContainer.appendChild(sectionElement);
    });
}

function setupDetailContactForm(property) {
    const form = document.getElementById('detail-contact-form');
    if (!form) {
        return;
    }

    const dateTimeInput = form.querySelector('input[name="visit_datetime"]');

    async function postFormWithTimeout(url, formData, timeoutMs = 15000) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json'
                },
                signal: controller.signal
            });
            return response;
        } finally {
            clearTimeout(timeoutId);
        }
    }

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

    function updateVisitMin() {
        if (!dateTimeInput) {
            return;
        }

        if (!dateTimeInput.value) {
            dateTimeInput.value = getTomorrowAtEightDateTimeLocal();
        }
    }

    function isValidVisitDateTime() {
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

    updateVisitMin();
    if (dateTimeInput) {
        if (window.flatpickr) {
            if (window.flatpickr?.l10ns?.pt) {
                window.flatpickr.localize(window.flatpickr.l10ns.pt);
            }

            window.flatpickr(dateTimeInput, {
                enableTime: true,
                time_24hr: true,
                dateFormat: 'Y-m-d H:i',
                altInput: true,
                altFormat: 'd/m/Y H:i',
                minuteIncrement: 30,
                minDate: 'today',
                minTime: '08:00',
                maxTime: '17:00',
                defaultDate: getTomorrowAtEightDateObj(),
                allowInput: false,
                clickOpens: true
            });
        }
    }

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        if (!isValidVisitDateTime()) {
            alert('Escolha data e horário válidos para visita: de 08:00 até 17:00, com minutos 00 ou 30.');
            return;
        }

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn ? submitBtn.textContent : 'Enviar interesse';

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
        }

        const formData = new FormData(form);
        formData.set('ad_interest', property.title || 'Interesse em imóvel (detalhes)');
        formData.set('property_url', window.location.href);

        try {
            const response = await postFormWithTimeout('https://formsubmit.co/ajax/corsatube@gmail.com', formData);

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
}

function init() {
    const propertyId = getPropertyId();
    const property = properties[propertyId] || properties.flamengo;

    const title = document.getElementById('property-title');
    const subtitle = document.getElementById('property-subtitle');
    const price = document.getElementById('property-price');
    const tourLink = document.getElementById('property-tour-link');
    const siteLogo = document.getElementById('site-logo');

    title.textContent = property.title;
    subtitle.textContent = `${property.subtitle} · Clique em qualquer foto 360 para abrir em tela cheia.`;
    if (price) {
        if (property.price) {
            price.textContent = property.price;
            price.style.display = 'block';
        } else {
            price.style.display = 'none';
        }
    }
    if (tourLink) {
        tourLink.href = property.tourUrl || 'https://corsatube360.com.br/tour360/';
        tourLink.target = '_blank';
        tourLink.rel = 'noopener noreferrer';
    }

    if (siteLogo) {
        siteLogo.style.cursor = 'pointer';
        siteLogo.setAttribute('role', 'button');
        siteLogo.setAttribute('tabindex', '0');
        siteLogo.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
        siteLogo.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                window.location.href = 'index.html';
            }
        });
    }

    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            navToggle.classList.toggle('open');
        });
    }

    renderMetaIcons(property);
    renderPhotoSections(property, property.title);
    setupDetailContactForm(property);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
