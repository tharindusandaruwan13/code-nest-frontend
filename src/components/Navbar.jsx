import { Component } from 'react';
import logo from '../components/CodeNest2.jpeg';
import '../components/Navbar.css';

class Navbar extends Component{
    state = { clicked: false};
    handleClick = ()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render() {
    return(
        <>
            <nav>
                <a></a>
                <img src={logo} alt="Logo" className="navbar-brand" />
                <div>
                    <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
                        <li><a className="active" href="index.html">Home</a></li>
                        <li><a href="index.html">Courses</a></li>
                        <li><a href="index.html">Mentoring</a></li>
                        <li><a href="index.html">hello</a></li>
                        <li><a href="index.html"><i class="fas fa-user"></i></a></li>
                    </ul>
                </div>
                <div id='mobile' onClick={this.handleClick}>
                    <i id='bar' className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>

                </div>
            </nav>
        </>
    );
  }
}

export default Navbar;