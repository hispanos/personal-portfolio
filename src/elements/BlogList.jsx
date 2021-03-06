import React, { Component ,Fragment } from "react";
import { Link } from 'react-router-dom';
import Data from "../../db/Data";

const data = new Data();

class BLogList extends Component{

    constructor() {
        super()
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    componentWillReceiveProps(nextProps) {
        this.getData()
    }

    async getData() {
        let articles = await data.getArticles();
        if (this.props.category) {
            articles = await data.getArticlesByCategory(this.props.category);
        }
        this.setState({articles})
    }

    render() {
        const PostList = this.state.articles;
        let titleLink = "";
        return (
             <Fragment>
                 <div className="row mt_dec--30">
                    {PostList.map((value , i ) => {
                        titleLink = value.title.replaceAll(" ", "-");
                        let url = {pathname: `/blog/${titleLink}`, post: value}
                        return(
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30" key={i}>
                            <div className="im_box">
                                <div className="thumbnail">
                                    <Link to={url}>
                                        <img className="w-100" src={`${value.image.formats.thumbnail.url}`} alt="Blog Images"/>
                                    </Link>
                                </div>
                                <div className="content">
                                    <div className="inner">
                                        <div className="content_heading">
                                            <div className="category_list">
                                                {
                                                    value.categories.map((category) => {
                                                        return (
                                                            <Link key={category.category} to={`/categories/${category.category}`}>{category.category}</Link>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <h4 className="title">
                                                <Link to={url}>{value.title}</Link>
                                            </h4>
                                        </div>
                                        <div className="content_footer">
                                            <Link to={url} className="rn-btn btn-opacity">Leer M??s</Link>
                                        </div>
                                    </div>
                                    <Link className="transparent_link" to={url}></Link>
                                </div>
                            </div>
                        </div>
                        )}
                     )}
                 </div>
             </Fragment>
        );
    }
}
export default BLogList;