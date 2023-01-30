// this is the js for the new subscription page

const newFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#accountName').value.trim();
    const amount = document.querySelector('#amount').value.trim();
    const dueDate = document.querySelector('#dueDate')

    if (name && amount && dueDate) {
    const response = await fetch(`/api/acccounts`, {
        method: 'POST',
        body: JSON.stringify({ name, amount, dueDate }),
        headers: {
        'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to create project');
    }
    }
};



document
    .querySelector('.new-account-form')
    .addEventListener('submit', newFormHandler);

// document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);


