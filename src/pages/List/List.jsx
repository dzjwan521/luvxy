import React,{Component} from 'react';
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import Topiclist from '../../components/Topiclist'
import Footer from '../../components/Footer'
import $http from '../../commom/http'

export default class List extends Component {
    state={
        articles: []
    }
    componentWillMount(){
        const kind = this.props.match.params.kind||''
            $http.get(`/list/${kind}`)
                .then(res => {
                    this.setState({
                        articles: res.data.articles
                    })
                })
        
    }
    render() {
        const articles = this.state.articles
        return (
            <div className="list-page">
                <Header />
                <Nav />
                <Topiclist articles={articles} />
                <Footer />
            </div>
            
        )
    }
}
