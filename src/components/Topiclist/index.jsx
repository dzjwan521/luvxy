import React, { Component} from 'react';
import { Link,withRouter} from 'react-router-dom'
import { Card, Avatar, Row, Col, Tag} from 'antd';
import LazyLoad from 'react-lazyload';
import { CSSTransition } from 'react-transition-group';
import './index.scss'

const { Meta } = Card;
 
function getDesc(content){
    var reg = /[\\\`\*\_\[\]\#\+\-\!\>\↵\s+]/g;
    return content.replace(reg, "").substring(0,20);
} 

function seletTag(type){
    switch (type) {
        case 'front':
            return <Tag color="blue">前端</Tag>
        case 'backend':
            return <Tag color="orange">后端</Tag>
        case 'design':
            return <Tag color="green">设计</Tag>
        case 'other':
            return <Tag color="red">其他</Tag>
       
    }
}
const List = (props)=>{
    const  info = props.info
    const listItems = info.map((item) =>{
        const title=item.title
        const type = seletTag(item.type)
        const avatar =item.author.avatar
        const desc = getDesc(item.content)
        const time = `时间:${item.created_at}浏览(${item.pv})`

        return (
            <Col className="gutter-row" xs={24} sm={12} key={item._id}>
                <Link to={`/article/${item._id}`}>
                    <LazyLoad height={200} throttle={300}>
                        <CSSTransition 
                            key={item._id}
                            classNames='example'
                            timeout={{ enter: 500, exit: 300 }}>

                            <Card
                                hoverable
                                title={title}
                                extra={type}
                            >
                                <Meta
                                    avatar={<Avatar src={avatar} />}
                                    title={desc}
                                    description={time}
                                />
                            </Card>

                        </ CSSTransition>
                    </LazyLoad>
                </Link>
            </Col>
        )
        
    });
    return (
        <Row gutter={{ xs: 8, sm: 48 }} className="topiclist-content">
            {listItems}
        </Row> 
    )
}

 class Topiclist extends Component{
  
  render(){
      const data = this.props.articles
        return (
             <div className="topiclist">
                <List info={data} />
             </div>
        )
    }
}

export default withRouter(Topiclist)