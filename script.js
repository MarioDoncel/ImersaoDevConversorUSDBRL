// let dollarValue = prompt("Qual o valor que você deesja converter?($)")
// dollarValue = parseFloat(dollarValue.replace(',', '.')).toFixed(2)

// let BrlValue = dollarValue * 5.51
// BrlValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(BrlValue)
// alert(BrlValue)
const Mask ={
    apply(input, func) {
        setTimeout(function () {
            input.value = Mask[func](input.value)
        },1)
    },
    formatBRL(value) {
    // value = value.replace(/\D/g, "")  // Substituir todos os caracteres que não sejam numeros

    return new Intl.NumberFormat('pt-BR', {
        style:'currency',
        currency:'BRL'
    }).format(value/100) // Formatando para reais
    },
    formatUSD(element, value) {
        value = value.replace(/\D/g, "")  // Substituir todos os caracteres que não sejam numeros
    
        return element.value = new Intl.NumberFormat('en-US', {
            style:'currency',
            currency:'USD'
        }).format(value/100) // Formatando para Dolar
        }
}



function convertUSDtoBRL(){
    let resultDiv = document.querySelector('.result')
    let dollarValue = parseFloat(document.querySelector('input[name="dollar"]').value.replace(/\D/g, "")/100)
    let dollarPrice = parseFloat(document.querySelector('input[name="dollarPrice"]').value.replace(/\D/g, "")) 
    let BRLValue = Mask.formatBRL(dollarValue * dollarPrice) 
    resultDiv.innerHTML = `   
        <div>Cotação atual do dolar:</div>
        <div><input 
            type="text" 
            name="BRLValue"
            value="${BRLValue}"
            readonly> 
        </div>`
        return 
}
