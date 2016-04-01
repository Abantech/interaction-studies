var indexSphere = null;
var thumbSphere = null;

function createBoxAtFingerTip(hand, fingerIndex, meshColor) {
    var pos = (new THREE.Vector3()).fromArray(hand.fingers[fingerIndex].tipPosition);
    var geometry = new THREE.CubeGeometry(2, 2, 2);
    //new THREE.SphereGeometry(3, 8, 8);
    var material = Physijs.createMaterial(
        new THREE.MeshLambertMaterial({ color: meshColor, transparent: false }),
        1, // high friction
        0.1  // low restitution
    );
    
    var mesh = new Physijs.BoxMesh(geometry, material);
    scene.add(mesh);
    return mesh;
}

var CreateOrMoveBoxAtFingerTip = function(frame) {
    if (frame.hands[0] != null) {
        if (indexSphere == null) {
            indexSphere = createBoxAtFingerTip(frame.hands[0], 1, 0xFFCC00) //Index
            //console.log("index geo created")
        }
        else {
            var indexPosition = frame.hands[0].fingers[1].tipPosition
            indexSphere.position.copy(indexPosition);
            indexSphere.__dirtyPosition = true;
            indexSphere.mass = 1;
        }

        if (thumbSphere == null) {
            thumbSphere = createBoxAtFingerTip(frame.hands[0], 0, 0xF57E20) //Thumb
            //console.log("index geo created")
        }
        else {
            var thumbPosition = frame.hands[0].fingers[0].tipPosition
            thumbSphere.position.set(thumbPosition);
            //console.log("index geo updated position")
        }
    }
}