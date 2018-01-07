import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";
import PageContainer from "../components/PageContainer";
import globals from "../utils/globals";
import colors from "../utils/colors";
import { link } from "../utils/mixins";

const Title = styled.h1`
  font-size: ${globals.sizes.large};
  margin-bottom: 8px;
  line-height: 1.3;
`;
const SubTitle = styled.h2`
  color: ${colors.grey.base};
  font-size: ${globals.sizes.medium};
  line-height: 1.3;
`;

const StyledParagraph = styled.p`
  a {
    ${link};
  }
`;

const NoticePage = ({ data }) => {
  return (
    <PageContainer title="Mentions Légales">
      <Helmet title={`Merci - ${data.site.siteMetadata.title}`} />
      <Title>Mentions légales !</Title>
      <StyledParagraph>
        Nous sommes heureux de vous accueillir sur le site web
        www.greenleaders.fr Nous nous efforçons d'assurer au mieux de nos
        possibilités, l'exactitude et la mise à jour des informations diffusées
        sur ce Site, dont nous nous réservons le droit de corriger, à tout
        moment et sans préavis, le contenu.
      </StyledParagraph>
      <SubTitle>Éditeur du site</SubTitle>
      <StyledParagraph>
        <strong>YVES ROCHER FRANCE</strong>
        <br />
        Société par actions simplifiée au capital de 228 661 780 € <br />
        <address>
          2 – 4 boulevard de Beaumont <br />35000 RENNES <br />02.99.29.74.74
          <br />
          808 529 184 RCS RENNES
        </address>
        <br />
        N° de TVA intra-communautaire : FR 35 808 529 184 <br />
        Directeur de publication : Vincent Melice <br />
        e-mail : &nbsp;
        <a href="maito:contact@yves-rocher.fr">contact@yves-rocher.fr</a>
      </StyledParagraph>
      <SubTitle>Informatique et Libertés</SubTitle>
      <StyledParagraph>
        Conformément à la loi 78-17 du 6 janvier 1978 modifiée relative à
        "l'informatique, aux fichiers et aux libertés", vous disposez d'un droit
        d'accès, de rectification et de suppression des données vous concernant
        que vous pouvez exercer en nous écrivant à l'aide de&nbsp;
        <a href="https://www.yves-rocher.fr/contact/contactByMail">
          notre formulaire en ligne
        </a>&nbsp;Gacilly, en mentionnant vos nom, prénom, adresse complète, et
        numéro client éventuellement.
      </StyledParagraph>
      <SubTitle>Responsabilité</SubTitle>
      <StyledParagraph>
        Des liens hypertextes peuvent renvoyer vers d'autres sites web que le
        présent. Yves Rocher dégage toute responsabilité dans le cas où le
        contenu de ces sites web contreviendrait aux dispositions légales et
        réglementaires en vigueur. Par ailleurs, Yves Rocher rappelle que toute
        création de lien hypertexte vers la page d'accueil du présent Site ou
        toute autre page du Site est soumise à l'accord exprès, préalable et
        écrit de Yves Rocher.
      </StyledParagraph>
      <SubTitle>Propriété intellectuelle</SubTitle>
      <StyledParagraph>
        En accord avec les lois régissant la propriété des droits littéraires et
        artistiques ou autres droits similaires, le présent Site et tous les
        éléments, marques, dessins, modèles, logos, graphiques, etc. se trouvant
        dans le présent Site ainsi que leur compilation sont la propriété
        exclusive de Yves Rocher ou de ses fournisseurs, ces derniers ne
        concédant aucune licence, ni aucun autre droit que celui de consulter le
        Site.
      </StyledParagraph>
      <StyledParagraph>
        La reproduction ou l'utilisation de tout ou partie de ces éléments est
        seulement autorisée aux fins exclusives d'information pour un usage
        personnel et privé, toute reproduction et toute utilisation de copies
        réalisées à d'autres fins étant expressément interdites. Toute autre
        utilisation est constitutive de contrefaçon et sanctionnée au titre de
        la Propriété Intellectuelle, sauf autorisation préalable et écrite de
        Yves Rocher.
      </StyledParagraph>
      <SubTitle>Textes applicables, juridiction</SubTitle>
      <StyledParagraph>
        Le présent contrat est soumis à la loi française. Les conditions de
        vente correspondant aux offres proposées sur ce site qui s'adresse aux
        consommateurs achetant en France sont en effet exclusivement soumises
        aux dispositions protectrices des consommateurs applicables en France.
        Les conditions de livraison proposées ne concernent que la France
        Métropolitaine. Dès lors ces conditions s'appliquent à des ventes
        conclues et exécutées en France. La langue du présent contrat est la
        langue française. En cas de litige les tribunaux français seront seuls
        compétents.
      </StyledParagraph>
    </PageContainer>
  );
};

export default NoticePage;

export const query = graphql`
  query NoticePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
