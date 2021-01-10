import React from 'react';
import { Player } from './Player';

export const Players = ({ players, children, ...rest }) => {
    return <div className="players" {...rest}>
        {
            players ?
                <>
                    {players.map((player, i) => (
                        <Player player={player} index={i} key={i} />
                    ))}
                    {children || null}
                </>
                : (children || null)
        }
    </div>
}