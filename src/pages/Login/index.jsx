import React from 'react';
import Bundle from '../Bundle'

const Login = (props) => (
    <Bundle load={() => import('./Login')}>
        {(List) => <List {...props} />}
    </Bundle>
);

export default Login