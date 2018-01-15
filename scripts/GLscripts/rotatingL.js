/**
 * Created by miguelvaldez on 1/6/18.
 */

window.addEventListener('keydown',doKeyDown,true);
var cam_zpos = 5.0;
var cam_xpos = -1.5;
var Pi = 3.14159265358;
var ang_rad = 0;

window.addEventListener('keydown', doKeyDown, true);

function transformToRadians(degrees) {

    return degrees * (Math.PI / 180);

}


function doKeyDown(evt){
    switch (evt.keyCode) {
        case 38:  /* Up arrow was pressed */
            var dx = 0.5 * Math.sin(ang_rad);
            var dz = 0.5 * Math.cos(ang_rad);
            cam_zpos -= dz;
            cam_xpos -= dx;
            break;
        case 40:  /* Down arrow was pressed */
            var dx = 0.5 * Math.sin(ang_rad);
            var dz = 0.5 * Math.cos(ang_rad);
            cam_zpos += dz;
            cam_xpos += dx;
            break;
        case 37:  /* Left arrow was pressed */
            ang_rad += (5* Pi / 180);
            break;
        case 39:  /* Right arrow was pressed */
            ang_rad -= (5* Pi / 180);
            break;

        case 87:  /* W was pressed */
            camera.position.y += 0.5;
            break;

        case 83:  /* S was pressed */
            camera.position.y -= 0.5;
            break;

        case 69:  /* E was pressed */

            break;

        case 68:  /* D was pressed */

            break;
    }
}


var container = document.getElementById("rotatingL");
var scene2 = new THREE.Scene();
var camera2 = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.01, 1000);
var renderer2 = new THREE.WebGLRenderer();

var geom = new THREE.Geometry();

renderer2.setSize(window.innerWidth, window.innerHeight);
renderer2.setClearColor(0xFFFFFF, 1);

container.appendChild(renderer2.domElement);

// push the box 3D points
geom.vertices.push(new THREE.Vector3(0, 0, 0));   // index 0
geom.vertices.push(new THREE.Vector3(0, 0, 1));   // index 1
geom.vertices.push(new THREE.Vector3(0, 1, 1));   // index 2
geom.vertices.push(new THREE.Vector3(0, 1, 0));   // index 3
geom.vertices.push(new THREE.Vector3(-1, 0, 0));   // index 4
geom.vertices.push(new THREE.Vector3(-1, 0, 1));   // index 5
geom.vertices.push(new THREE.Vector3(-1, 1, 1));   // index 6
geom.vertices.push(new THREE.Vector3(-1, 1, 0));   // index 7

//right
geom.faces.push( new THREE.Face3(2, 1, 0 ));      // index 0
geom.faces.push( new THREE.Face3(3, 2, 0 ));      // index 1

//left
geom.faces.push( new THREE.Face3(7, 4, 5));      // index 2
geom.faces.push( new THREE.Face3(6, 7, 5));      // index 3

//front
geom.faces.push( new THREE.Face3(3, 0, 4));      // index 4
geom.faces.push( new THREE.Face3(7, 3, 4));      // index 5

//back
geom.faces.push( new THREE.Face3(6, 5, 1));      // index 6
geom.faces.push( new THREE.Face3(2, 6, 1));      // index 7

//top
geom.faces.push( new THREE.Face3(6, 2, 3));      // index 8
geom.faces.push( new THREE.Face3(7, 6, 3));      // index 9

//bottom
geom.faces.push( new THREE.Face3(1, 5, 4));      // index 10
geom.faces.push( new THREE.Face3(0, 1, 4));      // index 11

geom.computeFaceNormals();


var redLambertMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});

var meshMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});

var originCube = new THREE.Mesh(geom, redLambertMaterial);
var backCube = new THREE.Mesh(geom, redLambertMaterial);
var bottomCube = new THREE.Mesh(geom, redLambertMaterial);
var farCube = new THREE.Mesh(geom, redLambertMaterial);

var originCubePrime = new THREE.Mesh(geom, meshMaterial);
var backCubePrime = new THREE.Mesh(geom, meshMaterial);
var bottomCubePrime = new THREE.Mesh(geom, meshMaterial);
var farCubePrime = new THREE.Mesh(geom, meshMaterial);

originCube.position.set(0, 0, 0);
backCube.position.set(0, 0, -1);
bottomCube.position.set(0, -1, 0);
farCube.position.set(1, -1, 0)

originCubePrime.position.set(0, 0, 0);
backCubePrime.position.set(0, 0, -1);
bottomCubePrime.position.set(0, -1, 0);
farCubePrime.position.set(1, -1, 0)

group1 = new THREE.Object3D();
group1.add(originCube);
group1.add(backCube);
group1.add(bottomCube);
group1.add(farCube);

group2 = new THREE.Object3D();

group2.add(originCubePrime);
group2.add(backCubePrime);
group2.add(bottomCubePrime);
group2.add(farCubePrime);

group2.position.x = -3;

scene2.add(group1);
scene2.add(group2);

camera2.position.z = 4;
camera2.position.x = -1.5;

// create some point lights
var pointLight = new THREE.PointLight( 0xFFFFFF );
var pointLight2 = new THREE.PointLight( 0xFFFFFF );

pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;
pointLight2.position.x = 10;
pointLight2.position.y = -50;
pointLight2.position.z = -130;

// add to the scene
scene2.add(pointLight);
scene2.add(pointLight2);

var render = function () {
    requestAnimationFrame(render);
    camera2.position.z = cam_zpos;
    camera2.position.x = cam_xpos;
    camera2.rotation.y = ang_rad;

    group1.rotation.x -= .005;
    group2.rotation.x -= .005;

    renderer2.render(scene2, camera2);
};

render();