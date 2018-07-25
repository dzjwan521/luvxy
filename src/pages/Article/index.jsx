import React from 'react';
import Bundle from '../Bundle'

const Article = (props) => (
    <Bundle load={() => import('./Article.jsx')}>
        {(List) => <List {...props} />}
    </Bundle>
);

export default Article