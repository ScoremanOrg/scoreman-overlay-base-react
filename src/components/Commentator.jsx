import React from 'react';

export const Commentator = ({ commentator, index, children, ...rest }) => {
    const indexClassName = index ? `commentator${index}` : '';

    return <div className={`commentator-${indexClassName}`} {...rest}>
        <div className="commentator-handle">{commentator.handle}</div>
        <div className="commentator-name"
            data-commentator-social={commentator.name}>{commentator.name}</div>
        {children}
    </div>
}