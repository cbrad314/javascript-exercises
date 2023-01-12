// const removeFromArray = function(originalArray,...removalElementsArray) {
//     filteredArray = [];
//     for (item of originalArray){
//         for (element of removalElementsArray){
//             if (item !=element)
//             filteredArray.push(item);
//         }
//     }
//     return filteredArray;
// }

 const removeFromArray = function(array,...removalElementArray) {
     filteredArray =  array.filter((element) => !removalElementArray.includes(element));
     return filteredArray;
 };


// function checkEquality(element,removalElement){
//     if (element === removalElement)return true;
//     return false;
// }

// Do not edit below this line
module.exports = removeFromArray;
