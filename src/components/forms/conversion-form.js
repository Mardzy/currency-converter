import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { currencyInput } from '../fields';
import CountryOptionList from '../elements/country-option-list'
class ConversionForm extends Component {

    renderForm = props => {
        const { handleSubmit, symbols } = props;

        return (
            <form
                onSubmit={handleSubmit}>
                <div>
                    <label>Convert from</label>
                    <Field
                        name='from'
                        component='select'>
                        <option>CHOOSE A CURRENCY</option>
                        <CountryOptionList symbols={symbols}/>
                    </Field>
                </div>
                <div>
                    <label>Convert to</label>
                    <Field
                        name='to'
                        component='select'>
                        <option>CHOOSE A CURRENCY</option>
                        <CountryOptionList symbols={symbols}/>
                    </Field>
                </div>
                <Field
                    name='amount'
                    label='Amount for exchange'
                    min='.00'
                    component={currencyInput}
                />
                <button>Submit</button>
            </form>
        );
    };

    render() {
        return this.renderForm(this.props);
    }
}

ConversionForm = reduxForm({
    form: 'conversionForm'
})(ConversionForm);

export default ConversionForm;
