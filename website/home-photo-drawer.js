import { Viewer } from './vendor/photo-sphere-viewer/index.module.js';

const propertyGalleries = {
    flamengo: {
        title: 'Apartamento Flamengo Vista Baia',
        plan: 'flamengo',
        viewerId: 'viewer-card-1',
        photos: [
            { title: 'Sala 360 - Vista 1', file: 'images/cards/sala1-4k.jpg' },
            { title: 'Sala 360 - Vista 2', file: 'images/cards/salavista1-4k.jpg' },
            { title: 'Sala 360 - Vista 3', file: 'images/cards/salavista2-4k.jpg' },
            { title: 'Cozinha 360', file: 'images/cards/cozinha1-4k.jpg' },
            { title: 'Quarto 1', file: 'images/cards/quarto1-4k.jpg' },
            { title: 'Quarto 1 - Vista', file: 'images/cards/quarto1vista-4k.jpg' },
            { title: 'Quarto 2', file: 'images/cards/quarto2-4k.jpg' },
            { title: 'Banheiro Social', file: 'images/cards/banheiromeio-4k.jpg' },
            { title: 'Banheiro Antesala', file: 'images/cards/banheiroantesala-4k.jpg' },
            { title: 'Banheiro Suite', file: 'images/cards/banheiroquarto3-4k.jpg' },
            { title: 'Acesso 1', file: 'images/cards/corredor1-4k.jpg' },
            { title: 'Acesso 2', file: 'images/cards/corredor2-4k.jpg' },
        ],
    },
    tijuca: {
        title: 'Aluguel - Casa na Tijuca',
        plan: 'tijuca',
        viewerId: 'viewer-card-2',
        photos: [
            { title: 'Cozinha', file: 'tijuca-lite/cozinha.jpg' },
            { title: 'Quarto 1', file: 'tijuca-lite/quarto1.jpg' },
            { title: 'Quarto 2', file: 'tijuca-lite/quarto2.jpg' },
            { title: 'Banheiro', file: 'tijuca-lite/banheiro.jpg' },
            { title: 'Corredor 1', file: 'tijuca-lite/corredor1.jpg' },
            { title: 'Corredor 2', file: 'tijuca-lite/corredor2.jpg' },
            { title: 'Terraco', file: 'tijuca-lite/terraco.jpg' },
            { title: 'Varanda', file: 'tijuca-lite/varanda.jpg' },
            { title: 'Area Externa 1', file: 'tijuca-lite/area-externa1.jpg' },
            { title: 'Area Externa 2', file: 'tijuca-lite/area-externa2.jpg' },
            { title: 'Area Externa 3', file: 'tijuca-lite/area-externa3.jpg' },
            { title: 'Area Externa 4', file: 'tijuca-lite/area-externa0.jpg' },
        ],
    },
};

const planPositions = {
    flamengo: {
        sala1: [14, 43],
        salavista1: [21, 43],
        salavista2: [28, 43],
        cozinha1: [23, 56],
        quarto1: [66, 42],
        quarto1vista: [75, 42],
        quarto2: [84, 42],
        banheiromeio: [67, 60],
        banheiroantesala: [84, 60],
        banheiroquarto3: [90, 60],
        corredor1: [50, 44],
        corredor2: [50, 50],
    },
    tijuca: {
        cozinha: [34, 43],
        quarto1: [63, 27],
        quarto2: [79, 27],
        banheiro: [79, 47],
        corredor1: [51, 43],
        corredor2: [57, 43],
        terraco: [20, 20],
        varanda: [51, 62],
        'area-externa1': [20, 56],
        'area-externa2': [27, 56],
        'area-externa3': [34, 56],
        'area-externa0': [41, 56],
    },
};

let drawerProperty = null;
let drawerPhotos = [];
let drawerCurrentIndex = 0;
let drawerViewer = null;

function getDisplayPhotoTitle(title) {
    return title
        .replace(/\b360\b/g, '')
        .replace(/\s{2,}/g, ' ')
        .replace(/\s+-\s+/g, ' - ')
        .replace(/-\s*$/, '')
        .trim();
}

function getPhotoKey(photo) {
    return photo.file
        .split('/')
        .pop()
        .replace(/-4k\.jpg$/i, '')
        .replace(/\.(jpg|png|webp)$/i, '');
}

function normalizePath(path) {
    return path.replace(/^\.?\//, '').toLowerCase();
}

function getAbsolutePhotoUrl(photo) {
    return new URL(photo.file, window.location.href).href;
}

function getFloorPlanSvg(plan) {
    if (plan === 'tijuca') {
        return `
            <rect x="3" y="3" width="94" height="64" rx="2" fill="#f7fafc" stroke="#d4dde7" stroke-width="1.4" />
            <rect x="8" y="8" width="29" height="22" fill="#eaf4ff" stroke="#9cafc4" />
            <rect x="40" y="8" width="14" height="50" fill="#f2f5f7" stroke="#9cafc4" />
            <rect x="58" y="8" width="17" height="19" fill="#ecf8f1" stroke="#9cafc4" />
            <rect x="76" y="8" width="17" height="19" fill="#ecf8f1" stroke="#9cafc4" />
            <rect x="58" y="33" width="35" height="18" fill="#f5edf9" stroke="#9cafc4" />
            <rect x="8" y="36" width="30" height="22" fill="#fff3e6" stroke="#9cafc4" />
            <rect x="42" y="60" width="18" height="6" fill="#e8f7ff" stroke="#9cafc4" />
            <text x="12" y="16" font-size="4" fill="#476078">Terraco</text>
            <text x="13" y="44" font-size="4" fill="#6f563b">Area externa</text>
            <text x="60" y="16" font-size="4" fill="#3f654f">Quartos</text>
            <text x="61" y="40" font-size="4" fill="#6f3b5f">Banheiro</text>
            <text x="42" y="38" font-size="4" fill="#476078">Cozinha</text>
        `;
    }

    return `
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
    `;
}

function getPhotoPlanPosition(photo, index) {
    const propertyPlan = drawerProperty?.plan || 'flamengo';
    const positions = planPositions[propertyPlan] || {};
    const key = getPhotoKey(photo);

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
        const label = getDisplayPhotoTitle(photo.title);

        return `
            <button type="button"
                class="photo-plan-pin${activeClass}"
                style="left: ${x}%; top: ${y}%"
                data-photo-index="${index}"
                aria-label="${label}">
                <span>${index + 1}</span>
            </button>
        `;
    }).join('');

    plan.innerHTML = `
        <div class="photo-plan-title">Planta do imovel</div>
        <div class="photo-plan-canvas">
            <div class="photo-plan-stage">
                <svg class="photo-plan-drawing" viewBox="0 0 100 70" aria-hidden="true" focusable="false">
                    ${getFloorPlanSvg(drawerProperty?.plan)}
                </svg>
                ${pins}
            </div>
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
                <button type="button" class="photo-drawer-close" data-photo-drawer-close aria-label="Fechar">&times;</button>
            </div>
            <div class="photo-drawer-content">
                <div class="photo-drawer-viewer-wrap">
                    <button type="button" class="photo-drawer-nav photo-drawer-prev" aria-label="Foto anterior">&lsaquo;</button>
                    <div class="photo-drawer-viewer" id="photo-drawer-viewer"></div>
                    <button type="button" class="photo-drawer-nav photo-drawer-next" aria-label="Proxima foto">&rsaquo;</button>
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

    title.textContent = getDisplayPhotoTitle(photo.title);
    eyebrow.textContent = drawerProperty.title;
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
            console.error('Erro no drawer 360 da home', error);
        }
    });
}

function getStartIndexFromCard(card, property) {
    const viewerId = card?.querySelector('.card-viewer-360')?.id || property.viewerId;
    const state = window.homeViewerState?.[viewerId];
    const currentImage = state?.images?.[state.index];

    if (!currentImage) {
        return 0;
    }

    const normalizedCurrent = normalizePath(currentImage);
    const matchIndex = property.photos.findIndex((photo) => normalizePath(photo.file) === normalizedCurrent);
    return matchIndex >= 0 ? matchIndex : 0;
}

function openPropertyDrawer(propertyId, startIndex = 0) {
    const property = propertyGalleries[propertyId];
    if (!property) {
        return;
    }

    drawerProperty = property;
    drawerPhotos = property.photos;

    const drawer = getPhotoDrawer();
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('photo-drawer-open');
    showDrawerPhoto(startIndex);
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

function bindHomeDrawer() {
    document.querySelectorAll('.property-card[data-property-id] .property-image').forEach((image) => {
        image.addEventListener('click', (event) => {
            if (event.target.closest('.viewer-arrow')) {
                return;
            }

            const card = image.closest('.property-card[data-property-id]');
            const property = propertyGalleries[card?.dataset.propertyId];
            if (!property) {
                return;
            }

            event.preventDefault();
            event.stopPropagation();
            openPropertyDrawer(card.dataset.propertyId, getStartIndexFromCard(card, property));
        });
    });

    document.querySelectorAll('[data-open-property-drawer]').forEach((button) => {
        button.addEventListener('click', (event) => {
            const propertyId = button.dataset.openPropertyDrawer;
            const property = propertyGalleries[propertyId];
            if (!property) {
                return;
            }

            event.preventDefault();
            event.stopPropagation();
            const card = button.closest('.property-card[data-property-id]');
            openPropertyDrawer(propertyId, getStartIndexFromCard(card, property));
        });
    });
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

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindHomeDrawer);
} else {
    bindHomeDrawer();
}
