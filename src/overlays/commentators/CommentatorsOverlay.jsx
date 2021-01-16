import React from 'react';
import { Commentators } from '../../components/Commentators';
import { Scoreboard } from '../../components/Scoreboard';

export const CommentatorsOverlay = () => {
    return <Scoreboard className='overlay overlay-commentators'>
        <Commentators />
    </Scoreboard>
}