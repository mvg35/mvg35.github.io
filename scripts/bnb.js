const cleanConfig = [
    {
        section_name: 'Entrada', tasks: [
            { text: 'Busque en google maps: Caseta Real del Sol ii, asi llegara seguro', content: '' },
            { text: 'En la caseta, Hablar con guardia para que los deje pasar, se tendran que bajar a presionar un boton y listo. Direccion es Real de Grijalva 8987', content: '' },
            { text: 'Entre al fracc, dele al fondo, luego giro a la izquierda y al fondo de nuevo. Es la antepenultima casa. Blanca con dos arboles grandes', content: '' },
            { text: 'Se les enviara un codigo de acceso para la puerta principal de la casa. Solo se podra usar una vez asi que asegurese de dejar una puerta abierta mientras esta ahi. La puerta de enfrente se cierra sola despues de 60 segundos de estar cerrada' },
        ]
    },
    {
        section_name: 'Iniciales/Generales', tasks: [
            { text: 'Favor de asegurarse que este la tarjetita escrita y la otra. Favor de decirme si una no esta, la segunda es muy importante', content: 'entrada.png' },
            { text: 'Visitar cada cuarto y empezar con la lavadera de las camas/sabandas que hayan sido usadas. Tambien las toallas, trapos de los baños, etc. Esto es critico ya que es lo que mas tiempo tomara', content: 'lavadora.png' },
            { text: 'Trate de incluir a la lavadora (o hacer una especial) para los trapos que se hayan usado en la limpieza pasada, asi para irlos rotando' },
            { text: 'Sacar basuras de cuartos, dejar los botes vacios' },
            { text: 'Al finalizar, tratar de dejar las ventanas, persianas y cortinas cerradas' },
            { text: 'En este gabinete al fondo encontrara esta llave, la cual abre el cuartito de atras donde esta todo lo necesario para la limpieza', content: 'cuartito_key.png' },
            { text: 'En el cuartito de atras tratamos de tener las cosas organizadas, tome todo lo que vaya a requerir y al finalizar regreselas a su lugar por favor', content: 'cuarto_limpieza.png' },
        ]
    },
    {
        section_name: 'Sala', tasks: [
            { text: 'Limpiar, verificar, que esten bien y que esten en especial: Tele, Google Cast, Control, Decoraciones', content: 'sala_1.png' },
            { text: 'Limpiar sofa, verificar que no haya manchas o rotaduras en cogines o sofa', content: 'sala_2.png' },
            { text: 'Verificar camara, que este conectada y prendida, esta en la ventana cerca de la palmera' },
            { text: 'Mover sofa, y verificar que esta extension este conectada y que tenga ese aparatito conectado', content: 'candado.jpg' },
        ]
    },
    {
        section_name: 'Comedor', tasks: [
            { text: 'Verificar que la camara de la puerta trasera este bien y conectada'},
            { text: 'Verificar que la el centro de mesa tenga lo princial: sal, pimienta, jarroncitos'},
            { text: 'Verificar que la mesa y sillas no tengan algun daño o mancha grave'},
            { text: 'Verificar que esten las 4 decoraciones, 3 patitos', content: 'comedor.jpg' },
        ]
    },
    // {
    //     section_name: 'Cocina', tasks: [
    //         { text: 'Verificar que la camara de la puerta trasera este bien y conectada'},
    //         { text: 'Verificar que la el centro de mesa tenga lo princial: sal, pimienta, jarroncitos'},
    //         { text: 'Verificar que la mesa y sillas no tengan algun daño o mancha grave'},
    //         { text: 'Verificar que esten las 4 decoraciones, 3 patitos', content: 'comedor.jpg' },
    //     ]
    // },
    {
        section_name: 'Banos', tasks: [
            { text: 'En regaderas, favor de rellenar el shampoo y jabón liquido (body wash). No dejar que baje de la mitad. El shampoo es el blanco (el que esta mas cerca a la pared/esquina - izquierdo en regadera 1 y derecho en regadera 2) y el jabon el mas rosado', content: 'banos.jpg'},
            { text: 'En todos los baños, rellenar o mantener lo mas lleno posible el jabon de mano liquido - todos estos limpiadores estaran en el cuartito para rellenar', content: 'cuarto_limpieza_2.jpg'},
            { text: 'Dejar un rollo de papel lleno puesto - y otros 2 ya sean dos nuevos o uno nuevo y otro semi nuevo - en cada baño'},
            { text: 'Acomodar los gabinetes de los baños, el baño del cuarto principal tiene varias cosas como botiquin de salud, o qtips - ' },
        ]
    },
    {
        section_name: 'Oficina', tasks: [
            { text: 'Ver que monitor este bien, cables esten en orden y ahi (HDMI y luz). Que el jarroncito de tequila este ahi. Que la plantita este bien. Hacer sillon cama en sillon si es necesario', content: 'oficina1.jpg'},
            { text: 'Ver que el burosito este bien, que los libros esten ahi, que extension y wifi (pegado al buro) esten prendidos, que los jarrones y decoraciones esten bien y completos'},
            { text: 'Ver que ambas canastitas esten bien.', content: 'oficina2.jpg'},
            { text: 'Verificar que el balcon este cerrado con los dos candados, y que la llave este en su lugar o regresarla (tapa azul)'},
            { text: 'Verificar que proyector este bien, ver que google cast este ahi, y el control', content: 'oficina3.jpg'}
        ]
    },
    {
        section_name: 'Salida', tasks: [
            { text: 'Apagar aire o calefaccion', content: 'calenton.jpeg'},
            { text: 'Dejar tarjetitas de la entrada en su lugar. Avisarme si no hay una', content: 'tarjetitas.jpeg'},
            { text: 'Regresar cosas de limpieza al cuartito de atras, cerrarlo, y regresar llave a su lugar inicial', content: 'cuartito_key.png'},
            { text: 'Mandeme un mesajito diciendo que ya va de salida y porfavor mandeme una reseña del 1-5 de que tan limpio encontro el lugar para calificar al huesped en Airbnb'}
        ]
    },
];

const bnbConfig = [
    {
        section_name: 'Entrada', tasks: [
            { text: 'Busque en google maps: Caseta Real del Sol ii, asi llegara seguro', content: '' },
            { text: 'En la caseta, Hablar con guardia para que los deje pasar, se tendran que bajar a presionar un boton y listo. Direccion es Real de Grijalva 8987', content: '' },
            { text: 'Entre al fracc, dele al fondo, luego giro a la izquierda y al fondo de nuevo. Es la antepenultima casa. Blanca con dos arboles grandes', content: '' },
            { text: 'Se les enviara un codigo de acceso para la puerta principal de la casa. Este configo les servira durante toda su estadía hasta su hora de checkout. Favor de cerrar las demás puertas' },
        ]
    },
]

class Tabs extends React.Component {

    _cleanPathName = '/clean';

    isCleaning() {
        return window.location.pathname === this._cleanPathName;
    }

    componentDidMount() {
        document.querySelector('.tablinks').click();
    }
    
    render() {
        const config = this.isCleaning() ? cleanConfig : bnbConfig;
        const greetings = this.isCleaning() ?
        'Hola y gracias por ayudarnos con la limpieza de este AirBNB' :
        'Hola y bienvenido a su casa por los siguientes días';
        const warnings = this.isCleaning() ?
        `
            Asumimos que la casa es limpiada, barrida, trapeada, desinfectada y sacudida en general | 
            Favor de avisarme cuando se este acabando un producto - si ya no aguanta otras 3 limpiadas o rellenadas | 
        ` : `Pagina Bajo construccion, en caso de mas preguntas contactarme | `;

        return(
            <div className="main-tab-div">
                <div className="container" style={{textAlign:'center', marginBottom: '3em'}}>
                    <h5>
                        {greetings}
                    </h5>

                    <div className="row">
                        <div className="col s8 offset-s2">
                            <img className="responsive-img" src="/media/airbnb/initial.jpeg" />
                        </div>
                    </div>
                    <p>
                        { warnings }
                        Cualquier duda favor de buscarme por WhatsApp al +1 (915) 258-7922
                    </p>
                </div>

                <div style={{ display:'flex', height: '100vh', maxHeight: '100vh' }}>
                    <div className="tab">
                        {
                            config.map((con, index) => {
                                return (
                                    <button className="tablinks" key={index} 
                                        onClick={(event) => this.tabClick(event, con.section_name)}
                                    >
                                        {con.section_name}
                                    </button>
                                )
                            })
                        }
                    </div>
                    <div className="tab-content-div">
                        { 
                            config.map((con, index) => {
                                return(
                                    <div id={con.section_name} className="tabcontent" key={index}>
                                        <h4>{con.section_name}</h4>
                                        {
                                            con.tasks.map((task, index) => {
                                                return (
                                                    <div key={index}>
                                                        <label>
                                                            <input type="checkbox" />
                                                            <span style={{height: 'auto', marginBottom: '1em'}}>
                                                                {task.text}
                                                            </span>
                                                        </label>
                                                        <div>
                                                            {task.content ? this.renderContent(task.content) : ''}
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            }) 
                        }
                    </div>
                </div>
                
            </div>
        );
    }

    renderContent(content) {
        return(
            <div className="row">
                <div className="col m6 offset-m3 s10 offset-s1">
                    <img className="responsive-img" src={`/media/airbnb/${content}`}></img>
                </div>
            </div>
        )
    }
    
    tabClick(evt, cityName) {
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
      
        // Show the current tab, and add an "active" class to the link that opened the tab
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }
}

ReactDOM.render(
    <Tabs />,
    document.getElementById('react-div')
);
