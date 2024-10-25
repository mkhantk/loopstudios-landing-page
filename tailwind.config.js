/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                fontAlata: "Alata",
                fontJosefin: "Josefin Sans",
            },
            colors: {
                darkGray: "hsl(0, 0%, 55%)",
                veryDarkGray: "hsl(0, 0%, 41%)",
            },
        },
    },
    plugins: [],
};
