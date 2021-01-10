import React from 'react';

export const CharacterColor = ({color, children}) => {
    return <div className={`scoreman-character-color scoreman-character-color-${color.id}`}
        style={{backgroundColor:color.hex }} >
        { children }
    </div>
}