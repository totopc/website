const tailwindcss = require('tailwindcss');

module.exports = {
    purge:[
        "./index.html"
    ],
    plugins: [
        tailwindcss ('./tailwind.config.js'), 
        require('autoprefixer')
    ],
};