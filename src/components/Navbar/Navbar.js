import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
// import logo from "../../images/logo.png";
import logo from "../../images/gfcoding_logo2.png";
import "./Navbar.css";
import { Link } from "react-scroll";
class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className="NavbarItems">
                <div className="navbar__left-logo">
                    <img className="logo" src={logo} alt="logo" />
                    {/* <i className="fas fa-laptop-code" ></i> */}
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fa fa-times' : 'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' :
                    'nav-menu'}>

                    {MenuItems.map((item, index) => {
                        return (                            
                            <li className="linkItem" key={index}>                            
                                <Link activeClassName="active" className = {item.cName} to={item.url} smooth={true} duration={300} >
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar