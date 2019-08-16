
import React, { Component} from 'react';
//文章
export default  class Article extends Component{
    componentDidMount() {
        this.props.changeState()
    }
    render(){
        const props = this.props
        return (
            <div className="markdown-wrap markdown-body" dangerouslySetInnerHTML={{
                __html: props.art
            }}>
            </div>
        )
    }
}

