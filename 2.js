const number = parseInt(prompt('Enter a positive integer: '));


  let sum = 0;
  for(let i=1; i<number; i++) {
    if(i % 3 === 0 || i % 5 === 0){
      sum += i;
    }
  }
  console.log('The sum of natural numbers:', sum);
