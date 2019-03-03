import React from 'react';

const CountryOptionList = ({ symbols }) => {
    return Object.keys(symbols)
        .map(key =>
            <option
                key={key}
                value={key}>
                {symbols[key]}
            </option>
        );
};

export default CountryOptionList;
