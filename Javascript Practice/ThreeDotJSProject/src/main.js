import * as THREE from 'three';

// Renderer
const canvas = document.querySelector('#three-canvas');
const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true
});


renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

// Scene

const scene = new THREE.Scene();

// Camera

const camera = new THREE.PerspectiveCamera(
    60, // fov
    window.innerWidth / window.innerHeight, // aspect
    0.1, // near
    1000 // far    
);

camera.position.set(-1, 3, 7);

scene.add(camera);

// Draw

renderer.render(scene, camera);