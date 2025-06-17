function Calculadora(){
    const display = document.querySelector('.text-display');
    
    document.addEventListener('click', e => {
        const el = e.target;
        if(el.classList.contains('btn-num')){
            imprimirValor(el);
        }
        if(el.classList.contains('btn-clear')){
            apagarInput();
        }
        if(el.classList.contains('btn-eq')){
            realizarConta();
        }
        if(el.classList.contains('btn-del')){
            apagarNum();
        }
    })
    
    function imprimirValor(valor){
        display.value += valor.innerText;
    }
    function apagarInput(){
        display.value = '';
    }
    function realizarConta(){
        let conta = display.value;

        try {
            if(!conta){
                alert('Conta inválida');
                return;
            }
            conta = eval(conta);
        }
        catch(e){
            alert('Conta inválida ' + e.message);
        }
        display.value = conta;
    }
    function apagarNum(){
        display.value = display.value.slice(0, -1);
    }
}

let calc = new Calculadora();
