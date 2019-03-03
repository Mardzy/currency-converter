import React, { Component } from 'react';
import { Field, reduxForm/*, formValueSelector*/ } from 'redux-form';
import { currencyInput} from '../fields';
import { validate } from "../../validation";

class ConversionForm extends Component {

    mapOptionElements = obj => {
        return Object.keys(obj)
            .map(key =>
                <option
                    key={key}
                    value={key}
                    onChange={()=>1234}
                >{obj[key]}</option>);
    };

    renderForm = props => {
    // console.log('form props', props);
        const { handleSubmit, symbols } = props;
        return (
            <form
                onSubmit={handleSubmit}>
                <div>
                    <label>Select Base Currency</label>
                    <Field
                        name='from'
                        component='select'>
                        <option></option>
                        {this.mapOptionElements(symbols)}

                    </Field>
                </div>
                <div>
                    <label>Select Currency to Convert</label>
                <Field
                    name='to'
                    component='select'>
                    <option></option>
                    {this.mapOptionElements(symbols)}
                </Field>
                </div>
                <Field
                    name='amount'
                    label='Enter an amount'
                    min='.00'
                    component={currencyInput}
                    />

                <button>Convert</button>
            </form>
        );
    }


    render() {
        return this.renderForm(this.props);
    }
}

ConversionForm = reduxForm({
    form: 'conversionForm',
    validate
})(ConversionForm);

export default ConversionForm;
