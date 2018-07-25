import React, { Component } from 'react';
import { Row, Col, Input, Button, message, Radio } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import $http from '../../commom/http'
import SimpleMDE from 'simplemde'
import marked from 'marked'
import highlight from 'highlight.js'
import './index.scss'

const RadioGroup = Radio.Group;

class Sendform extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      title: '',
      type: 'front'
    }
    this.handleChange = this.handleChange.bind(this);
    this.selectChange = this.selectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.smde = new SimpleMDE({
      element: document.getElementById('editor').childElementCount,
      autofocus: true,
      autosave: true,
      renderingConfig: {
        singleLineBreaks: false,
        codeSyntaxHighlighting: true
      },
      previewRender: function (plainText) {
        return marked(plainText, {
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
      },
    })
  }



  handleChange(event) {
    this.setState({
      title: event.target.value
    });
  }
  selectChange(event) {
    this.setState({
      type: event.target.value
    })
  }

  handleSubmit = () => {
    const info = this.props.info
    const title = this.state.title
    const type = this.state.type
    const content = this.smde.value()
    if (!(title && content && info)) {
      message.error('不能发表空白文档!')
    } else {
      this.setState({ loading: true });
      const email = info.email

      const article = {
        email,
        type,
        title,
        content
      }
      $http.post('/article/send', article)
        .then(res => {
          this.setState({ loading: false });
          if (res.data.status) {

            message.success('发表成功,即将跳转文章页面', 3, () => {
              this.props.history.push({
                pathname: `/article/${res.data.articleId}`,

              })
            })

          }
        })
    }
  }

  render() {
    return (
      <div className="send-content">
        <Row>
          <Col xs={0} sm={3}>
          </Col>
          <Col xs={24} sm={18}>
            <div className="form">
              <div className="form-lable">类型:</div>
              <div className="form-item">
                
                <RadioGroup onChange={this.selectChange} value={this.state.type}>
                  <Radio value="front">前端</Radio>
                  <Radio value="backend">后端</Radio>
                  <Radio value="design">设计</Radio>
                  <Radio value="other">其他</Radio>
                </RadioGroup>
              </div>
            </div>
            <div className="form">
              <div className="form-lable">标题:</div>
              <div className="form-item">
                <Input id="title" value={this.state.title} onChange={this.handleChange} />
              </div>
            </div>

            <div className="form">
              <div className="form-lable">正文:</div>
              <div className="form-item">
                <textarea name="editor" id="editor"></textarea>
              </div>
            </div>


            <Button type="primary"  className="btn-send" loading={this.state.loading} onClick={this.handleSubmit}>
              发射!
            </Button>
          </Col>
        </Row>

      </div>
    )
  }
}


function mapStateToProps(state) {
  return { info: state.userReducer.info }
}

export default withRouter(connect(mapStateToProps)(Sendform)) 