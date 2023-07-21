const crypto = require('crypto');


const base62Alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

const generateShortId = () => {
    let shortId = '';
    const length = 6; // Adjust the length of the shortId as needed

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * base62Alphabet.length);
        shortId += base62Alphabet.charAt(randomIndex);
    }

    return shortId;
};

module.exports = { generateShortId };