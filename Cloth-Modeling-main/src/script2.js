import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { CurvePath, log, WireframeGeometry } from 'three'
import {
    minecraft, check10, check22, alphaTexture,
    heightTexture, normalTexture, ambientOcclusionTexture,
    metalnessTexture, roughnessTexture, colorTexture,
    skinTexture
} from './textures.js'

import { pants } from './pant_preprocessing.js'
/**
 * Base
 */
// Debug
const gui = new dat.GUI()
var index = {
    value: 0,
    name: ''
}

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Models
 */
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/')

const objLoader = new OBJLoader()
// objLoader.setDRACOLoader(dracoLoader)

//Initilzation 
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)
var mesh;
let mixer = null
var clothes = []
// Model loading
gltfLoader.load(
    '/models/t_shirt/scene.gltf',
    (gltf) => {
        var model = gltf.scene;
        model.scale.setZ(1.3)
        model.traverse((o) => {
            if (o.isMesh) {
                // note: for a multi-material mesh, `o.material` may be an array,
                // in which case you'd need to set `.map` on each value.
                o.material.map = alphaTexture;
            }
        });
        clothes.push(model)

    }
)
// Model loading
gltfLoader.load(
    '/models/t_shirt/scene.gltf',
    (gltf) => {
        var model = gltf.scene;
        model.scale.setZ(1.3)
        model.traverse((o) => {
            if (o.isMesh) {
                // note: for a multi-material mesh, `o.material` may be an array,
                // in which case you'd need to set `.map` on each value.
                o.material.map = colorTexture;
            }
        });
        clothes.push(model)

    }
)
// Model loading
gltfLoader.load(
    '/models/t_shirt/scene.gltf',
    (gltf) => {
        var model = gltf.scene;
        model.scale.setZ(1.3)
        model.traverse((o) => {
            if (o.isMesh) {
                // note: for a multi-material mesh, `o.material` may be an array,
                // in which case you'd need to set `.map` on each value.
                o.material.map = heightTexture;
            }
        });
        clothes.push(model)

    }
)
// Model loading

gltfLoader.load(
    '/models/t_shirt/scene.gltf',
    (gltf) => {
        var model = gltf.scene;
        model.scale.setZ(1.3)
        model.traverse((o) => {
            if (o.isMesh) {
                // note: for a multi-material mesh, `o.material` may be an array,
                // in which case you'd need to set `.map` on each value.
                o.material.map = normalTexture;
            }
        });
        clothes.push(model)

    }
)
// Model loading

gltfLoader.load(
    '/models/t_shirt/scene.gltf',
    (gltf) => {
        var model = gltf.scene;
        model.scale.setZ(1.3)
        model.traverse((o) => {
            if (o.isMesh) {
                // note: for a multi-material mesh, `o.material` may be an array,
                // in which case you'd need to set `.map` on each value.
                o.material.map = ambientOcclusionTexture;
            }
        });
        clothes.push(model)

    }
)
// Model loading

gltfLoader.load(
    '/models/t_shirt/scene.gltf',
    (gltf) => {
        var model = gltf.scene;
        model.scale.setZ(1.3)
        model.traverse((o) => {
            if (o.isMesh) {
                // note: for a multi-material mesh, `o.material` may be an array,
                // in which case you'd need to set `.map` on each value.
                o.material.map = metalnessTexture;
            }
        });
        clothes.push(model)

    }
)
// Model loading

gltfLoader.load(
    '/models/t_shirt/scene.gltf',
    (gltf) => {
        var model = gltf.scene;
        model.scale.setZ(1.3)
        model.traverse((o) => {
            if (o.isMesh) {
                // note: for a multi-material mesh, `o.material` may be an array,
                // in which case you'd need to set `.map` on each value.
                o.material.map = roughnessTexture;
            }
        });
        clothes.push(model)

    }
)

// Model loading

gltfLoader.load(
    '/models/t_shirt/scene.gltf',
    (gltf) => {
        var model = gltf.scene;
        model.scale.setZ(1.3)
        model.traverse((o) => {
            if (o.isMesh) {
                // note: for a multi-material mesh, `o.material` may be an array,
                // in which case you'd need to set `.map` on each value.
                o.material.map = check22;
            }
        });
        clothes.push(model)

    }
)
// Model loading
function computeShirtPosition(humanBoundingBox, shirtBoundingBox) {
    // compute the center point of the human bounding box
    const humanCenter = new THREE.Vector3();
    humanBoundingBox.getCenter(humanCenter);

    // compute the size of the human bounding box
    const humanSize = new THREE.Vector3();
    humanBoundingBox.getSize(humanSize);

    // compute the size of the shirt bounding box
    const shirtSize = new THREE.Vector3();
    shirtBoundingBox.getSize(shirtSize);

    // compute the position values for the shirt
    const shirtPosition = new THREE.Vector3();
    shirtPosition.x = humanCenter.x - (shirtSize.x - humanSize.x) / 2;
    shirtPosition.y = humanCenter.y - (shirtSize.y - humanSize.y) / 2;
    shirtPosition.z = humanCenter.z - (shirtSize.z - humanSize.z) / 2;

    return shirtPosition;
}
/**
 * Computes the rotation values to fit the shirt on the human.
 * @param {THREE.Box3} humanBoundingBox - The bounding box of the human model.
 * @param {THREE.Box3} shirtBoundingBox - The bounding box of the shirt model.
 * @return {THREE.Euler} The rotation values for the shirt model.
 */
function computeShirtRotation(humanBoundingBox, shirtBoundingBox) {
    // compute the center point of the human bounding box
    const humanCenter = new THREE.Vector3();
    humanBoundingBox.getCenter(humanCenter);

    // compute the size of the human bounding box
    const humanSize = new THREE.Vector3();
    humanBoundingBox.getSize(humanSize);

    // compute the size of the shirt bounding box
    const shirtSize = new THREE.Vector3();
    shirtBoundingBox.getSize(shirtSize);

    // compute the rotation values for the shirt
    const shirtRotation = new THREE.Euler();
    shirtRotation.x = 0;
    shirtRotation.y = 0;
    shirtRotation.z = 0;

    return shirtRotation;
}

gltfLoader.load(
    '/models/t_shirt/scene.gltf',
    (gltf) => {
        var model = gltf.scene;
        model.scale.setZ(1.3)
        model.traverse((o) => {
            if (o.isMesh)
                o.material.map = check10;
        });
        clothes.push(model)


    }
)

// Model loading

gltfLoader.load(
    '/models/t_shirt/scene.gltf',
    (gltf) => {
        var model = gltf.scene;
        var shirt = gltf.scene.children[0];
        console.log("shirt, ", shirt);


        model.scale.setZ(1.3)
        model.traverse((o) => {
            if (o.isMesh) {
                // note: for a multi-material mesh, `o.material` may be an array,
                // in which case you'd need to set `.map` on each value.
                o.material.map = minecraft;
                // --------------------------------

                // compute the bounding box of the shirt model
                // shirt.geometry.computeBoundingBox();
                // --------------------------------

            }
        });
        clothes.push(model)
        // --------------------------------

        // const shirtBoundingBox = shirt.geometry.boundingBox;
        // --------------------------------

        // console.log(index.value)
        // console.log(model.scale.x);

        var FizzyText = function () {
            this.slider = 0;
            //this.slider2 = 0;
        };


        var text = new FizzyText()
        var slider = gui.add(text, 'slider', 0, 9, 1).listen();

        var positionX, positionY, positionZ;
        var scaleZ, scaleY, scaleX;
        var pantPositionX, pantPositionY, pantPositionZ
        var pantScaleZ, pantScaleY, pantScaleX

        // if (index.name == 'umer') {
        //     clothes[0].position.setX(0.02095)
        //     clothes[0].position.setY(0)
        //     clothes[0].position.setZ(-0.0572)

        //     clothes[0].scale.setX(1.0266)
        //     clothes[0].scale.setY(1)
        //     clothes[0].scale.setZ(1.5035)
        // }
        // else if (index.name == 'vishal') {
        //     clothes[0].position.setX(0)
        //     clothes[0].position.setY(0.0295)
        //     clothes[0].position.setZ(-0.1006)

        //     clothes[0].scale.setX(1.1566)
        //     clothes[0].scale.setY(1)
        //     clothes[0].scale.setZ(1.1566)
        // }
        // else if (index.name == 'hassan') {
        //     clothes[0].position.setX(0.0295)
        //     clothes[0].position.setY(0)
        //     clothes[0].position.setZ(-0.082)

        //     clothes[0].scale.setX(1.3734)
        //     clothes[0].scale.setY(1)
        //     clothes[0].scale.setZ(1.3)
        // }

        // --------------------------------
        // // compute the position and rotation values to fit the shirt on the human
        // const shirtPosition = computeShirtPosition(humanBoundingBox, shirtBoundingBox);
        // const shirtRotation = computeShirtRotation(humanBoundingBox, shirtBoundingBox);

        // // set the position and rotation of the shirt model
        // shirt.position.copy(shirtPosition);
        // shirt.rotation.copy(shirtRotation);
        // --------------------------------


        scene.add(clothes[0])
        scene.add(pants[4])

        pantPositionX = gui.add(pants[0].position, "x", -2, 2, 0.00001).name("pant x position")
        pantPositionY = gui.add(pants[0].position, "y", -2, 2, 0.00001).name("pant y position")
        pantPositionZ = gui.add(pants[0].position, "z", -2, 2, 0.00001).name("pant z position")

        pantScaleX = gui.add(pants[0].scale, "x", -1, 1, 0.0000001).name("pant x Cloth set")
        pantScaleY = gui.add(pants[0].scale, "y", -1, 1, 0.0000001).name("pant y Cloth set")
        pantScaleZ = gui.add(pants[0].scale, "z", -1, 1, 0.0000001).name("pant z Cloth set")



        positionX = gui.add(clothes[0].position, "x", -2, 2, 0.0001).name("shirt x position")
        positionY = gui.add(clothes[0].position, "y", -2, 2, 0.0001).name("shirt y position")
        positionZ = gui.add(clothes[0].position, "z", -2, 2, 0.0001).name("shirt z position")

        scaleZ = gui.add(clothes[0].scale, "z", -2, 2, 0.0001).name("shirt z Cloth set")
        scaleY = gui.add(clothes[0].scale, "y", -2, 2, 0.0001).name("shirt y Cloth set")
        scaleX = gui.add(clothes[0].scale, "x", -2, 2, 0.0001).name("shirt x Cloth set")


        //var slider = gui.add(index,"value",0,1,1).name("cloth")
        slider.onChange(function (value) {
            scene.remove(clothes[index.value])

            index.value = value // this doesn't work

            positionX.remove()
            positionY.remove()
            positionZ.remove()
            scaleZ.remove()
            scaleY.remove()
            scaleX.remove()


            // gui.add(model.position, "x", -1, 1, 0.0001).name("x position")
            // gui.add(model.position, "y", -1, 1, 0.0001).name("y position")
            // gui.add(model.position, "z", -1, 1, 0.0001).name("z position")
            // gui.add(model.scale, "z", -2, 2, 0.0001).name("z Cloth set")

            // gui.add(model.scale, "x", -1, 1, 0.0001).name("x Cloth set")
            // gui.add(model.scale, "y", -1, 1, 0.0001).name("y Cloth set")

            scene.add(clothes[index.value])

            positionX = gui.add(clothes[index.value].position, "x", -2, 2, 0.0001).name("shirt x position")
            positionY = gui.add(clothes[index.value].position, "y", -2, 2, 0.0001).name("shirt y position")
            positionZ = gui.add(clothes[index.value].position, "z", -2, 2, 0.0001).name("shirt z position")

            scaleZ = gui.add(clothes[index.value].scale, "z", -2, 2, 0.0001).name("shirt z Cloth set")
            scaleY = gui.add(clothes[index.value].scale, "y", -2, 2, 0.0001).name("shirt y Cloth set")
            scaleX = gui.add(clothes[index.value].scale, "x", -2, 2, 0.0001).name("shirt x Cloth set")
            // if (index.name == 'umer') {

            //     clothes[index.value].position.setX(0.02095)
            //     clothes[index.value].position.setY(0)
            //     clothes[index.value].position.setZ(-0.0572)

            //     clothes[index.value].scale.setX(1.0266)
            //     clothes[index.value].scale.setY(1)
            //     clothes[index.value].scale.setZ(1.5035)
            // }
            // else if (index.name == 'vishal') {
            //     clothes[index.value].position.setX(0)
            //     clothes[index.value].position.setY(0.0295)
            //     clothes[index.value].position.setZ(-0.1006)

            //     clothes[index.value].scale.setX(1.1566)
            //     clothes[index.value].scale.setY(1)
            //     clothes[index.value].scale.setZ(1.1566)
            // }
            // else if (index.name == 'hassan') {
            //     clothes[index.value].position.setX(0.0295)
            //     clothes[index.value].position.setY(0)
            //     clothes[index.value].position.setZ(-0.082)

            //     clothes[index.value].scale.setX(1.3734)
            //     clothes[index.value].scale.setY(1)
            //     clothes[index.value].scale.setZ(1.3)
            // }


        });



    }
)
console.log(index.value)




// gltfLoader.load(
//     '/models/male_body/scene.gltf',
//     (gltf) => {
//         var model = gltf.scene
//         model.scale.set(0.009, 0.0095, 0.005);
//         model.position.setX(0)
//         model.position.setZ(-0.07)
//         model.position.setY(0.05)
//         gui.add(model.position, "x", -0.1, 0.1, 0.0001).name("x position")
//         gui.add(model.position, "y", -0.1, 0.1, 0.0001).name("y position")
//         gui.add(model.position, "z", -0.1, 0.1, 0.0001).name("z position")

//         gui.add(model.scale, "x", -0.1, 0.1, 0.0001).name("x human width")
//         gui.add(model.scale, "y", -0.1, 0.1, 0.0001).name("y human Tallness")
//         gui.add(model.scale, "z", -0.1, 0.1, 0.0001).name("z human Fat")
//         var parameters = 0
//         gui.add(parameters, "xy", -0.1, 0.1, 0.0001).name("z human Fat")

//         scene.add(model);
//     }
// )


// // instantiate a loader
// const loader = new OBJLoader();
var example = new THREE.Object3D();
// load a resource
// resource URL
objLoader.setPath('/models/male_body/')
// objLoader.setPath("./../../../Downloads")
var pathObj = 'hassan_result__img_256.obj';
objLoader.load(
    // 'scene1.obj', //Vishal's Model
    // 'hassan_model.obj', //Hassan's Model
    // called when resource is loaded
    pathObj,

    function (obj) {
        obj.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material.color.set('gray')
            }
        })
        // var model = obj.scene;
        console.log("TO JSON", obj.toJSON(obj.scene));
        if (pathObj.includes("umer")) {
            console.log("Umer khan")
            index.name = 'umer'
            obj.scale.setZ(0.0463)
        }
        else if (pathObj.includes("vishal")) {
            console.log("Vishal Shb")
            index.name = 'vishal'
            obj.scale.setZ(0.766)

        }
        else if (pathObj.includes("hassan")) {
            console.log("Hassan Shb")
            index.name = 'hassan'
            obj.scale.setZ(0.68)

        }
        // obj.position.x -= 50;
        // example.scale.set(0.009, 0.0095, 0.005);
        // // model.scale.set(0.009, 0.0095, 0.005)
        // // model.scale.set(0.009, 0.0095, 0.005);
        obj.position.x = 0
        obj.position.y = 1
        obj.position.z = -0.1587
        obj.scale.y = 0.897
        gui.add(obj.position, "x", -2, 2, 0.0001).name("x-axis position")
        gui.add(obj.position, "y", -2, 2, 0.0001).name("y-axis position")
        gui.add(obj.position, "z", -2, 2, 0.0001).name("z-axis position")

        gui.add(obj.scale, "x", -2, 2, 0.001).name("x human width")
        gui.add(obj.scale, "y", -2, 2, 0.001).name("y human Tallness")
        gui.add(obj.scale, "z", -2, 2, 0.001).name("z human Fat")
        scene.add(obj)

        // scene.add(object);

    },
    // called when loading is in progresses
    function (xhr) {

        console.log((xhr.loaded / xhr.total * 100) + '% loaded');

    },
    // called when loading has errors
    function (error) {

        console.log('An error happened', error);

    }
);
/**
 * Floo
 */
const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10, 10),
    new THREE.MeshStandardMaterial({
        color: '#444444',
        metalness: 0,
        roughness: 0.5
    })
)
floor.receiveShadow = true
floor.rotation.x = - Math.PI * 0.5
scene.add(floor)
// scene.add()

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.camera.left = - 7
directionalLight.shadow.camera.top = 7
directionalLight.shadow.camera.right = 7
directionalLight.shadow.camera.bottom = - 7
directionalLight.position.set(- 5, 5, 0)
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(2, 2, 2)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.target.set(0, 0.75, 0)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0

const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // Model animation
    if (mixer) {
        mixer.update(deltaTime)
    }

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()