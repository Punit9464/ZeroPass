import axios from 'axios';

const fetcher = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        "Content-Type": "application/json",
    }
});

export default fetcher;