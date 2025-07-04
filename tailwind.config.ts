import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Raleway", "Arial", "sans-serif"],
            },
            colors: {
                light: {
                    // color1: '#fdfbf9',
                    color1: "#f5f0eb",
                    color2: "#dcdcdc",
                    accent1: "#347494",
                    accent2: "#f05a59",
                    text: "#453a23",
                    navbar: "#dcdcdc",
                    hover: "#498fb3",
                },
                dark: {
                    color1: "#20202a",
                    color2: "#23232d",
                    accent1: "#eb3249",
                    accent2: "#459fcf",
                    text: "#f3f6f6",
                    navbar: "#32323f",
                    accent1darker: "#bc283a",
                    card: "#18202f",
                },
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    // DEFAULT: 'hsl(var(--primary))',
                    // DEFAULT: '#F9F1F1',
                    foreground: "hsl(var(--primary-foreground))",
                    light: "#F9F1F1",
                    dark: "#506477",
                },
                secondary: {
                    // DEFAULT: 'hsl(var(--secondary))',
                    DEFAULT: "#2D334E",
                    foreground: "hsl(var(--secondary-foreground))",
                    light: "#979FC3",
                    dark: "#2D334E",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
