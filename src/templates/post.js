import React from 'react'
import Link from 'gatsby-link'

const PostTemplate = ({data}) => {
  const {title, subtitle, categories} = data.contentfulArticle
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export default PostTemplate

export const query = graphql`
query PostQuery($id: String) {
  contentfulArticle(id: {eq: $id}) {
    id
    title
    subtitle
    categories {
      slug
      title
      article {
        id
        slug
        title
      }
    }
  }
}
`