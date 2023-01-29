// this is the js for the dashboard page
// this has the current accounts list, new account btn, delete account btn

const accountFormHandler = async (event) => {
    event.preventDefault();
  
    const account = document.querySelector('#account-name').value.trim();
    const description = document.querySelector('#account-desc').value.trim();
  
    if (account && description) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ account, description }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/subscriptionRoutes/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete account');
      }
    }
  };

