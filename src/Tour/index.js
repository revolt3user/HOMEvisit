import { Viewer } from '@photo-sphere-viewer/core';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';

const scenes = {
    Scene0: {
        panorama: 'public/casas/original/0.jpg',
        position: { yaw: 0, pitch: 0, roll: 0 },
        markers: [
            markerTemplate({ name: 'front', position: { yaw: 0, pitch: -20 } })
        ],
        markersTo: [
            {front:"Scene2"}
        ],
        next: 1,
        prev: null
    },
    Scene1: {
        panorama: 'public/casas/IA/1.jpg',
        position: { yaw: 0, pitch: 0, roll: 0 },
        markers: [
            markerTemplate({ name: 'front', position: { yaw: 90, pitch: -20 } })
        ],
        markersTo: [
            {front:"Scene2"}
        ],
        next: 1,
        prev: null
    },
    Scene2:{
        panorama: '/casas/IA/2.jpg',
        position: { yaw: 0, pitch: 0, roll: 0 },
        markers: [
            markerTemplate({ name: 'front', position: { yaw: 0, pitch: -20 } }),
            markerTemplate({ name: 'back', position: { yaw: 180, pitch: -20 } })
        ],
        markersTo: [
            {front:"Scene3"}
        ],
        next: null,
        prev: 0
    },
    Scene3:{
        panorama: '/casas/original/3.jpg',
        position: { yaw: 0, pitch: 0, roll: 0 },
        markers: [
            markerTemplate({ name: 'front', position: { yaw: 0, pitch: -20 } }),
            markerTemplate({ name: 'back', position: { yaw: 180, pitch: -20 } })
        ],
        markersTo:[
            {front:"Scene4"}
        ],
        next: null,
        prev: 1
    },
    Scene4:{
        panorama: '/casas/original/4.jpg',
        position: { yaw: 0, pitch: 0, roll: 0 },
        markers: [
            markerTemplate({ name: 'front', position: { yaw: 0, pitch: -20 } }),
            markerTemplate({ name: 'back', position: { yaw: 180, pitch: -20 } })
        ],
        markersTo:[
            {front:"Scene5"}
        ],
        next: null,
        prev: 2
    },
    Scene5:{
        panorama: '/casas/original/5.jpg',
        position: { yaw: 0, pitch: 0, roll: 0 },
        markers: [
            markerTemplate({ name: 'front', position: { yaw: 0, pitch: -20 } }),
            markerTemplate({ name: 'back', position: { yaw: 180, pitch: -20 } })
        ],
        markersTo:[
            {front:"Scene6"}
        ],
        next: null,
        prev: 3
    }

};

export default function startedFile() {
    let currentScene = 'Scene0';

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

    viewer.addEventListener('ready', () => {
        markersPlugin.clearMarkers();
        markersPlugin.setMarkers(scenes[currentScene].markers);
    });
    
    markersPlugin.addEventListener('select-marker', ({ marker }) => {
        markersPlugin.clearMarkers();
        const arrayMarkersTo = scenes[currentScene].markersTo;
        // Find the object in markersTo array that has the marker id as a key
        const markerToObj = arrayMarkersTo.find(obj => obj.hasOwnProperty(marker.id));
        if (markerToObj) {
            const targetSceneName = markerToObj[marker.id];
            const targetScene = scenes[targetSceneName];
            if (targetScene) {
                currentScene = targetSceneName;
                viewer.setPanorama(targetScene.panorama);
                viewer.sphereCorrection = { yaw: grdToRad(targetScene.position.yaw), tilt: grdToRad(targetScene.position.pitch), roll: grdToRad(targetScene.position.roll) };
                markersPlugin.setMarkers(targetScene.markers);
            }
        }
    });
}

function grdToRad(degrees) {
    return (degrees * Math.PI) / 180;
}

function markerTemplate({name, position = { yaw: grdToRad(0), pitch: grdToRad(0)}}) {
    return {
        id: name,
        image: '/images/flecha.png',
        size: { width: 100, height: 100 },
        anchor: 'bottom center',
        position: {
            yaw: grdToRad(position.yaw),
            pitch: grdToRad(position.pitch)
        },
        tooltip: `Punto de interés ${name.split('Scene')[1]}`,
        className: 'info-marker'
    };
}