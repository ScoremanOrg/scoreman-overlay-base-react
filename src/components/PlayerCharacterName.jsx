import React from 'react';

export const PlayerCharacterName = ({ name, children, ...rest }) => {
    return <div className={`player-character-name`} {...rest}>
        {name}
        {children}
    </div>
}