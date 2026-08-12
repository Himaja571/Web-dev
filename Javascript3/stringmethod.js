let str = "abcdefghijklmnopqrstuvwxyz";

console.log("Original string:", str);

// 1. Find the length
console.log("Length:", str.length);

// 2. Convert to uppercase
console.log("Uppercase:", str.toUpperCase());

// 3. Convert to lowercase
console.log("Lowercase:", str.toLowerCase());

// 4. Find a character at a specific index
console.log("Character at index 5:", str.charAt(5));

// 5. Find the index of a character
console.log("Index of 'm':", str.indexOf("m"));

// 6. Extract part of the string
console.log("Substring (a to f):", str.substring(0, 6));

// 7. Slice the string
console.log("Slice (g to l):", str.slice(6, 12));

// 8. Check whether a character exists
console.log("Contains 'z':", str.includes("z"));

// 9. Replace a character
console.log("Replace 'a' with 'A':", str.replace("a", "A"));

// 10. Reverse the string
let reversed = str.split("").reverse().join("");
console.log("Reversed:", reversed);

// 11. Get first character
console.log("First character:", str[0]);

// 12. Get last character
console.log("Last character:", str[str.length - 1]);
