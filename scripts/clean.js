const config = [
    {
        section_name: 'Entrada', tasks: [
            { text: 'Busque en google maps: Caseta Real del Sol ii, asi llegara seguro', content: '' },
            { text: 'En la caseta, Hablar con guardia para que los deje pasar, se tendran que bajar a presionar un boton y listo. Direccion es Real de Grijalva 8987', content: '' },
            { text: 'Entre al fracc, dele al fondo, luego giro a la izquierda y al fondo de nuevo. Es la antepenultima casa. Blanca con dos arboles grandes', content: '' },
            { text: 'Se les enviara un codigo de acceso para la puerta principal de la casa. Solo se podra usar una vez asi que asegurese de dejar una puerta abierta mientras esta ahi. La puerta de enfrente se cierra sola despues de 60 segundos de estar cerrada' },
        ]
    },
    {
        section_name: 'Iniciales', tasks: [
            { text: 'Favor de asegurarse que este la tarjetita escrita y la otra. Favor de decirme si una no esta, la segunda es muy importante', content: 'entrada.png' },
            { text: 'Visitar cada cuarto y empezar con la lavadera de las camas que hayan sido usadas. Esto es critico ya que es lo que mas tiempo tomara', content: 'lavadora.png' },
            { text: 'Trate de incluir a la lavadora (o hacer una especial) para los trapos que se hayan usado en la limpieza pasada, asi para irlos rotando' },
            { text: 'En este gabinete al fondo encontrara esta llave, la cual abre el cuartito de atras donde esta todo lo necesario para la limpieza', content: 'cuartito_key.png' },
            { text: 'En el cuartito de atras tratamos de tener las cosas organizadas, tome todo lo que vaya a requerir y al finalizar regreselas a su lugar por favor', content: 'cuarto_limpieza.png' },
        ]
    },
    {
        section_name: 'Sala', tasks: [
            { text: 'Limpiar, verificar, que esten bien y que esten en especial: Tele, Google Cast, Control, Decoraciones', content: 'sala_1.png' },
            { text: 'Limpiar sofa, verificar que no haya manchas o rotaduras en cogines o sofa', content: 'sala_2.png' },
            { text: 'Verificar camara, que este conectada y prendide, esta en la ventana cerca de la palmera' },
            { text: 'Mover sofa, y verificar que esta extension este conectada y que tenga ese aparatito conectado', content: 'candado.jpg' },
        ]
    },
    {
        section_name: 'Comedor', tasks: [
            { text: 'Verificar que la camara de la puerta trasera este bien y conectada'},
            { text: 'Verificar que la el centro de mesa tenga lo princial: sal, pimienta, '},
            { text: 'Verificar que la mesa y sillas no tengan algun daño'},
            { text: 'Verificar que esten las 4 decoraciones, 3 patitos', content: 'comedor.jpg' },
        ]
    },
];

class Tabs extends React.Component {
    componentDidMount() {
        document.querySelector('.tablinks').click();
    }
    
    render() {
        return(
            <div className="main-tab-div" style={{height: 'auto'}}>
                <div className="container" style={{textAlign:'center'}}>
                    <h5>
                        Hola y gracias por ayudarnos con la limpieza de este AirBNB
                    </h5>

                    <div className="row" style={{marginBottom: '3em'}}>
                        <div className="col s8 offset-s2">
                            <img className="responsive-img" src="/media/airbnb/initial.jpeg" />
                        </div>
                    </div>
                    <span>*** Asumimos que la casa es limpiada, barrida, trapeada, desinfectada y sacudida en general ***</span>
                </div>

                <div>
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
    <div>
        <Tabs />
    </div>,
    document.getElementById('react-div')
);
