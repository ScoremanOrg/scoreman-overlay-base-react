import React from 'react';

export const EntrantName = ({ name, index, children, ...rest }) => {
    const indexClassName = index ? `entrant-name${index}` : '';

    return <div className={`entrant-name${indexClassName}`} {...rest}>
        {name}
        {children}
    </div>
}