import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faFileSignature} from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
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
      <section id="contact">
            <div className="container">
                <div className="row">
                <div className="contact-title">
                    Contact
                </div>
                </div>
                <div className="row links">
                <div className="col-12 col-sm-6">
                    <p>
                    <FontAwesomeIcon icon={faEnvelope} className="contact-icon"/>
                    <a href="mailto: president@ubceprojects.com">president@ubceprojects.com</a> </p>
                    <p>
                    <FontAwesomeIcon icon={faInstagram} className="contact-icon"/>
                    <a href="https://www.instagram.com/eprojectsubc/?hl=en" className="footer-social-icon">
                        @eProjects
                    </a></p>
                    <p>
                    <FontAwesomeIcon icon={faFileSignature} className="contact-icon"/>
                    <a href="https://drive.google.com/file/d/1C-sji94WjETOzWQdWio3csK6R9c5WBMy/view?usp=sharing">
                        Sponsorship Package
                    </a>
                    </p>
                </div>
                <div className="col-12 col-sm-6">
                    <p>
                    <FontAwesomeIcon icon={faFacebook} className="contact-icon"/>
                    <a href="https://www.facebook.com/eprojectsubc/" className="footer-social-icon">
                        UBC eProjects
                    </a>
                    </p>
                    <p>
                    <FontAwesomeIcon icon={faLinkedin} className="contact-icon"/>
                    <a href="https://lu.linkedin.com/company/ubc-eprojects" className="footer-social-icon">
                        UBC eProjects
                    </a>
                    </p>

                </div>
                </div>
            </div>
        </section>

      <Footer/>
    </div>
  )
}
