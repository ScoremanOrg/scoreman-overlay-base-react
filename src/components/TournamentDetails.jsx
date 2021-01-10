import React from 'react';

export const TournamentDetails = ({ tournament, children, ...rest }) => {
    return <div className={`tournament`} {...rest}>
        <div className="tournament-name">{tournament.name}</div>
        <div className="tournament-round">{tournament.round}</div>
        <div className="tournament-streamer">{tournament.streamer}</div>
        <div className="tournament-caster">{tournament.caster}</div>
        {children}
    </div>
}