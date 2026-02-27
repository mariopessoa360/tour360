// Definição dos ambientes e suas imagens
const rooms = {
    sala: {
        name: 'Sala/Estar',
        images: [
            { name: 'Vista 1', file: 'salavista1.jpg' },
            { name: 'Vista 2', file: 'salavista2.jpg' },
            { name: 'Ambiente 1', file: 'sala1.jpg' },
            { name: 'Ambiente 2', file: 'sala2.jpg' },
            { name: 'Ambiente 3', file: 'sala3.jpg' },
            { name: 'Ambiente 4', file: 'sala4.jpg' },
            { name: 'Antesala', file: 'antesala.jpg' },
        ]
    },
    cozinha: {
        name: 'Cozinha',
        images: [
            { name: 'Cozinha 1', file: 'cozinha1.jpg' },
            { name: 'Cozinha 2', file: 'cozinha2.jpg' },
            { name: 'Cozinha 3', file: 'cozinha3.jpg' },
        ]
    },
    suite1: {
        name: 'Quarto Suite 1',
        images: [
            { name: 'Quarto', file: 'quarto1.jpg' },
            { name: 'Vista', file: 'quarto1vista.jpg' },
            { name: 'Banheiro', file: 'banheiromeio.jpg' },
        ]
    },
    suite2: {
        name: 'Quarto Suite 2',
        images: [
            { name: 'Quarto', file: 'quarto2.jpg' },
            { name: 'Vista', file: 'quarto2vista.jpg' },
        ]
    },
    quarto3: {
        name: 'Quarto 3',
        images: [
            { name: 'Quarto', file: 'quarto3.jpg' },
            { name: 'Vista', file: 'quarto3vista.jpg' },
            { name: 'Banheiro', file: 'banheiroquarto3.jpg' },
        ]
    },
    corredor: {
        name: 'Corredores',
        images: [
            { name: 'Corredor 1', file: 'corredor1.jpg' },
            { name: 'Corredor 2', file: 'corredor2.jpg' },
            { name: 'Corredor 3', file: 'corredor3.jpg' },
        ]
    },
    servico: {
        name: 'Áreas de Serviço',
        images: [
            { name: 'Banheiro Antesala', file: 'banheiroantesala.jpg' },
            { name: 'Banheiro Empregada', file: 'banheiroempregada.jpg' },
            { name: 'Quarto Empregada 1', file: 'empregadaquarto1.jpg' },
            { name: 'Quarto Empregada 2', file: 'empregadaquarto2.jpg' },
        ]
    }
};

let currentRoom = 'sala';
let currentImageIndex = 0;
let viewer = null;

// Detectar caminho das imagens (funciona local e produção)
function getBasePath() {
    const currentUrl = window.location.pathname;
    // Se estamos em /tour-by-room.html ou em uma subpasta tipo /website/
    if (currentUrl.includes('/website/') || currentUrl.includes('tour-by-room')) {
        // Local: imagens estão em ../public/
        return '../public/';
    } else {
        // Produção HostGator: imagens estão em /tour360/public/
        return '/tour360/public/';
    }
}

const basePath = getBasePath();

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar o viewer
    initializeViewer();
    
    // Configurar cliques dos botões de ambiente
    document.querySelectorAll('.room-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const room = this.getAttribute('data-room');
            switchRoom(room);
        });
    });
    
    // Configurar scroll smooth
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Configurar formulário de contato
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Obrigado pela sua mensagem! Entraremos em contato em breve.');
            form.reset();
        });
    }
});

function initializeViewer() {
    const { PhotoSphereViewer } = window;
    
    if (!PhotoSphereViewer) {
        console.error('Photo Sphere Viewer não carregado');
        return;
    }

    viewer = new PhotoSphereViewer.Viewer({
        container: 'viewer',
        panorama: basePath + rooms[currentRoom].images[currentImageIndex].file,
        navbar: [
            'autorotate',
            'zoom',
            'fullscreen'
        ],
        defaultZoomLvl: 60,
    });

    loadRoomImages();
}

function switchRoom(room) {
    currentRoom = room;
    currentImageIndex = 0;
    
    // Atualizar título
    document.getElementById('room-title').textContent = rooms[room].name;
    
    // Atualizar botões ativos
    document.querySelectorAll('.room-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-room') === room) {
            btn.classList.add('active');
        }
    });
    
    // Carregar primeira imagem do ambiente
    if (viewer) {
        viewer.setPanorama(basePath + rooms[room].images[0].file);
    }
    
    // Carregar botões de imagens
    loadRoomImages();
    
    // Scroll para o viewer
    document.querySelector('.tour-viewer-section').scrollIntoView({ behavior: 'smooth' });
}

function loadRoomImages() {
    const container = document.getElementById('image-buttons');
    container.innerHTML = '';
    
    const images = rooms[currentRoom].images;
    
    images.forEach((image, index) => {
        const btn = document.createElement('button');
        btn.className = 'image-btn';
        if (index === currentImageIndex) {
            btn.classList.add('active');
        }
        btn.textContent = image.name;
        btn.addEventListener('click', () => selectImage(index));
        container.appendChild(btn);
    });
}

function selectImage(index) {
    currentImageIndex = index;
    const image = rooms[currentRoom].images[index];
    
    if (viewer) {
        viewer.setPanorama(basePath + image.file);
    }
    
    // Atualizar botões ativos
    document.querySelectorAll('.image-btn').forEach((btn, idx) => {
        btn.classList.remove('active');
        if (idx === index) {
            btn.classList.add('active');
        }
    });
    
    // Scroll suave para o viewer (centralizado na tela)
    document.getElementById('viewer').scrollIntoView({ behavior: 'smooth', block: 'center' });
}
