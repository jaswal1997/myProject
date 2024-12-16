// async use 
// async function hello(){
//     console.log("hello world");
// }


//await use 
function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", id);
            resolve(200);
        }, 2000)
    })
}
async function getAllData() {
    console.log("getting data1......");
    await getData(1);
    console.log("getting data2......");
    await getData(2);
    console.log("getting data3......");
    await getData(3);
};