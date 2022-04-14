import React, { useContext } from 'react';
import { RouterContext } from './RouterContext';

function Link({ to, children, ...restProps }) {
    const { history } = useContext(RouterContext);
    const handleClick = e => {
        e.preventDefault();
        history.push(to);
    };
    return (
        <a href={to} {...restProps} onClick={handleClick}>
            {children}
        </a>
    );
}

export default Link;
