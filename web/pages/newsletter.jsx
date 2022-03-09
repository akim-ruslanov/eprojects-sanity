import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Newsletter() {
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
            <script src="https://kit.fontawesome.com/479dffc7d0.js"></script>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/> 
        </Head>
        <Header/>
        <section id="newsletter">
            <div className="container">
            <div className="row">
                <div className="col text-center">
                <h1>Newsletter Comming Soon!</h1>
                </div>
            </div>
            </div>
        </section>

      <Footer/>
    </div>
  )
}
