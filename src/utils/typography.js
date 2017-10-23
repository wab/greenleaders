import Typography from "typography";

const typOptions = {
  baseFontSize: "20px",
  baseLineHeight: 1.45,
  googleFonts: [
    {
      name: "Open+Sans",
      styles: ["300", "400", "700"]
    },
    {
      name: "Merriweather",
      styles: ["300", "400"]
    }
  ],
  headerFontFamily: ["Merriweather", "serif"],
  headerWeight: 300,
  bodyFontFamily: ["Open Sans", "sans-serif"]
};

const typography = new Typography(typOptions);

export default typography;
