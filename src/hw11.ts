//Task 1

function isPalindrome(num) {
  const strNum = num.toString();
  const reverseStr = strNum.split('').reverse().join('');
  return strNum === reverseStr;
}

function findLychrelNumber(seed, maxSteps = 1000) {
  let num = seed;
  let steps = 0;

  while (steps < maxSteps) {
    const reverseNum = parseInt([...num.toString()].reverse().join(''), 10);
    num += reverseNum;

    if (isPalindrome(num)) {
      return { result: num, steps: steps + 1 }; // Додаємо 1 до кількості кроків, бо останній крок призводить до паліндрому
    }

    steps++;
  }

  return { result: null, steps };
}

const result1 = findLychrelNumber(196);
console.log(result1);

const result2 = findLychrelNumber(196, 500); // Можна задати власний ліміт кроків
console.log(result2);

const result3 = findLychrelNumber(87, 500); 

const result4 = findLychrelNumber(12345);
console.log(result4);

const result5 = findLychrelNumber(96); 
console.log(result5);



  // Task 2

// Функция для генерации всех перестановок элементов массива
const generatePermutations = (arr: number[]): number[][] => {
    if (arr.length === 0) {
      return [[]];
    }
  
    const permutations: number[][] = [];
  
    for (let i = 0; i < arr.length; i++) {
      const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
      const restPermutations = generatePermutations(rest);
  
      permutations.push(...restPermutations.map((perm) => [arr[i], ...perm]));
    }
  
    return permutations;
  }
  
  const inputArray = [1, 2, 3];
  const permutations = generatePermutations(inputArray);
  console.log(permutations);
  