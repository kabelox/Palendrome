// In a new github repo write function that returns true if the given string is a palindrome. Otherwise, return false. Note: A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing. [Submit link to your GitHub repository].

            // Version 1

// function palenDrome(str){
// let wordArr = str.split('').reverse().join('');
// let reg = /[\W]/g;
// let small = wordArr.toLowerCase().replace(reg,"");
// if(wordArr === str){
//     return true;
// }
// else{
//     return false;
// }




// }
// console.log(palenDrome(''));



                    // version 2
                    function palenDrome(str){
                        let reg = /[\W] /g;
                        let smallCaps = str.toLowerCase().replace(reg,"");
                        let convert = smallCaps.split('').reverse().join('');
                        return convert === smallCaps ? true: false
                    }
                    
                    console.log(palenDrome("Racecar"));