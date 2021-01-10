import React from 'react';

export const Score = ({ score, index, children, ...rest }) => {
    const indexClassName = typeof index === 'number' ? ` score-${index}` : '';
    return <div className={`score${indexClassName}`} {...rest}>
        {score}
        {children}
    </div>
}