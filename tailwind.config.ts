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
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                'neo-lt' : ['Neo-Light'],
                'neo-rg' : ['Neo-Regular'],
                'neo-bd' : ['Neo-Bold'],
                'neo-eb' : ['Neo-ExBold'],
                'neo-hv' : ['Neo-Heavy'],
            }
        },
    },
    plugins: [],
};
export default config;