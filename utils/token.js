const getToken = () => (localStorage.getItem('token') || '');

const setToken = token => localStorage.setItem('token', token);

export {
    getToken,
    setToken
}