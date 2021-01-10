import React from 'react';

export const PlayerCharacterColor = ({ color, children, ...rest }) => {
    return <div style={{backgroundColor: color.hex}}
        className={`player-character-color player-character-color-${color.id}`} {...rest}
        data-color-hex={color.hex}>
        <div className={`player-character-color-name`}>{color.name}</div>
        {children}
    </div>
}