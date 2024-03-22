/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundOpacity: {
                15: '0.15',
            },
            colors: {
                'neutral': {
                    50: '#F8FAFC',
                    100: '#F1F5F9',
                    200: '#E2E8F0',
                    300: '#CBD5E1',
                    400: '#94A3B8',
                    500: '#64748B',
                    600: '#475569',
                    700: '#334155',
                    800: '#1E293B',
                    900: '#0F172A',
                    950: '#050A18'
                },
                'brand': {
                    50: '#F0F9FF',
                    100: '#E0F1FE',
                    200: '#B9E5FE',
                    300: '#7CD1FD',
                    400: '#30B8FA',
                    500: '#0CA2EB',
                    600: '#0081C9',
                    700: '#0167A3',
                    800: '#065786',
                    900: '#0B486F',
                    950: '#072E4A'
                },
                // BACKGROUND
                'primary-background': '#F8FAFC'
            },
            fontSize: new Array(100).fill(0).reduce((l, v, i) => {
                l[ (i+1)*2 ] = `${(i+1)*0.125}rem`;
                return l;
            }, {}),
        },
    },
    plugins: [],
};
