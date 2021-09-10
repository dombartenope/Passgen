const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
    //initialize chars to contain all letters
    let chars = alpha;
    //append numbers if true
    hasNumbers ? (chars += numbers) : '';
    //append symbols if true
    hasSymbols ? (chars += symbols) : '';

    return generatePassword(length, chars);
}

const generatePassword = (length, chars) => {
    let password = '';

    //Choose from chars at random and append to password variable
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    return password;
}

module.exports = createPassword;