import React from 'react';

const CountryOptionList = ({ symbols }) => {
    return Object.keys(symbols)
        .map(key =>
            <option
                key={key}
                value={key}
                className='text-center'>
                {symbols[key]}
            </option>
        );
};

export default CountryOptionList;
