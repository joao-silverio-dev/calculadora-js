function criaCalculadora(){
    return {
        display: document.querySelector('.text-display'),
        inicia: function(){
            this.cliqueBotoes();
            this.clearDisplay();
        },
        cliqueBotoes(){
            document.addEventListener('click', function(e){
               const el = e.target;
               
               if(el.classList.contains('btn-num')){
                this.btnParaDisplay(el.innerText);
               }
               if(el.classList.contains('btn-clear')){
                this.clearDisplay();
               }
               if(el.classList.contains('btn-del')){
                this.deleteLast();
               }
               if(el.classList.contains('btn-eq')){
                this.realizaConta();
               }
            }.bind(this));
        },
        btnParaDisplay(valor){
            this.display.value += valor;
        },
        clearDisplay(){
            this.display.value = '';
        },
        deleteLast(){
            this.display.value = this.display.value.slice(0, -1);
        },
        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);
                if(!conta){
                    alert('Conta inválida');
                    return;
                }
            }
            catch(e){
                alert('Conta inválida' + e.message);
                return;
            }
            this.display.value = conta;
        }
    };
}
const calculadora = criaCalculadora();
calculadora.inicia();