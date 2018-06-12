import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Blogs extends React.Component {
    render() {
        const { edges: posts } = this.props.data.allMarkdownRemark;
        return (
            <div id="main">
                <div id="blogs">
                    <section><a href="..">Go Back</a></section>
                    <section>
                        <div className="inner">
                            <header className="major">
                                <h1>Jonny's Blogs</h1>
                            </header>
                            <div className="row">
                                {posts
                                .filter(post => post.node.frontmatter.title.length > 0)
                                .map(({ node: post }) => {
                                    return (
                                        <div className="6u 12u$(small)" key={post.id}>
                                            <h3 style={{ marginBottom: 0, color: '#006FC5' }}><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></h3>
                                            <h6 style={{ marginBottom: 15 }}>{post.frontmatter.date}</h6>
                                            <p style={{ paddingLeft: 25, paddingRight: 25 }}>{post.excerpt}</p>
                                            <hr />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;