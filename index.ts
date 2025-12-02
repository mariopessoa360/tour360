import './styles.scss';

import { Viewer } from '@photo-sphere-viewer/core';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';

const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';
const basePath =
  (import.meta.env.BASE_URL?.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL || '/'}/`);
const withBasePath = (relative: string) => `${basePath}${relative.replace(/^\//, '')}`;
const galleryMediaQuery =
  typeof window !== 'undefined' ? window.matchMedia('(max-width: 768px)') : null;
const galleryDesktopThumbnailSize = { width: 180, height: 110 };
const galleryMobileThumbnailSize = { width: 200, height: 100 };
const isMobileViewport = () => galleryMediaQuery?.matches ?? false;
const getGalleryThumbnailSize = () =>
  isMobileViewport() ? galleryMobileThumbnailSize : galleryDesktopThumbnailSize;
// (no forced zoom behavior) kept minimal: viewer controls handle zoom normally

// Lista de panoramas existentes em public/ (descobertos manualmente)
const localPanoramaFiles = [
  'salavista1.jpg',
  'salavista2.jpg',
  'sala1.jpg',
  'sala2.jpg',
  'sala3.jpg',
  'sala4.jpg',
  'antesala.jpg',
  'banheiroantesala.jpg',  
  'corredor1.jpg',
  'corredor2.jpg',
  'corredor3.jpg',
  'quarto1.jpg',
  'quarto1vista.jpg',
  'banheiromeio.jpg',
  'quarto2.jpg',
  'quarto2vista.jpg',  
  'quarto3.jpg',
  'quarto3vista.jpg',   
  'banheiroquarto3.jpg',
  'cozinha1.jpg',
  'cozinha2.jpg',
  'cozinha3.jpg', 
  'banheiroempregada.jpg', 
  'empregadaquarto1.jpg',
  'empregadaquarto2.jpg',
];

const friendlyGalleryNames: Record<string, string> = {
  'salavista1.jpg': 'Sala - Vista 1',
  'salavista2.jpg': 'Sala  Vista 2',
  'sala1.jpg': 'Sala Ambiente 1',
  'sala2.jpg': 'Sala Ambiente 2',
  'sala3.jpg': 'Sala Ambiente 3',
  'sala4.jpg': 'Sala Ambiente 4',
  'antesala.jpg': 'Antesala',
  'banheiroantesala.jpg': 'Banheiro da Antesala',
  'corredor1.jpg': 'Corredor 1',
  'corredor2.jpg': 'Corredor 2',
  'corredor3.jpg': 'Corredor 3',
  'quarto1.jpg': 'Quarto 1',
  'quarto1vista.jpg': 'Quarto 1 - Vista',
  'banheiromeio.jpg': 'Banheiro Social',
  'quarto2.jpg': 'Quarto 2',
  'quarto2vista.jpg': 'Quarto 2 - Vista',
  'quarto3.jpg': 'Quarto 3',
  'quarto3vista.jpg': 'Quarto 3 - Vista',
  'banheiroquarto3.jpg': 'Banheiro da Suíte 3',
  'cozinha1.jpg': 'Cozinha 1',
  'cozinha2.jpg': 'Cozinha 2',
  'cozinha3.jpg': 'Cozinha 3',
  'banheiroempregada.jpg': 'Banheiro de Serviço',
  'empregadaquarto1.jpg': 'Quarto de Serviço 1',
  'empregadaquarto2.jpg': 'Quarto de Serviço 2',
};

const prettifyFilename = (file: string) => {
  const base = file.replace(/\.(jpg|png)$/i, '');
  return base
    .replace(/[-_]/g, ' ')
    .replace(/([a-z])([0-9])/gi, '$1 $2')
    .replace(/([0-9])([a-z])/gi, '$1 $2')
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

// === 1. Markers por panorama ===
const markersByPanorama: Record<string, any[]> = {
};

// Garante que cada panorama local tenha uma entrada (mesmo vazia)
localPanoramaFiles.forEach((file) => {
  if (!markersByPanorama[file]) {
    markersByPanorama[file] = [];
  }
});


// === Gallery items generation ===
// Build gallery items from the available panoramas (markersByPanorama keys).
// Prefer local assets (in `public/`) when present, otherwise fallback to remote `baseUrl`.
const localFiles = new Set<string>([...localPanoramaFiles, 'seta.png']);
const galleryOrder: string[] = [];
const pushUnique = (file: string) => {
  if (!galleryOrder.includes(file)) {
    galleryOrder.push(file);
  }
};
localPanoramaFiles.forEach(pushUnique);
Object.keys(markersByPanorama).forEach(pushUnique);

const galleryItems = galleryOrder.map((file) => {
  const isLocal = localFiles.has(file);
  const panoramaPath = isLocal ? withBasePath(file) : baseUrl + file;
  // try to use a thumbnail with `-thumb` suffix if present locally, otherwise fall back
  const thumbLocal = withBasePath(file.replace(/\.jpg$|\.png$/i, '.jpg'));
  const thumbRemote = baseUrl + file.replace(/\.jpg$|\.png$/i, '.jpg');
  // if local thumbnail not present, fallback to panoramaPath as thumbnail
  const thumbnail = isLocal ? thumbLocal : thumbRemote;
  const displayName = friendlyGalleryNames[file] ?? prettifyFilename(file);
  return {
    id: file.replace(/\W+/g, '-'),
    file,
    name: displayName,
    panorama: panoramaPath,
    thumbnail,
  };
});

const fileToNodeId = new Map(galleryItems.map((item) => [item.file, item.id]));

const virtualTourNodes = galleryItems.map((item, index) => {
  const prev = galleryItems[(index - 1 + galleryItems.length) % galleryItems.length];
  const next = galleryItems[(index + 1) % galleryItems.length];
  const links = [];
  if (galleryItems.length > 1) {
    links.push({
      nodeId: next.id,
      position: { yaw: Math.PI, pitch: 0 },
      arrowStyle: { className: 'tour-arrow-next' },
    });
    if (index !== 0) {
      links.push({
        nodeId: prev.id,
        position: { yaw: 0, pitch: 0 },
        arrowStyle: { className: 'tour-arrow-prev' },
      });
    }
    if (item.file === 'antesala.jpg') {
      const corredor1Id = fileToNodeId.get('corredor1.jpg');
      const banheiroAntesalaId = fileToNodeId.get('banheiroantesala.jpg');
      links.forEach((link) => {
        const isNextArrow = link.arrowStyle?.className === 'tour-arrow-next';
        link.position = {
          yaw: isNextArrow ? -Math.PI / 2 : Math.PI,
          pitch: 0,
        };
        if (isNextArrow && corredor1Id) {
          link.nodeId = corredor1Id;
        }
      });
      if (banheiroAntesalaId && !links.some((link) => link.nodeId === banheiroAntesalaId)) {
        links.push({
          nodeId: banheiroAntesalaId,
          position: { yaw: Math.PI / 2, pitch: 0 },
          arrowStyle: { className: 'tour-arrow-next' },
        });
      }
    }
    if (item.file === 'corredor1.jpg') {
      const corredor2Id = fileToNodeId.get('corredor2.jpg');
      const antesalaId = fileToNodeId.get('antesala.jpg');
      const cozinha1Id = fileToNodeId.get('cozinha1.jpg');
      links.forEach((link) => {
        const isNextArrow = link.arrowStyle?.className === 'tour-arrow-next';
        link.nodeId = isNextArrow ? corredor2Id ?? link.nodeId : antesalaId ?? link.nodeId;
        link.arrowStyle = {
          className: isNextArrow ? 'tour-arrow-next' : 'tour-arrow-prev',
        };
        link.position = {
          yaw: isNextArrow ? Math.PI / 2 : Math.PI, // verde para cima, vermelha para a esquerda
          pitch: 0,
        };
      });
      if (cozinha1Id && !links.some((l) => l.nodeId === cozinha1Id)) {
        links.push({
          nodeId: cozinha1Id,
          position: { yaw: (3 * Math.PI) / 4, pitch: 0 }, // seta verde extra entre as existentes
          arrowStyle: { className: 'tour-arrow-next' },
        });
      }
    }
    if (item.file === 'cozinha1.jpg') {
      const corredor1Id = fileToNodeId.get('corredor1.jpg');
      // normalize todas as verdes para cima
      links
        .filter((link) => link.arrowStyle?.className === 'tour-arrow-next')
        .forEach((link) => {
          link.position = { yaw: -Math.PI / 2, pitch: 0 }; // verde para cima
        });

      // garantir vermelha para a esquerda voltando ao corredor1
      const prevLink = links.find((link) => link.arrowStyle?.className === 'tour-arrow-prev');
      if (prevLink) {
        prevLink.position = { yaw: Math.PI, pitch: 0 };
        prevLink.nodeId = corredor1Id ?? prevLink.nodeId;
      } else if (corredor1Id) {
        links.push({
          nodeId: corredor1Id,
          position: { yaw: Math.PI, pitch: 0 },
          arrowStyle: { className: 'tour-arrow-prev' },
        });
      }
    }
    if (item.file === 'cozinha2.jpg') {
      const corredor1Id = fileToNodeId.get('corredor1.jpg');
      const cozinha3Id = fileToNodeId.get('cozinha3.jpg');
      const nextTarget = cozinha3Id ?? links.find((l) => l.arrowStyle?.className === 'tour-arrow-next')?.nodeId ?? 'cozinha3';
      const prevTarget = links.find((l) => l.arrowStyle?.className === 'tour-arrow-prev')?.nodeId ?? corredor1Id ?? nextTarget;

      // seta verde à direita -> cozinha3
      const green = {
        nodeId: nextTarget,
        position: { yaw: 0, pitch: 0 }, // direita (ajustado)
        arrowStyle: { className: 'tour-arrow-next' },
      };
      // seta vermelha para baixo, destino original (ou corredor1)
      const red = {
        nodeId: prevTarget,
        position: { yaw: Math.PI / 2, pitch: 0 }, // baixo (ajustado)
        arrowStyle: { className: 'tour-arrow-prev' },
      };

      // mantém só as duas setas com posições finais
      links.length = 0;
      links.push(green, red);
    }
    if (item.file === 'corredor2.jpg') {
      const corredor1Id = fileToNodeId.get('corredor1.jpg');
      const corredor3Id = fileToNodeId.get('corredor3.jpg');
      const quarto3Id = fileToNodeId.get('quarto3.jpg');
      links.length = 0;
      if (corredor3Id) {
        links.push({
          nodeId: corredor3Id,
          position: { yaw: 0, pitch: 0 }, // verde para cima, segue para corredor3
          arrowStyle: { className: 'tour-arrow-next' },
        });
      }
      if (corredor1Id) {
        links.push({
          nodeId: corredor1Id,
          position: { yaw: -Math.PI / 2, pitch: 0 }, // vermelha para a esquerda, volta corredor1
          arrowStyle: { className: 'tour-arrow-prev' },
        });
      }
      if (quarto3Id) {
        links.push({
          nodeId: quarto3Id,
          position: { yaw: Math.PI / 2, pitch: 0 }, // verde para direita, quarto3
          arrowStyle: { className: 'tour-arrow-next' },
        });
      }
    }
    if (item.file === 'banheiroantesala.jpg') {
      const nextLink = links.find((link) => link.arrowStyle?.className === 'tour-arrow-next');
      const antesalaId = fileToNodeId.get('antesala.jpg');
      const onlyPrev = nextLink
        ? {
            ...nextLink,
            nodeId: antesalaId ?? nextLink.nodeId,
            arrowStyle: { className: 'tour-arrow-prev' },
          }
        : null;
      links.length = 0;
      if (onlyPrev) {
        links.push(onlyPrev);
      }
    }
    if (item.file === 'sala1.jpg') {
      links.forEach((link) => {
        if (link.arrowStyle?.className === 'tour-arrow-next') {
          link.position = { yaw: -Math.PI / 2, pitch: 0 };
        }
      });
    }
    if (item.file === 'sala4.jpg') {
      links.forEach((link) => {
        if (link.arrowStyle?.className === 'tour-arrow-next') {
          link.position = { yaw: Math.PI / 2, pitch: 0 }; // verde para a direita
        } else if (link.arrowStyle?.className === 'tour-arrow-prev') {
          link.position = { yaw: 0, pitch: 0 }; // vermelha para baixo (mantida)
        }
      });
    }
    if (item.file === 'salavista2.jpg') {
      links.forEach((link) => {
        if (link.arrowStyle?.className === 'tour-arrow-prev') {
          link.position = { yaw: Math.PI / 2, pitch: 0 };
        }
      });
    }
    if (item.file === 'quarto2vista.jpg') {
      // Remover seta verde e manter apenas a vermelha na posição da verde
      const nextLink = links.find((link) => link.arrowStyle?.className === 'tour-arrow-next');
      const prevLink = links.find((link) => link.arrowStyle?.className === 'tour-arrow-prev');
      const targetPrev = prevLink ?? nextLink;
      links.splice(0, links.length);
      if (targetPrev) {
        targetPrev.arrowStyle = { className: 'tour-arrow-prev' };
        // use a posição atual da verde, caso exista; senão, padrão para frente
        targetPrev.position = nextLink?.position ?? targetPrev.position ?? { yaw: 0, pitch: 0 };
        links.push(targetPrev);
      }
    }
    if (item.file === 'quarto3.jpg') {
      const corredor2Id = fileToNodeId.get('corredor2.jpg');
      const bathroomSuite3Id = fileToNodeId.get('banheiroquarto3.jpg');
      const quarto3VistaId = fileToNodeId.get('quarto3vista.jpg');
      const quarto1Id = fileToNodeId.get('quarto1.jpg');
      links.length = 0;
      if (corredor2Id) {
        links.push({
          nodeId: corredor2Id,
          position: { yaw: -Math.PI / 2, pitch: 0 }, // vermelha para a esquerda, volta corredor2 (trocada com quarto1)
          arrowStyle: { className: 'tour-arrow-prev' },
        });
      }
      if (quarto1Id) {
        links.push({
          nodeId: quarto1Id,
          position: { yaw: Math.PI, pitch: 0 }, // verde assume posição antiga da vermelha
          arrowStyle: { className: 'tour-arrow-next' },
        });
      }
      if (bathroomSuite3Id) {
        links.push({
          nodeId: bathroomSuite3Id,
          position: { yaw: Math.PI, pitch: 0 }, // verde para baixo, banheiro suíte 3
          arrowStyle: { className: 'tour-arrow-next' },
        });
      }
      if (quarto3VistaId) {
        links.push({
          nodeId: quarto3VistaId,
          position: { yaw: 0, pitch: 0 }, // verde adicional para vista
          arrowStyle: { className: 'tour-arrow-next' },
        });
      }
    }
    if (item.file === 'quarto1vista.jpg') {
      // Remover seta verde e manter apenas a vermelha apontando para baixo
      const prevLink = links.find((link) => link.arrowStyle?.className === 'tour-arrow-prev');
      links.splice(0, links.length);
      if (prevLink) {
        prevLink.position = { yaw: Math.PI, pitch: 0 };
        links.push(prevLink);
      }
    }
    if (item.file === 'quarto3vista.jpg') {
      // Remover seta verde e manter apenas a vermelha apontando para baixo no lugar da verde
      const nextLink = links.find((link) => link.arrowStyle?.className === 'tour-arrow-next');
      const prevLink = links.find((link) => link.arrowStyle?.className === 'tour-arrow-prev');
      links.splice(0, links.length);
      const target = prevLink ?? nextLink;
      if (target) {
        target.arrowStyle = { className: 'tour-arrow-prev' };
        target.position = nextLink?.position ?? target.position ?? { yaw: Math.PI, pitch: 0 };
        links.push(target);
      }
    }
    if (item.file === 'banheiroquarto3.jpg') {
      // Apenas a seta vermelha voltando para quarto3, virada para baixo
      const quarto3Id = fileToNodeId.get('quarto3.jpg') ?? links[0]?.nodeId;
      links.length = 0;
      links.push({
        nodeId: quarto3Id ?? 'quarto3',
        position: { yaw: Math.PI, pitch: 0 }, // garantir orientação para baixo
        arrowStyle: { className: 'tour-arrow-prev' },
      });
    }
    if (item.file === 'quarto2.jpg') {
      const corredor3Id = fileToNodeId.get('corredor3.jpg');
      const nextLink = links.find((link) => link.arrowStyle?.className === 'tour-arrow-next');
      const prevLink = links.find((link) => link.arrowStyle?.className === 'tour-arrow-prev');
      if (nextLink && prevLink) {
        const prevPos = prevLink.position ?? { yaw: 0, pitch: 0 };
        const nextPos = nextLink.position ?? { yaw: Math.PI, pitch: 0 };
        nextLink.position = prevPos; // verde assume a posição antiga da vermelha
        prevLink.position = nextPos; // vermelha assume a posição antiga da verde
        if (corredor3Id) {
          prevLink.nodeId = corredor3Id; // vermelha volta para corredor3
        }
      }
    }
    if (item.file === 'quarto1.jpg') {
      const nextLink = links.find((link) => link.arrowStyle?.className === 'tour-arrow-next');
      const prevLink = links.find((link) => link.arrowStyle?.className === 'tour-arrow-prev');
      if (nextLink && prevLink) {
        // troca apenas a posição das setas, mantendo destinos/cores
        const prevPos = prevLink.position ?? { yaw: Math.PI, pitch: 0 };
        const nextPos = nextLink.position ?? { yaw: 0, pitch: 0 };
        nextLink.position = prevPos;
        prevLink.position = nextPos;
      }
    }
    if (item.file === 'corredor3.jpg') {
      const corredor2Id = fileToNodeId.get('corredor2.jpg');
      const bathroomId = fileToNodeId.get('banheiromeio.jpg');
      const quarto1Id = fileToNodeId.get('quarto1.jpg');
      const quarto2Id = fileToNodeId.get('quarto2.jpg');

      // Reconstrói explicitamente as 4 setas do corredor3
      links.length = 0;
      if (corredor2Id) {
        links.push({
          nodeId: corredor2Id,
          position: { yaw: Math.PI, pitch: 0 }, // vermelha para baixo (volta ao corredor2)
          arrowStyle: { className: 'tour-arrow-prev' },
        });
      }
      if (bathroomId) {
        links.push({
          nodeId: bathroomId,
          position: { yaw: 0, pitch: 0 }, // verde para cima (banheiro social)
          arrowStyle: { className: 'tour-arrow-next' },
        });
      }
      if (quarto1Id) {
        links.push({
          nodeId: quarto1Id,
          position: { yaw: -Math.PI / 2, pitch: 0 }, // verde para esquerda (quarto1)
          arrowStyle: { className: 'tour-arrow-next' },
        });
      }
      if (quarto2Id) {
        links.push({
          nodeId: quarto2Id,
          position: { yaw: Math.PI / 2, pitch: 0 }, // verde para direita (quarto2)
          arrowStyle: { className: 'tour-arrow-next' },
        });
      }
    }

    if (item.file === 'banheiromeio.jpg') {
      const corredor3Id = fileToNodeId.get('corredor3.jpg') ?? links[0]?.nodeId;
      links.length = 0;
      links.push({
        nodeId: corredor3Id ?? 'corredor3',
        position: { yaw: Math.PI, pitch: 0 }, // vermelha para baixo voltando ao corredor3
        arrowStyle: { className: 'tour-arrow-prev' },
      });
    }
  }
  return {
    id: item.id,
    name: item.name,
    caption: item.name,
    panorama: item.panorama,
    thumbnail: item.thumbnail,
    markers: markersByPanorama[item.file] || [],
    data: { file: item.file },
    links,
  };
});

const virtualTourNodeMap = new Map(virtualTourNodes.map((node) => [node.id, node]));
const initialNodeId = virtualTourNodes[0]?.id;

// === 2. Viewer ===
const initialPanorama = initialNodeId
  ? virtualTourNodeMap.get(initialNodeId)?.panorama ?? withBasePath('salavista1.jpg')
  : withBasePath('salavista1.jpg');

const viewer = new Viewer({
  container: 'viewer',
  panorama: initialPanorama,
  caption: 'Parc national du Mercantour <b>&copy; Damien Sorel</b>',
  loadingImg: baseUrl + 'loader.gif',
  touchmoveTwoFingers: false,
  defaultZoomLvl: 0,
  mousewheelCtrlKey: false,
  // show only the controls we want in the main navbar (remove download)
  navbar: ['zoom', 'gallery', 'fullscreen'],

  plugins: [
    MarkersPlugin,
    GalleryPlugin.withConfig({
      visibleOnLoad: true,
      hideOnClick: false,
      // Use larger thumbnails on desktop but fall back to the default size on mobile
      thumbnailSize: getGalleryThumbnailSize(),
      items: galleryItems,
      navigationArrows: true
    } as any),
    VirtualTourPlugin.withConfig({
      transitionOptions: () => ({
        effect: 'fade',
        rotation: false,
        rotateTo: null,
        zoomTo: 0,
      }),
    }),
  ],
});

// getPlugin returns an abstract type; cast to any so we can call plugin-specific methods
const markersPlugin = viewer.getPlugin(MarkersPlugin) as any;
const galleryPlugin = viewer.getPlugin(GalleryPlugin) as any;
const virtualTourPlugin = viewer.getPlugin(VirtualTourPlugin) as any;
const applyMarkersForFallback = (file?: string) => {
  if (!file || !markersPlugin || virtualTourPlugin) return;
  const markers = markersByPanorama[file] || [];
  markersPlugin.setMarkers(markers);
};
const ensureMobileZoom = () => {
  if (isMobileViewport()) {
    viewer.zoom(0);
  }
};
const syncGalleryThumbnails = () => {
  galleryPlugin.setOptions({
    thumbnailSize: getGalleryThumbnailSize(),
  });
};
galleryMediaQuery?.addEventListener('change', () => {
  syncGalleryThumbnails();
  ensureMobileZoom();
});
syncGalleryThumbnails();
ensureMobileZoom();
virtualTourPlugin?.addEventListener('node-changed', () => {
  ensureMobileZoom();
});

// Track whether the user clicked the gallery button so we can distinguish
// intentional toggles from automatic plugin behavior (select events).
let lastClickedGalleryButton = false;

// no saved views/zoom logic — keep viewer's native behavior for zoom and resizing

// === 3. Função para trocar panorama e aplicar markers ===
function resolveNode(target: string | undefined) {
  if (!target) return undefined;
  if (virtualTourNodeMap.has(target)) return virtualTourNodeMap.get(target);
  return virtualTourNodes.find(
    (node) => node.panorama === target || node.data?.file === target,
  );
}

function changeScene(target: string) {
  if (!target) return;
  const resolvedNode = resolveNode(target);
  if (virtualTourPlugin && resolvedNode) {
    virtualTourPlugin.setCurrentNode(resolvedNode.id).catch((err: any) => {
      console.error('VirtualTour setCurrentNode error:', err);
    });
    return;
  }

  const panoramaName = resolvedNode?.data?.file ?? target;
  let panoFile: string;
  let panoPath: string;

  if (panoramaName.startsWith('http')) {
    panoFile = panoramaName;
    panoPath = panoramaName;
  } else if (panoramaName.startsWith('/')) {
    panoFile = panoramaName.replace(/^\//, '');
    panoPath = withBasePath(panoFile);
  } else {
    panoFile = panoramaName;
    panoPath = localFiles.has(panoFile) ? withBasePath(panoFile) : baseUrl + panoFile;
  }

  const handler = () => {
    applyMarkersForFallback(panoFile);
    ensureMobileZoom();
    viewer.removeEventListener('panorama-loaded', handler);
  };

  viewer.addEventListener('panorama-loaded', handler);

  viewer
    .setPanorama(
      panoPath,
      {
        zoom: 0,
        transition: { duration: 1000, loader: true },
      } as any,
    )
    .catch((err: any) => {
      viewer.removeEventListener('panorama-loaded', handler);
      console.error('setPanorama error:', err);
    });
}

// === 5. Clique na galeria ===
galleryPlugin.addEventListener('select', ({ item }: any) => {
  const nextTarget = item?.id ?? item?.panorama;
  if (nextTarget) {
    changeScene(nextTarget);
  }

  // Re-apply the 'open' state after selection unless the user explicitly
  // clicked the gallery button (in which case they intended to toggle it).
  setTimeout(() => {
    if (lastClickedGalleryButton) return;
    const g = document.querySelector('.psv-gallery') as HTMLElement | null;
    if (g) {
      g.classList.add('psv-gallery--open');
      g.setAttribute('aria-hidden', 'false');
      if (g.style.display === 'none') g.style.display = '';
    }
  }, 0);
});

// When the user explicitly clicks the gallery button, respect that intent:
// if we had forced the gallery to stay open via data-keep-open, remove that
// attribute so the plugin can close normally.
// Toggle gallery open/close when the user clicks the gallery button. We
// record that the button was clicked so select handlers won't undo the
// user's intent.
document.addEventListener('click', (ev) => {
  const target = ev.target as HTMLElement | null;
  if (!target) return;
  const galleryBtn = target.closest('.psv-gallery-button') as HTMLElement | null;
  if (!galleryBtn) return;

  const g = document.querySelector('.psv-gallery') as HTMLElement | null;
  if (!g) return;

  lastClickedGalleryButton = true;
  // allow other handlers to run, then reset the flag
  setTimeout(() => (lastClickedGalleryButton = false), 200);

  if (g.classList.contains('psv-gallery--open')) {
    g.classList.remove('psv-gallery--open');
    g.setAttribute('aria-hidden', 'true');
    g.style.display = 'none';
  } else {
    g.classList.add('psv-gallery--open');
    g.setAttribute('aria-hidden', 'false');
    g.style.display = '';
  }
});

// === 6. Carrega os markers iniciais ===
viewer.addEventListener('ready', () => {
  if (virtualTourPlugin) {
    try {
      virtualTourPlugin.setNodes(virtualTourNodes, initialNodeId);
    } catch (err) {
      console.error('VirtualTour setNodes error:', err);
    }
  } else if (initialNodeId) {
    applyMarkersForFallback(virtualTourNodeMap.get(initialNodeId)?.data?.file);
  }
  ensureMobileZoom();
});
