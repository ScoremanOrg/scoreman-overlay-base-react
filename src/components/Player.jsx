import React from 'react';

export const Player = ({ player, children, index, ...rest }) => {
    const indexClassName = typeof index === 'number' ? ` player-${index}` : '';

    return <div className={`player${indexClassName}`} {...rest}>
        {
            player ? '' : (children || null)
        }
    </div>
}