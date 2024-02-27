let num = [11,22,44]
console.log(num[0])
 num.push(2)
 console.log(num)
 console.log(num.length)
 num.sort()
 console.log(num)
/*
 for (let i=0;i<num.length;i++) {
    console.log(num[i])
}
*/
for (let i in num){
    console.log(num[i])
}

console.log(`O valor está na posição: ${num.indexOf(2)}`)