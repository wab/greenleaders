import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from '../components/Header'

import '../main.scss';

const TemplateWrapper = ({ children }) => (
  <div className="mainWrapper">
    <Helmet
      title="GreenLeaders"
      meta={[
        { name: 'description', content: 'GreenLeaders - Act Beautiful' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <main className="mainContainer">
      {children()}
    </main>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
