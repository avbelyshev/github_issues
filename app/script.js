const issuesRoot = document.getElementById('issues-root');
const issuesTemplate = document.getElementById('issue-item');
const fetcher = new DataFetcher();

function submitHandler(event) {
    event.preventDefault();

    const formData = {
        user: form.elements.user.value,
        repo: form.elements.repo.value,
    };
    const url = `https://api.github.com/repos/${formData.user}/${formData.repo}/issues`;

    fetcher.dataProcessing(url).then(result => {
        const renderer = new DataRenderer(issuesRoot, issuesTemplate, result);

        renderer.render();
    })
}

const form = document.getElementById('query-options-form');

form.addEventListener('submit', submitHandler);
