class DataFetcher {
    getData(url) {
        return fetch(url).then(result => {
            if (result.ok) {
                return result.json();
            }
            throw new Error(`${result.status} (${result.statusText})`);
        })
    }

    async dataProcessing(url) {
        try {
            return await this.getData(url);
        } catch (err) {
            throw new Error(err);
        }
    }
}
