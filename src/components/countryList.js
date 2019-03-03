import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSymbols } from '../actions';


class CountryList extends Component {
    componentDidMount() {
        this.props.fetchSymbols();
        // this.getCountryList()
    }

    mapOptionElements(obj) {
        return Object.keys(obj)
            .map(key =>
            <option
                key={key}
                value={key}
                onChange={()=>1234}
            >{obj[key]}</option>);
    }


    captureSelectValue(event) {
        let value = event.target.value;
        // if (event.target.id === 'base') {
        //     this.setState({baseSelectValue:value})
        // } else {
        //     this.setState({convertedSelectValue:value})
        // }
        // this.
    }


    render() {
        // console.clear();
        console.log('this.props', this.props);
        return (
            <div>
                <ConversionForm />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { symbols: state.symbols }
};

export  default  connect(mapStateToProps,
    { fetchSymbols }
)(CountryList);
