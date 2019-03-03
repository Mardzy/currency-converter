import React from 'react';

const ConversionResult = ({response})  => {
    //keeping props available for later dev work
    const {/*date, info, query,*/ result} = response;

    return result ? <div>{result}</div> : '';
};

export default ConversionResult;
