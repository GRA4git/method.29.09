
// const oddIntegers = (numbers) => {
//     const odds = [];
  
//     for (let i = 0; i < numbers.length; i++) {
//       if(numbers[i] % 2 === 1) {
//         odds.push(numbers[i]);
//       }
//     }
  
//     return odds;
//   }

const numbers = [56, 422, 3, 34, 52, 61 ,97, 80]

const oddIntegers = (numbers) => {
    return numbers.filter((item) => item%2 ===1)
  }
console.log(oddIntegers(numbers))
// const longStrings = (strings, minimumLength) => {
//     const longs = [];
//     for (let i = 0; i < strings.length; i++) {
//       if(strings[i].length >= minimumLength) {
//         longs.push(strings[i]);
//       }
//     }
  
//     return longs;
//   }
const array = [ "rev", "vers", "aters", "ruslan", "aslan", "res"]
const longStrings = (a, minimumLength) =>{
    return a.filter((item) => item.length >= 4)
}
console.log(longStrings(array))

// const getNotEmptyPhoneNumbers = (phoneNumbers) => {
//     const notEmpty = [];
  
//     for (let i = 0; i < phoneNumbers.length; i++) {
//       if(phoneNumbers[i].phone !== undefined) {
//         notEmpty.push(phoneNumbers[i]);
//       }
//     }
  
//     return notEmpty;
//   }
const phoneNumbersarr =  [{ name: "ruslan", phone: 354657}, {name: "Ali", phone: 5959834}, { name: "maga", phone: 57694602}, {name: "tuslan", phone: undefined}]
const getNotEmptyPhoneNumbers = (phoneNumbers) =>{
    return phoneNumbers.filter((item) => item.phone !==undefined)
}
console.log(getNotEmptyPhoneNumbers(phoneNumbersarr))
