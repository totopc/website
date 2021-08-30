const tailwindcss = require('tailwindcss');

module.exports = {
    purge:[],
    plugins: [
        tailwindcss ('./tailwind.config.js'), 
        require('autoprefixer')
    ],
};