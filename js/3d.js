//Has the faces of the cube pop out
function expandCube (cube) {
    cube = document.getElementById(cube);

    //Faces of the cube [front, back, left, right, up, down]
    let faces = cube.children;

    //Have each face move out 100px from center
    faces[0].style.transform = "translateX(-50%) translateY(-50%) translateZ(200px) rotateY(0)";
    faces[1].style.transform = "translateX(-50%) translateY(-50%) translateZ(-200px) rotateY(180deg)";
    faces[2].style.transform = "translateX(-50%) translateY(-50%) translateX(-200px) rotateY(-90deg)";
    faces[3].style.transform = "translateX(-50%) translateY(-50%) translateX(200px) rotateY(90deg)";
    faces[4].style.transform = "translateX(-50%) translateY(-50%) translateY(200px) rotateX(90deg)";
    faces[5].style.transform = "translateX(-50%) translateY(-50%) translateY(-200px) rotateX(-90deg)";
}
//Undoes the expansion
function shrinkCube (cube) {
    cube = document.getElementById(cube);

    //Faces of the cube [front, back, left, right, up, down]
    let faces = cube.children;

    //Have each face move back to original spot
    faces[0].style.transform = "translateX(-50%) translateY(-50%) translateZ(100px) rotateY(0)";
    faces[1].style.transform = "translateX(-50%) translateY(-50%) translateZ(-100px) rotateY(180deg)";
    faces[2].style.transform = "translateX(-50%) translateY(-50%) translateX(-100px) rotateY(-90deg)";
    faces[3].style.transform = "translateX(-50%) translateY(-50%) translateX(100px) rotateY(90deg)";
    faces[4].style.transform = "translateX(-50%) translateY(-50%) translateY(100px) rotateX(90deg)";
    faces[5].style.transform = "translateX(-50%) translateY(-50%) translateY(-100px) rotateX(-90deg)";
}

//Has the cube grow in size
function perspectCube (cube) {
    cube = document.getElementById(cube);

    let container = cube.parentElement;

    container.style.perspective = "2000px";
}
//Undoes the growth
function unperspectCube (cube) {
    cube = document.getElementById(cube);

    let container = cube.parentElement;

    container.style.perspective = "600px";
}

//Stops all animations of the cube
function freezeCube (cube) {
    cube = document.getElementById(cube);

    let leftRight = cube.parentElement;
    let upDown = leftRight.parentElement;

    cube.style.animationPlayState = "paused";
    leftRight.style.animationPlayState = "paused";
    upDown.style.animationPlayState = "paused";
}
//Undoes the freeze
function unfreezeCube (cube) {
    cube = document.getElementById(cube);

    let leftRight = cube.parentElement;
    let upDown = leftRight.parentElement;

    cube.style.animationPlayState = "running";
    leftRight.style.animationPlayState = "running";
    upDown.style.animationPlayState = "running";
}

//Swaps every face of the cube
function invertCube (cube) {
    cube = document.getElementById(cube);

    //Faces of the cube [front, back, left, right, up, down]
    let faces = cube.children;

    //Have each move to the other side
    faces[0].style.transform = "translateX(-50%) translateY(-50%) translateZ(-100px) rotateY(0)";
    faces[1].style.transform = "translateX(-50%) translateY(-50%) translateZ(100px) rotateY(180deg)";
    faces[2].style.transform = "translateX(-50%) translateY(-50%) translateX(100px) rotateY(-90deg)";
    faces[3].style.transform = "translateX(-50%) translateY(-50%) translateX(-100px) rotateY(90deg)";
    faces[4].style.transform = "translateX(-50%) translateY(-50%) translateY(-100px) rotateX(90deg)";
    faces[5].style.transform = "translateX(-50%) translateY(-50%) translateY(100px) rotateX(-90deg)";

    //This one rotates each face
    /*faces[0].style.transform = "translateX(-50%) translateY(-50%) translateZ(-100px) rotateY(180deg)";
    faces[1].style.transform = "translateX(-50%) translateY(-50%) translateZ(100px) rotateY(0)";
    faces[2].style.transform = "translateX(-50%) translateY(-50%) translateX(100px) rotateY(90deg)";
    faces[3].style.transform = "translateX(-50%) translateY(-50%) translateX(-100px) rotateY(-90deg)";
    faces[4].style.transform = "translateX(-50%) translateY(-50%) translateY(-100px) rotateX(-90deg)";
    faces[5].style.transform = "translateX(-50%) translateY(-50%) translateY(100px) rotateX(90deg)";*/
}
//Undoes the inversion
function uninvertCube (cube) {
    cube = document.getElementById(cube);

    //Faces of the cube [front, back, left, right, up, down]
    let faces = cube.children;

    //Have each face go back to normal
    faces[0].style.transform = "translateX(-50%) translateY(-50%) translateZ(100px) rotateY(0)";
    faces[1].style.transform = "translateX(-50%) translateY(-50%) translateZ(-100px) rotateY(180deg)";
    faces[2].style.transform = "translateX(-50%) translateY(-50%) translateX(-100px) rotateY(-90deg)";
    faces[3].style.transform = "translateX(-50%) translateY(-50%) translateX(100px) rotateY(90deg)";
    faces[4].style.transform = "translateX(-50%) translateY(-50%) translateY(100px) rotateX(90deg)";
    faces[5].style.transform = "translateX(-50%) translateY(-50%) translateY(-100px) rotateX(-90deg)";
}