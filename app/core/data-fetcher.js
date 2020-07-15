class DataFetcher {
    getData(url) {
        return fetch(url).then(result => {
            if (result.ok) {
                return result.json();
            }
            throw new Error(`Error happened: ${result.status}`);
        })
    }

    async dataProcessing(url) {
        try {
            return await this.getData(url);
        } catch (err) {
            throw new Error(`Something happened: ${err}`);
        }
    }
}
