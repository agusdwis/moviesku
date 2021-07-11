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
        secondaryAccent: "var(--secondary-accent)",
        secondaryAlt: "var(--secondary-alt)",
        background: "var(--background)",
        titleColor: "var(--title-color)",
        textColor: "var(--text-color)",
        textColorLight: "var(--text-color-light)",
        inputColor: "var(--input-color)",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      width: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
      },
      height: (theme) => ({
        header: "var(--header-height)",
        "min-header": "calc(100vh - var(--header-height))",
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
      }),
      margin: {
        header: "var(--header-height)",
      },
      animation: {
        slide: "slide 0.5s ease",
        drop: "drop 0.5s ease",
        up: "up 0.5s ease",
      },
      keyframes: {
        slide: {
          "0%": {
            opacity: 0,
            transform: "translateX(100px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },
        drop: {
          "0%": {
            opacity: 0,
            transform: "translateY(-50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },
        up: {
          "0%": {
            opacity: 0,
            transform: "translateY(80px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/src/assets/img/home.jpeg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
