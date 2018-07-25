import React, { Component } from 'react';
import { Link} from 'react-router-dom'
import { Row, Col, Menu, Dropdown, Icon, Popconfirm, message} from 'antd';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { loginout } from '../../redux/action'
import './index.scss'


const Headerlink = (props) =>{
    const info = props.info||'';
    const actions = props.actions
    if (info) {
        return (
            <Row type="flex" justify="end">
                <Col className="header-item">
                    <Link to="/send">发文章</Link>
                </Col>
                <Col className="header-item">
                    <Popconfirm title="确定要退出吗?" onConfirm={confirm} onCancel={cancel} okText="确认" cancelText="取消">
                        <a href=":javascript:0;">退出</a>
                    </Popconfirm>
                </Col>
            </Row>
        )
    }else{
        return (
            <Row type="flex" justify="end">

                <Col className="header-item">
                    <Link to="/login">登陆</Link>
                </Col>
                <Col className="header-item">
                    <Link to="/signin">注册</Link>
                </Col>

            </Row>
        )
    }
   
    function confirm(e) {
        actions.loginout()
        message.success('您已退出');
    }

    function cancel(e) {
        console.log(e);
        message.error('取消退出操作');
    }
}

function createMenu(info){
    if (info) {
        return (
            <Menu>
                <Menu.Item>
                    <Link to="/send">发文章</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/home">我的主页</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/home">退出</Link>
                </Menu.Item>
            </Menu>
        );
    } else {
        return (
            <Menu>
                <Menu.Item>
                    <Link to="/login">登录</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/signin">注册</Link>
                </Menu.Item>

            </Menu>
        );

    }
}


 class Header extends Component {

    render() {
        const info = this.props.info|| ''
        const actions = this.props.actions
        const menu = createMenu(info)
        
        return (
            <header className="header-compopents">
                <Row>
                    <Col xs={20} sm={11} offset={1}>
                        <Row type="flex" justify="start">
                            <Col className="header-item">
                                <Link to="/home">
                                    <Icon type="github" />
                                </Link>
                            </Col>
                            <Col className="header-item">
                                <Link to="/">主页</Link>
                            </Col>
                            {/* <Col className="header-item">
                                <Link to="/markbench">天梯图</Link>
                            </Col> */}
                        </Row>
                    </Col>
                    <Col xs={0} sm={11}>
                        <Headerlink info={info} actions={actions}/>
                    </Col>
                    <Col xs={3} sm={0}>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link" href=":javascript:0;">
                                <Icon type="bars" />
                            </a>
                        </Dropdown>
                    </Col>
                </Row>
            </header>
        )
    }
}


//由于我们这个应用太小，只有一个属性，所以只有num这个字段。
function mapStateToProps(state) {
    return { info: state.userReducer.info }
}

//mapDispatchToProps的作用是把store中的dispatch方法注入给组件
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ loginout }, dispatch),

    }
}

//这里实际上给了App两个props：num和actions，即第4步中的那段注释
export default connect(mapStateToProps, mapDispatchToProps)(Header)