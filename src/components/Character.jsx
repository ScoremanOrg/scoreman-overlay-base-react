import React from 'react';
import { CharacterColor } from './CharacterColor';

export const Character = ({
    character,
    characterInsideColor,
    hideColor,
    hideName,
    children,
    ...rest
}) => {
    return <div className={`scoreman-character scoreman-character-id${chracter.id}`}
        {...rest}>
        {
            (!hideColor && character.color) ?
            <CharacterColor character={character}>
                { characterInsideColor ? character.color : null}
            </CharacterColor>
            : null
        


            (!hideName && character.name) ?
            <div className="scoreman-character-name">
                { character.name }
            </div>

            : null
        }
        <div></div>
    </div>
}