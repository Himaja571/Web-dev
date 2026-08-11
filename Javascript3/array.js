// ==========================================
// JAVASCRIPT ARRAY METHODS
// Using ONLY ONE array
// ==========================================

let arr = [10, 20, 30, 40, 50];

console.log("Original Array:", arr);


// ==========================================
// 1. length
// ==========================================
console.log("length:", arr.length);


// ==========================================
// 2. at()
// ==========================================
console.log("at(2):", arr.at(2));
console.log("at(-1):", arr.at(-1));


// ==========================================
// 3. push()
// Adds element at the end
// ==========================================
arr.push(60);

console.log("push:", arr);


// ==========================================
// 4. pop()
// Removes element from the end
// ==========================================
arr.pop();

console.log("pop:", arr);


// ==========================================
// 5. unshift()
// Adds element at the beginning
// ==========================================
arr.unshift(5);

console.log("unshift:", arr);


// ==========================================
// 6. shift()
// Removes element from the beginning
// ==========================================
arr.shift();

console.log("shift:", arr);


// ==========================================
// 7. includes()
// ==========================================
console.log("includes 30:", arr.includes(30));


// ==========================================
// 8. indexOf()
// ==========================================
console.log("indexOf 30:", arr.indexOf(30));


// ==========================================
// 9. lastIndexOf()
// ==========================================
console.log("lastIndexOf 30:", arr.lastIndexOf(30));


// ==========================================
// 10. join()
// ==========================================
console.log("join:", arr.join(" - "));


// ==========================================
// 11. toString()
// ==========================================
console.log("toString:", arr.toString());


// ==========================================
// 12. slice()
// Does NOT modify original array
// ==========================================
console.log("slice:", arr.slice(1, 4));


// ==========================================
// 13. splice()
// Removes elements
// ==========================================
arr.splice(1, 1);

console.log("splice remove:", arr);


// Add element using splice
arr.splice(1, 0, 20);

console.log("splice add:", arr);


// ==========================================
// 14. concat()
// ==========================================
// Using the same array with itself
let concatResult = arr.concat(arr);

console.log("concat:", concatResult);


// ==========================================
// 15. forEach()
// ==========================================
console.log("forEach:");

arr.forEach(function(value, index) {
    console.log(index, value);
});


// ==========================================
// 16. map()
// ==========================================
let mapResult = arr.map(function(value) {
    return value * 2;
});

console.log("map:", mapResult);


// ==========================================
// 17. filter()
// ==========================================
let filterResult = arr.filter(function(value) {
    return value > 20;
});

console.log("filter:", filterResult);


// ==========================================
// 18. find()
// ==========================================
console.log(
    "find:",
    arr.find(function(value) {
        return value > 20;
    })
);


// ==========================================
// 19. findIndex()
// ==========================================
console.log(
    "findIndex:",
    arr.findIndex(function(value) {
        return value > 20;
    })
);


// ==========================================
// 20. findLast()
// ==========================================
console.log(
    "findLast:",
    arr.findLast(function(value) {
        return value > 20;
    })
);


// ==========================================
// 21. findLastIndex()
// ==========================================
console.log(
    "findLastIndex:",
    arr.findLastIndex(function(value) {
        return value > 20;
    })
);


// ==========================================
// 22. some()
// ==========================================
console.log(
    "some:",
    arr.some(function(value) {
        return value > 40;
    })
);


// ==========================================
// 23. every()
// ==========================================
console.log(
    "every:",
    arr.every(function(value) {
        return value > 0;
    })
);


// ==========================================
// 24. reduce()
// ==========================================
let sum = arr.reduce(function(total, value) {
    return total + value;
}, 0);

console.log("reduce:", sum);


// ==========================================
// 25. reduceRight()
// ==========================================
let rightResult = arr.reduceRight(function(result, value) {
    return result + value;
}, 0);

console.log("reduceRight:", rightResult);


// ==========================================
// 26. flat()
// ==========================================
// We can temporarily create nesting using
// the SAME array
arr[1] = [20, 25];

console.log("Before flat:", arr);

console.log("flat:", arr.flat());


// Restore array
arr[1] = 20;


// ==========================================
// 27. flatMap()
// ==========================================
let flatMapResult = arr.flatMap(function(value) {
    return [value, value * 2];
});

console.log("flatMap:", flatMapResult);


// ==========================================
// 28. sort()
// ==========================================
arr.sort(function(a, b) {
    return a - b;
});

console.log("sort ascending:", arr);


// ==========================================
// 29. reverse()
// ==========================================
arr.reverse();

console.log("reverse:", arr);


// Restore ascending order
arr.reverse();


// ==========================================
// 30. toSorted()
// Does NOT modify original
// ==========================================
console.log(
    "toSorted:",
    arr.toSorted(function(a, b) {
        return b - a;
    })
);

console.log("Original after toSorted:", arr);


// ==========================================
// 31. toReversed()
// Does NOT modify original
// ==========================================
console.log("toReversed:", arr.toReversed());

console.log("Original after toReversed:", arr);


// ==========================================
// 32. toSpliced()
// Does NOT modify original
// ==========================================
console.log("toSpliced:", arr.toSpliced(1, 2));

console.log("Original after toSpliced:", arr);


// ==========================================
// 33. with()
// Replaces element without modifying original
// ==========================================
console.log("with:", arr.with(1, 200));

console.log("Original after with:", arr);


// ==========================================
// 34. fill()
// ==========================================
arr.fill(10, 0, 1);

console.log("fill:", arr);


// ==========================================
// 35. copyWithin()
// ==========================================
arr.copyWithin(0, 2);

console.log("copyWithin:", arr);


// ==========================================
// 36. entries()
// ==========================================
console.log("entries:");

for (let entry of arr.entries()) {
    console.log(entry);
}


// ==========================================
// 37. keys()
// ==========================================
console.log("keys:");

for (let key of arr.keys()) {
    console.log(key);
}


// ==========================================
// 38. values()
// ==========================================
console.log("values:");

for (let value of arr.values()) {
    console.log(value);
}


// ==========================================
// 39. Array.isArray()
// ==========================================
console.log("isArray:", Array.isArray(arr));


// ==========================================
// 40. Array.from()
// ==========================================
console.log("Array.from:", Array.from(arr));


// ==========================================
// 41. Array.of()
// ==========================================
console.log("Array.of:", Array.of(...arr));


// ==========================================
// FINAL ARRAY
// ==========================================
console.log("Final Array:", arr);
