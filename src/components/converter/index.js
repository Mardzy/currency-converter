import React from 'react';

const ConversionResult = ({res, symbols}) => {
    const { query, result } = res;

    if (res && query && result) {
        return <div>You will receive {result} in {symbols[query.to]}</div>
    }
    else {
        return '';
    }
};

export default ConversionResult;
