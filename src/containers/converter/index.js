import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment'
import {fetchConversion, fetchSymbols, fetchFluctuation, fetchTimeSeries} from "../../actions";
import ConversionForm from '../../components/forms/conversion-form'
import ConversionResult from '../../components/converter/index';
import Fluctuation from '../../components/time-series/fluctuation';
import TimeSeriesGraph from '../../components/time-series/graph';

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
        const endDate = moment().subtract(30, 'days').format('YYYY-MM-DD');
        this.props.fetchFluctuation(startDate, endDate, from, to);
        this.getTimeSeries(endDate, startDate, to, from)
    }

    getTimeSeries(start, end, base) {
        console.log('dates',start, end);
        this.props.fetchTimeSeries(start, end, base, 'EUR')
    }

    render() {
        const { symbols, conversion, fluctuation, timeSeries } = this.props;

        return (
            <div>
                <h1 className='jumbotron text-center'>Currency Converter</h1>
                <ConversionForm
                    symbols={symbols}
                    onSubmit={this.handleSubmit}
                />
                <div className='converter-result'>
                    <ConversionResult
                        symbols={symbols}
                        res={conversion}/>
                    <Fluctuation res={fluctuation} />
                </div>
                <TimeSeriesGraph
                    res={timeSeries}
                    to={conversion && conversion.query}
                />
                <div className='converter-legend'>
                    <p>* Converted rates are compared against the Euro €</p>
                    <p>(1 unit of your selected currency returns the displayed value)</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {conversion, symbols, fluctuation, timeSeries } = state.reducers;
    return {
        conversion,
        symbols,
        fluctuation,
        timeSeries
    }
};

export  default  connect(mapStateToProps,
    { fetchConversion, fetchSymbols, fetchFluctuation, fetchTimeSeries }
)(CurrencyConversion);
