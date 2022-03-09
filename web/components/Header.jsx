import { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTimes, faBars} from "@fortawesome/free-solid-svg-icons"
import {useRouter} from "next/router"
import Link from "next/link"

function Header() {
    const router = useRouter();

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return (
        <nav className="navbar navbar-expand-sm mx-1 my-3 mx-sm-5 my-sm-5">
            <a href="/" className="navbar-brand">
                <img src="/images/logo.png" alt="eProjects logo"/>
            </a>
            <div className="nav-icon" onClick={handleClick}>
                <FontAwesomeIcon icon={faBars}/>
            </div>
            <div className="nav-menu navbar-nav navbar-collapse" style={{width: click ? "100%" : "0%"}} id="navbarNav">
            <div className="nav-icon" onClick={Close}>
                <FontAwesomeIcon icon={faTimes}/>
            </div>
                <ul className="navbar-nav nav-menu-content">
                    <li className={router.pathname == "/" ? "nav-item active" : "nav-item"} onClick={Close}>
                        <Link className="nav-link" href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={Close} href="/#about" id="nav-link-about">About</a>
                    </li>
                    <li className={router.pathname == "/events" ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" onClick={Close} href="/#events" id="nav-link-events">Events</a>
                    </li>
                    <li className={router.pathname == "/blog" ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="/blog">Blog</a>
                    </li>
                    <li className={router.pathname == "/newsletter" ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="/newsletter">Newsletter</a>
                    </li>
                    <li className={router.pathname == "/contact" ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;