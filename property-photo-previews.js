import { Viewer } from './vendor/photo-sphere-viewer/index.module.js';

const previewViewers = new WeakMap();

function extractBackgroundUrl(element) {
    const raw = element.style.backgroundImage || '';
    const match = raw.match(/^url\(["']?(.*?)["']?\)$/);
    return match?.[1] || '';
}

function getPanoramaUrl(element) {
    return element.dataset.panorama || extractBackgroundUrl(element);
}

function initPreview(element) {
    if (!element || element.dataset.previewLoaded === 'true' || element.querySelector('canvas')) {
        return;
    }

    const panorama = getPanoramaUrl(element);
    if (!panorama) {
        return;
    }

    element.dataset.previewLoaded = 'true';
    element.dataset.panorama = panorama;
    element.style.background = `url("${panorama}") center/cover no-repeat`;

    requestAnimationFrame(() => {
        try {
            const viewer = new Viewer({
                container: element,
                panorama,
                navbar: false,
                mousemove: true,
                mousewheel: false,
                touchmoveTwoFingers: false,
                defaultZoomLvl: 30,
                minFov: 25,
                maxFov: 120,
                loadingTxt: 'Carregando...'
            });

            previewViewers.set(element, viewer);
        } catch (error) {
            element.dataset.previewLoaded = 'failed';
            console.error('Erro no preview 360', error);
        }
    });
}

const previewObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                previewObserver.unobserve(entry.target);
                initPreview(entry.target);
            }
        });
    }, { rootMargin: '160px' })
    : null;

function bindPreview(element) {
    if (!element || element.dataset.previewBound === 'true') {
        return;
    }

    const panorama = getPanoramaUrl(element);
    if (panorama) {
        element.dataset.panorama = panorama;
    }

    element.dataset.previewBound = 'true';

    if (previewObserver) {
        previewObserver.observe(element);
    } else {
        initPreview(element);
    }
}

function bindAllPreviews() {
    document.querySelectorAll('.photo-viewer').forEach(bindPreview);
}

function startPreviewBinding() {
    bindAllPreviews();

    const target = document.getElementById('photos-grid') || document.body;
    const mutationObserver = new MutationObserver(bindAllPreviews);
    mutationObserver.observe(target, { childList: true, subtree: true });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startPreviewBinding, { once: true });
} else {
    startPreviewBinding();
}
