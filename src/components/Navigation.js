import React from "react";
import Link from "gatsby-link";
import Container from "../components/Container";

const Navigation = ({ data }) => {
  const rubriques = data.allContentfulRubrique.edges;
  return (
    <nav className="Navigation">
      <Container>
        <ul className="Navigation-items">
          {!!rubriques &&
            rubriques.map(({ node: rubrique }, index) => (
              <li key={index} className="Navigation-item">
                <Link
                  to={`/rubrique/${rubrique.slug}`}
                  activeClassName="active"
                >
                  {rubrique.title}
                </Link>
              </li>
            ))}
          <li className="Navigation-item">
            <Link to="/faq" activeClassName="active">
              FAQ
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navigation;
