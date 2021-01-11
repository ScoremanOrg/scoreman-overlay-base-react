import React from 'react';
import { EntrantName } from './EntrantName';
import { Players } from './Players';
import { Score } from './Score';

export const Entrant = ({ entrant, children, index, ...rest }) => {
    const indexClassName = !!isNaN(index) ? ` entrant-${index}` : '';

    return <div className={`entrant${indexClassName}`} {...rest}>
        {
            entrant ? <>
                <Players players={entrant.players} />
                <Score score={entrant.score} />
                <EntrantName name={entrant.name} />
                {children || null}
            </> :
                (children || null)
        }
    </div>
}