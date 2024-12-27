//Keeps track of the mouse position
let mouseX = -20;
let mouseY = -20;

//Inner dot of the cursor (Has two states: small (default) and large (hovering))
const cursor = document.getElementById("cursor");
const smallCursorSize = 8;
const smallCursorOffset = smallCursorSize / 2;
const largeCursorSize = 16;
const largeCursorOffset = largeCursorSize / 2;
let cursorState = smallCursorSize;
let cursorOffsetState = smallCursorOffset;

//Outer circle of the cursor
const cursorBorder = document.getElementById("cursor-border");
const cursorBorderOffset = cursorBorder.offsetWidth/2;
let cursorBorderX = -20;
let cursorBorderY = -20;

//Each element in the hoverable class
const hoverables = document.querySelectorAll(".hoverable");
//Sets it so that when the cursor hovers over something "hoverable," the cursor changes size to indicate it
hoverables.forEach(hoverable => {
    hoverable.addEventListener("mouseover", enlargeCursor);
    hoverable.addEventListener("mouseout", shrinkCursor);

    //Prevents the cursor from displaying when hovering over something
    hoverable.style.cursor = "none";
});

//Removes the default cursor
document.documentElement.style.cursor = "none";

//Whenever the mouse moves, keep track of the new position via mouseX and mouseY
document.addEventListener("mousemove", updateMousePos);
//Do the same for when the mouse scrolls
document.addEventListener("wheel", updateMousePos);
//And for clicking
document.addEventListener("mouseup", updateMousePos);
function updateMousePos (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
}

//Moves the custom cursor
setInterval(function () {
    //Places the inner cursor dot at the mouse position
    cursor.style.left = (mouseX - cursorOffsetState)+"px";
    cursor.style.top = (mouseY - cursorOffsetState)+"px";

    //Calculates a slight delay for the cursor border
    cursorBorderX += (((mouseX - cursorBorderOffset) - cursorBorderX)*.15);
    cursorBorderY += (((mouseY - cursorBorderOffset) - cursorBorderY)*.15);

    cursorBorder.style.left = cursorBorderX+"px";
    cursorBorder.style.top = cursorBorderY+"px";
}, 3);

//When the cursor hovers over something, enlarge it to indicate the hovering
function enlargeCursor () {
    cursor.style.width = largeCursorSize+"px";
    cursor.style.height = largeCursorSize+"px";

    cursorState = largeCursorSize;
    cursorOffsetState = largeCursorOffset;

    cursor.style.backgroundColor = "var(--bright-accent)";
}

//When the cursor leaves something, shrink it to default size
function shrinkCursor () {
    cursor.style.width = smallCursorSize+"px";
    cursor.style.height = smallCursorSize+"px";

    cursorState = smallCursorSize;
    cursorOffsetState = smallCursorOffset;

    cursor.style.backgroundColor = "var(--accent)";
}

//Ensures that the cursor does not appear when a hoverable is hovered over
function hideCursor (e) {
    e.target.style.pointerEvent = "none";
    e.target.style.cursor = "none";
}