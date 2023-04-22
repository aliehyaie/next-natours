/** @type {import('tailwindcss').Config} */
const {translate} = require("autoprefixer/lib/hacks/grid-utils");
module.exports = {
    important: true,
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            white: '#fff',
            lightGreen: '#7ed56f',
            mediumGreen: '#55c57a',
            darkGreen: '#28b485',
            text: '#777'
        },
        extend: {
            content: {
                'empty': ''
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'hero': "linear-gradient(to right bottom, #7ed56f80 , #28b48580), url('/img/hero.jpg')"
            },
            keyframes: {
                'moveInLeft': {
                    '0%': {
                        opacity: 0,
                        transform: "translateX(-100px)"
                    },
                    '80%': {
                        transform: "translateX(10px)"
                    },
                    '100%': {
                        opacity: 1,
                        transform: "translateX(0)"
                    }
                },
                'moveInRight': {
                    '0%': {
                        opacity: 0,
                        transform: "translateX(100px)"
                    },
                    '80%': {
                        transform: "translateX(-10px)"
                    },
                    '100%': {
                        opacity: 1,
                        transform: "translateX(0)"
                    }
                },
            },
            animation: {
                'moveLeft': 'moveInLeft 1s ease-out',
                'moveRight': 'moveInRight 1s ease-out',
            },
            boxShadow: {
                'button-hover': '0 10px 20px rgba(0,0,0,.2)',
                'button-active': '0 5px 10px rgba(0,0,0,.2)'
            }
        },
    },
    plugins: [],
}
