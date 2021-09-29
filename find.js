// ищем число в массиве numbers, которое меньше чем limit
// const firstUnder = (numbers, limit) => {
//     for (let i = 0; i < numbers.length; i++) {
//       if(numbers[i] < limit) {
//         return numbers[i];
//       }
//     }
  
//     return undefined
//   }
  
const array = [56, 422, 3, 34, 52, 61 ,97, 80]


const firstUnder = (numbers, limit) => {
return numbers.find((item) => item <200)
}

console.log(firstUnder(array))


// ищет строку в массиве strings, которая начинается с указанной буквы
// const startsWith = (strings, letter) => {
//     for (let i = 0; i < strings.length; i++) {
//       if(strings[i][0] === letter) {
//         return strings[i];
//       }
//     }

const slova = [ "rev", "vers", "aters"]
const startsWith = (strings, letter) => {
    return strings.find((item) => item[0] === "a")
}
console.log(startsWith(slova))