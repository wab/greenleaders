import React from 'react'
import Link from 'gatsby-link'

const RubriqueTemplate = ({data}) => {
  const {title, subcategories} = data.contentfulRubrique;
  return (
    <div>
      <h1>{title}</h1>
      {subcategories && (
        <ul>
          {subcategories.map((category, index) => (<li key={index}>{category.title}</li>))}
        </ul>
      )}
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export default RubriqueTemplate

export const query = graphql`
  query RubriqueQuery($id: String) {
    contentfulRubrique(id: {eq: $id}) {
      id
      title
      subcategories {
        slug
        title
        article {
          id
          title
        }
      }
    }
  }
`