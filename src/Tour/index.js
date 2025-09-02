import { Viewer } from '@photo-sphere-viewer/core';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';

const scenes = [
    {
        panorama: 'public/casas/IA/1.jpg',
        marker: {
            id: 'element',
            image: '/images/flecha.png',
            size: { width: 100, height: 100 },
            anchor: 'bottom center',
            position: { yaw: grdToRad(0), pitch: grdToRad(-20) },
            tooltip: 'Punto de interés 1',
            className: 'info-marker'
        },
        next: 1,
        prev: null
    },
    {
        panorama: '/casas/IA/2.jpg',
        marker: {
            id: 'element',
            image: '/images/flecha.png',
            size: { width: 100, height: 100 },
            anchor: 'bottom center',
            position: { yaw: grdToRad(0), pitch: grdToRad(-20) },
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
        sphereCorrection: { pan: grdToRad(90), tilt: grdToRad(0), roll: grdToRad(0) },
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
function grdToRad(degrees) {
    return (degrees * Math.PI) / 180;
}

// import { Viewer } from '@photo-sphere-viewer/core';
// import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';

// export default function startedFile(){
//     const viewer = new Viewer({
//         container: 'viewer',
//         panorama: 'public/casas/IA/3.jpeg',
//         caption: 'Parc national du Mercantour <b>&copy; Damien Sorel</b>',
//         moveSpeed: 1.5,
//         zoomSpeed: 1,
//         sphereCorrection: { 
//             pan: (90 * Math.PI) / 180, 
//             tilt: 0, 
//             roll: 0 
//         },
//         plugins: [
//             MarkersPlugin.withConfig(),
//         ],
//     });


//     const markersPlugin = viewer.getPlugin(MarkersPlugin);

//         viewer.addEventListener('ready', () => {
//         markersPlugin.setMarkers([{
//             id: 'element',
//             image: './right-arrow.png',
//             size: { width: 100, height: 100 }, // Solo con size también funciona
//             anchor: 'bottom center',
//             position: { 
//                 yaw: (0 * Math.PI) / 180, 
//                 pitch: (-20 * Math.PI) / 180 
//             },
//             tooltip: 'Punto de interés 1',
//             className: 'info-marker'
//         }]);


//         })
// }