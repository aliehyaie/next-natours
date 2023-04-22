/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            'lightGreen': '#7ed56f',
            'mediumGreen': '#55c57a',
            'darkGreen': '#28b485',
            'text': '#777'
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'hero': "linear-gradient(to right bottom, #7ed56f80 , #28b48580), url('/img/hero.jpg')"
            },
        },
    },
    plugins: [],
}
