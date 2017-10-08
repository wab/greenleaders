import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container'

const Header = () => (
  <header className="mainHeader"
  >
      <h1 className="mainHeader-title">
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          GreenLeaders
        </Link>
      </h1>
  </header>
)

export default Header;