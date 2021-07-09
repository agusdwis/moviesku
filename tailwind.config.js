module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        primaryAccent: "var(--primary-accent)",
        primaryAlt: "var(--primary-alt)",
        secondary: "var(--secondary)",
        background: "var(--background)",
        titleColor: "var(--title-color)",
        textColor: "var(--text-color)",
        textColorLight: "var(--text-color-light)",
        inputColor: "var(--input-color)",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
