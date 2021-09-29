const num = [56, 422, 3, 34, 52, 61 ,97, 80]
const sum = (numbers) => {
 const total = numbers.reduce((prev, item) => prev = prev + item)
 return total
}

console.log(sum(num))

// /* ставит тире между словами */
// const hyphenate = (words) => {
//     let hyphenatedWords = "";
  
//     for (let i = 0; i < words.length; i++) {
//       if (hyphenatedWords === "") {
//         hyphenatedWords = words[i];
//       } else {
//         hyphenatedWords += `-${words[i]}`;
//       }
//     } 
  
//     return hyphenatedWords;
//   }
const slova = [ "rev", "vers", "aters"]
const hyphenate = (words) => {
    let hyphenatedWords = words.reduce((prew, item)=> prew + `-${item}`)
    return hyphenatedWords
}
console.log(hyphenate(slova));