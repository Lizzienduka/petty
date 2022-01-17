let displayDiv = document.getElementById('display');
let clickBtn = document.getElementById('Btn');
let orderedList = document.getElementById('ol-el');
let mylist = 0;

function render() {

    while (mylist < 50) {
        let listitems = document.createElement('li')
        listitems.innerHTML = "I Love you too Alex";
        orderedList.appendChild(listitems)
        mylist++

    }

}

clickBtn.addEventListener("click", function () {
    render()
})



