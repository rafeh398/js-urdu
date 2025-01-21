const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers
                .map((num) => num * 10 )  //hr ik entry ko hm num keh dete hain
                .map( (num) => num + 1)  //11 se shuru hugi value
                .filter( (num) => num >= 40)  // 40 se uper wala show huga

console.log(newNums); 