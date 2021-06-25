import React, { Component } from "react";
import { FiClock , FiUser , FiMessageCircle } from "react-icons/fi";

class BannerBlog extends Component{
    render(){
        const { title, date, author, comments} = this.props;
        return(
            <React.Fragment>
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--27" data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="blog-single-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">{title}</h2>
                                    <ul className="blog-meta d-flex justify-content-center align-items-center">
                                        <li><FiClock />{date}</li>
                                        <li><FiUser />{author}</li>
                                        <li><FiMessageCircle />{comments} Comentarios</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BannerBlog;

