const input = document.getElementsByTagName('pre')[0].innerText.split('\n').filter(x => x != "");


var safeCount = 0;

for(var i = 0; i < input.length; i++){
    var sign = 0; //0/1/2, 0=init, 1=positive, 2=negitive
    var trend = 0; //-1/0/1/ 0=init, -1=negitive, 1=positive

    var report = input[i]
    var safeflag = false
    for(var level = 0; level < report.length -1; level++){
        if(trend === 0){
            trend = Math.sign(report[level] - report[level+1])
        } else if(report[level] - report[level+1] === 0 && trend === Math.sign(report[level] - report[level+1])){
            trend = Math.sign(report[level] - report[level+1])
        } else {
            safeflag = true
        }              
    }

    if(safeflag){
        safeCount += 1 // this one's good  
    }
    console.log(report, safeCount)

}