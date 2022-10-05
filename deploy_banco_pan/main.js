// Armazenando ids dos inputs, do botao e do campo de texto do resultado
var botao = document.getElementById('botao')
var credito = document.getElementById('credito')
var saldo = document.getElementById('saldo')
var qtdAtendAtras = document.getElementById('qtd_atend_atrs')
var qtdProd = document.getElementById('qtd_prod')
var qtdAtend = document.getElementById('qtd_atend')
var qtdOper = document.getElementById('qtd_oper')
var qtdReclm = document.getElementById('qtd_reclm')
var indEngajado = document.getElementById('ind_engajado')
var resultado = document.getElementById('resultado')

// Evento de click do botao
botao.addEventListener('click', function () {
    function prediction () {
// Usando ajax para fazer a requisição
        $.ajax({
            url: `http://127.0.0.1:5000/${credito.value}/${saldo.value}/${qtdAtendAtras.value}/
            ${qtdProd.value}/${qtdAtend.value}/${qtdOper.value}/${qtdReclm.value}/
            ${indEngajado.value}`,
            type: 'get',
            dataType: 'json',
            async: false,
            success: function(data) {
                // Condicional para resultar na condição do cliente em relação ao banco
                if (data == 0) {
                    resultado.innerText = "O cliente não é atritado"
                } else {
                    resultado.innerText = "O cliente é atritado"
                }
            } 
         })
    }
    prediction()
})
