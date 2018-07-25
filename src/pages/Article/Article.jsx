import React,{  Component   } from 'react';
import Header from '../../components/Header'
import Content from '../../components/content'
import Footer from '../../components/Footer'
import $http from '../../commom/http'

export default class Acticle extends Component {
    constructor(props){
        super(props)
        this.state = {
            article:''
        }
    }
    componentWillMount() {
        const articleId = this.props.match.params.id
        if (articleId){
            $http.get(`/article/${articleId}`)
            .then(res=>{
                const article = res.data.article
                this.setState({
                    article
                })
            })
        }
    }
    render() {
        const article = this.state.article
        return (
            <div className="acticle-page">
                <Header />
                <Content article={article}/>
                <Footer />
            </div>
        )
    }
}