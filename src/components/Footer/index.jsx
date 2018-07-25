import React, { Component } from 'react';
import { Link} from 'react-router-dom'
import { Row, Col} from "antd";
import './index.scss'
import logo from '../../img/logo.jpg'
import svg from '../../img/svg2.svg'
export default class Footer extends Component {

  render() {
    return (
      <footer className="bottom">
        <div className="container">
          <div className="columns">
            <Row>
              <Col xs={0} sm={2}></Col>
              <Col xs={24} sm={8}>

                <div className="column is-4 has-text-left">
                  <div className="top is-clearfix">
                    <a className="logo-link is-pulled-left" href="/">
                      <img src={logo} style={{ width: "100px", height: "100px" }} alt="nodelover" />
                    </a>
                    <div className="site-info">
                      <h4 className="title is-4">Luvxy</h4>
                      <p><small>爱小雨真是太好了</small></p>
                    </div>
                  </div>
                  <ul className="inline-block" style={{ marginTop: '20px' }}>
                    <li><Link className="link" to="/about">关于我</Link></li>
                    <li><a className="link" href="https://doc.react-china.org/">React</a></li>
                    <li><a className="link" href="https://ant.design/index-cn" >Ant.design</a></li>
                    <li><a className="link" href="http://www.expressjs.com.cn/">Express</a></li>
                  </ul>
                </div>
              </Col>
              <Col xs={24} sm={12}>
                <img  className="svg" src={svg} alt="支持全设备"/>
              </Col>

              <Col xs={0} sm={2}></Col>

            </Row>
          </div>

        </div>

        <small className="backup-no container" style={{ lineHeight: "2" }}>鄂ICP备18000473号 <br /> </small>
      </footer>
    )
  }
}