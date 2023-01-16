import { readable } from 'svelte/store';
import axios from 'axios';

// Set Axios instance defaults
const config = {
    baseURL: import.meta.env.VITE_API_URL
}

export const ax = readable(axios.create(config));