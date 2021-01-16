import React, { useEffect, useState } from 'react';
import { useScoreboard } from '../hooks/useScoreboard';

export const Score = ({ entrantIndex, children, ...rest }) => {
    const [score] = useScoreboard(`entrants.player[${entrantIndex}].score`);

    const indexClassName = typeof index === 'number' ? ` score-${entrantIndex}` : '';
    return <div className={`score${indexClassName}`} {...rest}>
        { score ? 
            <>
                {score}
                {children}
            </>
            : (children || null)}
    </div>
}