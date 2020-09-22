
import axios from 'axios';

const KEY = 'AIzaSyC_tGbIItJE6PxLgjY5rQ9u7-TM1TnQQoM';

const request = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        key: KEY,
        type: 'video'
    }
});

class Client {
    get(q) {
        return request.get('/search', {
            params: {
                q
            }
        });
    }
}

const client = new Client();

export default client;

