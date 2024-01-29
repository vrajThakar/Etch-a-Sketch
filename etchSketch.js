const gridContainer = document.querySelector('.container');

for (let i = 1; i <= 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    gridContainer.appendChild(row);
    
}

const rowContainer = document.querySelectorAll('.container .row')

rowContainer.forEach((row) => {
    for (let i = 1; i <= 16; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
    }
});


const cells = document.querySelectorAll('.container .row .cell');



    // and for each one we add a 'click' listener
gridContainer.addEventListener('mouseover', (event) => {
    event.target.classList.add('colourMode');
});




/*cells.addEventListener("mousedown", () => {
    gridContainer.addEventListener("mouseover", () => {
     
        cells.forEach((cell) => {
            
            cell.style.cssText = 'background-color: red;';  
          });
    });
  });

window.addEventListener("mouseup", () => {
    gridContainer.removeEventListener("mouseover", function(e) {
        console.log(e);
    });
  });

*/

/*const row1 = document.createElement('div');
const row2 = document.createElement('div');
const row3 = document.createElement('div');
const row4 = document.createElement('div');
const row5 = document.createElement('div');
const row6 = document.createElement('div');
const row7 = document.createElement('div');
const row8 = document.createElement('div');
const row9 = document.createElement('div');
const row10 = document.createElement('div');
const row11 = document.createElement('div');
const row12 = document.createElement('div');
const row13 = document.createElement('div');
const row14 = document.createElement('div');
const row15= document.createElement('div');
const row16 = document.createElement('div');

row1.classList.add('row');
row2.classList.add('row');
row3.classList.add('row');
row4.classList.add('row');
row5.classList.add('row');
row6.classList.add('row');
row7.classList.add('row');
row8.classList.add('row');
row9.classList.add('row');
row10.classList.add('row');
row11.classList.add('row');
row12.classList.add('row');
row13.classList.add('row');
row14.classList.add('row');
row15.classList.add('row');
row16.classList.add('row');*/

