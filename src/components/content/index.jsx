import React, { Component} from 'react';
import { Row, Col, Divider } from "antd";
import MarkNav from 'markdown-navbar';
import marked from 'marked'
import highlight from 'highlight.js'
import 'markdown-navbar/dist/navbar.css';
import './index.scss'


marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: true,
    smartLists: true,
    smartypants: true,
    highlight: function (code) {
        return highlight.highlightAuto(code).value;
    }
});

function markdown2Html(props){
    if (props.article) {
        return marked(props.article.content)
    } 
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


//文章
const Article = (props)=> {
        return (
            <div className="markdown-wrap" dangerouslySetInnerHTML={{
                __html: props.art
            }}>
            </div>
        )
}
   


export default class Index extends Component{
   
    
  render(){
        const props = this.props
        const art = markdown2Html(props)
        
       

        return (
            <div className="article-centent">
                <Row>
                    <Col xs={0} sm={1}></Col>
                    <Col xs={24} sm={4}>
                            <Aside {...props}/>
                    </Col>
                    <Col xs={24} sm={14}>
                        <Article art={art}/>
                    </Col>
                    <Col xs={0} sm={4}>
                        <div className="markdown-nav">
                            <Divider orientation="left">目录</Divider>
                            <MarkNav
                                source={props.article ? props.article.content : ''}
                                headingTopOffset={80}
                            />
                        </div>
                            
                    </Col>
                </Row>
            </div>
    )
}
}