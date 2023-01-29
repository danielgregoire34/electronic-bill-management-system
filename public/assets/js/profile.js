const newFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#project-name').value.trim();
    const description = document.querySelector('#project-desc').value.trim();

    if (name && description) {
    const response = await fetch(`/api/projects`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
        'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert('Failed to create project');
    }
    }
};



document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);
