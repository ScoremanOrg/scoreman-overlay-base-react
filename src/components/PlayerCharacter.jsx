import React from 'react';
import { PlayerCharacterColor } from './PlayerCharacterColor';
import { PlayerCharacterName } from './PlayerCharacterName';

export const PlayerCharacter = ({ character, children, ...rest }) => {
    return <div className={`player-character player-character-${character.id}`} {...rest}>
        <PlayerCharacterName name={character.name} />
        <PlayerCharacterColor color={character.color} />
        {children}
    </div>
}