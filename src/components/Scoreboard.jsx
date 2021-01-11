import React from 'react';
import { useScoreboard } from '../hooks/useScoreboard';
import { Commentators } from './Commentators';
import { Entrants } from './Entrants';
import { GameArea } from './GameArea';
import { TournamentDetails } from './TournamentDetails';

export const Scoreboard = ({ children, ...rest }) => {
    const [scoreboard] = useScoreboard();

    return <div className="scoreboard" {...rest}>
        {((children &&
            (typeof children === 'function')) ?
            children({scoreboard}) :
            children)}

        {(!children && scoreboard) &&
            <>
                <Entrants entrants={scoreboard.entrants} />
                <GameArea />
                <Commentators commentators={scoreboard.commentators} />
                <TournamentDetails tournament={{
                    name: scoreboard.tournamentName,
                    round: scoreboard.round,
                    caster: scoreboard.caster,
                    streamer: scoreboard.streamer
                }} />
                <>{children}</>
            </>
        }
    </div>
};