import React from 'react';
import CurrencyInput from 'react-currency-input';
export const currencyInput = props => {
    const { label, input, type, min, prefix } = props;

    return (
        <div>
            <label>{label}</label>
            <CurrencyInput
                {...input}
                type={type}
                min={min}
                precision="2"
                prefix={prefix}
                allowEmpty={false}
                decimalSeparator='.'
                className='text-center border-0'
            />
        </div>
    );
};



