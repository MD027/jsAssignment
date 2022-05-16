var arr=[25,26,27,28];
var forl=0;
var whilel=0;
var dol=0;
var l=arr.length;

for(i=0;i<l;i++){
    forl+=arr[i];
}
console.log("For-loop sum: "+forl);

while(l){
    whilel+=arr[l-1];
    l--;
}
console.log("while-loop sum: "+whilel);

do{
    dol+=arr[l];
    l++;
}while(l<arr.length);
console.log("do-while-loop sum: "+dol);
