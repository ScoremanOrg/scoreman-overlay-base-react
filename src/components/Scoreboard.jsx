import React from 'react';
import { Entrants } from './Entrants';
import { TournamentDetails } from './TournamentDetails';
export const Scoreboard = ({ scoreboard, children, ...rest }) => {
    return <div className="scoreboard" {...rest}>
        { scoreboard ?
            <>
                <Entrants entrants={scoreboard.entrants} />
                <TournamentDetails tournament={{
                    name: scoreboard.tournamentName,
                    round: scoreboard.round,
                    caster: scoreboard.caster,
                    streamer: scoreboard.streamer
                }} />
                <>{children}</>
            </>
            : { children }
        }
    </div>
};