import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import TextLoop from "react-text-loop";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tab from "../elements/TabsElement";
import Contact from "../elements/Contact";
import PortfolioList from "../elements/PortfolioList";
import ServiceList from "../elements/ServiceList";

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Bienvenidos a mi mundo',
        description: '',
        buttonText: 'Descargar CV',
        buttonLink: '/'
    }
]
const App = () => {
    let title = 'Sobre Mí',
        description = 'Soy un desarrollador web apasionado por la tecnología, me encanta entregar los trabajos a tiempo y procuro hacer realiad tus sueños.';
    return (
        <div className="active-dark bg_color--9">

            <Header homeLink="/" logo="symbol-dark" color="color-black"/>
            
            {/* Start Slider Area   */}
            <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--header" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            <h1 className="title">Soy Mailer Martínez <br/>
                                            <TextLoop>
                                                <span> Desarrollador Web</span>
                                                <span> UI/UX Diseñador.</span>
                                                <span> JS - React Desarrollador.</span>
                                                <span> PHP - Desarrollador.</span>
                                            </TextLoop>{" "}
                                            </h1>
                                            <h2> con amor desde Colombia.</h2>
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn mt--30"><a className="btn-default btn-border btn-opacity" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */} 

            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--8">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/mailer.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <span className="subtitle">Detalles sobre Mailer</span>
                                            <h2 className="title mb--20">{title}</h2>
                                            <p className="description mt_dec--20">{description}</p>
                                        </div>
                                        <div className="row mt--40">
                                            <Tab tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End About Area */}

            {/* Start Service Area  */}
            <div id="service" className="fix">
                <div className="service-area creative-service-wrapper pb--120 bg_color--8" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30 mb_sm--0">
                                    <span className="subtitle">En qué te puedo ayudar</span>
                                    <h2 className="title">Mis Servicios</h2>
                                    <p className="description">Revisa la gama de servicios que tengo disponibles para ti, <br /> seguro alguno es para tí.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            {/* End Service Area  */} 

            {/* Start Portfolio Area */}
            <div id="portfolio" className="fix">
                <div className="portfolio-area pb--120 bg_color--8">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center mb--30 mb_sm--0">
                                        <span className="subtitle">Proyectos terminados</span>
                                        <h2 className="title">Mis últimos Proyectos</h2>
                                        <p className="description">Algunos de los proyectos en los últimos años, <br /> seguro alguno te gusta.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="view-more-btn mt--60 mt_sm--30 text-center">
                                        <a className="btn-default" href="/"><span>Ver Todos</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Portfolio Area */}


            {/* Start COntact Area */}
            <div id="contact" className="fix">
                <div className="rn-contact-area pb--120 bg_color--8">
                    <Contact contactImages="/assets/images/about/mailer_contact.png" contactTitle="Contáctame." />
                </div>
            </div>
            {/* End COntact Area */}

            <Footer />
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
        </div>
    )
}


export default App;
