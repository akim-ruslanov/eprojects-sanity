import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Events() {
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
        <section>
            <div className="container">
            <div className="row">
                <div className="col">
                <h1 id="events-page-title">Events</h1>
                </div>
            </div>
            <div className="row my-sm-4 align-items-center">
                <div className="col-6 col-sm-4">
                <div className="event-title-box text-center">
                    <img src="/images/CEO-DINNER-NIGHT.png" alt="" className="event-image-page img-fluid"/>
                </div>
                </div>
                <div className="col-6 col-sm-8 my-auto">
                <p className="event-description-page">The sold-out evening entails opportunities for executives and CEOs to meet like-minded students and entrepreneurs with the opportunity of networking and sharing their knowledge over a delightful feast.</p>
                </div>
            </div>
            <div className="row my-sm-4 align-items-center">
                <div className="col-6 col-sm-4">
                <div className="event-title-box text-center">
                    <img src="/images/VIRTUAL-COFFEE-CHATS.png" alt="" className="event-image-page"/>
                </div>
                </div>
                <div className="col-6 col-sm-8 my-auto">
                <p className="event-description-page">An exclusive over-the-web event providing industry professionals with the prospect of meeting knowledgeable students and allowing them to gain insight about various industries and career paths. </p>
                </div>
            </div>
            <div className="row my-sm-4 align-items-center">
                <div className="col-6 col-sm-4">
                <div className="event-title-box text-center my-auto">
                    <img src="/images/LITE-HACKS.png" alt="" className="event-image-page"/>
                </div>
                </div>
                <div className="col-6 col-sm-8 my-auto">
                <p className="event-description-page">LiteHacks welcome’s hundreds of students for the chance to participate in a 12-hour code-free hackathon which challenges them to develop a unique business idea and present their scheme to a panel of Venture Capitals and Angel Investors.</p>
                </div>
            </div>
            <div className="row my-sm-4 align-items-center">
                <div className="col-6 col-sm-4">
                <div className="event-title-box text-center">
                    <img src="/images/STARTUP-CRAWL.png" alt="" className="event-image-page"/>
                </div>
                </div>
                <div className="col-6 col-sm-8 my-auto">
                <p className="event-description-page">Startup Crawl allows students to directly interact with various startups situated in Vancouver and learn what it takes to become successful all the while being able to build their network and enhance their perspective on different company cultures and values.</p>
                </div>
            </div>
            <div className="row my-sm-4 align-items-center">
                <div className="col-6 col-sm-4">
                <div className="event-title-box text-center">
                    <img src="/images/ETALKS-PAGE.png" alt="" className="event-image-page"/>
                </div>
                </div>
                <div className="col-6 col-sm-8 my-auto">
                <p className="event-description-page">Join us for a night of refreshments, and the opportunity to engage with a start up, or to listen to a CEO life-story. ​ We cover topics like the fashion industry, and the innovation in the restaurant scene in Vancouver.</p>
                </div>
            </div>
            </div>
        </section>

      <Footer/>
    </div>
  )
}
