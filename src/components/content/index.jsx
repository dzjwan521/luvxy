import React, { Component} from 'react';
import { Row, Col, Divider } from "antd";
import MarkNav from '../markdown-navbar/dist/index.js';
import '../markdown-navbar/dist/navbar.css';
import  MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import Article from './article'
import 'github-markdown-css';
import './index.scss'

const md = new MarkdownIt({
    highlight: function (str, lang) {
        // 添加这两行才能正确显示 <>
        str = str.replace(/&lt;/g, "<");
        str = str.replace(/&gt;/g, ">");
    
        if (lang && hljs.getLanguage(lang)) {
          try {
            return '<pre class="hljs"><code>' +
                   hljs.highlight(lang, str, true).value +
                   '</code></pre>';
          } catch (__) {}
        }
    
        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
      }
});

function markdown2Html(props){
    if (props.article) {
        return md.render(props.article.content)
    } 
}



export default class Index extends Component{
    
    constructor(props){
        super(props);
        this.state = {isShow: false};
    }
    changeState(){
        this.setState({isShow: true})
    }
    
    render(){
        const props = this.props
        const art = markdown2Html(props)
        return (
            <div className="article-centent">
                <Row>
                    <Col xs={0} sm={1}></Col>
                    <Col xs={24} sm={4}>
                            <Aside {...props}  />
                    </Col>
                    <Col xs={24} sm={14}>
                        {art? <Article art={art} changeState={this.changeState.bind(this)} />: null}
                    </Col>
                    <Col xs={0} sm={4}>
                        <div className="markdown-nav">
                            <Divider orientation="left">目录</Divider>
                            {this.state.isShow?( <MarkNav
                                source={props.article.content}
                                ordered={false}
                                headingTopOffset={-110}
                            />):null}
                           
                        </div>
                            
                    </Col>
                </Row>
            </div>
    )
}
}

//左侧栏
const Aside = (props)=>{
    const type = getTypeName(props.article.type)
    return(
            <aside className="aside-wrap">
                <div className="aside-body">
                    <div className="aside-banner">
                        <h4 className="title">{props.article.title ? props.article.title : ''}</h4>
                        <h6 className="desc">作者：{props.article.author ? props.article.author.nickname : ''}</h6>
                    </div>
                    <ul>
                        <li>时间 ：<span>{props.article.created_at}</span></li>
                        <li>类别 ：<span>{type}</span></li>
                        <li>浏览 ：<span>{props.article.pv ? props.article.pv : 0}</span></li>
                    </ul>
                </div>

            </aside>)
}


const getTypeName=(type)=>{
    switch (type) {
        case 'front':
            return '前端'
        case 'backend':
            return '后端'
        case 'design':
            return '设计'
        case 'other':
            return '其他'

    }
}