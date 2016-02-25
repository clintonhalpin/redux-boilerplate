import fetch from 'isomorphic-fetch';

const postConfig = (body) => {
    return {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
};

const API_BASE = 'https://api.github.com';

const fetchUser = (username) => {
    return fetch(`${API_BASE}/users/${username}`);
}

const fetchEmojis = () => {
    return fetch(`${API_BASE}/emojis`);
}

const postMarkdown = (req) => {
    let config = postConfig({
        text: req,
        mode: "gfm"
    });
    return fetch(`${API_BASE}/markdown`, config);
}

export default {
    fetchUser,
    fetchEmojis,
    postMarkdown
}
