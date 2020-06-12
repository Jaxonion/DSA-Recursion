const sheepCounter = function(number) {
    //BASE CASE
    if(number === 0) {
        console.log('All sheep jumped over the fence')
        return
    }
    //GENERAL CASE
    console.log(`${number} Another sheep jumps over the fence`)
    return sheepCounter(number-1)
}

sheepCounter(3)

const powerCalculator = function(number, power) {
    if (power < 0) {
        return `exponent should be >= 0`;
    }

    if (power === 0) {
        return 1;
    }

    return num * powerCalculator(num, power-1);
};

console.log(powerCalculator(10, 2));

const reverseString = function(str) {
    if(str.length === 0) {
        return ''
    }

    const newChar = str[0]

    return reverseString(str.slice(1)) + newChar;
}

console.log(reverseString('tacocat'))

const stringSplitter = function(string, splitter) {

    if(string.indexOf(splitter) === -1) {
        return [string.slice(0, string.length)]
    }

    return [string.slice(0, string.indexOf(splitter)), ...stringSplitter(string.slice(string.indexOf(splitter) + 1), splitter)]
}

console.log(stringSplitter('02/20/2020', '/'))

  
const triangularNumber = function(number) {
    if (number === 0) {
      return 0;
    }

    return number + triangularNumber(number - 1);
  };
  
  console.log(triangularNumber(6));