async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'post',
        header: { 'Content-Type': 'aplication/json' }
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}
document.querySelector('#logout').addEventListener('click', logout);