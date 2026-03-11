import { Viewer } from './vendor/photo-sphere-viewer/index.module.js';

function getParams() {
    const url = new URL(window.location.href);
    return {
        image: url.searchParams.get('image') || 'images/cards/sala1-4k.jpg',
        title: url.searchParams.get('title') || 'Foto 360'
    };
}

function init() {
    const { image, title } = getParams();
    document.title = title;

    const container = document.getElementById('viewer-fullscreen');

    try {
        const viewer = new Viewer({
            container,
            panorama: image,
            navbar: ['zoom', 'move', 'fullscreen'],
            mousemove: true,
            mousewheel: true,
            touchmoveTwoFingers: false,
            defaultZoomLvl: 50,
            minFov: 30,
            maxFov: 120,
            loadingTxt: 'Carregando foto 360...'
        });

        // Remover zoom quando a foto carregar completamente
        viewer.addEventListener('ready', () => {
            viewer.zoom(0);
        });

        const requestFs = () => {
            const el = document.documentElement;
            if (el.requestFullscreen) {
                el.requestFullscreen().catch(() => {});
            }
        };

        document.addEventListener('click', requestFs, { once: true });
    } catch (error) {
        console.error('Erro ao abrir foto 360 em tela cheia', error);
        container.innerHTML = `<img src="${image}" alt="${title}" style="width:100%;height:100%;object-fit:contain;">`;
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
