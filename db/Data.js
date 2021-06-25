export default class Data {

    constructor() {
        this.URI = "https://mailer-martinez.herokuapp.com"
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