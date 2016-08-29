(function( window, undefined ){
/* created by claudio.dcv@gmail.com */
var ScrollTouch = function(zona,movil,hora,canales,velocidad){

  var hora = document.getElementById(hora);
  var box = document.getElementById(zona);
  var canales = document.getElementById(canales);
  var movil = document.getElementById(movil);
      movil.style.marginLeft = 0;

  var uPos = 0;
  var posMouseNew = 0;
  var recuerdo = 0;
  var Irecuerdo = 0;

  var uPosY = 0;
  var posMouseNewY = 0;
  var recuerdoY = 0;
  var IrecuerdoY = 0;

  var maximoPermitido = 0;
  var maximoPermitidoY = 0;

  function init(){
    var w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    var y = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    maximoPermitido = movil.offsetWidth - w;
    maximoPermitidoY = movil.offsetHeight - y;
  }
  init();

  function addListerners(elm){
    elm.addEventListener('touchstart',touchstart.bind(this))
    elm.addEventListener('touchmove',touchmove.bind(this))
    elm.addEventListener('touchend',touchend.bind(this))
    elm.addEventListener('touchleave',touchend.bind(this));
  }

  addListerners(movil);
  addListerners(hora);
  addListerners(canales);

  function touchstart(event){
    Irecuerdo = recuerdo;
    uPos = parseInt(event.changedTouches[0].clientX);

    IrecuerdoY = recuerdoY;
    uPosY = parseInt(event.changedTouches[0].clientY);
  }
  function touchend(){

  }
  function touchmove(event){
    //si es menor a cero, no se sigue sumando el recuerdo
    //y se deja en cero el recuerdo
    if(recuerdo < 0){
      recuerdo = 0;
      Irecuerdo = 0;
    }else{
      //si trata de superar el resultado del elemento - la ventana
      //se deja la posicion en el maximo permitido
      if(recuerdo > maximoPermitido){
        recuerdo = maximoPermitido;
        Irecuerdo = maximoPermitido;
      }else{
        //si esta dentro del rango permitido se continua con las
        //operaciones
        posMouseNew = parseInt(event.changedTouches[0].clientX);
        movil.style.marginLeft = recuerdo*-velocidad + 'px';
        hora.style.marginLeft = recuerdo*-velocidad + 'px';
        recuerdo = Irecuerdo + (uPos-posMouseNew);
      }
    }
    if(recuerdoY < 0){
      recuerdoY = 0;
      IrecuerdoY = 0;
    }else{
      //si trata de superar el resultado del elemento - la ventana
      //se deja la posicion en el maximo permitido
      if(recuerdoY > maximoPermitidoY){
        recuerdoY = maximoPermitidoY;
        IrecuerdoY = maximoPermitidoY;
      }else{
        //si esta dentro del rango permitido se continua con las
        //operaciones
        posMouseNewY = parseInt(event.changedTouches[0].clientY);
        movil.style.marginTop = recuerdoY*-velocidad + 'px';
        canales.style.marginTop = recuerdoY*-velocidad + 'px';
        recuerdoY = IrecuerdoY + (uPosY-posMouseNewY);
      }
    }
  }

}
  window.ScrollTouch = ScrollTouch;
})( window );

console.log(window);




new ScrollTouch('zona','movil','hora','canales',1);
