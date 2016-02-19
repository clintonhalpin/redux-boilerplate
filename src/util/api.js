import fetch from 'isomorphic-fetch';

const API_BASE = 'https://api.github.com';

const fetchUser = (username) => {
    return fetch(`${API_BASE}/users/${username}`);
}

const fetchEmojis = () => {
    return fetch(`${API_BASE}/emojis`);
}

export default {
    fetchUser,
    fetchEmojis
}
