import React from 'react';

export const PlayerSponsor = ({ sponsor, children, ...rest }) => {
    return <div className={`player-sponsor player-sponsor${sponsor}`}
        data-player-sponsor={sponsor} {...rest}>
        {sponsor}
        {children}
    </div>
}