import React,{Component} from 'react';
import LoginWrap from '../../components/Loginform'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default class Login extends Component {
     render() {
         return(
             <div className="login-page">
                 <Header />
                 <LoginWrap />
                 <Footer />
             </div>
         )
        
     }
}



 