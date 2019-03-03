import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

function createDataArr(obj) {
    const arr = [];
    if(obj){
        Object.keys(obj).forEach(function (item) {
            const data = {};
            const value = obj[item];
            data.name = item;
            for (const key in value) {
                if (value.hasOwnProperty(key)){
                    data.rate = value[key];
                }
            }
            arr.push(data);
        });
    }
    return arr;
}

const getData = function (obj) {
    return createDataArr(obj);
};

class CustomizedLabel extends PureComponent {
    render() {
        const {
            x, y, stroke, value,
        } = this.props;
        return <text x={x} y={y} dy={-4} fill={stroke} fontSize={7} textAnchor="middle">{value}</text>;
    }
}

class CustomizedAxisTick extends PureComponent {
    render() {
        const {
            x, y, payload,
        } = this.props;
        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={10} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
            </g>
        );
    }
}

export default class TimeSeriesGraph extends PureComponent {

    render() {
        const { res } = this.props;

        return (
            <LineChart
                width={1000}
                height={300}
                data={getData(res.rates)}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="0 0" />
                <XAxis dataKey="name" height={40} tick={<CustomizedAxisTick />} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="rate" stroke="#8884d8" label={<CustomizedLabel />} />
            </LineChart>
        );
    }
}
