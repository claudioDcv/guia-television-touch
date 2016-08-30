//RETORNO DE PETICION INICIAL deberian ser 300 canales
var canales = [{
    "name": "CNN",
    "id": 1,
    "cat": "series",
    "programas": [{
        "name": "Dragon Ball Z",
        "porcentaje": 5.8,

    }, {
        "name": "Los Super Campeones",
        "porcentaje": 10,

    }, {
        "name": "Dragon Ball GT",
        "porcentaje": 15,

    }, {
        "name": "Digimon",
        "porcentaje": 12,

    }, {
        "name": "Pokemon",
        "porcentaje": 2.5,

    }, {
        "name": "Caballeros del Zodiaco",
        "porcentaje": 16.4,

    }, {
        "name": "Pokemon",
        "porcentaje": 2.5,

    }, {
        "name": "Caballeros del Zodiaco",
        "porcentaje": 16.4,

    }, {
        "name": "Pokemon",
        "porcentaje": 2.5,

    }, {
        "name": "Caballeros del Zodiaco",
        "porcentaje": 16.4,

    }, {
        "name": "Pokemon",
        "porcentaje": 2.5,

    }, {
        "name": "Caballeros del Zodiaco",
        "porcentaje": 16.4,

    }, {
        "name": "Pokemon",
        "porcentaje": 2.5,

    }, {
        "name": "Caballeros del Zodiaco",
        "porcentaje": 16.4,

    }, {
        "name": "Ansi",
        "porcentaje": 2.5,

    }, {
        "name": "Caballeros del Zodiaco",
        "porcentaje": 16.4,

    }, {
        "name": "Pokemon",
        "porcentaje": 2.5,

    }, {
        "name": "Caballeros del Zodiaco",
        "porcentaje": 16.4,

    }, {
        "name": "Pokemon",
        "porcentaje": 2.5,

    }, {
        "name": "Caballeros del Zodiaco",
        "porcentaje": 16.4,

    }, ]
}, {
    "name": "TVN HD",
    "id": 2,
    "cat": "series",
    "programas": [{
        "name": "La Fiera",
        "porcentaje": 7,

    }, {
        "name": "Iorana",
        "porcentaje": 21.4,

    }, {
        "name": "Oro Verde",
        "porcentaje": 12,

    }, {
        "name": "Buenos dias a todos",
        "porcentaje": 18,

    }, {
        "name": "Tikiticlip",
        "porcentaje": 2.5,

    }, {
        "name": "31 Minutos",
        "porcentaje": 16.8,

    }, ]
}, {
    "name": "TVN 7.1",
    "id": 3,
    "cat": "peliculas",
    "programas": [{
        "name": "La Fiera",
        "porcentaje": 10,

    }, {
        "name": "Iorana",
        "porcentaje": 19.4,

    }, {
        "name": "Oro Verde",
        "porcentaje": 12,

    }, {
        "name": "Buenos dias a todos",
        "porcentaje": 18,

    }, {
        "name": "Tikiticlip",
        "porcentaje": 2.5,

    }, {
        "name": "31 Minutos",
        "porcentaje": 16.8,

    }, ]
}, {
    "name": "TVN",
    "id": 3,
    "cat": "peliculas",
    "programas": [{
        "name": "La Fiera",
        "porcentaje": 2,

    }, {
        "name": "Iorana",
        "porcentaje": 11.4,

    }, {
        "name": "Oro Verde",
        "porcentaje": 12,

    }, {
        "name": "Buenos dias a todos",
        "porcentaje": 18,

    }, {
        "name": "Tikiticlip",
        "porcentaje": 2.5,

    }, {
        "name": "31 Minutos",
        "porcentaje": 16.8,

    }, ]
}, {
    "name": "TVN",
    "id": 4,
    "cat": "infantil",
    "programas": [{
        "name": "La Fiera",
        "porcentaje": 2,

    }, {
        "name": "Iorana",
        "porcentaje": 11.4,

    }, {
        "name": "Oro Verde",
        "porcentaje": 12,

    }, {
        "name": "Buenos dias a todos",
        "porcentaje": 18,

    }, {
        "name": "Tikiticlip",
        "porcentaje": 2.5,

    }, {
        "name": "31 Minutos",
        "porcentaje": 16.8,

    }, ]
}, {
    "name": "13", //El Trece internaciona HD
    "id": 5,
    "cat": "noticias",
    "programas": [{
        "name": "Dragon Ball Z",
        "porcentaje": 10,

    }, {
        "name": "Los Super Campeones",
        "porcentaje": 10,

    }, {
        "name": "Dragon Ball GT",
        "porcentaje": 15,

    }, {
        "name": "Digimon",
        "porcentaje": 12,

    }, {
        "name": "Pokemon",
        "porcentaje": 2.5,

    }, {
        "name": "Caballeros del Zodiaco",
        "porcentaje": 16.4,

    }, ]
}, {
    "name": "TVN",
    "id": 6,
    "cat": "series",
    "programas": [{
        "name": "La Fiera",
        "porcentaje": 20,

    }, {
        "name": "Iorana",
        "porcentaje": 11.4,

    }, {
        "name": "Oro Verde",
        "porcentaje": 32,

    }, {
        "name": "Buenos dias a todos",
        "porcentaje": 22,

    }, {
        "name": "Tikiticlip",
        "porcentaje": 2.5,

    }, {
        "name": "31 Minutos",
        "porcentaje": 1.8,

    }, ]
}, {
    "name": "ECT TV",
    "id": 7,
    "cat": "infantil",
    "programas": [{
        "name": "Dragon Ball Z",
        "porcentaje": 10,

    }, {
        "name": "Los Super Campeones",
        "porcentaje": 10,

    }, {
        "name": "Dragon Ball GT",
        "porcentaje": 15,

    }, {
        "name": "Digimon",
        "porcentaje": 12,

    }, {
        "name": "Pokemon",
        "porcentaje": 2.5,

    }, {
        "name": "Caballeros del Zodiaco",
        "porcentaje": 16.4,

    }, ]
}, {
    "name": "TVN",
    "id": 8,
    "cat": "series",
    "programas": [{
        "name": "La Fiera",
        "porcentaje": 25,

    }, {
        "name": "Iorana",
        "porcentaje": 11.4,

    }, {
        "name": "Oro Verde",
        "porcentaje": 22,

    }, {
        "name": "Buenos dias a todos",
        "porcentaje": 18,

    }, {
        "name": "Tikiticlip",
        "porcentaje": 2.5,

    }, {
        "name": "31 Minutos",
        "porcentaje": 16.8,

    }, ]
}];
//RETORNO PETICION ORDEN POR COMUNA deberian ser 346 comunas
var orderBy = [{
    "id": "1",
    "order": [1, 2, 3, 4, 5, 6, 7, 8]
}, {
    "id": "2",
    "order": [4, 3, 2, 1, 5, 6, 7, 8]
}, {
    "id": "3",
    "order": [8, 7, 6, 5, 4, 3, 2, 1]
}, {
    "id": "4",
    "order": [1, 2, 3, 4, 8, 7, 6, 5]
}];



(function(window, undefined) {
    /* created by claudio.dcv@gmail.com */
    var ScrollTouch = function(zona, movil, hora, canales, velocidad, canalesCount) {

        var hora = document.getElementById(hora);
        this.contenerdorHora = hora;
        var box = document.getElementById(zona);
        this.box = box;
        var canales = document.getElementById(canales);
        this.listaCanales = canales;
        canales.style.marginLeft = 0;
        var movil = document.getElementById(movil);
        movil.style.marginLeft = 0;
        this.movil = movil;
        this.movil.style.height = ((canalesCount.length * 60) + 80) + 'px';

        this.canales = {};

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

        var lastX;

        function init() {
            var w = window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;
            var y = window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight;
            maximoPermitido = movil.offsetWidth - w;
            maximoPermitidoY = movil.offsetHeight - y;
        }
        init();

        function addListerners(elm) {
            elm.addEventListener('touchstart', touchstart.bind(this))
            elm.addEventListener('touchmove', touchmove.bind(this))
            elm.addEventListener('touchend', touchend.bind(this))
            elm.addEventListener('touchleave', touchend.bind(this));
        }

        addListerners(movil);
        addListerners(hora);
        addListerners(canales);

        function touchstart(event) {
            Irecuerdo = recuerdo;
            uPos = parseInt(event.changedTouches[0].clientX);

            IrecuerdoY = recuerdoY;
            uPosY = parseInt(event.changedTouches[0].clientY);
        }

        function touchend() {

        }

        function touchmove(event) {

            //si es menor a cero, no se sigue sumando el recuerdo
            //y se deja en cero el recuerdo
            if (recuerdo < 0) {
                recuerdo = 0;
                Irecuerdo = 0;
            } else {
                //si trata de superar el resultado del elemento - la ventana
                //se deja la posicion en el maximo permitido
                if (recuerdo > maximoPermitido) {
                    recuerdo = maximoPermitido;
                    Irecuerdo = maximoPermitido;
                } else {
                    //si esta dentro del rango permitido se continua con las
                    //operaciones



                    posMouseNew = parseInt(event.changedTouches[0].clientX);
                    movil.style.marginLeft = recuerdo * -velocidad + 'px';
                    hora.style.marginLeft = recuerdo * -velocidad + 'px';
                    recuerdo = Irecuerdo + (uPos - posMouseNew);

                    //RECONOCIMINETO DIRECCION MOVIMIENTO
                    if ((uPos - posMouseNew) < 60) {
                        if (posMouseNew > lastX) {
                            //console.log('>');
                            canales.style.marginLeft = '0px';
                        } else if (posMouseNew < lastX) {
                            // moved up
                            //console.log('<');
                            //console.log((uPos-posMouseNew));
                            canales.style.marginLeft = '-' + (uPos - posMouseNew) + 'px';
                        }
                    } else {
                        if (posMouseNew > lastX) {
                            //console.log('>');
                            canales.style.marginLeft = '0px';
                        } else if (posMouseNew < lastX) {
                            // moved up
                            //console.log('<');
                            //console.log((uPos-posMouseNew));
                            canales.style.marginLeft = '-' + 60 + 'px';
                        }
                    }
                    lastX = posMouseNew;

                }
            }
            if (recuerdoY < 0) {
                recuerdoY = 0;
                IrecuerdoY = 0;
            } else {
                //si trata de superar el resultado del elemento - la ventana
                //se deja la posicion en el maximo permitido
                if (recuerdoY > maximoPermitidoY) {
                    recuerdoY = maximoPermitidoY;
                    IrecuerdoY = maximoPermitidoY;
                } else {
                    //si esta dentro del rango permitido se continua con las
                    //operaciones
                    posMouseNewY = parseInt(event.changedTouches[0].clientY);
                    movil.style.marginTop = recuerdoY * -velocidad + 'px';
                    canales.style.marginTop = recuerdoY * -velocidad + 'px';
                    recuerdoY = IrecuerdoY + (uPosY - posMouseNewY);
                }
            }
        }

    }

    ScrollTouch.prototype.getHorario = function(horaInicio) {

        var vm = {};

        //separamos el horaInicio en 2 elementos
        vm.hora = horaInicio.split(':');
        //asignamos hora a hora1 y minutos a hora2
        vm.hora1 = parseInt(vm.hora[0]);
        vm.hora2 = parseInt(vm.hora[1]);

        //areglo para agregar el horarios
        vm.horas = [];

        //variable que guarda la media hora
        var media = '00';
        //variable control si la hora esterna viene con media hora o no
        var mediaBol = false;

        function formatTime(media) {
            media = (media == '00') ? media : '30';
            return (((vm.hora1 + '').length < 2) ? '0' + vm.hora1.toString() : vm.hora1) + ':' + media;
        }

        //iterador para crear las medias horas
        for (var i = 0; i < 48; i++) {
            //si la media hora es igual a 30, dejo en falso y salto al else
            //entrata si no es media hora
            if (!(vm.hora[1] == '30')) {

                if (mediaBol) {
                    media = '30';
                    vm.horas[i] = formatTime(media);
                    media = '00';
                } else {
                    //parte a los 30 minutos
                    media = '00';
                    vm.horas[i] = formatTime(media);
                    media = '30';
                }
                if (mediaBol) {
                    mediaBol = false;
                    vm.hora1++;
                } else {
                    mediaBol = true;
                }
            } else {
                if (mediaBol) {
                    media = '00';
                    vm.horas[i] = formatTime(media);
                    media = '30';
                } else {

                    //parte a los 30 minutos
                    media = '30';
                    vm.horas[i] = formatTime(media);
                    media = '00';
                }
                if (!mediaBol) {
                    mediaBol = true;
                    vm.hora1++;
                } else {
                    mediaBol = false;
                }
            }
            if (vm.hora1 > 24) {
                vm.hora1 = 1;
            }
        }



        vm.seccionDia = [];
        var lasElm = '';
        for (var i = 0; i < vm.horas.length; i++) {
            var hora = vm.horas[i];

            switch (hora) {
                case "01:00":
                    vm.seccionDia[i] = {
                        title: 'Mañana',
                        id: 'seccionDia-maniana'
                    };
                    break;
                case "12:00":
                    vm.seccionDia[i] = {
                        title: 'Tarde',
                        id: 'seccionDia-tarde'
                    };
                    break;
                case "21:00":
                    vm.seccionDia[i] = {
                        title: 'Noche',
                        id: 'seccionDia-noche'
                    };
                    break;
                default:
                    vm.seccionDia[i] = {
                        title: ' ',
                        id: 'seccionDia-' + [i]
                    };
            }

            if (i == 0 && vm.seccionDia[i].title == ' ') {
                vm.seccionDia[i] = {
                    title: 'Actual',
                    id: 'seccionDia-actual'
                };
            }
        }

        this.contenerdorHora.innerHTML = '<div>';
        for (var i = 0; i < vm.horas.length; i++) {
            this.contenerdorHora.innerHTML += '<div>' + vm.horas[i] + '</div>';
        }
        this.contenerdorHora.innerHTML += "</div>";

        this.contenerdorHora.innerHTML += '<div>';
        for (var i = 0; i < vm.seccionDia.length; i++) {
            this.contenerdorHora.innerHTML += '<div id="' + vm.seccionDia[i].id + '">' + vm.seccionDia[i].title + '</div>';
        }
        this.contenerdorHora.innerHTML += "</div>";

        return {
            seccionDia: vm.seccionDia,
            horas: vm.horas
        };
    }


    ScrollTouch.prototype.createCanales = function(canales, texto) {
        var htmlOutProgramacion = "";
        var canalesLista = "";
        this.canales = canales;
        var contEncontrados = 0;
        String.prototype.fullTrim = function() {
            return this.replace(/([\ \t]+(?=[\ \t])|^\s+|\s+$)/g, '');
        }
        texto = texto.fullTrim();


        for (var i = 0; i < this.canales.length; i++) {
            var canal = this.canales[i];



            var control = false;
            //console.log('|-----------------------------------------------------------');
            for (var j = 0; j < canal.programas.length; j++) {
                var programa = canal.programas[j];
                if (programa.name.toLowerCase().indexOf(texto.toLowerCase()) != -1) {
                    //encontro alguna coincidencia
                    //console.info('>>',programa.name);
                    control = true;
                } else {
                    //console.log('<<',programa.name);
                }

            }
            //console.log('-----------------' + control + '-----------------------------------|');

            if (control) {
                canalesLista += '<div>' + canal.name + '</div>';
                htmlOutProgramacion += '<div class="programa">';

                contEncontrados++;
            } else {
                htmlOutProgramacion += '<div class="programa programa-oculto">';
            }

            for (var j = 0; j < canal.programas.length; j++) {
                var programa = canal.programas[j];

                var styleEncontrado = '';
                if (programa.name.toLowerCase().indexOf(texto.toLowerCase()) == -1) {

                } else {
                    if (texto.length > 0) {
                        styleEncontrado = 'background:hsla(0, 0%, 100%, 0.19);';
                    } else {
                        styleEncontrado = '';
                    }

                }

                htmlOutProgramacion += '<div style="width:' + programa.porcentaje + '%;' + styleEncontrado + '">' + programa.name + '</div>';

            }



            htmlOutProgramacion += '</div>';

            this.movil.innerHTML = htmlOutProgramacion;


        }
        //console.log(this.listaCanales.innerHTML);
        //console.log(contEncontrados);

        this.movil.style.height = ((contEncontrados * 60)) + 'px';
        this.listaCanales.style.height = ((contEncontrados * 60) + 80) + 'px';

        this.listaCanales.innerHTML = canalesLista;
        //console.log(canalesLista);
        //console.log(canales);
    }
    ScrollTouch.prototype.createStyle = function() {
        var styleCSS = document.createElement("STYLE");
        var classCSS = document.createTextNode("#hora div" +
            "{display: inline-block;width: 2.0408163265%;min-height: 1px;}" +
            "#movil{margin-left:40px;padding-top:80px;}" +
            "#movil div" +
            "{white-space: nowrap;overflow: hidden;width: 100%;}" +
            "#movil .programa div:first-child" +
            "{margin-left: 60px;}" +
            "#movil div div" +
            "{    display: inline-block;height: 60px;}"
        );
        styleCSS.appendChild(classCSS);
        this.box.appendChild(styleCSS);
    };
    ScrollTouch.prototype.createLogicalSearch = function() {
        this.createCanales(canales, "");

        function buscar() {
            var txt = document.getElementById('busqueda').value || " ";
            scroll.createCanales(canales, txt);
        }

        function addListerners(elm) {
            elm.addEventListener('change', buscar)
            elm.addEventListener('blur', buscar)
            elm.addEventListener('paste', buscar)
            elm.addEventListener('keyup', buscar)
            elm.addEventListener('keydown', buscar)
            elm.addEventListener('focus', buscar)
        }


        addListerners(document.getElementById('busqueda'));
    }

    window.ScrollTouch = ScrollTouch;
})(window);


var scroll = new ScrollTouch('zona', 'movil', 'hora', 'canales', 1, canales);
scroll.createStyle();
scroll.createLogicalSearch();
var horas = scroll.getHorario('12:00');




//console.log([horas]);
