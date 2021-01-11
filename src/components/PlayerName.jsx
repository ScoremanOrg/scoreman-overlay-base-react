import React from 'react';

export const PlayerName = ({ name, index, children, ...rest }) => {
    const indexClassName = !!isNaN(index) ? `player-name${index}` : '';

    return <div className={`player-name${indexClassName}`} {...rest}>
        {name}
        {children}
    </div>
}