import React from 'react';
import Bundle from '../Bundle'

const Home = (props) => (
    <Bundle load={() => import('./Home.jsx')}>
        {(List) => <List {...props} />}
    </Bundle>
);

export default Home