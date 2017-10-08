import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Container from '../components/Container'

import '../main.scss';

const TemplateWrapper = ({ children, data }) => (
  <div className="mainWrapper">
    <Helmet
      title="GreenLeaders"
      meta={[
        { name: 'description', content: 'GreenLeaders - Act Beautiful' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <Navigation data={data} />
    <Container>
      <main>
        {children()}
      </main>
    </Container>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query NavigationQuery {
    allContentfulCategorie {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
