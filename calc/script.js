(function(){

    let screen = document.querySelector('.screen');
    let botoes = document.querySelectorAll('.btn');
    let limpa = document.querySelector('.btn-limpa');
    let equals = document.querySelector('.btn-igual');

    botoes.forEach(function(button){
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value+=value;
        })
    });

    equals.addEventListener('click',function(e){
        if(screen.value=== ''){
            screen.value = "Insira um valor";
        
        }
        
        else{
            var result = eval(screen.value);

            if(isFinite(result)){
                screen.value = result.toFixed(2);
            }
            else{
                screen.value = 0;
            }
        }      
    })

    limpa.addEventListener('click', function(e){
        screen.value="";
    })
})();