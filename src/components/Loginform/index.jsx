import React,{Component} from 'react';
import { Link, withRouter} from 'react-router-dom'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import {  login} from '../../redux/action'
import $http from '../../commom/http'
import { Form, Icon, Input, Button, Row, Col, notification} from 'antd';
import './index.scss'

const FormItem = Form.Item;
class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading: false,
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({ loading:true})
               
                $http.post('/login/', values)
                    .then(res => {
                        this.setState({ loading: false })
                        const info = res.data.user
                        if (res.data.status){
                            this.props.actions.login(info)
                            
                            this.props.history.push({
                                pathname: '/',
                            })
                        }
                        
                       
                        notification.success({
                            message: '提示',
                            description: res.data.msg,
                            duration: 2,
                        })
                    })
               
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row type="flex" justify="center" className="login-content">
                <Col xs={24} sm={8}>
                    <h3 className="title is-3">欢迎您的回来！</h3>
                    <p className="welcome"><span role="img" aria-label="Panda">🚩</span> 我们已经在此等待多时。</p>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: '请输入邮箱!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="email" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                        <FormItem>

                            {/* <a className="login-form-forgot" href="">Forgot password</a> */}
                            <p>
                                <Button loading={this.state.loading} type="primary" htmlType="submit" className="login-form-button">
                                    登陆
                                </Button>
                                <span>&nbsp;Or&nbsp;</span>
                                 <Link to="/signin">注册</Link>
                                
                            </p>
                           
                        </FormItem>
                    </Form>
                </Col>
            </Row>
            
        );
    }
}


const LoginContent = Form.create()(LoginForm);


//由于我们这个应用太小，只有一个属性，所以只有num这个字段。
function mapStateToProps(state) {
    return { info: state.userReducer.info }
}

//mapDispatchToProps的作用是把store中的dispatch方法注入给组件
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ login }, dispatch),
    
    }
}

//这里实际上给了App两个props：num和actions，即第4步中的那段注释
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContent))