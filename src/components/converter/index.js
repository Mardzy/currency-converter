import React from 'react';

const ConversionResult = ({res, symbols}) => {
    const { query, result } = res;
    const sInsideBracket = '(s)';
console.log('res', res);
    if (res && query && result) {

        return <div>You'll receive {result} in {symbols[query.to]}{sInsideBracket}</div>;
    }
    else {
        return '';
    }
};

export default ConversionResult;
