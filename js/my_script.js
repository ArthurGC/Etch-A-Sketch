const container = document.querySelector('.container');
const buttons = document.querySelectorAll('button');
gridSize = 20;
const createGrid = (gridSize) => {
    for (let i = 0; i < gridSize ** 2; i++) {
        const div = document.createElement('div');
        div.classList.add('boxi');
        div.style.backgroundColor = 'white';
        container.appendChild(div);
    }
    container.style.gridTemplateColumns = `repeat(${gridSize},auto)`;
    container.style.gridTemplateRows = `repeat(${gridSize},auto)`;
}
createGrid(gridSize);



const clean = (myclass) => {
    const pixels = document.querySelectorAll('.boxi');
    if (myclass == 'clear') {
        pixels.forEach(pixel => {
            pixel.style.backgroundColor = 'white';
        })
    }
    else if (myclass == 'resize') {
        gridSize = prompt('Enter the new density of not more than 100',20);
        if (gridSize > 100 || gridSize === null) {
            gridSize = 100;
        }
        container.innerHTML = '';
        createGrid(gridSize);
    }
    active();
}
let currentColor = 'black';
buttons.forEach(button =>{
    button.addEventListener('click',() =>{
        if (button.id === 'resize' || button.id === 'clear') {
            clean(button.id);
        }
        else{
            currentColor = button.id;
        }
    })
})

const randomColor = () =>{
    let color = 'rgba(';
    for (let i = 0; i < 3; i++) {
       color += Math.floor(Math.random() * 255) + ','; 
    }
    return color + '1)';
}

const active = () =>{
    let pixels = document.querySelectorAll('.boxi');
    pixels.forEach(pxl =>{
        pxl.addEventListener('mouseover', (e) =>{
            switch (currentColor) {
                case 'black':
                    e.target.style.backgroundColor = 'rgba(0,0,0)';
                    break;
            
                case 'colorful':
                    e.target.style.backgroundColor = randomColor();
                    break;
            }
        });
    });
}
active();