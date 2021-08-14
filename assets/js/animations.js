
    const numero=document.getElementById('numeroclientes');
    const numerocafe=document.getElementById('numerotazas');
    const numeroprojects=document.getElementById('numeroprojects');
    const numerocursos = document.getElementById('numerocursos');
        
    function incrementenumbers(numero,hasta){
        let cantidad=0
        let tiempo=setInterval(() => {
            cantidad+=1;
            // color.style.height=`${cantidad}%`;
            for(let i = 0 ; i<hasta ; i ++){

            
            numero.textContent=cantidad;
            if(cantidad===hasta){
                clearInterval(tiempo)
            }
        }
        }, 300);
    }
    
    incrementenumbers(numero,10);
    incrementenumbers(numerocafe,2200);
    incrementenumbers(numeroprojects,15);
    incrementenumbers(numerocursos,20);


