/** @type {import('tailwindcss').Config}*/
const config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
            }
        }
    },

    plugins: []
};

module.exports = config;
