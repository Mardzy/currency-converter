import React from 'react';

function getKey(obj) {
    if (obj) {
        return Object.keys(obj)[0]
    }
}

function checkValues(rates) {
    return Boolean(rates && rates[getKey(rates)] && rates[getKey(rates)].change_pct);
}

const Fluctuation = ({res}) => {
    const { rates } = res;
    const text = `Over the last 30 days it's changed `;
    if (checkValues(rates)) {
        return <div>{text + rates[getKey(rates)].change_pct}&#37;</div>;
    }
    else {
        return '';
    }
};


export  default Fluctuation;
