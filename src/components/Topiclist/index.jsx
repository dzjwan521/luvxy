import React, { Component} from 'react';
import { Link,withRouter} from 'react-router-dom'
import { Card, Avatar, Row, Col, Tag, Empty, Button, Icon} from 'antd';
import LazyLoad from 'react-lazyload';
import { CSSTransition } from 'react-transition-group';
import $http from '../../commom/http'
import './index.scss'

const { Meta } = Card;
const ButtonGroup = Button.Group;


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
class List extends Component {
    like = (e,item,index)=> {
        e.preventDefault()
        $http.get(`/article/like/${item._id}`).then(()=>{
            const num = document.getElementsByClassName('like')[index].innerHTML/1 +1
            document.getElementsByClassName('like')[index].innerHTML = num
        })
        
    }
    render (){
        const  info = this.props.info

        if(!info.length){
            return (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )
        }
        const listItems = info.map((item, index) =>{
            const title=item.title
            const type = seletTag(item.type)
            const avatar =item.author.avatar
            const time = '发表:'+item.created_at
            const nickname = '作者：'+item.author.nickname
            const pv = item.pv
            return (
                <Col className="gutter-row" xs={24} sm={12} key={item._id}>
                    <Link to={`/article/${item._id}`}>
                        <LazyLoad height={200} throttle={300}>
                            <CSSTransition 
                                key={item._id}
                                classNames='example'
                                timeout={{ enter: 500, exit: 300 }}>
                                <Card
                                    bordered={false}
                                    hoverable
                                    title={title}
                                    extra={type}
                                >
                                    <Meta
                                        avatar={<Avatar src={avatar} />}
                                        title={nickname+time}
                                        description={
                                            <ButtonGroup>
                                                <Button size="small" onClick={(e)=>this.like(e,item,index)} icon="like"><span className="like">{item.like || 0}</span></Button>
                                                <Button size="small"  icon="eye"><span>{pv}</span></Button>  
                                            </ButtonGroup>
                                        }
                                    />
                                </Card>

                            </CSSTransition>
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