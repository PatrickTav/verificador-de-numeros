let num =  document.getElementById('numtxt')
let tab = document.getElementById('tabtxt')
let res = document.getElementById('res')
let val = []

function inserir (){
    if(isnum(num.value) && !inlista(num.value, val)){
         val.push(Number(num.value) )
         let item = document.createElement('option')
         item.text = `O valor ${num.value} foi inserido `
         tab.appendChild(item)
         res.innerHTML=''
    }else{
        alert('Numero ja inserido ou inválido')
    } num.value= ''
    num.focus()
}
function isnum(n){
    if(Number(n) >=1 && Number(n) <=100 ){
        return true
    }else {
        return false
    }
}
function inlista(n , l){
    if(l.indexOf(Number(num.value)) != -1 ){
        return true
    }else{
        return false
    }
}

function verificar(){
    if(val.length == 0){
        alert('Impossivel fiznalizar sem números')
    }else{
        let tot = val.length
        let maior = val [0]
        let menor = val [0]
        let soma  = 0
        let media = 0
        for (let pos in val){
            soma+= val[pos]
            media = soma / tot
            if (val[pos] > maior )
            maior = val[pos]
            if(val[pos] < menor )
            menor = val[pos]
           
    }       res.innerHTML= ''
            res.innerHTML+= `<p>Foram inseridos ${tot} numeros ao todo</p>`
            res.innerHTML+= `<p>O maior numero inserido foi ${maior}</p>`
            res.innerHTML+= `<p> O menor numero inserido é o ${menor}</p>`
            res.innerHTML+= `<p>A soma dos numeros inseridos é ${soma}</p> `
            res.innerHTML+= `<p>A média é de ${media}</p>`
}

    


}
