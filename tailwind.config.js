module.exports = {
    content: ['./views/**/*.ejs', './public/js/*.js'],
    darkMode: 'class',
    theme: {
        extend: {
            minHeight: {
                '(screen)': 'calc(100vh - 7rem)'
            },
            colors: {
                transparent: 'transparent',
                current: 'current',
                dark: '#0A0001',
                grey: '#381E21',
                main: '#640211',
                pink: '#F8D4DA',
                white: '#FFF6F7'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};