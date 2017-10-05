import React from 'react'
import Link from 'gatsby-link'
import _ from "lodash"

const PostTemplate = ({data}) => {
  const {title, subtitle, categories, id} = data.contentfulArticle
  const postIndex = _.find(data.allContentfulArticle.edges, ({node: post}) => post.id === id);
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <Link to="/">Go back to the homepage</Link>

      <h3>Autres articles</h3>
      <ul>
        {postIndex.previous && (
          <li><Link to={`/article/${postIndex.previous.slug}`}>Article Précédent :<br/>{postIndex.previous.title}</Link></li>
        )}
        {postIndex.next && (
          <li><Link to={`/article/${postIndex.next.slug}`}>Article Suivant :<br/>{postIndex.next.title}</Link></li>
        )}
      </ul>
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
    }
  }
  allContentfulArticle {
    edges {
      previous {
        slug
        title
        subtitle
      }
      node {
        id
      }
      next {
        slug
        title
        subtitle
      }
    }
  }
}
`