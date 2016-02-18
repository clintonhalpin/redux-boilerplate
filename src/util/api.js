import fetch from 'isomorphic-fetch';

export default const fetchUser = (username) => fetch(`https://api.github.com/users/${username}`);