import React from 'react';

export const PlayerCountry = ({ country, children, ...rest }) => {
    return <div className={`player-country player-country-${country.code}`}
        data-country-code={country.code} {...rest}>
        <div className="player-country-name">{country.name}</div>
        {children}
    </div>
}