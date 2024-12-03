const content = document.getElementsByTagName('pre')[0].innerText.split('\n').filter(x => x != "");
let left = []
let right = []

for(let i = 0; i < content.length; i++){
 let tmp = content[i].split('   ') 
 if(i===0){ 
    left.push(tmp[0])
    right.push(tmp[1])
 } else { 
    for(let l = 0; l < left.length; l++){
        if(tmp[0] === left[l]){
            left.splice(l, 0, tmp[0])
            l = left.length+1 
        } else if(tmp[0] > left[l]){ 
            if(l===left.length-1){
                left = left.concat(tmp[0])   
                l = left.length+1              
            } 
        } else if(tmp[0] < left[l]){
            if(l===0){
                left = [tmp[0], ...left]
                l = left.length+1 
            } else if(tmp[0] > left[l-1]){
                left.splice(l, 0, tmp[0])
                l = left.length+1 
            }
        }
    }
    for(let l = 0; l < right.length; l++){
        if(tmp[1] === right[l]){
            right.splice(l, 0, tmp[1])
            l = right.length+1 
        } else if(tmp[1] > right[l]){ 
            if(l===right.length-1){
                right = right.concat(tmp[1])   
                l = right.length+1              
            } 
        } else if(tmp[1] < right[l]){
            if(l===0){
                right = [tmp[1], ...right]
                l = right.length+1 
            } else if(tmp[1] > right[l-1]){
                right.splice(l, 0, tmp[1])
                l = right.length+1 
            }
        }
    }
 }
}
console.log(left, right)

//time to solve for total distance
var distance = 0;
for(var i = 0; i < left.length; i++){
    if(i < right.length){
        distance += Math.abs(left[i] - right[i])
    } 
}

console.log("solution - distance is: ", distance.toString())