import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                cafe: ['Cafe24Ssurround', 'sans-serif'],
                'neo-lt' : ['Neo-Light'],
                'neo-rg' : ['Neo-Regular'],
                'neo-bd' : ['Neo-Bold'],
                'neo-eb' : ['Neo-ExBold'],
                'neo-hv' : ['Neo-Heavy'],
            },
            width: {
                'calc-92': 'calc(100% - 8%)',
            },
        },
    },
    plugins: [],
};
export default config;
