import axios from 'axios';

const api = '4e8fce53b5e3459fa4c95358fb21afc2'
const url = 'https://newsapi.org/v2';

export const fetchSources = async () => {
    const requestSource = `sources?apiKey=`;
    try {
        const { data: { sources } } = await axios.get(`${url}/${requestSource}${api}`);

        return sources.map((source) => source);
    } catch (error) {
        return error;
    }
};

export const fetchNews = async (request) => {
    try {
        const { data: { articles } } = await axios.get(`${url}/${request.category}?${request.query}&pageSize=${request.results}&apiKey=${api}`);

        return articles.map((article) => (article));
    } catch (error) {
        return error;
    }
};