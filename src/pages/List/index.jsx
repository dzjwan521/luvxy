import React from 'react';
import Bundle from '../Bundle'

const ListPage = (props) => (
    <Bundle load={() => import('./List.jsx')}>
        {(List) => <List {...props} />}
    </Bundle>
);

export default ListPage