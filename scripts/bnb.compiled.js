"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var cleaningConfig = [{
  section_name: ["Entrada"],
  tasks: [{
    text: ["Para encontrar la entrada del fraccionamiento, busque en google maps: Caseta Real del Sol ii."],
    content: "maps.png"
  }, {
    text: ["Recibiran un codigo QR que abre la reja del fraccionamiento."]
  }, {
    text: ["Entre al fraccionamiento, de  un giro a la izquierda, seguido por uno a la derecha, y siga hasta el fondo. Es la casa blanca que se ve hasta el final. Dirección es Real de Grijalva 8987"],
    content: "view.jpeg"
  }, {
    text: ["Recibiran un codigo de acceso para la puerta principal de la casa."],
    content: "keypad_esp.png"
  }]
}, {
  section_name: ["Iniciales/Generales"],
  tasks: [{
    text: ["Favor de asegurarse que este la tarjetita blanca. Favor de decirme si no esta, es muy importante"],
    content: "entrada.png"
  }, {
    text: ["En este cajon al fondo encontraran una llave verde. Esta abre el cuartito de atras. Favor de regresarla a su lugar cuando ya no se este usando."],
    content: "cuartito_key.png"
  }, {
    text: ["En el cuartito de atras tratamos de tener las cosas organizadas, tome todo lo que vaya a requerir y al finalizar regreselas a su lugar por favor"],
    content: "cuarto_limpieza.png"
  }, {
    text: ["Visitar cada cuarto y empezar con la lavadera de las camas/sabanas que hayan sido usadas. Tambien las toallas, trapos de los baños, etc. Esto es critico ya que es lo que mas tiempo tomara. Favor de no cargar de mas la lavadora."],
    content: "lavadora.png"
  }, {
    text: ["Son dos camas queens, favor de cambiar sabanas/colcha/funda de las que fuero usadas y ponerle limpias. Las limpias deberan de estar en el armario del cuarto principal"]
  }, {
    text: ["Trate de incluir a la lavadora (o hacer una especial) para los trapos que se hayan usado en la limpieza pasada, asi para irlos rotando"]
  }, {
    text: ["Sacar basuras de cuartos y baños, dejar los botes vacios y con bolsas"]
  }, {
    text: ["Al finalizar, tratar de dejar las ventanas, persianas y cortinas cerradas"]
  }]
}, {
  section_name: ["Sala"],
  tasks: [{
    text: ["Limpiar, verificar, que esten bien y que esten en especial: Tele, Google Cast, Control, Decoraciones"],
    content: "sala_1.png"
  }, {
    text: ["Limpiar sofa, verificar que no haya manchas o rotaduras en cogines o sofa"],
    content: "sala_2.png"
  }, {
    text: ["Verificar camara, que este conectada y prendida, esta en la ventana cerca de la palmera"]
  }, {
    text: ["Verificar que esta extension este conectada y que tenga ese aparatito conectado, FAVOR DE APAGAR Y PRENDER LA EXTENSION YA QUE ES NECESARIA PARA QUE SIRVA LA PUERTA PRINCIPAL."],
    content: "candado.jpg"
  }]
}, {
  section_name: ["Comedor"],
  tasks: [{
    text: ["Limpiar el comedor"]
  }, {
    text: ["Verificar que la camara de la puerta trasera este bien y conectada"]
  }, {
    text: ["Verificar que la el centro de mesa tenga lo princial: sal, pimienta, jarroncitos"]
  }, {
    text: ["Verificar que la mesa y sillas no tengan algun daño o mancha grave fresca"]
  }, {
    text: ["Verificar que esten las decoraciones"],
    content: "comedor.jpg"
  }]
}, {
  section_name: ["Cocina"],
  tasks: [{
    text: ["Limpiar cocina y estufa"],
    content: "cocina.jpg"
  }, {
    text: ["Verificar que el refrigerador y congelador esten limpios, tirar todo lo que este abierto o caducando. Se pueden dejar aguas y sodas cerradas. Favor de tirar o llevarse lo demas si le interesa"]
  }]
}, {
  section_name: ["Baños"],
  tasks: [{
    text: ["Limpiar y rellenar lo necesario en los baños"],
    content: "banos.jpg"
  }, {
    text: ["En regaderas, favor de rellenar el shampoo y jabón liquido (body wash). No dejar que baje de la mitad. El shampoo es el blanco y el jabon el mas rosado"],
    content: "bano1.jpg"
  }, {
    text: ["Rellenar este baño - Favor de agregar un poco de agua y revolver para que dure mas y para que sea mas facil de dispensar (1/8 agua 7/8 limpiador)"],
    content: "bano2.jpg"
  }, {
    text: ["En todos los baños, rellenar o mantener lo mas lleno posible el jabon de mano liquido - todos estos limpiadores estaran en el cuartito para rellenar"],
    content: "cuarto_limpieza_2.jpg"
  }, {
    text: ["Acomodar los gabinetes de los baños, el baño del cuarto principal tiene varias cosas como botiquin de salud, o qtips"]
  }, {
    text: ["Dejar un rollo de papel nuevo puesto en cada ba\xF1o. Dejar nada mas 1 rollo extra por cada 2 dias extras que se quedan o estadia es de tres dias o mas.\n                2 dias: 3 rollos de papel en total\n                3 dias: 4 rollos de papel en total\n                4 dias: 4 rollos de papel en total\n                5 dias: 5 rollos de papel en total\n                6 dias: 5 rollos de papel en total\n                7 dias: 6 rollos de papel en total\n                "]
  }]
}, {
  section_name: ["Oficina"],
  tasks: [{
    text: ["Ver que monitor este bien, cables esten en orden y ahi (HDMI y luz). Que el jarroncito de tequila este ahi. Que la plantita este bien. Hacer sillon cama en sillon si es necesario"],
    content: "oficina1.jpg"
  }, {
    text: ["Ver que el burosito este bien, que los libros esten ahi, que extension y wifi (pegado al buro) esten prendidos, que los jarrones y decoraciones esten bien y completos"]
  }, {
    text: ["Ver que ambas canastitas esten bien."],
    content: "oficina2.jpg"
  }, {
    text: ["Verificar que el balcon este cerrado con los dos candados, y que la llave este en su lugar o regresarla (tapa azul)"]
  }, {
    text: ["Verificar que proyector este bien, ver que google cast este ahi, y el control"],
    content: "oficina3.jpg"
  }]
}, {
  section_name: ["Salida"],
  tasks: [{
    text: ["Apagar aire o calefaccion"],
    content: "calenton.jpeg"
  }, {
    text: ["Dejar tarjetitas de la entrada en su lugar. Avisarme si no hay una"],
    content: "tarjetitas.jpeg"
  }, {
    text: ["Regresar cosas de limpieza al cuartito de atras, cerrarlo, y regresar llave a su lugar inicial"],
    content: "cuartito_key.png"
  }, {
    text: ["Favor de asegurarse que todas las puertas y candados esten cerrados. Tambien las ventanas y persianas. Dejar dos ventanas de baño un poquitito abiertas"]
  }, {
    text: ["Mandeme un mesajito diciendo que ya va de salida y porfavor mandeme una reseña del 1-5 de que tan limpio encontro el lugar para calificar al huesped en Airbnb"]
  }]
}];
var bnbConfig = [{
  section_name: ["Entrada", "Entrance"],
  url: "entrada",
  tasks: [{
    text: ['Para encontrar la entrada del fraccionamiento, busque en google maps "Caseta Real del Sol ii."', 'To find the community\'s entrance, Search "Caseta Real Del Sol ii" in Google Maps.'],
    content: "maps.png",
    url: 'https://www.google.com/maps/place/Caseta+real+del+sol+ll/@31.6848077,-106.4031855,17z/data=!3m1!4b1!4m6!3m5!1s0x86e75d22192f8157:0x59a20a4c312ddcbd!8m2!3d31.6848077!4d-106.4006106!16s%2Fg%2F11rpbslf30?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D'
  }, {
    text: ["Recibirán un código QR que abre la reja del fraccionamiento solo la primeras 3 entradas el dia de su llegada. Solo funciona en carro, si llegara a pie favor de informarme", "We will send you a QR code that will open the community's gate for 3 times your first day only. Only works for car entrance, if you are arriving by foot, please let me know"]
  }, {
    text: ["Entre al fraccionamiento, de un giro a la izquierda, seguido por uno a la derecha, y siga hasta el fondo. Es la casa blanca que se ve hasta el fondo. Real de Grijalva 8987", "After entering the gate, turn left instantly, followed by a right turn, then keep going straight down the street. It's the white house that's down the road. Real de Grijalva 8987"],
    content: "view.jpeg"
  }, {
    text: ["Recibiran un código de acceso para la puerta principal de la casa antes de su entrada (1:50pm). Este código les servira durante toda su estadía hasta su hora de salida (9:00am). Favor de tratar de manternar las otras puertas cerradas y con seguro.", "You will be receiveng an access code before your check-in (1:50pm) which should open the house's front door. You will be using this code throughout your stay until your check-out (9:00am). Please try to maintain the other doors closed and locked."],
    content: ["keypad_esp.png", "keypad.png"]
  }, {
    text: ["Al entrar vera una tarjeta blanca, esta le servira para abrir la reja del fraccionamiento en carro en vez del código QR por el resto de su estadia. FAVOR DE CUIDARLA YA QUE SE LES TENDRA QUE COBRAR EN CASO DE SER EXTRAVIADA", "You should see a small white card right after entering, which will serve you to open the community's car gate for the rest of your stay. PLEASE TAKE CARE OF IT SINCE WE WILL HAVE TO CHARGE YOU IN CASE IT GETS LOST"]
  }, {
    text: ["El fraccionamiento cuenta con una puerta peatonal, la cual usa un codigo de 6 digitos para entrar que cambian cada día. Si lo requiere, favor de pedirmelo. Tambien se usa en caso de Uber o UberEats. La seguridad del fraccionamiento es estricta en este tema.", "The community's gate also counts with a pedestrian door, which uses a 6 digits code that changes every day. If you require it, please ask me for it. This code is also used for Uber or UberEats. The community's guard is very strict on this topic."]
  }, {
    text: ["La calefaccion es el control blanco de arriba. El aire acondicionado es el control amarillo de abajo. El aire esta desabilitado en invierno y vice versa", "You can control the heater with the upper white controller. The AC is controlled with the bottom yellow controller. The AC is disabled during winter and vice-versa."],
    content: "air.jpg"
  }, {
    text: ["WIFI: INFINITUM1BA2_2.4 | Contraseña: W27cgBX3M9", "WIFI: INFINITUM1BA2_2.4 | Password: W27cgBX3M9"]
  }]
}, {
  section_name: ["Cocina", "Kitchen"],
  url: "cocina",
  tasks: [{
    text: ["Aqui estan las cosas en la cocina.", "This is where the different kitchen items are located at."],
    content: "cocina.jpg"
  }]
}, {
  section_name: ["Sala", "Living Room"],
  url: "sala",
  tasks: [{
    text: ["Disfrute de la sala. La tele toma ~1 minuto de prenderla en tomar internet para accesar las apps or el google cast. Para el google cast cambie el Input a HDMI 1.", "Enjoy the living room. The TV takes ~1 minute from turning it on to detect the wifi in order to access the apps or google cast. Switch the input to HDMI 1 to cast into the TV."],
    content: "sala.jpg"
  }, {
    text: ["Por favor de no desconectar las conecciones detras de la palmera. Uno es de la camara.", "Please do not unplug any of the sockets behind the palm tree, one of them is for the outdoor camera."]
  }, {
    text: ["Favor de no desconectar esta extension ni el aparato que esta pegado, ya que es necesario para que funcione la puerta principal.", "Please do not unplug this extension or the device attached to it, since it is necessary for the front door to work."],
    content: "candado.jpg"
  }]
}, {
  section_name: ["Baños", "Restrooms"],
  url: "bano",
  tasks: [{
    text: ["Favor de tirar el papel de baño al inodoro, no al bote de basura. Moderadamente.", "Please dispose of toilet paper inside the toilet, not the trash can. Moderately."]
  }, {
    text: ["Shampoo y Jabon estan en la regadera. El Shampoo esta mas pegado a la pared.", "You can find Shampoo and Body Wash in the shower. Shampoo is closer to the wall."],
    content: "bano1.jpg"
  }, {
    text: ["Shampoo y Jabon de cuerpo.", "Shampoo and Body Wash."],
    content: "bano2.jpg"
  }]
}, {
  section_name: ["Check-Out", "Check-Out"],
  url: "check-out",
  tasks: [{
    text: ["Favor de regresar las llaves a su lugar, cerrar puertas, ventanas, candados, apagar aparatos electronicos, conectar cosas que pudieron haber desconectado.", "Please return any keys you could've used to their original place, including the gate's card, close doors, close windows, lock external locks, turn off electronics, plug anything that couldve been unplugged."],
    content: "entrada.png"
  }, {
    text: ["Favor de regresar las llaves del balcon a su lugar original.", "Please return the balcony's key back to its original place."],
    content: "oficina2.jpg"
  }, {
    text: ["Favor de dejar las camas que fueron usadas destendidas, esto nos facilitara la tarea de limpieza!", "Please leave unattended all the beds that where used during your stay. This will make our cleanup process a bit easier."]
  }, {
    text: ["Favor de limpiar y ordenar un poco las areas que se usaron. Recoger basuras.", "Please pick up after yourself."]
  }, {
    text: ["Favor de apagar el aire acondicionado, calefaccion, o luces.", "Please turn off the AC, heater system, or any light left."],
    content: "calenton.jpeg"
  }, {
    text: ["Favor de mandarme un mensaje de que ya han salido de la casa.", "Please let me know when you've left the property."]
  }, {
    text: ["Gracias por tu visita y buen viaje!", "Thank you for your visit and have a nice trip!"]
  }, {
    text: ["Por favor no olvide dejarnos un review en Airbnb si su estadia fue de su agrado, nos ayudara mucho!", "Please don't forget to leave a review if you had an awesome stay, it will be very helpful!"]
  }]
}];
var _sitesUrl = "https://mvg35.github.io/bnb";
var Tabs = /*#__PURE__*/function (_React$Component) {
  function Tabs() {
    var _this;
    _classCallCheck(this, Tabs);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Tabs, [].concat(args));
    _defineProperty(_this, "state", {
      lang: 0,
      modals: null,
      sidenavs: null
    });
    _defineProperty(_this, "_cleanPathName", "/clean");
    return _this;
  }
  _inherits(Tabs, _React$Component);
  return _createClass(Tabs, [{
    key: "isCleaning",
    value: function isCleaning() {
      return window.location.pathname === this._cleanPathName;
    }
  }, {
    key: "handleLanguageClick",
    value: function handleLanguageClick() {
      this.setState({
        lang: this.state.lang ? 0 : 1
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var modalElems = document.querySelectorAll(".modal");
      var sidenavElems = document.querySelectorAll(".sidenav");
      document.querySelector(".tablinks").children[0].click();
      this.setState({
        modals: M.Modal.init(modalElems),
        sidenavs: M.Sidenav.init(sidenavElems)
      }, function () {
        _this2.state.sidenavs[0].open();
        var location = window.location.href;
        if (location.indexOf("#") > -1) {
          var reg = location.substring(location.indexOf("#") + 9, location.length);
          document.querySelectorAll(".tablinks a")[String(reg)].click();
        } else {
          _this2.state.modals[0].open();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var config = this.isCleaning() ? cleaningConfig : bnbConfig;
      var greetings = this.isCleaning() ? ["Hola y gracias por ayudarnos con la limpieza de este AirBNB"] : ["Hola y bienvenido a su casa por los siguientes días", "Hello and welcome to your home for the following days"];
      var warnings = this.isCleaning() ? ["\n          Gracias por ayudarnos con esta tarea. La meta es dejar la casa limpia, barrida, trapeada, desinfectada y sacudida en general | \n          Favor de avisarme cuando se este acabando un producto, si ya no aguanta otras 3 limpiadas o rellenos | \n      "] : ["", ""];
      var general = ["", ""];
      var continua = ["Continuar", "Continue"];
      var inicio = ["Inicio", "Start"];
      return /*#__PURE__*/React.createElement("div", {
        className: "main-tab-div"
      }, /*#__PURE__*/React.createElement("div", {
        className: "container",
        style: {
          textAlign: "center"
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "modal modal-fixed-footer",
        style: {
          height: "80%",
          maxHeight: "80%"
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "modal-content"
      }, /*#__PURE__*/React.createElement("h5", null, greetings[this.state.lang]), /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col s12"
      }, /*#__PURE__*/React.createElement("a", {
        href: "https://airbnb.com/h/lacasitaconsulado",
        target: "_blank"
      }, /*#__PURE__*/React.createElement("img", {
        style: {
          width: "60%"
        },
        className: "responsive-img",
        src: "/media/airbnb/initial.jpeg"
      })))), /*#__PURE__*/React.createElement("p", null, warnings[this.state.lang], general[this.state.lang]), this.isCleaning() ? "" : /*#__PURE__*/React.createElement("a", {
        className: "waves-effect waves-light btn-small",
        onClick: function onClick() {
          return _this3.handleLanguageClick();
        }
      }, this.state.lang ? "Español" : "English")), /*#__PURE__*/React.createElement("div", {
        className: "modal-footer"
      }, /*#__PURE__*/React.createElement("a", {
        className: "modal-close waves-effect waves-green btn-flat"
      }, continua[this.state.lang])))), /*#__PURE__*/React.createElement("div", {
        style: {
          height: "100%"
        }
      }, /*#__PURE__*/React.createElement("ul", {
        id: "slide-out",
        className: "sidenav"
      }, /*#__PURE__*/React.createElement("div", {
        className: "user-view"
      }, /*#__PURE__*/React.createElement("a", {
        href: "https://airbnb.com/h/lacasitaconsulado",
        target: "_blank"
      }, /*#__PURE__*/React.createElement("img", {
        style: {
          height: "9em",
          marginBottom: "2em"
        },
        className: "responsive-img",
        src: "/media/airbnb/logo.jpg"
      }))), config.map(function (con, index) {
        return /*#__PURE__*/React.createElement("li", {
          key: index,
          className: "tablinks"
        }, /*#__PURE__*/React.createElement("a", {
          className: "waves-effect",
          id: "section-" + index,
          onClick: function onClick(event) {
            return _this3.tabClick(event, con.section_name[_this3.state.lang]);
          }
        }, con.section_name[_this3.state.lang]));
      }), /*#__PURE__*/React.createElement("li", {
        style: {
          marginTop: "2em"
        }
      }, /*#__PURE__*/React.createElement("a", {
        className: "waves-effect",
        onClick: function onClick() {
          return _this3.state.modals[0].open();
        },
        style: {
          color: "gray"
        }
      }, inicio[this.state.lang]))), /*#__PURE__*/React.createElement("a", {
        "data-target": "slide-out",
        className: "sidenav-trigger btn-floating btn-large waves-effect waves-light red",
        style: {
          marginTop: "1em",
          marginLeft: ".6em"
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: "material-icons"
      }, "menu")), /*#__PURE__*/React.createElement("div", {
        className: "tab-content-div"
      }, config.map(function (con, index) {
        return /*#__PURE__*/React.createElement("div", {
          id: con.section_name[_this3.state.lang],
          className: "tabcontent",
          key: index
        }, /*#__PURE__*/React.createElement("h4", null, con.section_name[_this3.state.lang]), con.tasks.map(function (task, index) {
          return /*#__PURE__*/React.createElement("div", {
            key: index
          }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
            type: "checkbox"
          }), /*#__PURE__*/React.createElement("span", {
            style: {
              height: "auto",
              marginBottom: "1em"
            }
          }, _this3.state.lang === 1 && task.text.length === 2 ? task.text[_this3.state.lang] : task.text[0])), /*#__PURE__*/React.createElement("div", null, task.content ? _this3.renderContent(task) : ""));
        }));
      }))));
    }
  }, {
    key: "renderContent",
    value: function renderContent(task) {
      var image = Array.isArray(task.content) ? task.content[this.state.lang] : task.content;
      return /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col m6 offset-m3 s10 offset-s1"
      }, task.url ? /*#__PURE__*/React.createElement("a", {
        href: task.url,
        target: "_blank"
      }, /*#__PURE__*/React.createElement("img", {
        className: "responsive-img",
        src: "/media/airbnb/".concat(image)
      })) : /*#__PURE__*/React.createElement("img", {
        className: "responsive-img",
        src: "/media/airbnb/".concat(image)
      })));
    }
  }, {
    key: "tabClick",
    value: function tabClick(event, sectionName) {
      // Declare all variables
      var i, tabcontent, tablinks;

      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }

      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      //window.location.search = `#${sectionName}`;

      // Show the current tab, and add an "active" class to the link that opened the tab
      document.getElementById(sectionName).style.display = "block";
      event.currentTarget.parentElement.className += " active";
      if (this.state.sidenavs) {
        var that = this;
        setTimeout(function () {
          that.state.sidenavs[0].close();
        }, 500);
      }
    }
  }]);
}(React.Component);
ReactDOM.render(/*#__PURE__*/React.createElement(Tabs, null), document.getElementById("react-div"));
