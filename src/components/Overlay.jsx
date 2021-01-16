import React from 'react';

export const Overlay = ({id, children}) => {
    return <div className={`overlay overlay-${id}`}>
        <Scoreboard>
            {children}
        </Scoreboard>
    </div>
}