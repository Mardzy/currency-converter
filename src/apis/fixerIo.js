import axios from 'axios';

export default axios.create({
    baseURL: 'http://data.fixer.io/api',
    params:{
        access_key: '358e4ddf2ada4f4555894beb50d1a88f'
    }
})
