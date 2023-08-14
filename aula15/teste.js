let num = [3,5,7,9,3] 
console.log(`O vetor possui o elemento ${num}`)
console.log(`Nosso vetor possui  ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(20)
if (pos == -1) {
    console.log('Esse valor não existe no Vetor')
}else {
    console.log(`O valor está na posição ${pos}`)
}



