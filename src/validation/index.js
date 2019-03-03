export const validate = values => {
    const errors = {};
    if (!values.amount) {
        errors.amount = 'You must enter an amount';
    }
    else if (!values.converted) {
        errors.converted = 'You must select a currency to convert';
    }
    else if (!values.base) {
        errors.base = 'You must select a base currency to convert';
    }
    return errors
};
