/**
 * Created by miguelvaldez on 1/6/18.
 */
/**
 * Created by miguelvaldez on 1/6/18.
 */

window.addEventListener('keydown',doKeyDown,true);
var cam_zpos = .18;
var cam_xpos = 0;
var cam_ypos = 0;
var Pi = 3.14159265358;
var ang_rad = 0;

window.addEventListener('keydown', doKeyDown, true);

function transformToRadians(degrees) {

    return degrees * (Math.PI / 180);

}


function doKeyDown(evt){
    switch (evt.keyCode) {

        case 37:  /* < */
            earthMesh.rotation.y -= transformToRadians(.5);

            break;
        case 39:  /* > */
            earthMesh.rotation.y += transformToRadians(.5);

            break;

    }
}


var container = document.getElementById("world-block");
var scene2 = new THREE.Scene();
var camera2 = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.01, 1000);
var renderer2 = new THREE.WebGLRenderer();

renderer2.setSize(window.innerWidth, window.innerHeight);
renderer2.setClearColor(0x000000, 1);

container.appendChild(renderer2.domElement);

var earthMesh = new THREE.Mesh(

    new THREE.SphereGeometry(.05, 60, 60),
    new THREE.MeshPhongMaterial({
        map: THREE.ImageUtils.loadTexture('/scripts/GLscripts/images/2_no_clouds_4k.jpg'),
        bumpMap: THREE.ImageUtils.loadTexture('/scripts/GLscripts/images/elev_bump_4k.jpg'),
        bumpScale:   0.005,
        specularMap: THREE.ImageUtils.loadTexture('/scripts/GLscripts/images/water_4k.png'),
        specular: new THREE.Color('grey')      })
);


var starsMesh = new THREE.Mesh(
    new THREE.SphereGeometry(.19, 64, 64),
    new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture('/scripts/GLscripts/images/galaxy_starfield.jpg'),
        side: THREE.BackSide
    })
);

scene2.add(earthMesh);
scene2.add(starsMesh);

var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, -0.7);
scene2.add(light);

var render = function () {
    requestAnimationFrame(render);
    camera2.position.z = cam_zpos;
    camera2.position.x = cam_xpos;
    camera2.position.y = cam_ypos;
    camera2.rotation.y = ang_rad;

    earthMesh.rotation.y += transformToRadians(.05);
    starsMesh.rotation.y += transformToRadians(.01);

    renderer2.render(scene2, camera2);
};

render();