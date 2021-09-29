/* добавляет восклицательный знак в конец каждого элемента массива */
// const exclamations = (strings) => {
//     const loudStrings = [];
  
//     for (let i = 0; i < strings.length; i++) {
//       loudStrings.push(strings[i] + "!");
//     }
 
const slova = [ "rev", "vers", "aters"]
const exclamations = (strings) => {
return strings.map((item) => item + "!")
}
console.log(exclamations(slova))

/* преобразует все числа из массива в квадрат */
// const squareAll = (numbers) => {
//     const squares = [];
  
//     for (let i = 0; i < numbers.length; i++) {
//       squares.push(numbers[i] * numbers[i]);
//     }
  
//     return squares;
//   }
const num = [56, 422, 3, 34, 52, 61 ,97, 80]
const squareAll = (numbers) => {
numbers.map((item) => item**2)
}
console.log(squareAll(num))

// /* заменяет все слова в массиве на их первые буквы */
// const firstLetters = (words) => {
//     const letters = []
  
//     for (let i = 0; i < words.length; i++) {
//       letters.push(words[i][0]);
//     }
  
//     return letters
//   }
const slova = [ "rev", "vers", "aters"]
const letters = (words) => {
    return words.map((item) => item[0]);

} 
console.log(letters(slova));