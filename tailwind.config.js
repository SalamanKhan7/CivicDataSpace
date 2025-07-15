module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1f5f8d",
        secondary: "#84dccf",
        third: "#fdb557",
        forth: "#b28141",
        brand: {
          light: "#93c5fd",
          DEFAULT: "#1f5f8d",
          dark: "#1d4ed8",
        },
        background: {
          light: "#ffffff",
          dark: "#1a1a1a",
        },
        text: {
          light: "#1f2937",
          dark: "#f3f4f6",
        },
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        128: "32rem",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.08)",
        soft: "0 2px 6px rgba(0, 0, 0, 0.06)",
        input: "0 1px 3px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "796px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
