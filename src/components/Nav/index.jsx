import React, { Component} from 'react';
import { NavLink} from 'react-router-dom' 
import { Row, Col} from 'antd';
import './index.scss'

const Title = (props)=>(
    <div className="title-wrap">
        <p className="title">{props.title}</p>
        <p className="heading" style={{color:props.color}}> {props.heading} </p>
    </div >
)
export default class Nav extends Component{

  render(){
    return (
      <div className="nav-wrap">
            <Row gutter={16}>
                <Col className="gutter-row" xs={0} sm={2}></Col>
                <Col className="gutter-row" xs={6} sm={5}>
                    <NavLink activeClassName="kind" to="/list/front">
                        <div className="gutter-box">
                            <Title title="前端" color="#269EDA" heading="front" />
                        </div>
                    </NavLink>
                   
                </Col>
                <Col className="gutter-row" xs={6} sm={5}>
                    <NavLink activeClassName="kind" to="/list/backend">
                        <div className="gutter-box">
                            <Title title="后端" color="#F6A821" heading="backend"/>
                        </div>
                    </NavLink>
                </Col>
                <Col className="gutter-row" xs={6} sm={5}>
                    <NavLink activeClassName="kind" to="/list/design">
                    <div className="gutter-box">
                        <Title title="设计" color="#6ACF9F" heading="design"/>
                    </div>
                    </NavLink>
                </Col>
                <Col className="gutter-row" xs={6} sm={5}>
                    <NavLink activeClassName="kind" to="/list/other">
                    <div className="gutter-box">
                        <Title title="其他" color="#FF9198" heading="other"/>
                    </div>
                    </NavLink>
                </Col>
                <Col className="gutter-row" xs={0} sm={2}></Col>
                
            </Row>
      </div>
)
}
}