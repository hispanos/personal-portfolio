import React, { Component } from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../components/Header";
import BannerBlog from "../elements/BannerBlog";
import Footer from "../components/Footer";

import Data from "../../db/Data";
const data = new Data();

class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            article: {},
            commentsQuantity: 0,
            articleContent: ""
        }
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        let article = await data.getArticle(this.props.match.params.article);
        this.setState({article})
        this.setState({commentsQuantity: article.comments.length})
        this.setState({articleContent: article.content})
    }
    
    render () {
        const date = new Date(this.state.article.created_at);
        const dateString = date.toDateString();
    return (
        <>
            <div className="active-dark bg_color--9">
                <Header homeLink="/" logo="symbol-dark" color="color-black" headertransparent="header--transparent" />
            </div>    
            <BannerBlog 
                title={this.state.article.title}
                author= "Mailer M."
                comments= {this.state.commentsQuantity}
                date= {dateString}
            />

            {/* Start Blog Details */}
            <div className="rn-blog-details pt--110 pb--70 bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-wrapper">
                                <div className="inner">
                                    <div dangerouslySetInnerHTML={{__html: this.state.articleContent}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Blog Details */}
            

            <Footer />
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
        </>
    )
    }
}


export default Blog;