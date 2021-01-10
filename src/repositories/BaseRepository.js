export class BaseRepository {
    baseUrl = './';

    constructor(apiUrl) {
        if (apiUrl) {
            this.baseUrl = apiUrl;
        }
    }

    async getBasePath() {
        return this.baseUrl;
    }

    async get(call) {
        const baseUrl = await this.getBasePath();
        const req = `${baseUrl}${call}`;

        const headers = new Headers();
        headers.append('pragma', 'no-cache');
        headers.append('cache-control', 'no-cache');

        return fetch(req, {
            method: 'GET',
            headers
        })
            .then((res) => res.json());

    }

    async post(call, data) {
        const baseUrl = await this.getBasePath();

        return fetch(`${baseUrl}/${call}`, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then((res) => res.json());
    }
} 