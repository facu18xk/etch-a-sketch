const container = document.querySelector('.container');
const canvas = document.querySelector('.canvas');
const color = "white";
const grid = 16;
/**
 * Creates a function that calculates the width and the height depending on the container width/height 
 * create a function that creates divs with its styles 
 */
/**
 *  Return the pixel dimensions for each div 
 */
function calculatePixelSize(numberPixels) {
    const numberPixelsPerSide = Math.sqrt(numberPixels);
    const containerWidth = container.offsetWidth;
    return containerWidth / numberPixelsPerSide;
}

/**
 * Change the color of the color of the div
 */
const changeColor = ev =>
    ev.target.style.backgroundColor = color;

/**
 * Function that create the desire number of pixels for the canvas and added to it
 */

function createPixels(numberPixels) {
    container.innerHTML = "";
    const side = calculatePixelSize(numberPixels);
    for (let i = 0; i < numberPixels; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add("pixel");
        pixel.style.height = `${side}px`;
        pixel.style.width = `${side}px`;
        container.appendChild(pixel);
    }
    container.addEventListener('mouseover', changeColor)
}
/**
 * Function that creates a popup
 */
function popUp() {
    const popup = document.createElement('div');
    popup.classList.add("popup");
    document.body.appendChild(popup);
    return popup;
}
/**
 * Creates a popup for changing the grid 
 */
function changeGrid() {
}
function changeColorPixel() {
    let popup = popUp();
    popup.innerHTML = `
    <h2 class="popup--title">Pick a color</h2>
    <input type="text" class="popup--input" data-coloris>
    <button class="popup--button">Ok</button>    
    `;

}
//Default Parameters 
createPixels(Math.pow(grid, 2));
changeColorPixel();