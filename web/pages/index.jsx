import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
export default function Home() {
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
      </Head>

      <Header/>

      <section id="main">
        <div className="container py-3 py-sm-5">
          <div className="row">
            <div className="title-text px-3 px-sm-5">
              An Interdisciplinary Hub for <br/>
              <p style={{fontWeight:"700"}}>Entrepreneurship + Innovation</p>
            </div>

            <div className="subtitle px-3 px-sm-5">
              Whether you are a thriving student-entrepreneur, or want to learn more about entrepreneurship, you've come to the right place.
            </div>
          </div>
          <br/>
          <div className="row subtitle px-3 px-sm-5">
            <button type="button" className="btn btn-light join-us-btn">
              <a href="/newsletter">JOIN US</a>
            </button>
          </div>
          <div id="wave" style={{overflow:"hidden"}}>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="title-text">
              We are eProjects
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="description px-3 px-sm-5 my-2 my-sm-2">
              Whether you are a thriving student-entrepreneur, or want to learn more about entrepreneurship, you've come to the right place.
            </div>
          </div>


          <div className="row my-sm-5">
            <div className="col-lg-4 col-12">
              <div className="card">
                <div className="row align-items-center">
                  <div className="col-4 col-lg-12 card-top">
                    <div className="my-auto">
                      <div className="about-card-image-container">
                        <img className="card-img-top my-2" src="/images/learn_card.png" alt="Card image cap"/>
                      </div>
                      <h5 className="card-title">Learn</h5>
                    </div>
                  </div>
                  <div className="col-8 col-lg-12">
                    <div className="card-body">
                      <p className="card-text text-center">We help students learn from some of Vancouver’s most successful entrepreneurs, allowing you to hear their successes and failures.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div className="card ">
                <div className="row align-items-center">
                  <div className="col-4 col-lg-12 card-top">
                    <div className="my-auto">
                      <div className="about-card-image-container">
                        <img className="card-img-top" src="/images/connect_card.png" alt="Card image cap"/>
                      </div>
                      <h5 className="card-title">Connect</h5>
                    </div>
                  </div>
                  <div className="col-8 col-lg-12">
                    <div className="card-body">
                      <p className="card-text text-center">We connect you with like-minded, passionate students to learn about relevant entrepreneurial skills used in the industry today.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div className="card ">
                <div className="row align-items-center">
                  <div className="col-4 col-lg-12 card-top">
                    <div className="my-auto">
                      <div className="about-card-image-container">
                        <img className="card-img-top" src="/images/innovate_card.png" alt="Card image cap"/>
                      </div>
                      <h5 className="card-title">Innovate</h5>
                    </div>
                  </div>
                  <div className="col-8 col-lg-12">
                    <div className="card-body">
                      <p className="card-text text-center">We bring your ideas to life by providing you with the tools needed to succeed, all the while giving guidance when needed.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="events">
        <div className="container">
          <div className="row">
            <div className="title-text px-3 px-sm-5 py-3 py-sm-5">
              Events
            </div>
          </div>
          <div className="row">
            <div className="description px-3 px-sm-5">
              eProjects is always working on new events, but some of our favourite events in the past years are:
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="row event-row my-5 px-3 px-sm-5 align-items-center">
            <div className="col-6 ">
              <div className="event-image-container mx-auto">
                <img src="./images/lite_hacks.png" className="event-image img-fluid" alt="lite hack images"/>
              </div>
            </div>
            <div className="col-6">
              <div className="event-title">
                LiteHack
              </div>
              <div className="event-description">
                <p>The code-free hackathon designed to help your fresh ideas take center stage.</p>
                <p>LiteHacks is a full day of fast paced challenges and activities, fueled by your passion and forward thinking. No coding experience required!</p>
              </div>
            </div>
          </div>
          <div className="row event-row my-5 px-3 px-sm-5 align-items-center">
            <div className="col-6">
              <div className="event-title ceo-dinner-night">
                CEO Dinner Night
              </div>
              <div className="event-description ceo-dinner-night">
                <p>The code-free hackathon designed to help your fresh ideas take center stage.</p>
              </div>
            </div>
            <div className="col-6">
              <div className="event-image-container mx-auto">
                <img src="./images/ceo_dinner_night.png" className="event-image img-fluid" alt="lite hack images"/>
              </div>
            </div>
          </div>
          <div className="row event-row my-5 px-3 px-sm-5 align-items-center">
            <div className="col-6">
              <div className="event-image-container mx-auto">
                <img src="./images/etalks.png" className="event-image img-fluid" alt="lite hack images"/>
              </div>
            </div>
            <div className="col-6">
              <div className="event-title">
                eTalks
              </div>
              <div className="event-description">
                <p>Join us for a night of refreshments, and the opportunity to engage with a start up, or to listen to a CEO life-story.</p>
                <p>We cover topics like the fashion industry, and the innovation in the restaurant scene in Vancouver.</p>
              </div>
            </div>
          </div>
          <div className="row event-row">
            <div className="col text-center">
              <a href="events" className="btn event-btn" role="button">See More</a>
            </div>
          </div>
          <br />
          <br />
        </div>
      </section>

      <Footer/>



    </div>
  )
}
