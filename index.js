const  circulo= document.getElementById('circulo');

circulo.addEventListener('animationend', (event) => {
    if (event.animationName === 'rebote') {
        circulo.style.animationName = "movimiento escalera";
        circulo.style.animationDuration = "4s"; 
    }
        
    console.log(event)
});



const pelota = document.getElementById('pelota');
// animacion por JS 
    // element.animate(KeyFrames =[] , option= {} ) 

pelota.animate([
    //from
    {
        letf: '0'
        // transform: 'translateX(0)'
    },
    //to
    {
        left: 'calc( 100% - 200px )'
    }
], {
    duration: 1000,  // duracion de la  animacion
    delay: 1000, // tiempo que se demora la animacion en ejecutar
    direction: 'normal', // direccion de la ejecucion
    easing: 'linear',// aceleracion
    iterations: Infinity, // iteraciones de la animaicion 
    fill: 'forwards', // como ququiero que quede la animacion
    iterationStart: .5, // idicamos donde queremos que inicie la animacion
    // endDelay:   //el tiempo en milisegundos que el elemneto espere cuando se acabe la animaicon

});
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const succes = document.getElementById('succes');
const activador = document.getElementById('activar');
succes.addEventListener('click', (event) => {
    modal.style.animation = "modalout 0.8s forwards ease-in";
    overlay.classList.remove('active');
});
activador.addEventListener('click', (event) => {
    overlay.classList.add('active');
    modal.style.animation = "modalIn 0.8s forwards ease-out";
})