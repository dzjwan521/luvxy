import React, { Component } from 'react';
import Signform from '../../components/Signform'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default class Signin extends Component {
    render() {
        return (
            <div className="sigin-page">
                <Header />
                <Signform />
                <Footer />
            </div>
        )

    }
}



