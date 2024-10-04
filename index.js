let n=11;
let i=0;
let k=0;

for(i=0; i<=n; i++) {
    k+=i;
    console.log(k);
}


let i=0;
let n=8;
let k=1;
for( i=0; i<n; i++){
    k+=k*i;
    
}
console.log(k);


let i=0;
let n=5;
let k=0;
for( i=0; i<=n; i++){
    k+=i**2;
    
}
console.log(k);


let i=1;
let n=5;
let a=10
k=1;
for( i=1; i<=a; i++){
    k=n*i


console.log(k);

}


let k=100;
console.log("Четные:");
for(let i = 0; i<=k; i++){
if(i % 2 == 0 ) {
    console.log(i);
}

} 
console.log("Нечетные:");
for(let a = 0; a<=k; a++){
    if(a % 2 == 1 ) {
        
        console.log(a);
    }

}

let n = 10;


for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue 
  }

  console.log(i);
   
}






