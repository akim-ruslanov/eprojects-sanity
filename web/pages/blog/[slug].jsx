import {sanityClient, urlFor} from '../../sanity'
import Header from '../../components/Header'
import {GetStaticProps} from 'next'
import Head from 'next/head'
import {PortableText} from '@portabletext/react'
import Footer from '../../components/Footer'


const ptComponents = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null
        }
        return (
          <img
            alt={value.alt || ' '}
            loading="lazy"
            src={urlFor(value)}
          />
        )
      },
    },
    block: {
        h1: ({children}) => <h1 className="card-title-blog">{children}</h1>,
        h2: ({children}) => <h2 className="card-heading-blog">{children}</h2>,
        h3: ({children}) => <h3 className="card-text-blog">{children}</h3>,
        h4: ({children}) => <h4 className="card-text-blog">{children}</h4>,
        normal: ({children}) => <p className="card-text-blog">{children}</p>,
      },
    marks: {
        link: ({value, children}) => {
            const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
            return (
              <a href={value?.href} target={target} rel={target === '_blank' && 'noindex nofollow'} className="card-link">
                {children}
              </a>
            )
          }, 
    },
    list: {
        bullet: ({children}) => <ul className="card-text-blog">{children}</ul>,
      },
  }


function Post({post}) {
    console.log(post)
    const date = new Date(post.publishedAt);
    return <div>

        <Head>
            <title>eProjects</title>
            {/* Bootstrap JS stuff (remove in the future) */}
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            {/* Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Domine&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
            {/* Icons */}
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/> 
            <script src="https://kit.fontawesome.com/479dffc7d0.js"></script>

        </Head>
        <Header/>
        <section id="blog">
            <div className="container" >
                <div className="card-blog card" >
                <h6 className="card-subtitle">{`${date.toLocaleDateString()} ${post.readingTime}`}</h6>
                <p className="card-text-blog">{`${post.description}`}</p>
                {/* <img src="/images/BLOG.png" alt=""/> */}
                <img src={urlFor(post.mainImage).url()} alt="Card image cap"/>
                <br/>
                <PortableText
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                value = {post.body}
                components={ptComponents}
                />
                </div>
                



            </div>
        </section>
        <Footer/>
    </div>
}

export default Post;

export const getStaticPaths = async () => {
    const query = `*[_type == "post"] {
        _id,
        slug {
        current
      }
      }`;
    const posts = await sanityClient.fetch(query);

    const paths = posts.map((post) => ({
        params: {
            slug: post.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    };
}

export const getStaticProps = async({params}) => {
    const query = `*[_type == "post" && slug.current == $slug][0] {
        _id, 
        publishedAt,
        title,
        author -> {
          name,
          image
        },
        description,
        body,
        readingTime,
        mainImage
      } `

      const post = await sanityClient.fetch(query, {
          slug: params?.slug
      });

      if (!post) {
          return {
              notFound: true
          }
      }

      return {
          props: {
              post
          },
          revalidate: 60
      }

}