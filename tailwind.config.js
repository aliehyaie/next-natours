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
            text: '#777',
            transparent: 'transparent',
            grey: {
                light1: '#f7f7f7'
            }
        },
        extend: {
            content: {
                'empty': ''
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'hero': "linear-gradient(to right bottom, #7ed56f80 , #28b48580), url('/img/hero.jpg')",
            },
            padding: {
                '62.5': '15.625rem'
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
                'moveInBottom': {
                    '0%': {
                        opacity: 0,
                        transform: "translateY(30px)"
                    },
                    '100%': {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                }
            },
            animation: {
                'moveLeft': 'moveInLeft 1s ease-out',
                'moveRight': 'moveInRight 1s ease-out',
                'moveBottom': 'moveInBottom 0.5s ease-out 0.75s backwards'
            },
            boxShadow: {
                'button-hover': '0 10px 20px rgba(0,0,0,.2)',
                'button-active': '0 5px 10px rgba(0,0,0,.2)'
            },
            gap: {
                horizontal: '6rem',
                vertical: '8rem',
                '7.5':'1.875rem'
            }
        },
    },
    plugins: [],
}
