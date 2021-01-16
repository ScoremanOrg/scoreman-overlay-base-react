import React from 'react';
import { useScoreboard } from '../hooks/useScoreboard';
import { ChildFnComponent } from './ChildFnComponent';
import { Entrant } from './Entrant';

export const Entrants = ({ children }) => {
    const [entrants, setEntrants] = useScoreboard('entrants');

    function renderEntrantsDefault(entrants) {
        return (entrants || []).map((entrant, i) => (
            <Entrant entrant={entrant} index={i} key={i} />
        ))
    }

    return <div className="entrants">
        <ChildFnComponent
            defaultRender={() => renderEntrantsDefault(entrants)}
            fnArgs={{
                entrants: entrants || [],
                setEntrants
            }}>
            {children}
        </ChildFnComponent>
    </div>
}