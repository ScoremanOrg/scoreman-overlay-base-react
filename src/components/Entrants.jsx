import React from 'react';
import { Entrant } from './Entrant';

export const Entrants = ({ entrants, children, ...rest }) => {
    return <div className="entrants" {...rest}>
        {
            entrants ?
                <>
                    {entrants.map((entrant, i) => (
                        <Entrant entrant={entrant} index={i} key={i} />
                    ))}
                    {children || null}
                </>
                : (children || null)
        }
    </div>
}