export default class Data {

    constructor() {
        this.URI = `http://localhost:1337`;
    }

    async getArticles() {
        let data = [];
        const resp = await fetch(`${this.URI}/articles`);
        if(resp.ok) {
            data = await resp.json()
        }
        return data;
    }

}