async function thisThrows() {
    throw new Error("Thrown from thisThrows()");
}

// 1. Use await inside async function
// async function run(){
//     try{
//         await thisThrows();
//     }catch(err){
//         console.log("Caught the error...");
//         //console.error(err);
//     }finally{
//         console.log('We do cleanup here');
//     }
// }
// run();

thisThrows()
    .catch(err => console.log(err.message))
    .finally(() => console.log('We do cleanup here'));

// Thrown from thisThrows()
// We do cleanup here
