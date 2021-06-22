import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ProgressBar } from 'react-bootstrap';
import { FaJs, FaReact, FaPhp, FaLaravel, FaNodeJs, FaVuejs } from "react-icons/fa";


class TabsElement extends Component{
    render(){
        let 
        tab1 = "Habilidades",
        tab2 = "Tecnologías",
        tab3 = "Experiencia",
        tab4 = "Educación";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <div className={`rn-progress-bar progress-bar--1 mt_dec--10`}>
                                                <div className="single-progress">
                                                    <h6 className="title">Diseño Responsivo</h6>
                                                    <ProgressBar now={100} />
                                                </div>

                                                <div className="single-progress">
                                                    <h6 className="title">Programación JS - React</h6>
                                                    <ProgressBar now={100} />
                                                </div>

                                                <div className="single-progress">
                                                    <h6 className="title">Creación de APIS</h6>
                                                    <ProgressBar now={100} />
                                                </div>

                                                <div className="single-progress">
                                                    <h6 className="title">Marketing y Publicidad</h6>
                                                    <ProgressBar now={100} />
                                                </div>

                                                <div className="single-progress">
                                                    <h6 className="title">Google Cloud</h6>
                                                    <ProgressBar now={100} />
                                                </div>

                                                <div className="single-progress">
                                                    <h6 className="title">Despliegue de Servidores</h6>
                                                    <ProgressBar now={100} />
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>


                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/"> Javascript <span>- +6 años</span></a> <FaJs />
                                               </li>
                                               <li>
                                                   <a href="/">React Js <span>- +1 año</span></a>
                                                   <FaReact />
                                               </li>
                                               <li>
                                                   <a href="/">Php <span>- +6 años</span></a>
                                                   <FaPhp />
                                               </li>
                                               <li>
                                                   <a href="/">Codeigniter - Laravel <span>- +6 años</span></a>
                                                   <FaLaravel />
                                               </li>
                                               <li>
                                                   <a href="/">Node Js <span>- +1 año</span></a>
                                                   <FaNodeJs />
                                               </li>
                                               <li>
                                                   <a href="/"><FaVuejs /> Vue Js <span>- +1 año</span></a>
                                                   
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/">Desarrollador Web<span> - Soluciones URAWEB</span></a> 2014 - 2020
                                               </li>
                                               <li>
                                                   <a href="/">Diseñador Gráfico Periódico<span> - Zero Horas</span></a> 2013 - 2014
                                               </li>
                                               <li>
                                                   <a href="https://www.workana.com/freelancer/5a7992aeb2e9522f21a3c47084fbd502">Freelance Developer<span> - Workana </span></a> 2019- 2020
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/">Técnico en Sistemas<span> - UNAD</span></a> 2016
                                               </li>
                                               <li>
                                                   <a href="/">Desarrollo Frontend<span> - Academia Geek</span></a> 2021
                                               </li>
                                               <li>
                                                   <a href="/">PWA Developer<span> - Udemy</span></a> 2021
                                               </li>
                                               <li>
                                                   <a href="/">Servicio al Cliente<span> - SENA</span></a> 2014
                                               </li>
                                               <li>
                                                   <a href="/">REACT de cero a experto<span> - Udemy</span></a> 2014
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsElement;