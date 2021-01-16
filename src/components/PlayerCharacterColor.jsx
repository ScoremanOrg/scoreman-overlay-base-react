import React from 'react';
import { useScoreboard } from '../hooks/useScoreboard';

export const PlayerCharacterColor = ({ entrantIndex, children, ...rest }) => {
    const [color] = useScoreboard(`entrants.players[${entrantIndex}].color`);

    return color ? <div style={{backgroundColor: color.hex}}
        className={`player-character-color player-character-color-${color.id}`} {...rest}
        data-color-hex={color.hex}>
        <div className={`player-character-color-name`}>{color.name}</div>
        {children}
    </div> : (children || null)
}