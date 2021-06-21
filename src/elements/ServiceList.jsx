import React ,{ Component }from "react";
import { FiLayers } from "react-icons/fi";
import { FaMobileAlt, FaChartBar, FaBookReader, FaChalkboardTeacher, FaFileAlt } from "react-icons/fa";

const ServiceList = [
    {
        icon: <FaMobileAlt />,
        title: 'Desarrollo de PWA',
        description: 'Tienes una idea genial que quieres que se ejecute en móviles? Juntos podemos hacerla realidad.'
    },
    {
        icon: <FiLayers />,
        title: 'Desarrollo de Sitio Web',
        description: 'Buscas un sitio web responsivo, moderno y elegante? Este servicio es para tí.'
    },
    {
        icon: <FaChartBar />,
        title: 'Software POS o ERP',
        description: 'Necesitas un sistema para administrar tu negocio? Puedo hacerte un desarrollo a la medida.'
    },
    { 
        icon: <FaBookReader />,
        title: 'Consultoría de Software',
        description: 'Pensando en qué software instalar en tu equipo? Juntos encontramos el software ideal para tu necesidad.'
    },
    {
        icon: <FaChalkboardTeacher />,
        title: 'Asistencia Remota',
        description: 'Eres estudiante o programador y necesitas una mano con tus proyectos? Puedo ser la mano extra que necesitas.'
    },
    { 
        icon: <FaFileAlt />,
        title: 'Creación de Contenido',
        description: 'Atascado porque no sabes qué poner en tu sitio web? Puedo redactar el contenido que necesitas.'
    }
]


class Services extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row service-main-wrapper">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/">
                                <div className="service service__style--2 text-left bg-gray">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default Services;
