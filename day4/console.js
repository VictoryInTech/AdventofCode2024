let input = document.getElementsByTagName('pre')[0].innerText.split('\n').filter(x => x != "");

//horizontal, vertical, diagonal, written backwards
let unwrapped = input //horizontal
console.log("horizontal", unwrapped)

input.forEach(x => { //backwards
    console.log(x, x.split("").reverse().join(""))
    unwrapped = unwrapped.concat(x)
})

console.log("backwards", unwrapped)

for(var i = 0; i < input.length; i++){
    var line = ""
    input.forEach(x => {
        line += x.split("")[i]
    })
    unwrapped = unwrapped.concat(line)
}

console.log("vertical", unwrapped)

