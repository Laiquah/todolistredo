const add = document.querySelector('#add')
const sort = document.querySelector("#sort")
const input = document.querySelector("#input")
const output = document.querySelector("#list")
let array = []

add.addEventListener("click", (e)=> {
    e.preventDefault()
    if(input.value) {
        array.push(input.value)
        input.value = ""
    } else {
        input.style = "outline: 3px solid red;"
    }
    
})


localStorage.setItem("names", JSON.stringify(array))
add.addEventListener("click", (event)=> {
    event.preventDefault()
    list.innerHTML = "";
    array.forEach( (name)=> {
        list.innerHTML += `
        <li><input type="checkbox">
        ${name}
        </li>
        <button id="btn3">Delete</button>
        <button id="btn3">Update</button>
        <button id="btn3">Edit</button>
        
        `
    })
})

