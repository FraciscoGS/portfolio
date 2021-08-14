
    const numero=document.getElementById('numeroclientes');
    const numerocafe=document.getElementById('numerotazas');
    const numeroprojects=document.getElementById('numeroprojects');
    const numerocursos = document.getElementById('numerocursos');
        
    function incrementenumbers(numero,hasta){
        let cantidad=0
        let tiempo=setInterval(() => {
            cantidad+=1;
            // color.style.height=`${cantidad}%`;
            numero.textContent=cantidad;
            
            if(cantidad===hasta){
                clearInterval(tiempo)
            }
        }, hasta);
    }
    
    incrementenumbers(numero,100);
    incrementenumbers(numerocafe,100);
    incrementenumbers(numeroprojects,100);
    incrementenumbers(numerocursos,100);


