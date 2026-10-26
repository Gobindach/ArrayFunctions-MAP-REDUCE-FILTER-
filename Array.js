const arr=[2,3,4,5,6,7,8,9,10];
console.log(arr);
const newArr=arr.map((x)=>x*2);//uses for mapping the array
console.log(newArr);    
const newArr1=arr.filter((x)=>x%2==0);//uses for filtering the array
console.log(newArr1);
const newArr2=arr.reduce((sum,x)=>sum+x,0);//uses for reducing the array
console.log(newArr2);
