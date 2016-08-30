angular.module('app',[]);
angular.module('app')

  .directive('onFinal', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit(attr.onFinal);
                });
            }
        }
    }
  })
  .controller('ctrl',Ctrl);

  function Ctrl($scope){

    var vm = this;

    //RETORNO DE PETICION INICIAL deberian ser 300 canales
    vm.canales = [
      {
        "name" : "CNN",
        "id" : 1,
        "cat" : "series",
        "programas" : [
          {
            "name" : "Dragon Ball Z",
            "porcentaje" : 5.8,

          },
          {
            "name" : "Los Super Campeones",
            "porcentaje" : 10,

          },
          {
            "name" : "Dragon Ball GT",
            "porcentaje" : 15,

          },
          {
            "name" : "Digimon",
            "porcentaje" : 12,

          },
          {
            "name" : "Pokemon",
            "porcentaje" : 2.5,

          },
          {
            "name" : "Caballeros del Zodiaco",
            "porcentaje" : 16.4,

          },
          {
            "name" : "Pokemon",
            "porcentaje" : 2.5,

          },
          {
            "name" : "Caballeros del Zodiaco",
            "porcentaje" : 16.4,

          },
          {
            "name" : "Pokemon",
            "porcentaje" : 2.5,

          },
          {
            "name" : "Caballeros del Zodiaco",
            "porcentaje" : 16.4,

          },
          {
            "name" : "Pokemon",
            "porcentaje" : 2.5,

          },
          {
            "name" : "Caballeros del Zodiaco",
            "porcentaje" : 16.4,

          },
          {
            "name" : "Pokemon",
            "porcentaje" : 2.5,

          },
          {
            "name" : "Caballeros del Zodiaco",
            "porcentaje" : 16.4,

          },
          {
            "name" : "Ansi",
            "porcentaje" : 2.5,

          },
          {
            "name" : "Caballeros del Zodiaco",
            "porcentaje" : 16.4,

          },
          {
            "name" : "Pokemon",
            "porcentaje" : 2.5,

          },
          {
            "name" : "Caballeros del Zodiaco",
            "porcentaje" : 16.4,

          },
          {
            "name" : "Pokemon",
            "porcentaje" : 2.5,

          },
          {
            "name" : "Caballeros del Zodiaco",
            "porcentaje" : 16.4,

          },
        ]
      },
      {
        "name" : "TVN HD",
        "id" : 2,
        "cat" : "series",
        "programas" : [
          {
            "name" : "La Fiera",
            "porcentaje" : 7,

          },
          {
            "name" : "Iorana",
            "porcentaje" : 21.4,

          },
          {
            "name" : "Oro Verde",
            "porcentaje" : 12,

          },
          {
            "name" : "Buenos dias a todos",
            "porcentaje" : 18,

          },
          {
            "name" : "Tikiticlip",
            "porcentaje" : 2.5,

          },
          {
            "name" : "31 Minutos",
            "porcentaje" : 16.8,

          },
        ]
      },
      {
        "name" : "TVN 7.1",
        "id" : 3,
        "cat" : "peliculas",
        "programas" : [
          {
            "name" : "La Fiera",
            "porcentaje" : 10,

          },
          {
            "name" : "Iorana",
            "porcentaje" : 19.4,

          },
          {
            "name" : "Oro Verde",
            "porcentaje" : 12,

          },
          {
            "name" : "Buenos dias a todos",
            "porcentaje" : 18,

          },
          {
            "name" : "Tikiticlip",
            "porcentaje" : 2.5,

          },
          {
            "name" : "31 Minutos",
            "porcentaje" : 16.8,

          },
        ]
      },
      {
        "name" : "TVN",
        "id" : 3,
        "cat" : "peliculas",
        "programas" : [
          {
            "name" : "La Fiera",
            "porcentaje" : 2,

          },
          {
            "name" : "Iorana",
            "porcentaje" : 11.4,

          },
          {
            "name" : "Oro Verde",
            "porcentaje" : 12,

          },
          {
            "name" : "Buenos dias a todos",
            "porcentaje" : 18,

          },
          {
            "name" : "Tikiticlip",
            "porcentaje" : 2.5,

          },
          {
            "name" : "31 Minutos",
            "porcentaje" : 16.8,

          },
        ]
      },
      {
        "name" : "TVN",
        "id" : 4,
        "cat" : "infantil",
        "programas" : [
          {
            "name" : "La Fiera",
            "porcentaje" : 2,

          },
          {
            "name" : "Iorana",
            "porcentaje" : 11.4,

          },
          {
            "name" : "Oro Verde",
            "porcentaje" : 12,

          },
          {
            "name" : "Buenos dias a todos",
            "porcentaje" : 18,

          },
          {
            "name" : "Tikiticlip",
            "porcentaje" : 2.5,

          },
          {
            "name" : "31 Minutos",
            "porcentaje" : 16.8,

          },
        ]
      },
      {
        "name" : "13",//El Trece internaciona HD
        "id" : 5,
        "cat" : "noticias",
        "programas" : [
          {
            "name" : "Dragon Ball Z",
            "porcentaje" : 10,

          },
          {
            "name" : "Los Super Campeones",
            "porcentaje" : 10,

          },
          {
            "name" : "Dragon Ball GT",
            "porcentaje" : 15,

          },
          {
            "name" : "Digimon",
            "porcentaje" : 12,

          },
          {
            "name" : "Pokemon",
            "porcentaje" : 2.5,

          },
          {
            "name" : "Caballeros del Zodiaco",
            "porcentaje" : 16.4,

          },
        ]
      },
      {
        "name" : "TVN",
        "id" : 6,
        "cat" : "series",
        "programas" : [
          {
            "name" : "La Fiera",
            "porcentaje" : 20,

          },
          {
            "name" : "Iorana",
            "porcentaje" : 11.4,

          },
          {
            "name" : "Oro Verde",
            "porcentaje" : 32,

          },
          {
            "name" : "Buenos dias a todos",
            "porcentaje" : 22,

          },
          {
            "name" : "Tikiticlip",
            "porcentaje" : 2.5,

          },
          {
            "name" : "31 Minutos",
            "porcentaje" : 1.8,

          },
        ]
      },
      {
        "name" : "ECT TV",
        "id" : 7,
        "cat" : "infantil",
        "programas" : [
          {
            "name" : "Dragon Ball Z",
            "porcentaje" : 10,

          },
          {
            "name" : "Los Super Campeones",
            "porcentaje" : 10,

          },
          {
            "name" : "Dragon Ball GT",
            "porcentaje" : 15,

          },
          {
            "name" : "Digimon",
            "porcentaje" : 12,

          },
          {
            "name" : "Pokemon",
            "porcentaje" : 2.5,

          },
          {
            "name" : "Caballeros del Zodiaco",
            "porcentaje" : 16.4,

          },
        ]
      },
      {
        "name" : "TVN",
        "id" : 8,
        "cat" : "series",
        "programas" : [
          {
            "name" : "La Fiera",
            "porcentaje" : 25,

          },
          {
            "name" : "Iorana",
            "porcentaje" : 11.4,

          },
          {
            "name" : "Oro Verde",
            "porcentaje" : 22,

          },
          {
            "name" : "Buenos dias a todos",
            "porcentaje" : 18,

          },
          {
            "name" : "Tikiticlip",
            "porcentaje" : 2.5,

          },
          {
            "name" : "31 Minutos",
            "porcentaje" : 16.8,

          },
        ]
      }
    ];
    //RETORNO PETICION ORDEN POR COMUNA deberian ser 346 comunas
    vm.orderBy = [
      {
        "id":"1",
        "order":[1,2,3,4,5,6,7,8]
      },
      {
        "id":"2" ,
        "order":[4,3,2,1,5,6,7,8]},
      {
        "id":"3",
        "order":[8,7,6,5,4,3,2,1]},
      {
        "id":"4",
        "order":[1,2,3,4,8,7,6,5]}
    ];

    //ORDENAMIENTO POR COMUNA
    vm.idBuscado = 1;
    vm.orderByComuna = function(idComuna){
      vm.idBuscado = idComuna;
      //arreglo temporal para reordenar
      var arregloCanalesRetorno = [];
      //este for recorre el array de ordeamiento y selecciona el que
      //coincide con el parametro idComuna
      for (var i = 0; i < vm.orderBy.length; i++) {
        //ingresa al if si existe la coincidencia
        if (vm.orderBy[i].id == idComuna) {
          //for recorre cada elemento del indice order del array de ORDENAMIENTO
          for (var j = 0; j < vm.orderBy[i].order.length; j++) {
            //guardo en una variable el numero del elemento dentro del arreglo
            //actual
            var idActual = vm.orderBy[i].order[j];
            //For que recorrere los canales
            for (var l = 0; l < vm.canales.length; l++) {
              //guardo el id del canal que estoy viendo
              var canalActual = vm.canales[l].id;
              //si el idActual tiene coincidencia con el id del canal
              //lo guardo en el arreglo temporal
              if (canalActual == idActual)
                arregloCanalesRetorno.push(vm.canales[l]);
            }
          }
        }
      }
      //Seteo el arreglo de canales con el orden nuevo
      //console.log(arregloCanalesRetorno);
      vm.canales = arregloCanalesRetorno;

    }

    //SETEO DE CANALES EN VARIABLE TEMPORAL
                //antiguo copia en nuevo
    vm.canalesTemporal = [];
    angular.copy(vm.canales,vm.canalesTemporal);

    //SETEO CANALES FILTRADOR POR categoria
    vm.canalesTemporalCat = [];
    angular.copy(vm.canales,vm.canalesTemporalCat);

    vm.filerNameCat = '*';
    vm.filterByCategory = function(catName){
      vm.filerNameCat = catName;
      console.log('filterByCategory');

      var arregloCanalesRetorno = [];
          angular.copy(vm.canalesTemporal,vm.canales);
      if (catName != '*') {
        console.log(catName);
        //arreglo temporal para el filtro
        for (var i = 0; i < vm.canales.length; i++) {
          if (vm.canales[i].cat == catName) {
            arregloCanalesRetorno.push(vm.canales[i]);
          }
        }

        angular.copy(arregloCanalesRetorno,vm.canales);
        angular.copy(arregloCanalesRetorno,vm.canalesTemporalCat);
        //vm.canales = arregloCanalesRetorno;
      }else{
        console.log('*');
        for (var i = 0; i < vm.canales.length; i++) {
            arregloCanalesRetorno.push(vm.canales[i]);
        }

        angular.copy(arregloCanalesRetorno,vm.canales);
        angular.copy(arregloCanalesRetorno,vm.canalesTemporalCat);
      }

      vm.buscar();

    }


    //"cat" : "series","noticias","peliculas","infantil"

    vm.horaInicio = '22:30';

    vm.hora = vm.horaInicio.split(':');

    vm.hora1 = vm.hora[0]*1;
    vm.hora2 = vm.hora[1]*1;

    vm.horas = [];

    var media = '00';
    var mediaBol = false;

    function formatTime(media){
      media = (media == '00')?media : '30';
      return (((vm.hora1+'').length < 2)?'0'+vm.hora1.toString():vm.hora1) + ':' + media;
    }

    for (var i = 0; i < 48; i++) {
      //parte a la hora exacta
      if (!(vm.hora[1] == '30')) {

        if (mediaBol) {
          media = '30';
          vm.horas[i] = formatTime(media);
          media = '00';
        }else{
          //parte a los 30 minutos
          media = '00';
          vm.horas[i] = formatTime(media);
          media = '30';
        }
        if (mediaBol) {
          mediaBol = false;
          vm.hora1++;
        }else{
          mediaBol = true;
        }
      }else{
        if (mediaBol) {
          media = '00';
          vm.horas[i] = formatTime(media);
          media = '30';
        }else{

          //parte a los 30 minutos
          media = '30';
          vm.horas[i] = formatTime(media);
          media = '00';
        }
        if (!mediaBol) {
          mediaBol = true;
          vm.hora1++;
        }else{
          mediaBol = false;
        }
      }
      if (vm.hora1 > 24) {
        vm.hora1 = 1;
      }
    }
    console.log(vm.horas);


    vm.seccionDia = [];
    var lasElm = '';
    for (var i = 0; i < vm.horas.length; i++) {
      var hora = vm.horas[i];

      switch (hora) {
        case "01:00":
            vm.seccionDia[i] = {
              title: 'MaÃ±ana',
              id : 'seccionDia-maniana'
            };
          break;
        case "12:00":
            vm.seccionDia[i] = {
              title: 'Tarde',
              id : 'seccionDia-tarde'
            };
          break;
        case "21:00":
            vm.seccionDia[i] = {
              title: 'Noche',
              id : 'seccionDia-noche'
            };
          break;
        default:
          vm.seccionDia[i] = {
            title: ' ',
            id : 'seccionDia-' + [i]
          };
      }

      if (i == 0 && vm.seccionDia[i].title == ' ') {
        vm.seccionDia[i] = {
          title:'Actual',
          id : 'seccionDia-actual'
        };
      }
    }
    console.log(vm.seccionDia);

    var cacheGuia = vm.canalesTemporalCat;
    //angular.copy(vm.canales,cacheGuia);

    console.log(cacheGuia);
    vm.buscar = buscar;
    function buscar(){

      angular.copy(vm.canalesTemporalCat,vm.canales);
        //Extend String quita espacios inicio final mas de un espacio en medio
        String.prototype.fullTrim = function(){
          return this.replace(/([\ \t]+(?=[\ \t])|^\s+|\s+$)/g, '');
        }
        //((vm.busqueda.fullTrim() == "*")? "" : vm.busqueda.fullTrim())
        var texto = vm.busqueda || "";
        texto = texto.fullTrim();
        //console.log(texto);
        for (var i = 0; i < vm.canales.length; i++) {
          var showOrHidden = false;
          var programas = cacheGuia[i].programas;
          //console.log(vm.canales[i].name);

          for (var j = 0; j < programas.length; j++) {
            var programa = programas[j].name;
            //console.log(programa);

            //console.log(programa.indexOf(texto));
            if (programa.toLowerCase().indexOf(texto.toLowerCase()) == -1) {
              //vm.canales[i].style = "display:none;";
              //console.log(vm.canales[i].style);
              //console.log('no coincide',programa)
            }else{

              vm.canales[i].programas[j].style = "background:#FF9800;outline: solid 1px red;";
              //console.log('coincide',programa)
              showOrHidden = true;
            }

          }

          if (showOrHidden) {
            vm.canales[i].style = "display:block;";
          }else{
            vm.canales[i].style = "display:none;";
          }

          //console.log(cacheGuia);

          if (texto.length < 1) {
             angular.copy(cacheGuia,vm.canales);
           }

           //vm.filterByCategory(vm.filerNameCat);
          //else{
          //   angular.copy(cacheGuia,vm.canales);
          // }
        }

    }

    var obj = document.getElementById('guia-programacion');
    var horarioAnimado = document.getElementById('container-horario-scroll-programado');
    var init = parseFloat(horarioAnimado.style.marginLeft.replace('px',''));
    var canalesName = document.getElementById('guia-container-name-canal');
    //horarioAnimado.style.marginLeft = "40px";

    obj.addEventListener('scroll',function(e){
      var elm = obj;
      var lcsl = elm.scrollLeft;
      var lcst = elm.scrollTop;
      var s = elm.scrollWidth;
      var c = elm.clientWidth;

      horarioAnimado.scrollLeft = lcsl;
      canalesName.scrollTop = lcst;
      //console.log(horarioAnimado,elm.scrollLeft);
    });


    canalesName.addEventListener('scroll',function(e){
      var elm = canalesName;
      var lcsl = elm.scrollLeft;
      var lcst = elm.scrollTop;
      var s = elm.scrollWidth;
      var c = elm.clientWidth;

      //horarioAnimado.scrollLeft = lcsl;
      obj.scrollTop = lcst;
      //console.log(horarioAnimado,elm.scrollLeft);
    });

    // canalesName.addEventListener('scroll',function(e){
    //   var elm = canalesName;
    //   var lcsl = elm.scrollLeft;
    //   var s = elm.scrollWidth;
    //   var c = elm.clientWidth;
    //
    //   document.getElementById('canales-container-hijo').scrollTop = lcsl;
    //   console.log(elm.scrollTop);
    // });


    var containerPrincipalHorario = document.getElementById('container-horario-scroll-programado');
    var containerPrincipalHorarioScrollActual = 0;
    containerPrincipalHorario.addEventListener('scroll',function(e){
      var elm = containerPrincipalHorario;
      var lcsl = elm.scrollLeft;
      var s = elm.scrollWidth;
      var c = elm.clientWidth;

      obj.scrollLeft = lcsl;
      //console.log(elm.scrollLeft);
      var showHide = document.getElementById('canales-container-name');
      if (containerPrincipalHorarioScrollActual > lcsl) {
        console.log('<');

        //showHide.style.display = "block";
        //showHide.style.marginLeft = lcsl + "px";
        if (lcsl <= 40) {
          showHide.className = "canales-container canales-container-name";
        }else{
          setTimeout(function(){
            showHide.className = "canales-container canales-container-name";
          },550);
        }

      }else{
        if (lcsl > 40) {

          console.log('>');
          showHide.className = "canales-container canales-container-name canal-name-hide-show";
          //showHide.style.marginLeft = "0px";
          setTimeout(function(){
            //showHide.style.display = "none";
          },550);
        }else{
          showHide.style.marginLeft = showHide.style.marginLeft;
          console.log(showHide.style.marginLeft);
        }

      }
      containerPrincipalHorarioScrollActual = containerPrincipalHorario.scrollLeft;
    });



    $scope.$on('finRepeat', function(ngRepeatFinishedEvent) {
        //you also get the actual event object
        //do stuff, execute functions -- whatever...
        var h = window.innerHeight;
        document.querySelector('.guia-container').style.height = (h-90) + "px";

        var altura = document.querySelector('.canales-container.canales-container-name').offsetHeight;

        //guia-container-name-canal
        document.querySelector('#guia-container-name-canal').style.height = (h-90) + "px";
        document.querySelector('.canales-container-hijo').style.height = altura + "px";
        document.querySelector('.horario-inside').style.height = (altura+20) + "px";
        console.log(altura);
    });




    var actual = document.getElementById('actual');
    actual.addEventListener('click',function(){
      console.log('actual');
        scrollTo(obj,0,100);
    });
    var maniana = document.getElementById('maniana');
    maniana.addEventListener('click',function(){
        scrollTo(obj,obtainPositionSectionDay('seccionDia-maniana'),100);
    });
    var tarde = document.getElementById('tarde');
    tarde.addEventListener('click',function(){
      scrollTo(obj,obtainPositionSectionDay('seccionDia-tarde'),100);
    });
    var noche = document.getElementById('noche');
    noche.addEventListener('click',function(){
      scrollTo(obj,obtainPositionSectionDay('seccionDia-noche'),100);
    });


    function obtainPositionSectionDay(id){
      var elmOut = document.getElementById(id);
      var hijos = elmOut.parentElement.children;
      var distancia = 0;
      for (var i = 0; i < hijos.length; i++) {
        var item = hijos[i];

        if (elmOut.id == item.id) {
          break;
        }
        distancia += hijos[0].offsetWidth;
      }
      console.log(distancia);
      return distancia;
    }

    function scrollTo(element, to, duration) {
      console.log(to,duration);

      console.log(element.scrollLeft);

      if (duration <= 0) return;
      var difference = to - element.scrollLeft;
      var perTick = difference / duration * 10;

      setTimeout(function() {
        element.scrollLeft = element.scrollLeft + perTick;
        if (element.scrollLeft == to) return;
        scrollTo(element, to, duration - 10);
      },30);
      // setTimeout(function() {
      //   element.scrollLeft = element.scrollLeft + perTick;
      //   if (element.scrollLeft == to) return;
      //   scrollTo(element, to, duration - 10);
      // }, 10);

    }

  }
