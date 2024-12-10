module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include all your src files that use Tailwind classes
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      container: {
        center: true, // Centers the container by default
        padding: "2rem", // Adds padding to the container
        screens: {
          sm: "100%", // sm: 100% width
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
    },
  },
  plugins: [],
};