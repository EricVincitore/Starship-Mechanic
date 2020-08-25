import React, {Component} from 'react';
import Jumbotron from '../components/Jumbotron';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom'
class MainMenu extends Component {

    render () {
        return (
            <div className="MainMenu">
                <Header />
                <Jumbotron />
                <Link className="btn btn-primary" to="/builder">Start Building</Link>
                <Footer />
            </div>
            

        );
    }
}

export default MainMenu;