import React from "react";
import Link from "gatsby-link";
import Thumbnail from "../components/Thumbnail";
import BackButton from "../components/BackButton";
import PostExcerpt from "../components/PostExcerpt";
import _ from "lodash";

const PostTemplate = ({ data }) => {
  const {
    title,
    subtitle,
    rubrique,
    id,
    thumbnail,
    thumbAlt,
    summary,
    main,
    speech
  } = data.contentfulArticle;

  const onTheme = _.filter(rubrique.article, post => post.id !== id);
  const postIndex = _.find(
    data.allContentfulArticle.edges,
    ({ node: post }) => post.id === id
  );

  return (
    <article>
      <header>
        <BackButton />
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </header>

      {thumbnail && (
        <Thumbnail
          img={thumbnail.responsiveResolution}
          alt={thumbAlt}
          caption={thumbnail.description}
        />
      )}
      {summary && (
        <aside>
          <p>en bref</p>
          <div
            dangerouslySetInnerHTML={{
              __html: summary.childMarkdownRemark.html
            }}
          />
        </aside>
      )}

      {main && (
        <div>
          <p>in concreto</p>
          <div
            dangerouslySetInnerHTML={{
              __html: main.childMarkdownRemark.html
            }}
          />
        </div>
      )}

      {speech && (
        <blockquote
          dangerouslySetInnerHTML={{
            __html: speech.childMarkdownRemark.html
          }}
        />
      )}


      {onTheme.length > 0 && (
        <aside>
          <h3>Sur le même thème</h3>
          <ul>
            {onTheme.map((post, index) => (<li key={index}><PostExcerpt post={post} /></li>))}
          </ul>
        </aside>
      )}

      <nav>
        <h3>Autres articles</h3>
        <ul>
          {postIndex.previous && (
            <li>
              <Link to={`/article/${postIndex.previous.slug}`}>
                Article Précédent :<br />
                {postIndex.previous.title}
              </Link>
            </li>
          )}
          {postIndex.next && (
            <li>
              <Link to={`/article/${postIndex.next.slug}`}>
                Article Suivant :<br />
                {postIndex.next.title}
              </Link>
            </li>
          )}
        </ul>
      </nav>

    </article>
  );
};

export default PostTemplate;

export const query = graphql`
  query PostQuery($id: String) {
    contentfulArticle(id: { eq: $id }) {
      id
      title
      subtitle
      thumbnail {
        description
        responsiveResolution(width: 500) {
          width
          height
          src
          srcSet
        }
      }
      thumbAlt
      summary {
        childMarkdownRemark {
          html
        }
      }
      main {
        childMarkdownRemark {
          html
        }
      }
      speech {
        childMarkdownRemark {
          html
        }
      }
      moreInfoUrl
      rubrique {
        slug
        title
        article {
          slug
          title
          thumbnail {
            responsiveResolution(width: 250) {
              width
              height
              src
              srcSet
            }
          }
        }
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
`;
