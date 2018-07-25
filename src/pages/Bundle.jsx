import React from 'react';
import {Spin} from 'antd'

export default class Bundle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mod: null
        };
    }

    componentWillMount() {
        this.load(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load(props) {
        this.setState({
            mod: null
        });
        props.load().then((mod) => {
            this.setState({
                mod: mod.default ? mod.default : mod
            });
        });
    }

    render() {
        
        let spin = <div style={{ textAlign: 'center', marginTop: 50 }}><Spin /><br />加载中</div>;
        return this.state.mod ? this.props.children(this.state.mod) : spin;
    }
}