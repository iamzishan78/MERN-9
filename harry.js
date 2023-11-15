const Person={
        fname:'Zeeshan',
        lname:'Naseeb',
        age:23,
        city:'Raiwind',
        fvrtMovies :{
            m1:'Jawan',
            m2:'Pathan'
        },
        fullname:function(){
            return this.fname + " " + this.lname;  

        },
}

console.log(Person.fullname());

Person.cgpa=3.67
Person.semester='7th'

console.log(Person)

delete Person.semester;
console.log(Person)

const addition =(p1,p2)=>{
    console.log(p1+p2)
}
addition(4,5)

function subtraction(p1,p2){
    console.log(p1-p2)
}

subtraction(5,4)

let array =[1,'Zeeshan',true]
console.log(array)
array.push(3.67)
console.log(array)
array.pop()
console.log(array)
array.unshift('Superior')
console.log(array)
array.shift()
console.log(array)
console.log(array)
console.log(array.shift());

console.log(array.indexOf(1));
