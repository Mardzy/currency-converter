import React from 'react';

const ConversionResult = ({response})  => {
    const {/*date, info, query,*/ result} = response;
    const toTwoDecimalPlaces = Math.round((result + 0.00001) * 100) / 100;

    return result ? <div>{toTwoDecimalPlaces}</div> : '';
};

export default ConversionResult;
