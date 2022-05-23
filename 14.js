let arr =Array.from({length:100}, () => Math.floor(Math.random() * 500));

console.log("Largest Numbaer : " + Math.max(...arr));
console.log("Smallest Numbaer : " + Math.min(...arr));

CountingEvenOdd(arr);




function CountingEvenOdd(arr)
{
	let even_count = 0;
	let odd_count = 0;


	for (let i = 0; i < 100; i++) {


		if (arr[i] & 1 == 1)
			odd_count++;
		else
			even_count++;
	}
	if(odd_count>even_count){
	    console.log("ODD Count is High");
	}
  else{console.log("EVEN Count is High");}

}


let sum = 0;
let avg;

for (let i = 0; i < 100; i++) {
    sum += arr[i];
    avg = sum/100;
}
console.log("Sum is :"+sum);
console.log("Avg is :"+avg);
