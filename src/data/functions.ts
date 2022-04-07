const functions = [
  {
    task: {
      title: "Convert to Fahrient",
      instructions: [
        `The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.`,
        `You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.`,
      ],
      checks: [
        `convertToF(0) should return a number`,
        `convertToF(-10) should return a value of 14`,
        `convertToF(30) should return a value of 86`,
      ],
    },
    acknowledgement: {
      title: "Book of Codes",
      author: "Oluwatosin Ojo",
      credit: ["Freecodecamp", "Leetcode"],
      name: "Tosin Ojo",
      website: "tosinojo.com",
    },
  },
  {
    task: {
      title: "Reverse the String",
      instructions: [
        `Reverse the provided string.`,
        `You may need to turn the string into an array before you can reverse it.`,
        `Your result must be a string.`,
      ],
      checks: [
        `reverseString("hello") should return a string.`,
        `reverseString("hello") should return the string olleh.`,
        `reverseString("Howdy") should return the string ydwoH.`,
      ],
    },
    solution: `
const convertToF = (cel) => {
  return (cel * 9) / 5 + 32;
};

convertToF(30);
      `,
  },
  {
    task: {
      title: "Find the factorial",
      instructions: [
        `Return the factorial of the provided integer.`,
        `If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.`,
        `Factorials are often represented with the shorthand notation n!`,
        `For example: 5! = 1 * 2 * 3 * 4 * 5 = 120`,
        `Only integers greater than or equal to zero will be supplied to the function.`,
      ],
      checks: [
        `factorialize(5) should return a number.`,
        `factorialize(5) should return 120.`,
        `factorialize(10) should return 3628800.`,
      ],
    },
    solution: `
const reverseString = (str) => {
  return str.split("").reverse().join("");
};

reverseString("hello");
      `,
  },
  {
    task: {
      title: "Find the Longest Word in a String",
      instructions: [
        `Return the length of the longest word in the provided sentence.`,
        `Your response should be a number.`,
      ],
      checks: [
        `findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.`,
        `findLongestWordLength("May the force be with you") should return 5.`,
        `findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.`,
      ],
    },
    solution: `
const factorialize = (num) => {
  let arr = [];
  let i = 1;
  for (i; i <= num; i++) {
    arr.push(i);
  }

  const factorial = arr.reduce((acc, value) => acc * value);

  return factorial;
};

factorialize(5);
      `,
  },
  {
    task: {
      title: "Return Largest Numbers in Arrays",
      instructions: [
        `Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.`,
        `Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].`,
      ],
      checks: [
        `largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.`,
        `largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].`,
        `largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3].`,
      ],
    },
    solution: `
const findLongestWordLength = (str) => {
  const words = str.split(" ");
  const wordsLength = words.map((word) => word.length);
  return Math.max.apply(null, wordsLength);
};

findLongestWordLength("The quick brown fox jumped over the lazy dog");
      `,
  },
  {
    task: {
      title: "Confirm the Ending",
      instructions: [
        `Check if a string (first argument, str) ends with the given target string (second argument, target).`,
        `This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.`,
      ],
      checks: [
        `confirmEnding("Bastian", "n") should return true.`,
        `confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.`,
        `Your code should not use the built-in method .endsWith() to solve the challenge.`,
      ],
    },
    solution: `
const largestOfFour = (arr) => {
  return arr.map((value) => Math.max.apply(null, value));
};

largestOfFour([
  [4, 9, 1, 3],
  [13, 35, 18, 26],
  [32, 35, 97, 39],
  [1000000, 1001, 857, 1],
])
      `,
  },
  {
    task: {
      title: "Repeat a String Repeat a String",
      instructions: [
        `Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.`,
      ],
      checks: [
        `repeatStringNumTimes("*", 3) should return the string ***.`,
        `repeatStringNumTimes("abc", 4) should return the string abcabcabcabc.`,
        `repeatStringNumTimes("abc", -2) should return an empty string ("").`,
      ],
    },
    solution: `
const confirmEnding = (str, end) => {
  const string = str.slice(str.length - end.length);

  return string === end;
};

confirmEnding("He has to give me a new name", "name");    
      `,
  },
  {
    task: {
      title: "Truncate a String",
      instructions: [
        `Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.`,
      ],
      checks: [
        `truncateString("A-tisket a-tasket A green and yellow basket", 8) should return the string A-tisket....`,
        `truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return the string A-tisket a-tasket A green and yellow basket.`,
        `truncateString("A-", 1) should return the string A....`,
      ],
    },
    solution: `
const repeatStringNumTimes = (str, num) => {
  const word = [];
  let i = 0;

  for (i; i < num; i++) {
    word.push(str);
  }

  return word.join("");
};

repeatStringNumTimes("abc", 3);    
      `,
  },
  {
    task: {
      title: "Finders Keepers",
      instructions: [
        `Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.`,
      ],
      checks: [
        `findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.`,
        `findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.`,
      ],
    },
    solution: `
const truncateString = (str, num) => {
  const truncate = str
    .split("")
    .filter((value, index) => index < num)
    .join("");

  return str.length <= num ? str : truncate + "...";
};


truncateString(
  "A-tisket a-tasket A green and yellow basket",
  "A-tisket a-tasket A green and yellow basket".length
)
      `,
  },
  {
    task: {
      title: "Boo who",
      instructions: [
        `Check if a value is classified as a boolean primitive. Return true or false.`,
        `Boolean primitives are true and false.`,
      ],
      checks: [
        `booWho(true) should return true.`,
        `booWho([].slice) should return false.`,
        `booWho(NaN) should return false.`,
      ],
    },
    solution: `
const findElement = (arr, func) => {
  const evenNumbers = arr.find((value) => func(value));
  return !evenNumbers ? undefined : evenNumbers;
};

findElement([1, 3, 5, 9], (num) => num % 2 === 0);    
      `,
  },
  {
    task: {
      title: "Title Case a Sentence",
      instructions: [
        `Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.`,
        `For the purpose of this exercise, you should also capitalize connecting words like the and of.`,
      ],
      checks: [
        `titleCase("I'm a little tea pot") should return a string.`,
        `titleCase("sHoRt AnD sToUt") should return the string Short And Stout.`,
        `titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.`,
      ],
    },
    solution: `
const booWho = (bool) => {
  const isBool = typeof bool;
  return isBool === "boolean" ? true : false;
};

booWho(true);
      `,
  },
  {
    task: {
      title: "Slice and Splice",
      instructions: [
        `You are given two arrays and an index.`,
        `Copy each element of the first array into the second array, in order.`,
        `Begin inserting elements at index n of the second array.`,
        `Return the resulting array. The input arrays should remain the same after the function runs.`,
      ],
      checks: [
        `frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].`,
        `frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].`,
        `The first and second array should remain the same after the function runs.`,
      ],
    },
    solution: `
const titleCase = (str) => {
  const words = str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return words.join(" ");
};

titleCase("I'm a little tea pot"); 
      `,
  },
  {
    task: {
      title: "Falsy Bouncer",
      instructions: [
        `Remove all falsy values from an array.`,
        `Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.`,
        `Hint: Try converting each value to a Boolean.`,
      ],
      checks: [
        `bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].`,
        `bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].`,
        `bouncer([false, null, 0, NaN, undefined, ""]) should return [].`,
      ],
    },
    solution: `
const frankenSplice = (arr1, arr2, n) => {
  const array = [];
  let i = 0;

  for (i; i <= arr2.length; i++) {
    if (i === n) array.push(...arr1);
    if (arr2[i] === undefined) continue;
    array.push(arr2[i]);
  }

  return array;
};

frankenSplice([1, 2, 3, 4], [], 0);    
      `,
  },
  {
    task: {
      title: "Where do I Belong",
      instructions: [
        `Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.`,
        `For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).`,
        `Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).`,
      ],
      checks: [
        `getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.`,
        `getIndexToIns([40, 60], 50) should return a number.`,
        `getIndexToIns([2, 20, 10], 19) should return 2.`,
      ],
    },
    solution: `
const bouncer = (arr) => {
  return arr.filter((value) => {
    if (!value) return;
    return value;
  });
};

bouncer([7, "ate", "", false, 9]);
      `,
  },
  {
    task: {
      title: "Mutations",
      instructions: [
        `Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.`,
        `For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.`,
        `The arguments ["hello", "hey"] should return false because the string hello does not contain a y.`,
        `Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.`,
      ],
      checks: [
        `mutation(["hello", "hey"]) should return false.`,
        `mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.`,
        `mutation(["Noel", "Ole"]) should return true.`,
      ],
    },
    solution: `
const getIndexToIns = (arr, num) => {
  const sorted = arr.sort((a, b) => a - b);
  const findFirstBiggerIndex = sorted.findIndex((value) => value >= num);
  return findFirstBiggerIndex === -1 ? arr.length : findFirstBiggerIndex;
};

getIndexToIns([40, 60], 50);    
      `,
  },
  {
    task: {
      title: "Chunky Monkey",
      instructions: [
        `Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.`,
      ],
      checks: [
        `chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].`,
        `chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].`,
        `chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].`,
      ],
    },
    solution: `
const mutation = (arr) => {
  const arr1 = arr[0].toLowerCase();
  const arr2 = arr[1].toLowerCase();
  let array = [];
  let i = 0;
  for (i; i < arr2.length; i++) {
    if (arr1.includes(arr2.charAt(i))) array.push(arr2.charAt(i));
    continue;
  }
  
  return array.sort().join("") === arr2.split("").sort().join("");
};

mutation(["hello", "Hello"]);
      `,
  },
  {
    task: {
      title: "Sum All Numbers in a Range",
      instructions: [
        `We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.`,
        `For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.`,
      ],
      checks: [
        `sumAll([1, 4]) should return a number.`,
        `sumAll([1, 4]) should return 10.`,
        `sumAll([10, 5]) should return 45.`,
      ],
    },
    solution: `
const chunkArrayInGroups = (arr, num) => {
  const array = [];
  let subArr = [];

  arr.forEach((value, i) => {
    if ((i + 1) % num === 0) {
      subArr.push(value);
      array.push(subArr);
      subArr = [];
    } else subArr.push(value);
  });

  if (subArr.length > 0) array.push(subArr);
  return array;
};

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);    
      `,
  },
  {
    task: {
      title: "Diff Two Arrays",
      instructions: [
        `Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.`,
        `Note: You can return the array with its elements in any order.`,
      ],
      checks: [
        `diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.`,
        `[1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.`,
        `[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].`,
      ],
    },
    solution: `
const sumAll = (arr) => {
  const small = arr[0] < arr[1] ? arr[0] : arr[1];
  const big = arr[0] > arr[1] ? arr[0] : arr[1];
  let sum = 0;

  let i = small;
  for (i; i <= big; i++) {
    sum += i;
  }

  return sum;
};

sumAll([5, 10]);
      `,
  },
  {
    task: {
      title: "Wherefore art thou",
      instructions: [
        `Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.`,
        `For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.`,
      ],
      checks: [
        `whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].`,
        `whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) should return [{ "apple": 1, "bat": 2, "cookie": 2 }].`,
        `whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) should return []`,
      ],
    },
    solution: `
const diffArray = (arr1, arr2) => {
  const array1 = arr2.filter((value) => arr1.includes(value) === false);
  const array2 = arr1.filter((value) => arr2.includes(value) === false);

  return array1.concat(array2);
};


diffArray(
  ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);
    
      `,
  },
  {
    task: {
      title: "Spinal Tap Case",
      instructions: [
        `Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.`,
      ],
      checks: [
        `spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.`,
        `spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.`,
        `spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.`,
      ],
    },
    solution: `
const whatIsInAName = (collection, source) => {
  const srcKey = Object.keys(source);

  return collection.filter((value) => {
    for (let i = 0; i < srcKey.length; i++) {
      if (
        !value.hasOwnProperty(srcKey[i]) ||
        value[srcKey[i]] !== source[srcKey[i]]
      ) {
        return false;
      }
    }
    return true;
  });
};


whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
  apple: 1,
});    
      `,
  },
  {
    task: {
      title: "Pig Latin",
      instructions: [
        `Pig Latin is a way of altering English Words. The rules are as follows:`,
        `- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.`,
        `- If a word begins with a vowel, just add way at the end.`,
        `Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.`,
      ],
      checks: [
        `translatePigLatin("california") should return the string aliforniacay.`,
        `Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.`,
        `translatePigLatin("algorithm") should return the string algorithmway.`,
      ],
    },
    solution: `
const spinalCase = (str) => {
  return str
    .split(/\\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
};

spinalCase("This Is Spinal Tap");    
      `,
  },
  {
    task: {
      title: "Search and Replace",
      instructions: [
        `Perform a search and replace on the sentence using the arguments provided and return the new sentence.`,
        `First argument is the sentence to perform the search and replace on.`,
        `Second argument is the word that you will be replacing (before).`,
        `Third argument is what you will be replacing the second argument with (after).`,
        `Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog`,
      ],
      checks: [
        `myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.`,
        `myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.`,
        `myReplace("Let us get back to more Coding", "Coding", "algorithms") should return the string Let us get back to more Algorithms.`,
      ],
    },
    solution: `
const translatePigLatin = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];

  if (vowels.includes(str.charAt(0).toLowerCase()))
    return str.slice(0).concat("way");
  else {
    const consonants = [];
    let i = 0;

    for (i; i < str.length; i++) {
      if (!vowels.includes(str.charAt(i).toLowerCase()))
        consonants.push(str.charAt(i));
      else break;
    }
    return str.slice(consonants.length).concat(consonants.join(""), "ay");
  }
};

translatePigLatin("schwartz");    
      `,
  },
  {
    task: {
      title: "DNA Pairing",
      instructions: [
        `The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.`,
        `Base pairs are a pair of AT and CG. Match the missing element to the provided character.`,
        `Return the provided character as the first element in each array.`,
        `For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]`,
        `The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.`,
      ],
      checks: [
        `pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].`,
        `pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].`,
        `pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].`,
      ],
    },
    solution: `
const myReplace = (str, search, replace) => {
  if (search.charAt(0) === search.charAt(0).toUpperCase())
    return str.replace(
      search,
      replace.charAt(0).toUpperCase().concat(replace.slice(1))
    );

  return str.replace(search, replace.toLowerCase());
};

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");    
      `,
  },
  {
    task: {
      title: "Missing letters",
      instructions: [
        `Find the missing letter in the passed letter range and return it.`,
        `If all letters are present in the range, return undefined.`,
      ],
      checks: [
        `fearNotLetter("abce") should return the string d.`,
        `fearNotLetter("abcdefghjklmno") should return the string i.`,
        `fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.`,
      ],
    },
    solution: `
const pairElement = (str) => {
  let array = [];
  let i = 0;

  for (i; i < str.length; i++) {
    if (str.charAt(i) === "G") array.push(["G", "C"]);
    if (str.charAt(i) === "C") array.push(["C", "G"]);
    if (str.charAt(i) === "A") array.push(["A", "T"]);
    if (str.charAt(i) === "T") array.push(["T", "A"]);
  }

  return array;
};

pairElement("GCG");    
      `,
  },
  {
    task: {
      title: "Sorted Union",
      instructions: [
        `Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.`,
        `In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.`,
        `The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.`,
        `Check the assertion tests for examples.`,
      ],
      checks: [
        `uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].`,
        `uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].`,
        `uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].`,
      ],
    },
    solution: `
const fearNotLetter = (str) => {
  const alphabet = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];

  const firstIndex = alphabet.indexOf(str.charAt(0));

  const missing = str.split("").find((letter, i) => {
    return alphabet.indexOf(letter) !== firstIndex + i;
  });

  return alphabet[alphabet.indexOf(missing) - 1];
};

fearNotLetter("stvwx");    
      `,
  },
  {
    task: {
      title: "Convert HTML Entities",
      instructions: [
        `Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.`,
      ],
      checks: [
        `convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.`,
        `convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.`,
        `convertHTML("abc") should return the string abc.`,
        `convertHTML("<>") should return the string &lt;&gt;.`,
      ],
    },
    solution: `
const uniteUnique = (...arr) => {
  const flat = arr.flat();
  const array = [];
  let i = 0;

  for (i; i < flat.length; i++) {
    if (array.includes(flat[i])) continue;
    array.push(flat[i]);
  }

  return array;
};

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);    
      `,
  },
  {
    task: {
      title: "Sum All Odd Fibonacci Numbers",
      instructions: [
        `Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.`,
        `The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.`,
        `For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.`,
      ],
      checks: [
        `sumFibs(1000) should return 1785.`,
        `sumFibs(4000000) should return 4613732.`,
        `sumFibs(75024) should return 60696.`,
      ],
    },
    solution: `
const convertHTML = (str) => {
  const sentence = str.split("");

  return sentence
    .map((char) => {
      if (char === "&") return "&amp;";
      if (char === "<") return "&lt;";
      if (char === ">") return "&gt;";
      if (char === "'") return "&apos;";
      if (char === '"') return "&quot;";
      return char;
    })
    .join("");
};

convertHTML("Dolce & Gabbana");    
      `,
  },
  {
    task: {
      title: "Sum All Primes",
      instructions: [
        `A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.`,
        `Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.`,
      ],
      checks: [
        `sumPrimes(10) should return a number.`,
        `sumPrimes(10) should return 17.`,
        `sumPrimes(977) should return 73156.`,
      ],
    },
    solution: `
const sumFibs = (num) => {
  const fibArr = [1, 1];

  for (let i = 0; i <= num; ) {
    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
    i++;
  }

  return fibArr
    .filter((value) => value <= num && value % 2 === 1)
    .reduce((acc, value) => acc + value);
};

sumFibs(4000000);    
      `,
  },
  {
    task: {
      title: "Smallest Common Multiple",
      instructions: [
        `Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.`,
        `The range will be an array of two numbers that will not necessarily be in numerical order.`,
        `For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.`,
      ],
      checks: [
        `smallestCommons([1, 5]) should return 60.`,
        `smallestCommons([2, 10]) should return 2520.`,
        `smallestCommons([23, 18]) should return 6056820.`,
      ],
    },
    solution: `
const sumPrimes = (num) => {
  const isPrime = (digit) => {
    if (digit === 1) return false;
    if (digit === 2) return true;

    for (let i = 2; i < digit; i++) {
      if (digit % i === 0) return false;
    }

    return true;
  };

  let sum = 0;
  let i = 2;

  for (i; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }

  return sum;
};

sumPrimes(977);     
      `,
  },
  {
    task: {
      title: "Drop it",
      instructions: [
        `Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.`,
        `Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.`,
      ],
      checks: [
        `dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].`,
        `dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].`,
        `dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].`,
      ],
    },
    solution: `
const smallestCommons = (arr) => {
  const [min, max] = arr.sort((a, b) => a - b);
  const divisorNumber = max - min + 1;

  let highestMultiple = 1;

  for (let i = min; i <= max; i++) {
    highestMultiple *= i;
  }

  for (let i = max; i <= highestMultiple; i += max) {
    let divisors = 0;

    for (let j = min; j <= max; j++) {
      if (i % j === 0) divisors += 1;
    }

    if (divisors === divisorNumber) return i;
  }

  return highestMultiple;
};

smallestCommons([1, 5]);    
      `,
  },
  {
    task: {
      title: "Steamroller",
      instructions: [
        `Flatten a nested array. You must account for varying levels of nesting.`,
      ],
      checks: [
        `steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].`,
        `steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].`,
        `Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.`,
      ],
    },
    solution: `
const dropElements = (arr, func) => {
  const index = arr.findIndex((value) => func(value));
  return index === -1 ? [] : arr.slice(index);
};

dropElements([1, 2, 3, 4], function (n) {
  return n > 5;
});    
      `,
  },
  {
    task: {
      title: "Binary Agents",
      instructions: [
        `Return an English translated sentence of the passed binary string.`,
        `The binary string will be space separated.`,
      ],
      checks: [
        `binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return the string Aren't bonfires fun!?`,
        `binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return the string I love FreeCodeCamp!`,
      ],
    },
    solution: `
const steamrollArray = (arr) => {
  const flattened = [].concat(...arr);
  return flattened.some(Array.isArray) ? steamrollArray(flattened) : flattened;
};

steamrollArray([1, [2], [3, [[4]]]]);   
      `,
  },
  {
    task: {
      title: "Everything Be True",
      instructions: [
        `Check if the predicate (second argument) is truthy on all elements of a collection (first argument).`,
        `In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.`,
        `In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.`,
        `Remember, you can access object properties through either dot notation or [] notation.`,
      ],
      checks: [
        `truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot") should return false.`,
        `truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "caught") should return false.`,
        `truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "id") should return false.`,
      ],
    },
    solution: `
const binaryAgent = (str) => {
  const binaryArray = str.split(" ");
  const decodedArray = [];
  let i = 0;

  for (i; i < binaryArray.length; i++) {
    decodedArray.push(String.fromCharCode(parseInt(binaryArray[i], 2)));
  }

  return decodedArray.join("");
};

binaryAgent(
  "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"
)    
      `,
  },
  {
    task: {
      title: "Arguments Optional",
      instructions: [
        `Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.`,
        `For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.`,
        `Calling this returned function with a single argument will then return the sum:`,
        `var sumTwoAnd = addTogether(2);`,
        `sumTwoAnd(3) returns 5.`,
        `If either argument isn't a valid number, return undefined.`,
      ],
      checks: [
        `addTogether(2, 3) should return 5.`,
        `addTogether(5)(7) should return 12.`,
        `addTogether(2)([3]) should return undefined.`,
      ],
    },
    solution: `
const truthCheck = (collection, pre) => {
  for (let i = 0; i < collection.length; i++) {
    if (!collection[i].hasOwnProperty(pre) || !collection[i][pre]) return false;
  }

  return true;
};

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male", age: 0 },
    { user: "Dipsy", sex: "male", age: 3 },
    { user: "Laa-Laa", sex: "female", age: 5 },
    { user: "Po", sex: "female", age: 4 },
  ],
  "age"
)    
      `,
  },
  {
    task: {
      title: "Make a Person",
      instructions: [
        `Fill in the object constructor with the following methods below:`,
        `getFirstName()`,
        `getLastName()`,
        `getFullName()`,
        `setLastName(first)`,
        `setLastName(last)`,
        `setFullName(fistAndLast)`,
        `Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

      `,
      ],
      checks: [
        `No properties should be added. Object.keys(bob).length should always return 6.`,
        `bob.getFullName() should return the string Haskell Curry after bob.setFullName("Haskell Curry").`,
        `bob.getLastName() should return the string Ojo.`,
      ],
    },
    solution: `
const addTogether = (...arg) => {
  const [first, second] = arg;

  if (typeof first !== "number") return undefined;
  if (second === undefined) return (second) => addTogether(first, second);
  if (typeof second !== "number") return undefined;

  return first + second;
};

addTogether(7)("tosin");    
      `,
  },
  {
    task: {
      title: "Add Two Numbers",
      instructions: [
        `You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.`,
        `You may assume the two numbers do not contain any leading zero, except the number 0 itself.`,
        `Input: l1 = [2,4,3], l2 = [5,6,4]`,
        `Output: [7,0,8]`,
        `Explanation: 342 + 465 = 807`,
      ],
      checks: [
        `addTwoNumbers([2, 3, 4], [5, 6, 7]) should return [1, 0, 8]`,
        `addTwoNumbers([0], [0]) should return [0]`,
        `addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]) should return [8,9,9,9,0,0,0,1]`,
      ],
    },
    solution: `
const Person = function (firstAndLastName) {
  let fullName = firstAndLastName;

  this.getFirstName = () => {
    return fullName.split(" ")[0];
  };
  this.getLastName = () => {
    return fullName.split(" ")[1];
  };
  this.getFullName = () => {
    return fullName;
  };
  this.setFirstName = (first) => {
    return (fullName = first + ' ' + fullName.split(" ")[1]);
  };
  this.setLastName = (last) => {
    return (fullName = fullName.split(" ")[0] + ' ' +last);
  };

  this.setFullName = (firstAndLast) => {
    return (fullName = firstAndLast);
  };
};
const bob = new Person("Tosin Ojo");
bob.setFirstName("Haskell");
bob.getFullName();
      `,
  },
  {
    task: {
      title: "Two Sum",
      instructions: [
        `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.`,
        `You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
        `You can return the answer in any order.`,
        `Input: nums = [2,7,11,15], target = 9`,
        `Output: [0,1]`,
        `Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].`,
      ],
      checks: [
        `twoSum([3, 2, 3], 6) should return [2, 0]`,
        `twoSum([3, 3], 6) should return [0, 1]`,
        `twoSum([2, 7, 11, 15], 9) should return [0, 1]`,
      ],
    },
    solution: `
const addTwoNumbers = (l1, l2) => {
  const small = l1.length < l2.length ? l1 : l2
  const big = l1.length < l2.length ? l2 : l1
  let i = big.length - 1
  let remainder = 0
  let array = []
  
  for(i; i >= 0; i--) {
      let num = small[i - (big.length - small.length)] ? small[i - (big.length - small.length)] : 0
      
      if((big[i] + num + remainder) > 9) {
          const doubleDigit = big[i] + num + remainder
          array.push(doubleDigit - 10)
          remainder = 1
      } else {
          const doubleDigit = big[i] + num + remainder
          array.push(doubleDigit)
          remainder = 0
      }
  }
  
  if(remainder > 0) array.push(remainder)
  return array
};

addTwoNumbers([2, 3, 4], [5, 6, 7])
        `,
  },
  {
    task: {
      title: "Return the Last Three Element",
      instructions: [
        `You are presented with a linked list, get the data inside the list in an array.`,
        `And return the last three elements of the data inside the linked list.`,
      ],
      checks: [
        `Output should be an array`,
        `Output should be the last three data elements of the linked list`,
      ],
    },
    solution: `
const twoSum = (nums, target) => {
  let i = 0
  let array
  for(i; i < nums.length; i++) {
      for(let j = 0; j < nums.length; j++) {
          if(i === j) continue
          if(nums[i] + nums[j] === target) array = [i, j]
      }
  }
  
  return array
};

twoSum([3, 2, 3], 6)
        `,
  },
  {
    task: {
      title: "Palindrome Checker",
      instructions: [
        `Return true if the given string is a palindrome. Otherwise, return false.`,
        `A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.`,
        `Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.`,
        `We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.`,
        `We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.`,
      ],
      checks: [
        `palindrome("_eye") should return true.`,
        `palindrome("0_0 (: /-\\ :) 0-0") should return true.`,
        `palindrome("five|\\_/|four") should return false.`,
      ],
    },
    solution: `
const list = {
  data: "a",
  next: {
    data: "b",
    next: {
      data: "c",
      next: {
        data: "d",
        next: {
          data: "e",
          next: {
            data: "f",
            next: {
              data: "g",
              next: {
                data: "h",
                next: null,
              },
            },
          },
        },
      },
    },
  },
};

function lastThree(example) {
  let linkedList = example;
  const data = [];

  while (linkedList.next !== null) {
    data.push(linkedList.data);
    linkedList = linkedList.next;
  }

  return data.slice(-3);
}

lastThree(list);
        `,
  },
  {
    task: {
      title: "Roman Numeral Converter",
      instructions: [
        `Convert the given number into a roman numeral.`,
        `All roman numerals answers should be provided in upper-case.`,
      ],
      checks: [
        `convertToRoman(2) should return the string II.`,
        `convertToRoman(798) should return the string DCCXCVIII`,
        `convertToRoman(3999) should return the string MMMCMXCIX`,
      ],
    },
    solution: `
const palindrome = (str) => {
  const forward = str
    .split("")
    .filter((value) => /[a-zA-Z0-9]/.test(value))
    .join("")
    .toLowerCase();
  const backward = str
    .split("")
    .reverse()
    .filter((value) => /[a-zA-Z0-9]/.test(value))
    .join("")
    .toLowerCase();

  return forward === backward;
};

palindrome("eye");  
        `,
  },
  {
    task: {
      title: "Caesars Cipher",
      instructions: [
        `One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.`,
        `A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.`,
        `Write a function which takes a ROT13 encoded string as input and returns a decoded string.`,
        `All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.`,
      ],
      checks: [
        `rot13("SERR CVMMN!") should decode to the string FREE PIZZA!`,
        `rot13("SERR YBIR?") should decode to the string FREE LOVE?`,
        `rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.`,
      ],
    },
    solution: `
const convertToRoman = (num) => {
  let roman = "";

  let romanNumbers = {
    M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1,
  };

  for (let i in romanNumbers) {
    while (num >= romanNumbers[i]) {
      roman += i;
      num -= romanNumbers[i];
    }
  }

  return roman;
};

convertToRoman(649);
          `,
  },
  {
    task: {
      title: "Telephone Number Validator",
      instructions: [
        `Return true if the passed string looks like a valid US phone number.`,
        `The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):`,
        `555-555-5555`,
        `(555)555-5555`,
        `(555) 555-5555`,
        `555 555 5555`,
        `5555555555`,
        `1 555 555 5555`,
        `For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.`,
      ],
      checks: [
        `telephoneCheck("1 (555) 555-5555") should return true.`,
        `telephoneCheck("1 555)555-5555") should return false.`,
        `telephoneCheck("0 (757) 622-7382") should return false.`,
      ],
    },
    solution: `
const rot13 = (str) => {
  const alphabets = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  ];

  return str
    .split("")
    .map((value) => {
      if (alphabets.indexOf(value) !== -1) {
        let index = alphabets.indexOf(value);

        if (index < 13) return alphabets[13 + index];
        else return alphabets[index - 13];
      }
      return value;
    })
    .join("");
};

rot13("SERR PBQR PNZC");    
          `,
  },
  {
    task: {
      title: "Cash Register",
      instructions: [
        `Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.`,
        `cid is a 2D array listing available currency.`,
        `The checkCashRegister() function should always return an object with a status key and a change key.`,
        `Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.`,
        `Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.`,
        `Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.`,
        `Below are currency unit and their amount:`,
        `Penny: $0.01`,
        `Nickel: $0.05`,
        `Dime: $0.1`,
        `Quarter: $1`,
        `Five Dollars: $5`,
        `Ten Dollars: $10`,
        `Twenty Dollars: $20`,
        `One-hundred Dollars: $100`,
      ],
      checks: [
        `checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.`,
        `checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.`,
      ],
    },
    solution: `
const telephoneCheck = (str) => {
  const testArr = str.split("").filter((num) => {
    return num !== " ";
  });
  const numArr = testArr.filter((num) => {
    return /[0-9]/.test(num);
  });
  let bracketOpen = 0;
  let bracketClose = 0;
  let hyphen = 0;

  for (let i = 0; i < testArr.length; i++) {
    if (testArr[i] === "(") bracketOpen += 1;
    if (testArr[i] === ")") bracketClose += 1;
    if (testArr[i] === "-") hyphen += 1;
    if (/[^-|0-9|(|)]/.test(testArr[i])) return false;
  }

  if (testArr[0] === "(" && testArr[4] !== ")") return false;
  if (testArr[1] === "(" && testArr[5] !== ")") return false;
  if (testArr[4] === ")" && testArr[0] !== "(") return false;
  if (testArr[5] === ")" && testArr[1] !== "(") return false;
  if (bracketOpen > 1 || bracketClose > 1 || hyphen > 2) return false;
  if (hyphen == 2 && (testArr[3] !== testArr[7] || testArr[4] !== testArr[8])) return false;
  if (numArr.length > 11 || numArr.length < 10) return false;
  if (numArr.length === 11 && numArr[0] !== "1") return false;

  return true;
};

telephoneCheck("555-555-5555");    
          `,
  },
  {
    conclusion: [`The End`, `Thank You`],
    solution: `
const checkCashRegister = (price, cash, cid) => {
  const currencyUnit = {
    PENNY: 1, NICKEL: 5, DIME: 10, QUARTER: 25, ONE: 100, FIVE: 500, TEN: 1000, TWENTY: 2000, "ONE HUNDRED": 10000,
  };

  let change = cash * 100 - price * 100;
  let changeCopy = change;
  let changeArr = [];
  let totalCid = 0;
  let filteredCid = cid.filter((cash) => cash[1] > 0).reverse();

  filteredCid.forEach((cash) => {
    let curr = cash[0];
    let currValue = cash[1] * 100;
    totalCid += currValue;
    let amount = 0;

    while (change >= currencyUnit[curr] && currValue > 0) {
      change -= currencyUnit[curr];
      currValue -= currencyUnit[curr];
      amount += currencyUnit[curr];
    }

    if (amount !== 0) {
      changeArr.push([curr, amount / 100]);
    }
  });

  if (totalCid < changeCopy || change > 0) 
    return {
      status: "INSUFFICIENT_FUNDS",
      change: [],
    };

  if (totalCid === changeCopy && change === 0) 
    return {
      status: "CLOSED",
      change: cid,
    };

  if (totalCid > changeCopy && change === 0)
    return {
      status: "OPEN",
      change: changeArr,
    };
};

checkCashRegister(19.5, 20, [ ["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100], ])
          `,
  },
  //   {
  //     task: {
  //       title: "",
  //       instructions: [``, ``, ``, ``, ``],
  //       checks: [``, ``, ``],
  //     },
  //     solution: `
  // const factorialize = (num) => {
  //   let arr = [];
  //   let i = 1;
  //   for (i; i <= num; i++) {
  //     arr.push(i);
  //   }

  //   const factorial = arr.reduce((acc, value) => acc * value);

  //   return factorial;
  // };

  // factorialize(5);
  //       `,
  //   },
  //   {
  //     task: {
  //       title: "",
  //       instructions: [``, ``, ``, ``, ``],
  //       checks: [``, ``, ``],
  //     },
  //     solution: `
  // const factorialize = (num) => {
  //   let arr = [];
  //   let i = 1;
  //   for (i; i <= num; i++) {
  //     arr.push(i);
  //   }

  //   const factorial = arr.reduce((acc, value) => acc * value);

  //   return factorial;
  // };

  // factorialize(5);
  //       `,
  //   },
  //   {
  //     task: {
  //       title: "",
  //       instructions: [``, ``, ``, ``, ``],
  //       checks: [``, ``, ``],
  //     },
  //     solution: `
  // const factorialize = (num) => {
  //   let arr = [];
  //   let i = 1;
  //   for (i; i <= num; i++) {
  //     arr.push(i);
  //   }

  //   const factorial = arr.reduce((acc, value) => acc * value);

  //   return factorial;
  // };

  // factorialize(5);
  //       `,
  //   },
  //   {
  //     task: {
  //       title: "",
  //       instructions: [``, ``, ``, ``, ``],
  //       checks: [``, ``, ``],
  //     },
  //     solution: `
  // const factorialize = (num) => {
  //   let arr = [];
  //   let i = 1;
  //   for (i; i <= num; i++) {
  //     arr.push(i);
  //   }

  //   const factorial = arr.reduce((acc, value) => acc * value);

  //   return factorial;
  // };

  // factorialize(5);
  //       `,
  //   },
  //   {
  //     task: {
  //       title: "",
  //       instructions: [``, ``, ``, ``, ``],
  //       checks: [``, ``, ``],
  //     },
  //     solution: `
  // const factorialize = (num) => {
  //   let arr = [];
  //   let i = 1;
  //   for (i; i <= num; i++) {
  //     arr.push(i);
  //   }

  //   const factorial = arr.reduce((acc, value) => acc * value);

  //   return factorial;
  // };

  // factorialize(5);
  //       `,
  //   },
  //   {
  //     task: {
  //       title: "",
  //       instructions: [``, ``, ``, ``, ``],
  //       checks: [``, ``, ``],
  //     },
  //     solution: `
  // const factorialize = (num) => {
  //   let arr = [];
  //   let i = 1;
  //   for (i; i <= num; i++) {
  //     arr.push(i);
  //   }

  //   const factorial = arr.reduce((acc, value) => acc * value);

  //   return factorial;
  // };

  // factorialize(5);
  //       `,
  //   },
  //   {
  //     conclusion: [`The End`, `Thank You`],
  //     solution: `
  // const factorialize = (num) => {
  //   let arr = [];
  //   let i = 1;
  //   for (i; i <= num; i++) {
  //     arr.push(i);
  //   }

  //   const factorial = arr.reduce((acc, value) => acc * value);

  //   return factorial;
  // };

  // factorialize(5);
  //       `,
  //   },
];

export default functions;
