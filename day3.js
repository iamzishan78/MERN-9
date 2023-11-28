console.log("Digital Clock")
const promise1=new Promise((res)=>{
    setTimeout(() => {
      return res(
        new Date()
      )
    }, 1000);
}
)
const main = async ()=>{
    const p1 = await promise1;
    console.log(p1);
};
main();
main();
main();
main();
main();
main();