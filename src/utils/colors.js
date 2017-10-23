import theme from "styled-theming";

const colors = {
  primary: "#A1A93E",
  fondation: "#D2703D",
  magasin: "#C7759E",
  environnement: "#61A36E",
  produits: "#408A99",
  white: "#fff",
  grey: {
    light: "rgba(47, 47, 48, 0.15)",
    base: "#A7A8AA",
    medium: "#646567",
    dark: "#2F2F30"
  }
};

export const rubriqueColor = theme("rubrique", {
  fondation: colors.fondation,
  magasin: colors.magasin,
  environnement: colors.environnement,
  produits: colors.produits,
  home: colors.grey.dark,
  none: colors.primary
});

export default colors;
