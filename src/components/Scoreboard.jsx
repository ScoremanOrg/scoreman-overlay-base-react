import React from 'react';
import { useScoreboard } from '../hooks/useScoreboard';

export const Scoreboard = ({apiUrl, children}) => {
    const [scoreboard] = useScoreboard();


    return <div className="scoreboard">
        <pre>{ JSON.stringify(scoreboard, null, 2) }</pre>
    </div>
};