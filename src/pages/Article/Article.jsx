import React,{  Component   } from 'react';
import Header from '../../components/Header'
import Content from '../../components/content'
import Footer from '../../components/Footer'
import $http from '../../commom/http'
import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

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
                <Spin spinning={!article} tip="Loading..." indicator={antIcon} >
                    <Content article={article}/>
                </Spin>,
                <Footer />
            </div>
        )
    }
}
