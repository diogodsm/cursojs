let num = document.querySelector('#fnum')
let lista = document.querySelector('#flist')
let t = document.querySelector('#test')
let valores = []

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else {
        return false
    }
}

function isinlist(n, l) {
    if( l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    t.innerHTML = ''
    
    if(isnumero(num.value) && !isinlist(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    }else{
        alert('O valor adicionado não é um número ou já existe na lista.')
    }
    num.value = ''
}
   
function fim(){
    if(valores.length == 0){
        alert('Adicione valores e tente novamente')
    }else{
        soma = 0
        media = 0
        tot = valores.length
        }
        for(let pos in valores){
            soma += valores[pos]
        }
        for(let pos in valores){
            media = soma/tot
        }
        t.innerHTML = ''
        valores.sort()
        t.innerHTML += `<p>Ao todo temos ${valores.length} valores cadastrados<p>`
        t.innerHTML += `<p>O menor valor digitado foi ${valores[0]}<p>` 
        t.innerHTML += `<p>O maior valor digitado foi ${valores[Number(valores.length) - 1]}<p>` 
        t.innerHTML += `<p>Somando todos os Valores, temos ${soma} <p>`
        t.innerHTML += `<p> A média dos valores digitados é de ${media}`

    }  

      
        
    
    
