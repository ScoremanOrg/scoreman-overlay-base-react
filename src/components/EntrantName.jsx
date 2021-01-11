import React from 'react';

export const EntrantName = ({ name, children, ...rest }) => {
    return <div className={`entrant-name`} {...rest}>
        {name}
        {children}
    </div>
}