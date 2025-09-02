import { Viewer } from '@photo-sphere-viewer/core';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';

const scenes = [
    {
        panorama: 'public/casas/IA/3.jpg',
        marker: {
            id: 'element',
            image: './right-arrow.png',
            size: { width: 100, height: 100 },
            anchor: 'bottom center',
            position: { yaw: 0 * Math.PI / 2, pitch: -20 * Math.PI / 180 },
            tooltip: 'Punto de interés 1',
            className: 'info-marker'
        },
        next: 1,
        prev: null
    },
    {
        panorama: 'public/casas/IA/4.jpg',
        marker: {
            id: 'element',
            image: './left-arrow.png',
            size: { width: 100, height: 100 },
            anchor: 'bottom center',
            position: { yaw: 0 * Math.PI / 2, pitch: -20 * Math.PI / 180 },
            tooltip: 'Punto de interés 2',
            className: 'info-marker'
        },
        next: null,
        prev: 0
    }
];

export default function startedFile() {
    let currentScene = 0;

    const viewer = new Viewer({
        container: 'viewer',
        panorama: scenes[currentScene].panorama,
        caption: 'Tour Casa',
        moveSpeed: 1.5,
        zoomSpeed: 1,
        sphereCorrection: { pan: (90 * Math.PI) / 180, tilt: 0, roll: 0 },
        plugins: [MarkersPlugin.withConfig()],
    });

    const markersPlugin = viewer.getPlugin(MarkersPlugin);

    function showScene(index) {
        currentScene = index;
        viewer.setPanorama(scenes[index].panorama).then(() => {
            markersPlugin.setMarkers([scenes[index].marker]);
        });
    }

    viewer.addEventListener('ready', () => {
        markersPlugin.setMarkers([scenes[currentScene].marker]);
    });
    
}