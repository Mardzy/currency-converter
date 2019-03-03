import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSymbols, fetchConversion } from '../../actions';
import ConversionForm from '../../components/forms/conversion-form'
import ConversionResult from '../../components/converter/index';

class CurrencyConverter extends Component{
    componentDidMount() {
        this.props.fetchSymbols();
    }

    handleSubmit = ({from, to, amount}) => {
        this.props.fetchConversion(from, to, amount)
    };

    render() {
console.log('props', this.props);
        return (
            <div className="ui container">
                <ConversionForm
                    symbols={this.props.symbols}
                    onSubmit={this.handleSubmit}
                />
                <ConversionResult response={this.props.conversion}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('state',state);
    return {
        symbols: state.reducers.symbols,
        conversion: state.reducers.conversion
    }
};

export  default  connect(mapStateToProps,
    { fetchSymbols, fetchConversion}
)(CurrencyConverter);
