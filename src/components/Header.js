import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container'

const Header = () => (
  <div
    style={{
      background: '#61a36e',
      padding: '1.45rem 0',
    }}
  >
    <Container>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Act Beautiful - GreenLeaders
        </Link>
      </h1>
    </Container>
  </div>
)

export default Header;