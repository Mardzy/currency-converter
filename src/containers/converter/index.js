import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment'
import {fetchConversion, fetchSymbols, fetchFluctuation} from "../../actions";
import ConversionForm from '../../components/forms/conversion-form'
import ConversionResult from '../../components/converter/index';
import Fluctuation from '../../components/time-series/fluctuation';

class CurrencyConversion extends Component{
    componentDidMount() {
        this.props.fetchSymbols();
    }

    handleSubmit = ({from, to, amount}) => {
        this.props.fetchConversion(from, to, amount);
        this.getFluctuation(to, from)
    };

    getFluctuation(to, from) {
        const startDate = moment().subtract(1, 'days').format('YYYY-MM-DD');
        const endDate = moment().subtract(31, 'days').format('YYYY-MM-DD');
        this.props.fetchFluctuation(startDate, endDate, from, to);
    }

    render() {
        const { symbols, conversion, fluctuation } = this.props

        return (
            <div className="ui container">
                <ConversionForm
                    symbols={symbols}
                    onSubmit={this.handleSubmit}
                />
                <ConversionResult
                    symbols={symbols}
                    res={conversion}/>
                <Fluctuation
                    symbols={symbols}
                    res={fluctuation} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {conversion, symbols, fluctuation } = state.reducers;
    return {
        conversion,
        symbols,
        fluctuation
    }
};

export  default  connect(mapStateToProps,
    { fetchConversion, fetchSymbols, fetchFluctuation }
)(CurrencyConversion);
