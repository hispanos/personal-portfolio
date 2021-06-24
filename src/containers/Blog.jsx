import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../components/Header";
import Banner from "../elements/Banner";
// import Pagination from "../elements/Pagination";
import BlogList from "../elements/BlogList";
import Footer from "../components/Footer";

const Blog = () => {
    return (
        <div className="active-dark bg_color--9">

            <Header homeLink="/" logo="symbol-dark" color="color-black"/>
            
            <Banner title={'Blog de Mailer'}   />

            {/* Start Blog Area */}
            <div className="rn-blog-area ptb--120 bg_color--1">
                <div className="container">
                    <BlogList />
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


export default Blog;
