THREE = require("three")
var VRButton = require("./VRButton")
var {BloomEffect, EffectComposer, EffectPass, RenderPass} = require("postprocessing")

// Loading screen
var loadingScreen = document.createElement("div")
loadingScreen.classList.add("loading-screen")
loadingScreen.innerText = "Loading..."
document.body.appendChild(loadingScreen)

// Set up scene prerequisites

var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera()
camera.position.y = 1.8
scene.add(camera)

var audioListener = new THREE.AudioListener()
camera.add(audioListener)

var clock = new THREE.Clock()
var dt

var renderer = new THREE.WebGL1Renderer({antialias: true})
renderer.xr.enabled = true
document.body.appendChild(renderer.domElement)
document.body.appendChild(VRButton.createButton(renderer))
onResize()
window.addEventListener("resize", onResize.bind(this))

function onResize() {
    var width = window.innerWidth
    var height = window.innerHeight
    renderer.setSize(width, height)
    camera.aspect = width/height
    camera.updateProjectionMatrix()
}

// Set up scene

var planeGeom = new THREE.PlaneGeometry(100,100,1000,1000)
var wireframeMat = new THREE.MeshBasicMaterial({"color": "white", "wireframe": true})
var HoloMaterial = require("./HoloMaterial/HoloMaterial")
var plane = new THREE.Points(planeGeom, HoloMaterial)
plane.rotation.x = Math.PI/2
scene.add(plane)

// Render loop and start render

function renderLoop() {
    dt = clock.getDelta()
    HoloMaterial.uniforms.time.value = clock.elapsedTime
    renderer.render(scene, camera)

    // plane.rotation.x += 0.05*dt
    // plane.rotation.y += 0.05*dt
    // plane.rotation.z += 0.05*dt
}

loadingScreen.style.display = "none"
renderer.setAnimationLoop(renderLoop.bind(this))


