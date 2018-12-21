// Constant


// Mapp Method

// Example 01
// const evens = [12,2,30,4,56]
// console.log (evens);

// console.log(evens[2]);

// const odds = evens.map(number=>number+1)

// console.log(odds);

// const pairs = evens.map(number=>({even:number, odd: number+1}));

// console.log (pairs);

// console.log(pairs[0]);

// console.log(pairs[0].even);

// const evenNo = pairs.map((data,i)=>data.even);

// console.log(evenNo);

// const numbers = evens.map((number,index) => number+index);

// console.log(numbers);



// const number = [2,5,20,30,60,59,32];
// // const fives = numbers.map(num =>{
// //     if(number%5===0)
// // })
// let fives =[];
// number.forEach(number=>{
//     if(number%5 === 0){
//         fives.push(number);
//     }
// })

// console.log("number", number);
// console.log("fives", fives);

state = {
    ingredients: {
        salad: 0,
        bacon: 2,
        cheese: 0,
        meat: 1
    }
}

const updIngredients = state.ingredients;

console.log(updIngredients);

const key = Object.keys(updIngredients);

console.log(key);

const value = Object.values(updIngredients);

console.log(value);

const newArray = Object.keys(updIngredients)
                 .map(igKey=>{
                     return(
                         updIngredients[igKey]
                     )
                 });

console.log(newArray);