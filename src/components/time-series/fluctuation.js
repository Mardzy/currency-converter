import React from 'react';

function getKey(obj) {
    if (obj) {
        return Object.keys(obj)[0]
    }
}

const Fluctuation = ({res}) => {
    console.log('res', res);
    const { rates, start_date, end_date } = res;

    if (rates && rates[getKey(rates)] && rates[getKey(rates)].change_pct) {
        return <div>Over the last 30 days it's had a change of {rates[getKey(rates)].change_pct}&#37;</div>;
    }
    else {
        return '';
    }
};


export  default Fluctuation;
