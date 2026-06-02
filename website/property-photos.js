import { Viewer } from './vendor/photo-sphere-viewer/index.module.js';

const properties = {
    flamengo: {
        title: 'Apartamento Flamengo Vista Baía',
        subtitle: 'Rio de Janeiro - RJ',
        price: 'R$ 2.900.000,00',
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
                title: 'Fotos Extras',
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
                title: 'Fotos Extras',
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
                title: 'Fotos Extras',
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

let drawerPhotos = [];
let drawerPropertyTitle = '';
let drawerCurrentIndex = 0;
let drawerViewer = null;

function getAbsolutePhotoUrl(photo) {
    return photo.file.startsWith('http')
        ? photo.file
        : 'https://corsatube360.com.br/' + (photo.file.startsWith('/') ? photo.file.slice(1) : photo.file);
}

function getPlanKey(photo) {
    return photo.file
        .split('/')
        .pop()
        .replace(/-4k\.jpg$/i, '')
        .replace(/\.(jpg|png|webp)$/i, '');
}

function getPhotoPlanPosition(photo, index) {
    const pointNumber = index + 1;
    const isMobilePlan = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;

    const positionsByPointNumberDesktop = {
        1: [14, 43], // Sala
        2: [21, 43], // Sala
        3: [28, 43], // Sala
        4: [23, 56], // Cozinha
        5: [66, 42], // Quarto 1
        6: [75, 42], // Quarto 2
        7: [84, 42], // Quarto 3
        8: [67, 60], // Banheiros
        9: [84, 60], // Banheiros
        10: [90, 60], // Banheiros
        11: [50, 44], // Corredor
        12: [50, 50], // Corredor
    };

    const positionsByPointNumberMobile = {
        1: [17, 31.4], // Sala (microajuste: subir)
        2: [24, 31.4], // Sala (microajuste: subir)
        3: [31, 31.4], // Sala (microajuste: subir)
        4: [22, 64], // Cozinha
        5: [66, 31.4], // Quarto 1 (microajuste: subir)
        6: [75, 31.4], // Quarto 2 (microajuste: subir)
        7: [86, 31.4], // Quarto 3 (microajuste: subir)
        8: [67, 83], // Banheiros
        9: [84, 83], // Banheiros
        10: [90, 83], // Banheiros
        11: [50, 45], // Corredor
        12: [50, 51], // Corredor
    };

    const positionsByPointNumber = isMobilePlan
        ? positionsByPointNumberMobile
        : positionsByPointNumberDesktop;

    if (positionsByPointNumber[pointNumber]) {
        return positionsByPointNumber[pointNumber];
    }

    const positions = {
        // Drawer map coordinates (x%, y%) aligned with the small SVG floor plan.
        // Required layout: 1,2,3 in Sala; 4 Cozinha; 5,6,7 Quartos;
        // 8,9,10 Banheiros; 11,12 Corredor.
        sala1: [14, 20],
        salavista1: [22, 20],
        salavista2: [30, 20],
        cozinha1: [23, 53],
        cozinha2: [30, 53],
        cozinha3: [34, 56],
        quarto1: [69, 18],
        quarto1vista: [76, 18],
        quarto2: [85, 19],
        quarto2vista: [86, 42],
        quarto3: [77, 42],
        quarto3vista: [83, 42],
        banheiromeio: [67, 63],
        banheiroantesala: [84, 63],
        banheiroquarto3: [90, 63],
        corredor1: [50, 33],
        corredor2: [50, 40],
        corredor3: [50, 48],
    };
    const key = getPlanKey(photo);
    if (positions[key]) {
        return positions[key];
    }

    const col = index % 5;
    const row = Math.floor(index / 5);
    return [18 + col * 14, 78 + row * 8];
}

function renderDrawerPlan(drawer) {
    const plan = drawer.querySelector('.photo-drawer-plan');
    if (!plan) {
        return;
    }

    const pins = drawerPhotos.map((photo, index) => {
        const [x, y] = getPhotoPlanPosition(photo, index);
        const activeClass = index === drawerCurrentIndex ? ' is-active' : '';
        return `
            <button type="button"
                class="photo-plan-pin${activeClass}"
                style="left: ${x}%; top: ${y}%"
                data-photo-index="${index}"
                aria-label="${photo.title}">
                <span>${index + 1}</span>
            </button>
        `;
    }).join('');

    plan.innerHTML = `
        <div class="photo-plan-title">Planta do imovel</div>
        <div class="photo-plan-canvas">
            <svg class="photo-plan-drawing" viewBox="0 0 100 70" aria-hidden="true" focusable="false">
                <rect x="3" y="3" width="94" height="64" rx="2" fill="#f7fafc" stroke="#d4dde7" stroke-width="1.4" />
                <rect x="7" y="7" width="35" height="22" fill="#eaf4ff" stroke="#9cafc4" />
                <rect x="7" y="35" width="30" height="25" fill="#fff3e6" stroke="#9cafc4" />
                <rect x="45" y="7" width="13" height="53" fill="#f2f5f7" stroke="#9cafc4" />
                <rect x="61" y="7" width="9" height="20" fill="#ecf8f1" stroke="#9cafc4" />
                <rect x="71" y="7" width="9" height="20" fill="#ecf8f1" stroke="#9cafc4" />
                <rect x="81" y="7" width="10" height="20" fill="#ecf8f1" stroke="#9cafc4" />
                <rect x="61" y="56" width="12" height="8" fill="#f5edf9" stroke="#9cafc4" />
                <rect x="76" y="56" width="15" height="8" fill="#f5edf9" stroke="#9cafc4" />
                <text x="10" y="12" font-size="4" fill="#476078">Sala</text>
                <text x="10" y="40" font-size="4" fill="#6f563b">Cozinha</text>
                <text x="64" y="12" font-size="4" fill="#3f654f">Quartos</text>
            </svg>
            ${pins}
        </div>
    `;

    plan.querySelectorAll('.photo-plan-pin').forEach((pin) => {
        pin.addEventListener('click', () => {
            const nextIndex = Number(pin.dataset.photoIndex);
            if (Number.isInteger(nextIndex)) {
                showDrawerPhoto(nextIndex);
            }
        });
    });
}

function getPhotoDrawer() {
    let drawer = document.getElementById('photo-drawer');
    if (drawer) {
        return drawer;
    }

    drawer = document.createElement('aside');
    drawer.id = 'photo-drawer';
    drawer.className = 'photo-drawer';
    drawer.setAttribute('aria-hidden', 'true');
    drawer.innerHTML = `
        <div class="photo-drawer-backdrop" data-photo-drawer-close></div>
        <div class="photo-drawer-panel" role="dialog" aria-modal="true" aria-labelledby="photo-drawer-title">
            <div class="photo-drawer-header">
                <div>
                    <p class="photo-drawer-eyebrow"></p>
                    <h3 id="photo-drawer-title"></h3>
                </div>
                <button type="button" class="photo-drawer-close" data-photo-drawer-close aria-label="Fechar">×</button>
            </div>
            <div class="photo-drawer-content">
                <div class="photo-drawer-viewer-wrap">
                <button type="button" class="photo-drawer-nav photo-drawer-prev" aria-label="Foto anterior">‹</button>
                <div class="photo-drawer-viewer" id="photo-drawer-viewer"></div>
                <button type="button" class="photo-drawer-nav photo-drawer-next" aria-label="Próxima foto">›</button>
                </div>
                <div class="photo-drawer-plan" aria-label="Planta do imovel"></div>
            </div>
            <div class="photo-drawer-footer">
                <span class="photo-drawer-counter"></span>
            </div>
        </div>
    `;

    drawer.querySelectorAll('[data-photo-drawer-close]').forEach((button) => {
        button.addEventListener('click', closePhotoDrawer);
    });
    drawer.querySelector('.photo-drawer-prev').addEventListener('click', () => showDrawerPhoto(drawerCurrentIndex - 1));
    drawer.querySelector('.photo-drawer-next').addEventListener('click', () => showDrawerPhoto(drawerCurrentIndex + 1));
    document.body.appendChild(drawer);

    return drawer;
}

function showDrawerPhoto(index) {
    if (!drawerPhotos.length) {
        return;
    }

    drawerCurrentIndex = (index + drawerPhotos.length) % drawerPhotos.length;
    const photo = drawerPhotos[drawerCurrentIndex];
    const drawer = getPhotoDrawer();
    const viewerContainer = drawer.querySelector('#photo-drawer-viewer');
    const title = drawer.querySelector('#photo-drawer-title');
    const eyebrow = drawer.querySelector('.photo-drawer-eyebrow');
    const counter = drawer.querySelector('.photo-drawer-counter');
    const absoluteUrl = getAbsolutePhotoUrl(photo);

    title.textContent = photo.title;
    eyebrow.textContent = drawerPropertyTitle;
    counter.textContent = `${drawerCurrentIndex + 1} / ${drawerPhotos.length}`;
    renderDrawerPlan(drawer);

    if (drawerViewer) {
        drawerViewer.destroy();
        drawerViewer = null;
    }

    viewerContainer.innerHTML = '';
    viewerContainer.style.background = `url(${absoluteUrl}) center/cover no-repeat`;

    requestAnimationFrame(() => {
        try {
            drawerViewer = new Viewer({
                container: viewerContainer,
                panorama: absoluteUrl,
                navbar: ['zoom', 'fullscreen'],
                mousewheel: true,
                touchmoveTwoFingers: false,
                defaultZoomLvl: 0,
            });
            drawerViewer.addEventListener('ready', () => {
                drawerViewer.zoom(0);
            });
            drawerViewer.addEventListener('panorama-loaded', () => {
                drawerViewer.zoom(0);
            });
        } catch (error) {
            console.error('Erro no drawer 360', error);
        }
    });
}

function openPhotoDrawer(index, propertyTitle) {
    drawerPropertyTitle = propertyTitle;
    const drawer = getPhotoDrawer();
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('photo-drawer-open');
    showDrawerPhoto(index);
}

function closePhotoDrawer() {
    const drawer = document.getElementById('photo-drawer');
    if (!drawer) {
        return;
    }

    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('photo-drawer-open');

    if (drawerViewer) {
        drawerViewer.destroy();
        drawerViewer = null;
    }
}

document.addEventListener('keydown', (event) => {
    const drawer = document.getElementById('photo-drawer');
    if (!drawer?.classList.contains('is-open')) {
        return;
    }

    if (event.key === 'Escape') {
        closePhotoDrawer();
    } else if (event.key === 'ArrowLeft') {
        showDrawerPhoto(drawerCurrentIndex - 1);
    } else if (event.key === 'ArrowRight') {
        showDrawerPhoto(drawerCurrentIndex + 1);
    }
});

// Intersection Observer para lazy loading dos viewers 360
const lazyViewerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.viewerLoaded) {
            const photo = JSON.parse(entry.target.dataset.photoJson);
            const propertyTitle = entry.target.dataset.propertyTitle;
            const viewerContainer = entry.target.querySelector('.photo-viewer');
            
            if (viewerContainer && viewerContainer.id) {
                entry.target.dataset.viewerLoaded = 'true';
                
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
                
                lazyViewerObserver.unobserve(entry.target);
            }
        }
    });
}, { rootMargin: '100px' });

function renderPhotoCard(photo, propertyTitle, photoIndex) {
    const card = document.createElement('article');
    card.className = 'photo-card';
    card.dataset.photoJson = JSON.stringify(photo);
    card.dataset.propertyTitle = propertyTitle;

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
            openPhotoDrawer(photoIndex, propertyTitle);
            return;
        }

        const dx = Math.abs(event.clientX - pointerStart.x);
        const dy = Math.abs(event.clientY - pointerStart.y);
        pointerStart = null;

        if (dx < 8 && dy < 8) {
            openPhotoDrawer(photoIndex, propertyTitle);
        }
    });

    preview.addEventListener('pointercancel', () => {
        pointerStart = null;
    });

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'photo-open';
    button.textContent = `Abrir galeria · ${photo.title}`;
    button.addEventListener('click', () => openPhotoDrawer(photoIndex, propertyTitle));
    card.appendChild(button);

    // Adicionar card ao observer para lazy loading
    lazyViewerObserver.observe(card);

    return card;
}

function renderPhotoSections(property, propertyTitle) {
    const sectionsContainer = document.getElementById('photos-grid');
    sectionsContainer.innerHTML = '';
    drawerPhotos = property.sections.flatMap((section) => section.photos);
    drawerPropertyTitle = propertyTitle;

    let photoIndex = 0;

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
            grid.appendChild(renderPhotoCard(photo, propertyTitle, photoIndex));
            photoIndex += 1;
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
    subtitle.textContent = `${property.subtitle} · Clique em qualquer foto 360 para abrir a galeria.`;
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
