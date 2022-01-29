let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");


let count = 0 ;

function increment() {
    count += 1 ;
    countEl.textContent = count ;
}

function save() {
    let saveCount =" " + count +" -" ;
    saveEl.textContent += saveCount
    console.log(count);
    count = 0 ;
    countEl.textContent = 0 ;
}

function reset() {
    count = 0 ;
    countEl.textContent = 0 ;
}

function saveRes() {
    saveEl.textContent = "Previous Entries:" ;
}

function decrease() {
    count -= 1 ;
    countEl.textContent = count ;
    if(count < 1){
        count = 0;
        countEl.textContent = count ;
    }
}
