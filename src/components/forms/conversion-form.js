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
                <div className='d-flex justify-content-around'>
                    <div>
                        <label>Convert from</label>
                        <Field
                            name='from'
                            className='text-center'
                            component='select'>
                            <option>CHOOSE A CURRENCY</option>
                            <CountryOptionList symbols={symbols}/>
                        </Field>
                    </div>
                    <div>
                        <label>Convert to</label>
                        <Field
                            name='to'
                            className='text-center'
                            component='select'>
                            <option>CHOOSE A CURRENCY</option>
                            <CountryOptionList symbols={symbols}/>
                        </Field>
                    </div>
                </div>
                <div className='d-flex flex-column align-items-center converter-submit'>
                    <Field
                        name='amount'
                        label='Amount to exchange'
                        min='.00'
                        component={currencyInput}
                    />
                    <button className='btn btn-primary'>Submit</button>
                </div>
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
