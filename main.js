// menu bar
let horizontalUnderline = document.getElementById("horizontal-underline");
let horizontalNav = document.querySelectorAll("nav:first-child a");

horizontalNav.forEach(menu => menu.addEventListener("mouseover", e => MouseOn(e)));
//horizontalNav.forEach(menu => menu.addEventListener("mouseout", e => MouseOff()));

function MouseOn(e) {
    horizontalUnderline.style.left = e.currentTarget.offsetLeft + "px";
    horizontalUnderline.style.width = e.currentTarget.offsetWidth + "px";
    horizontalUnderline.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}

function MouseOff() {
    horizontalUnderline.style.left = 0;
    horizontalUnderline.style.width = 0;
    horizontalUnderline.style.top = 0
    horizontalUnderline.style.transition = 0;
}

//grid

/*class node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.visited = false;
    }
}*/

function node(x, y) {
    this.x = x;
    this.y = y;
    this.visited = false;
}

let tble = document.getElementById("grid_template");
for (let i = 0; i < 17; i++) {
    let myRow = document.createElement("tr");
    myRow.className = "gridBox";
    myRow.id = "row" + i;

    tble.appendChild(myRow);
    let eachRow = document.getElementById("row" + i);

    for (let j = 0; j < 46; j++) {
        let myCol = document.createElement("td");
        myCol.className = "gridBox";
        eachRow.appendChild(myCol);
        let box_click = document.createElement("a");
        box_click.href = "#";

        
        //let temp = new node(j, i);
        //box_click.appendChild(temp);

        myCol.appendChild(box_click);
    }
}