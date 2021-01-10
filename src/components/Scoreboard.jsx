import React from 'react';
import { Entrants } from './Entrants';
export const Scoreboard = ({ scoreboard, children, ...rest }) => {
    return <div className="scoreboard" {...rest}>
        { scoreboard ?
            <>
                <Entrants entrants={scoreboard.entrants} />
                <>{children}</>
            </>
            : { children }
        }
    </div>
};