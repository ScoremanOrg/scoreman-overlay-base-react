import React from 'react';
import { PlayerCharacter } from './PlayerCharacter';
import { PlayerCountry } from './PlayerCountry';
import { PlayerName } from './PlayerName';
import { PlayerSponsor } from './PlayerSponsor';

export const Player = ({ player, children, index, ...rest }) => {
    const indexClassName = !!isNaN(index) ? ` player-${index}` : '';

    return <div className={`player${indexClassName}`} {...rest}>
        {
            player ? <>
                <PlayerName name={player.name}/>
                <PlayerCharacter character={player.character}/>
                <PlayerCountry country={player.country} />
                <PlayerSponsor sponsor={player.sponsor} />
                {children}
            </> : (children || null)
        }
    </div>
}