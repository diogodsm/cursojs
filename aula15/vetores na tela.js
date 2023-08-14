let num = [5,2,8,9,6]
num.sort()
/*num.push(1)
num.sort()
for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} possui o elemento ${num[pos]}`)
}*/
for(let pos in num) {
    console.log(`O valor na posição ${pos} é ${num[pos]}`)
}