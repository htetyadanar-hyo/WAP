function printNumbers(from,to){
    let cur = from;
   const timer =  setInterval(()=>{
        console.log(cur);
        cur++;
        if(cur > to){
            clearInterval(timer);
        }
        
    },1000);
}
printNumbers(1,3);