console.log('Constant Variable')
{
    const v1=20;
    console.log(v1)
    {
        console.log(v1)
        const v2=30
        console.log(v2)
    }
    console.log(v1)
}
console.log('\n\nLet Variable')
{
    let v1=20;
    console.log(v1)
    {
        console.log(v1)
        let v2=30
        console.log(v2)
    }
    console.log(v1)
}
console.log('\n\nVar Variable')
{
    var v1=20;
    var v1=10
    console.log(v1)
    {
        console.log(v1)
        var v1=30
        console.log(v1)
    }
    console.log(v1)
    console.log(v1)
}
 console.log("Constant Variable")
{
     const v1= 'Zeeshan'
     console.log(v1);
     {
         const v1 ='Naseeb'
         console.log(v1);
         var v2='Superior University'
     }
     console.log(v1);
     console.log(v2);

 }

console.log('\n\n\nIf Else condition')
{
 let age =22;
 if(age>=22){
    if(age==22){
        console.log('Age is 20');
    }
    else
    console.log('Age is Grater Than 22')
 }
 else
 console.log('Age is less Than 22');

};
console.log('\n\n\nElse if ');
{
    var educaion = 'BS'
    if(educaion=='Matric'){
        console.log('Your Education is Matric')
    }
    else if (educaion=='FSC'){
        console.log('Your Education is FSC')
    }
    else if ( educaion=='BS'){
        console.log('Your Education is BS')
    }
    else{
        console.log('Your education is not in our record')
    }
}
console.log('\n\n\nSwitch In JS ');
{
var cgpa=3.67;

switch(cgpa){
    case 1:
        {
            console.log('Print CGPA is 1')
            break
        }
    case 2:{
            console.log('Print CGPA is 2')
            break  
    }
    case 3:{
            console.log('print CGPA is 3')
            break
    }
    case 4:{
            console.log('Print CGPA is 4')
            break
    }
    default:
        console.log('Print CGPA is Not Exist in the Set ranges')
}
}
var array = [1,2,3,"Zeeshan",5]

console.log(array)