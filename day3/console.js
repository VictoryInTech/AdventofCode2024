let input = document.getElementsByTagName('pre')[0].innerText

const regex = /(mul\([0-9]+\,[0-9]+\))/g;

let results = input.match(regex)
let solution = 0

results.forEach(x => {
    var leftandright = x.split(",")
    var left = leftandright[0].replace("mul(", '')
    var right = leftandright[1].replace(")", '')
    solution += left * right
});

console.log(solution)