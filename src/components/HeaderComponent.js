import React, {Component} from 'react';
import { Nav, NavItem, Navbar } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);


        this.state = {
            setClass: "NavActive active"
        };
        
        this.toggleClass= this.toggleClass.bind(this);
        this.NavBarReturn= this.NavBarReturn.bind(this);
    }

    toggleClass() {
        
        if(window.pageYOffset >=5){
            this.setState({ setClass: "NavActive" });
        }else {
            this.setState({ setClass: "NavActive active" });
        }
        
    };

    NavBarReturn() {
        return(
            <Navbar dark expand="md">
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/aboutme">
                            About Me
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/experiences'>
                            Experiences & Skills
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/contact'>
                            Contact Me
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }


    render() {
        window.addEventListener('scroll', this.toggleClass);
        return(
            <div>
                
                <div className='aboutNavWrapper'>
                    
                    
                    <div className='decoBox'>
                    
                    </div>
                    <div className='Jumbotron'>
                        <div className='Photo'>
                            <img src="assets/images/20210104_174800_mfnr3.png" height="270" width="270"
                                alt="Amjed Nazzal" />
                        </div>
                        <div className='TextPlace'>
                            <div className='Text'>
                                <h1>Amjed Nazzal</h1>
                                <h4>Front-End Developer</h4>
                                <p>Specialised in single page web applications 
                                    with responsive and dynamic designs</p>
                            </div>
                        </div>
                        
                    </div>
                    <div>
                        <this.NavBarReturn />
                        
                    </div>
                </div>

                <div className='PageBodyNav'>
                    <div className={this.state.setClass}>
                        <div className='NavWrapper'>  
                            <this.NavBarReturn />
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
}

export default Header;