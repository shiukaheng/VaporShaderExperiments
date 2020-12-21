var vs = require("./HoloVert.vs")
var fs = require("./HoloFrag.fs")

module.exports = new THREE.ShaderMaterial({
    uniforms: {
        time: {value: 0.0},
        wind_scale: {value: 0.4},
        resolution: {value: new THREE.Vector2()},
        displacement_vector: {value: new THREE.Vector3(0, 0.1, 0)},
        wind_vector: {value: new THREE.Vector3(0.7, 0.7, 0)}
    },
    vertexShader: vs(),
    fragmentShader: fs(),
    transparent: true,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
})