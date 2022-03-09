import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { sanityClient, urlFor } from '../../sanity';

export default function Posts({posts}) {
  return (
    <div>
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
        <div className='title-text px-3 px-sm-5 py-3 py-sm-5'>
            Blog
        </div>

        <section id="blog">
            {posts.map((post) => (
                <PostCard key={post._id} post={post}/>
            ))}
        </section>
      <Footer/>
    </div>
  )
}

function PostCard({post}) {
    const date = new Date(post.publishedAt);
    return (
        <div className="container blog-container">
                <a href={`blog/${post.slug.current}`}>
                <div className="card card-blog">
                    <h6 className="card-subtitle">{`${date.toLocaleDateString()} ${post.readingTime}`}</h6>
                    <p className="card-text-blog">{post.description}</p>
                    <img className="card-img-bottom mx-auto" src={urlFor(post.mainImage).url()} alt="Card image cap"/>
                    <p className="card-text">Read more ...</p>
                </div>
                </a>
        </div>
    )
}


export const getServerSideProps = async() => {
    const query = `*[_type=="post"] | order(publishedAt desc) {
      _id, title, slug, 
      author -> {name, image},
      description, mainImage,
      publishedAt, readingTime
    }`;
  
    const posts = await sanityClient.fetch(query);

  
    return {
      props: {
        posts,
      }
    }
  }