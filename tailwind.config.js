module.exports = {
    content: ["./html/**/*.html", "./js/**/*.js"],
    theme: {
      extend: {
        backgroundImage: {
          'hero-pattern': "url('../imgs/RingBanner.jpg')",
        },
        fontFamily: {
          fancy: ["Alex Brush", "cursive"], //From Google Fonts
        },
      },
    },
    variants: {},
    plugins: [],
  }