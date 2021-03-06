import React, { Component } from "react";

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            rnName: '',
            rnEmail: '',
            rnSubject: '',
            rnMessage: '',
        };
    }

    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <span className="subtitle">Deja un saludito</span>
                                <h2 className="title">Contáctame.</h2>
                                <div className="im_address_inner">
                                    <div className="im_address">
                                        <span>Llámame:</span>
                                        <a className="link im-hover" href="tel:+573192432568<">+57 3192432568</a>
                                    </div>
                                    <div className="im_address mt--5">
                                        <span>WhatsApp:</span>
                                        <a className="link im-hover" href="https://wa.me/+573192432568">Di Hola por WhatsApp</a>
                                    </div>
                                    <div className="im_address mt--5">
                                        <span>Escríbeme:</span>
                                        <a className="link im-hover" href="mailto:contacto@mailermartinez.com">contacto@mailermartinez.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="form-wrapper">
                                <form
                                    method= "POST"
                                    action= "https://formspree.io/f/xoqywbrj"
                                >
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            value={this.state.rnName}
                                            onChange={(e)=>{this.setState({rnName: e.target.value});}}
                                            placeholder="Tu Nombre *"
                                            required
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item02"
                                            value={this.state.rnEmail}
                                            onChange={(e)=>{this.setState({rnEmail: e.target.value});}}
                                            placeholder="Tu Correo *"
                                            required
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            value={this.state.rnSubject}
                                            onChange={(e)=>{this.setState({rnSubject: e.target.value});}}
                                            placeholder="Escribe el asunto"
                                            required
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <textarea
                                            type="text"
                                            id="item04"
                                            name="message"
                                            value={this.state.rnMessage}
                                            onChange={(e)=>{this.setState({rnMessage: e.target.value});}}
                                            placeholder="En qué te puedo ayudar?"
                                            required
                                        />
                                    </label>
                                    <button className="btn-default" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Enviar</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src={`${this.props.contactImages}`} alt="trydo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;