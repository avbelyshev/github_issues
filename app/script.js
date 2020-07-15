const messages = document.getElementById('messages');
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

    if (!formData.user || !formData.repo) {
        messages.innerText = 'User and repo are required';
        return;
    }

    issuesRoot.innerText = '';
    messages.innerText = 'Issues loading...';
    fetcher.dataProcessing(url).then(result => {
        messages.innerText = '';

        if (!result.length) {
            messages.innerText = 'Issues not find';
            return;
        }
        const renderer = new DataRenderer(issuesRoot, issuesTemplate, result);

        renderer.render();
    }).catch(err => {
        messages.innerText = err;
    })
}

const form = document.getElementById('query-options-form');

form.addEventListener('submit', submitHandler);
