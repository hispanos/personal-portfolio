import React, { Component } from "react";
import { Link } from 'react-router-dom';
const Portfolio_image = <img src="/assets/images/portfolio/siecad.jpeg" alt="React Creative Agency" />;
const Portfolio_image2 = <img src="/assets/images/portfolio/uraweb_restaurante.png" alt="React Creative Agency" />;
const Portfolio_image3 = <img src="/assets/images/portfolio/mascotas.jpeg" alt="React Creative Agency" />;
const Portfolio_image4 = <img src="/assets/images/portfolio/calimercados.jpeg" alt="React Creative Agency" />;
const Portfolio_image5 = <img src="/assets/images/portfolio/whatienda.jpeg" alt="React Creative Agency" />;
const Portfolio_image6 = <img src="/assets/images/portfolio/cenidel.png" alt="React Creative Agency" />;

const PortfolioListContent = [
    {
        image: Portfolio_image,
        category: 'Desarrollo',
        title: 'SIECAD',
        description: 'Software de gestión de Instituciones Educativas en Colombia.'
    },
    {
        image: Portfolio_image2,
        category: 'Desarrollo',
        title: 'URAWEB Restaurantes',
        description: 'Software de Restaurantes con selección de mesas y control de Ingredientes.'
    },
    {
        image: Portfolio_image6,
        category: 'Página Web',
        title: 'CENIDEL',
        description: 'Sitio web en WordPress que permite agendar cupos para charlas en línea, mostrar servicios y vender productos digitales.'
    },
    {
        image: Portfolio_image3,
        category: 'Desarrollo web',
        title: 'Adopción de Mascotas',
        description: 'App Web que permite buscar mascotas y agregarlas a favoritos o contactar al autor.'
    },
    {
        image: Portfolio_image4,
        category: 'Desarrollo web',
        title: 'CALIMERCADOS',
        description: 'Ecommerce para vender productos de abarrotes en línea.'
    },
    {
        image: Portfolio_image5,
        category: 'Desarrollo móbil',
        title: 'WA TIENDA',
        description: 'App móvil que permite a múltiples tiendas vender en línea con un catálogo personalizado y recibir ventas directamente por WhatsApp.'
    }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`im_portfolio ${styevariation}`}>
                            <div className="thumbnail_inner">
                                <div className="thumbnail">
                                    <Link to="/">
                                        {value.image}
                                    </Link>    
                                </div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <div className="portfolio_heading">
                                        <div className="category_list">
                                            <Link to="/">{value.category}</Link>
                                        </div>
                                        <h4 className="title"><Link to="/">{value.title}</Link></h4>
                                    </div>
                                    <div className="portfolio_hover">
                                        <p>{value.description}</p>
                                    </div>
                                </div>
                            </div>
                            <Link className="transparent_link" to=""></Link>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;