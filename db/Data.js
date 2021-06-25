export default class Data {

    constructor() {
        if(process.env.API_URL) {
            this.URI = process.env.API_URL;
        }else {
            this.URI = `http://localhost:1337`;
        }
        
    }

    async getArticles() {
        let data = [];
        const resp = await fetch(`${this.URI}/articles`);
        if(resp.ok) {
            data = await resp.json()
        }
        return data;
    }

    async getArticlesByCategory(category) {
        let data = [];
        const resp = await fetch(`${this.URI}/articles?categories.category=${category}`);
        if(resp.ok) {
            data = await resp.json()
        }
        return data;
    }

    async getArticle(article) {
        let data = {};
        const resp = await fetch(`${this.URI}/articles?title=${article}`);
        if(resp.ok) {
            [data] = await resp.json()
        }
        return data;
    }

}