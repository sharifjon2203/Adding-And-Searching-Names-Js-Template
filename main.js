let button = document.getElementById("search-btn")
let searchText = document.querySelector("#search-input")

let addInput = document.querySelector("#add-input")
let addBtn = document.querySelector("#add-btn")

let dataRow = document.querySelector("#data-row")

let showAllBtn = document.querySelector("#show-all-btn")

let names = new Map()


let searchName = (name) => {
    dataRow.innerHTML = "<h2>Natijalar:</h2>";

    let target = new RegExp(name, "i");
    let found = false;

    for (const [key, val] of names) {
        if (target.test(key)) {
            console.log(`Found: ${key}`);

            let div = document.createElement("div");
            div.classList.add(
                "m-2", "col-10", "text-lightblack",
                "col-sm-3", "col-md-2", "col-lg-2",
                "col-xl-2", "bg-light", "p-3"
            );
            div.innerHTML = `<h3>${key}</h3>`;
            dataRow.append(div);
            found = true;
        }
    }

    if (!found) {
        let div = document.createElement("div");
        div.classList.add(
            "m-2", "col-10", "text-warning",
            "col-sm-5", "col-md-5", "col-lg-5",
            "col-xl-4", "bg-light", "p-5"
        );
        div.innerHTML = `<h3>Hech narsa topilmadi</h3>`;
        dataRow.append(div);

    }
};


let showAll = (name) => {
    dataRow.innerHTML = ""
    for (const [key, val] of names) {

        console.log(`key: ${key} val: ${val}`)
        let div = document.createElement("div")
        div.classList.add(
            "m-2", "col-10", "text-lightblack",
            "col-sm-3", "col-md-2", "col-lg-2",
            "col-xl-2", "bg-light", "p-3"
        );

        dataRow.append(div)
        div.innerHTML = `<h3>${val}</h3>`
    }
}


showAllBtn.addEventListener("click", (e) => {
    showAll()
})

addBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let inputVal = addInput.value;

    names.set(inputVal, inputVal)

    console.log(names.get(inputVal))

    showAll()

})


button.addEventListener("click", (e) => {
    e.preventDefault()
    dataRow.innerHTML = ""
    let inputVal = searchText.value;

    searchName(inputVal)

    console.log(inputVal)

})
