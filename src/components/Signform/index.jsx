import React, { Component} from 'react';
import {  withRouter } from 'react-router-dom'
import { Form, Input, Tooltip, Icon, Select, Row, Col, Button, Divider, message, notification,Upload } from 'antd';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import {  login } from '../../redux/action'
import $http from '../../commom/http'
import './index.scss'
const FormItem = Form.Item;
const Option = Select.Option;
const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://luvxy.cn'


// function getBase64(img, callback) {
//     const reader = new FileReader();
//     reader.addEventListener('load', () => callback(reader.result));
//     reader.readAsDataURL(img);
// }

function beforeUpload(file) {
    const isJPG = file.type.indexOf('image') ;
    const isLt2M = file.size / 1024 / 1024 < 2;

    if (isJPG===-1) {
        message.error('只能上传图片!');
    }else{
        if (!isLt2M) {
            message.error('图片大小需小雨 2MB!');
        }
    }
    
    return isJPG && isLt2M;
}

class RegistrationForm extends Component{

    constructor(props){
        super(props)
        this.state = {
            confirmDirty: false,
            loading: false,
            imageUrl:''
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({ loading:true})
                const avatar=this.state.imageUrl
                if (avatar){
                    
                    $http.post('/signin/', Object.assign(values, { avatar: avatar } ))
                    .then(res=>{
                        this.setState({ loading: false })
                        const user = res.data.user
                        if (res.data.status) {
                            this.props.actions.login(user)
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
                   
                }else{

                    this.setState({ loading: false })
                    message.error('上传你的头像!');
                    
                }
               
            }
        });
    }
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // getBase64(info.file.originFileObj, imageUrl => this.setState({
            //     imageUrl,
            //     loading: false,
            // }));
            this.setState({
                imageUrl: baseURL+info.file.response.imgUrl,
                loading: false,
            })
        }
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次输入不一致!');
        } else {
            callback();
        }
    }
    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }
    
  render(){
      const { getFieldDecorator } = this.props.form;
      const imageUrl = this.state.imageUrl;
      const formItemLayout = {
          labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
          },
          wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
          },
      };
      
      const prefixSelector = getFieldDecorator('prefix', {
          initialValue: '86',
      })(
          <Select style={{ width: 70 }}>
              <Option value="86">+86</Option>
              <Option value="87">+87</Option>
          </Select>
      );
      const uploadButton = (
          <div>
              <Icon type={this.state.loading ? 'loading' : 'plus'} />
              <div className="ant-upload-text">Upload</div>
          </div>
      );
    return (
        <Row type="flex" justify="center" className="signin-content">
            <Col xs={24} sm={8}>
                <Divider>基本信息</Divider>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label="邮箱"
                    >
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: '不是正确的邮箱!',
                            }, {
                                required: true, message: '请输入你的邮箱!',
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="密码"
                    >
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: '请输入密码!',
                            }, {
                                validator: this.validateToNextPassword,
                            }],
                        })(
                            <Input type="password" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="重复密码"
                    >
                        {getFieldDecorator('confirm', {
                            rules: [{
                                required: true, message: '请重复输入密码!',
                            }, {
                                validator: this.compareToFirstPassword,
                            }],
                        })(
                            <Input type="password" onBlur={this.handleConfirmBlur} />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={(
                            <span>
                                昵称&nbsp;
              <Tooltip title="你希望别人怎么称呼你?">
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                            </span>
                        )}
                    >
                        {getFieldDecorator('nickname', {
                            rules: [{ required: true, message: '请输入名字!', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    
                    <FormItem
                        {...formItemLayout}
                        label="电话"
                    >
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: '输入联系方式!' }],
                        })(
                            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                        )}
                    </FormItem>
                   
                    <FormItem >
                        <Divider>头像</Divider>
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            action={`${baseURL}/signin/uploads/avatar`}
                            className="avatar-uploader"
                            showUploadList={false}
                            onChange={this.handleChange}
                            beforeUpload={beforeUpload}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
                        </Upload>
                    </FormItem>
                    <FormItem >
                        <p className="btn-submit">
                            <Button   loading={this.state.loading} type="primary" htmlType="submit">注册</Button>
                        </p>
                    </FormItem>
                </Form>
    
                            
            </Col>
        </Row>
)
}
}
const Signform = Form.create()(RegistrationForm);

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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signform))