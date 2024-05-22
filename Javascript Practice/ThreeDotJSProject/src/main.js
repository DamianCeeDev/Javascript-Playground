import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Renderer

const canvas = document.querySelector('#three-canvas');
const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true
});


renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
renderer.shadowMap.enabled = true;

// Scene

const scene = new THREE.Scene();

// Camera

const camera = new THREE.PerspectiveCamera(
    60, // fov
    window.innerWidth / window.innerHeight, // aspect
    0.1, // near
    1000 // far    
);

camera.position.set(5, 5, 5);

scene.add(camera);

//Light

const ambientLight = new THREE.AmbientLight('white', 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(`white`, 3);
directionalLight.position.set(-3, 5, 1);
directionalLight.castShadow = true;

scene.add(directionalLight);

// Mesh

const boxMesh = new THREE.Mesh(
    // Geometry

    new THREE.BoxGeometry(2, 2, 2),

    // Material

    new THREE.MeshLambertMaterial({ color: 'red' }),
);

boxMesh.position.y = 1;
boxMesh.rotation.y = 4;
boxMesh.castShadow = true;
scene.add(boxMesh);

const groundFloor = new THREE.Mesh(
    // Geometry
    new THREE.PlaneGeometry(10, 10),

    // Material
    new THREE.MeshLambertMaterial({
        color: `#F5EDED`,
        side: THREE.DoubleSide
    })
);

groundFloor.rotation.x = THREE.MathUtils.degToRad(-90);
groundFloor.receiveShadow = true;

scene.add(groundFloor);

camera.lookAt(boxMesh.position);

// Controls

const controls = new OrbitControls(camera, renderer.domElement);


// Draw

let boxMeshY = 1;
function draw() {
    renderer.render(scene, camera);
    controls.update();

    renderer.setAnimationLoop(draw);
}

draw();
