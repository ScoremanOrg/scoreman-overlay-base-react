import React from 'react';

export const Commentator = ({ commentator, index, children, ...rest }) => {
    const indexClassName = !isNaN(index) ? ` commentator${index}` : '';

    return <div className={`commentator${indexClassName}`} {...rest}>
        <div className="commentator-name">{commentator.name}</div>
        <div className="commentator-handle">{commentator.handle}</div>
        {children}
    </div>
}