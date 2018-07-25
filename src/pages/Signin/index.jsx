import React from 'react';
import Bundle from '../Bundle'

const Signin = (props) => (
    <Bundle load={() => import('./Signin')}>
        {(List) => <List {...props} />}
    </Bundle>
);

export default Signin