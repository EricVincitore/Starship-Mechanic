import React, {Component} from 'react';
import Jumbotron from '../../components/Jumbotron';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';
import './index.css'

class MainMenu extends Component {

    render () {
        return (
            <div className="MainMenu">
                <Header />
                <Jumbotron />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5"/>
                        <div>
                            <Link className="btn btn-primary" to="/builder">Start Building</Link>
                        </div>
                        <div className="col-sm-5"/>
                    </div>
                </div>
                
                <Footer />
            </div>
            

        );
    }
}

export default MainMenu;