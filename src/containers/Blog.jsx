import React, { Component } from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../components/Header";
import Banner from "../elements/Banner";
// import Pagination from "../elements/Pagination";
import BlogList from "../elements/BlogList";
import Footer from "../components/Footer";

class Blog extends Component {
    
    render () {
    let title = "Blog de Mailer";
    if (this.props.match.params.category) {
        title = `Blog - ${this.props.match.params.category}`
    }

    return (
        <div className="active-dark bg_color--9">

            <Header homeLink="/" logo="symbol-dark" color="color-black"/>
            
            <Banner title={title}   />

            {/* Start Blog Area */}
            <div className="rn-blog-area ptb--120 bg_color--1">
                <div className="container">
                    <BlogList 
                        category = {this.props.match.params.category}
                    />
                    <div className="row mt--60">
                        <div className="col-lg-12">
                            {/* Start Pagination Area */}
                            {/* <Pagination /> */}
                            {/* End Pagination Area */}
                        </div>
                    </div>
                </div>
            </div>
            {/* End Blog Area */}
            

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
}


export default Blog;
