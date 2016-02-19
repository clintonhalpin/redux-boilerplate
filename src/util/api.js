import fetch from 'isomorphic-fetch';

const fetchUser = (username) => {
    return fetch(`https://api.github.com/users/${username}`);
}

export default {
    fetchUser
}
