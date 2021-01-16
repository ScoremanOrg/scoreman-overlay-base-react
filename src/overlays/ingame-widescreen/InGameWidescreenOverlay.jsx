import React from 'react';
import { Commentators } from '../../components/Commentators';
import { Entrants } from '../../components/Entrants';
import { GameArea } from '../../components/GameArea';
import { Scoreboard } from '../../components/Scoreboard';
import { TournamentDetails } from '../../components/TournamentDetails';

export const InGameWideScreenOverlay = () => {
    return <Scoreboard>
        <Entrants />
        <GameArea />
        <Commentators />
        <TournamentDetails />
    </Scoreboard>
}