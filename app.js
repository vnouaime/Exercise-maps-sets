// Question 1
const nums = new Set([1,1,2,2,3,4])
// Returns {1, 2, 3, 4}


// Question 2
const referee = [...new Set("referee")].join("")
// Returns "ref"


// Question 3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// Returns {[1, 2, 3] => true, [1, 2, 3] => false}


// hasDuplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false


// vowelCount
const vowelCount = str => {
    const vowelMap = new Map();
    const vowels = "aeiou";
    const lowerCaseStr = str.toLowerCase();
    
    for (let char of lowerCaseStr) {
        if (vowels.includes(char)) {
            if (vowelMap.has(char)) {
                vowelMap.set(char, vowelMap.get(char) + 1)
            }
            else {
                vowelMap.set(char, 1);
            }
        }
    }
    return vowelMap;
}

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Vera') // Map { 'e' => 1, 'a' => 1 }