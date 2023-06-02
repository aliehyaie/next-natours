/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

const rotateY = plugin(({addUtilities}) => {
    addUtilities({
        '.rotate-y-0': {
            transform: 'rotateY(0)',
        },
        '.rotate-y-180': {
            transform: 'rotateY(180deg)',
        },
        '.-rotate-y-180': {
            transform: 'rotateY(-180deg)',
        }
    })
});

const perspective = plugin(({matchUtilities}) => {
    matchUtilities({
        'perspective': (value) => ({
            perspective: value
        })
    })
});

const backfaceVisibility = plugin(({addUtilities}) => {
    addUtilities({
        '.backface-visible': {
            'backface-visibility': 'visible',
        },
        '.backface-hidden': {
            'backface-visibility': 'hidden',
        }
    })
});

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
            prD: '#342',
            primary: '#55c57a',
            primaryLight: '#7ed56f',
            primaryDark: '#28b485',
            secondaryLight: '#ffb900',
            secondaryDark: '#ff7730',
            tertiaryLight: '#2998ff',
            tertiaryDark: '#5643fa',
            text: '#777',
            transparent: 'transparent',

            grey: {
                light1: '#f7f7f7',
                light2: '#eee',
                dark1: '#777',
                dark2: '#999',
                dark3: '#333'
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
                'features': "linear-gradient(to right bottom, #7ed56f80 , #28b48580), url('/img/nat-4.jpg')",
            },
            padding: {
                '50': '12.5rem',
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
                '7.5': '1.875rem'
            },
        },
    },
    plugins: [rotateY, perspective, backfaceVisibility],
}
