import React, { Component } from 'react';
import Sendform from '../../components/Sendform'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default class Send extends Component {
    render() {
        return (
            <div className="send-page">
                <Header />
                <Sendform />
                <Footer />
            </div>
        )

    }
}



