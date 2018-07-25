import React from 'react';
import Bundle from '../Bundle'

const Send = (props) => (
    <Bundle load={() => import('./Send')}>
        {(List) => <List {...props} />}
    </Bundle>
);

export default Send