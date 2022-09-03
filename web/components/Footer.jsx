import Link from "next/link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        <footer className="page-footer font-small blue pt-4 padding-bottom-md">

        <div className="container-fluid text-center text-md-left px-3 py-4 pb-5 px-sm-5">

            <div className="row">

            <div className="col-md-6 mt-md-0 mt-3">

                <h5 className="title-text">eProjects</h5>

            </div>

            <hr className="clearfix w-100 d-md-none pb-3"/>

            <div className="col-md-3 mb-md-0 mb-3">

                <h5 className="footer-column-title">Resources</h5>

                <ul className="list-unstyled footer-link">
                <li>
                    <a href="https://drive.google.com/file/d/1C-sji94WjETOzWQdWio3csK6R9c5WBMy/view?usp=sharing">Sponsorship Package</a>
                </li>
                <li>
                    <a href="/blog">Blog</a>
                </li>
                </ul>

            </div>

            <div className="col-md-3 mb-md-0 mb-3">

                <h5 className="footer-column-title">Support</h5>

                <ul className="list-unstyled footer-link">
                <li>
                    <a href="/contact">Contacts</a>
                </li>
                <li>
                    <a href="mailto: president@ubceprojects.com">Email Us</a>
                </li>
                </ul>

            </div>

            </div>
            <div className="row">
            <div className="col">
                <a href="https://www.facebook.com/eprojectsubc/" className="footer-social-icon">
                <FontAwesomeIcon icon={faFacebook} className="footer-icon" size="lg"/>
                </a>
                <a href="https://www.instagram.com/eprojectsubc/?hl=en" className="footer-social-icon">
                <FontAwesomeIcon icon={faInstagram} className="footer-icon" size="lg"/>
                </a>
                <a href="https://lu.linkedin.com/company/ubc-eprojects" className="footer-social-icon">
                <FontAwesomeIcon icon={faLinkedin} className="footer-icon" size="lg"/>
                </a>
            </div>
            </div>
        </div>

        </footer>





    )
}

export default Footer;