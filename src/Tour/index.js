import { Viewer } from '@photo-sphere-viewer/core';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';

export default function startedFile(){
    const viewer = new Viewer({
        container: 'viewer',
        panorama: 'public/casas/IA/3.jpg',
        caption: 'Parc national du Mercantour <b>&copy; Damien Sorel</b>',
        moveSpeed: 1.5,
        zoomSpeed: 1,
        sphereCorrection: { 
            pan: (90 * Math.PI) / 180, 
            tilt: 0, 
            roll: 0 
        },
        plugins: [
            MarkersPlugin.withConfig(),
        ],
    });


    const markersPlugin = viewer.getPlugin(MarkersPlugin);

        viewer.addEventListener('ready', () => {
        markersPlugin.setMarkers([{
            id: 'element',
            image: './right-arrow.png',
            size: { width: 100, height: 100 }, // Solo con size también funciona
            anchor: 'bottom center',
            position: { 
                yaw: (0 * Math.PI) / 180, 
                pitch: (-20 * Math.PI) / 180 
            },
            tooltip: 'Punto de interés 1',
            className: 'info-marker'
        }]);


        })
}