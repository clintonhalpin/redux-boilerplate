import fetch from 'isomorphic-fetch';

const fetchUser = (username) => {
    return fetch(`https://api.github.com/users/${username}`);
}

const fetchEmojis = () => {
    return fetch(`https://api.github.com/emojis`);
}

export default {
    fetchUser,
    fetchEmojis
}
