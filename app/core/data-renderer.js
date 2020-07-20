class DataRenderer {
    constructor(root, template, data) {
        this.root = root;
        this.template = template;
        this.data = data;
    }

    render() {
        this.root.innerHTML = '';

        this.data.forEach(item => {
            const row = this.fillTemplate(item);
            this.root.append(row);
        })
    }

    fillTemplate(item) {
        let row = this.template.content.cloneNode(true);

        row.querySelector('.number').textContent = item.number;
        row.querySelector('.date').textContent = this.dateFormat(item.created_at);
        row.querySelector('.title').textContent = item.title;
        row.querySelector('.body').textContent = item.body.slice(0,80);

        return row;
    }

    dateFormat(date) {
        const dateOptions = { day: 'numeric', month: 'numeric', year: 'numeric'};
        return new Date(Date.parse(date)).toLocaleString("ru", dateOptions);
    }
}
