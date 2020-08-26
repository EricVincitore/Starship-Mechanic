import React, {Component} from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ParticlesBg from "particles-bg";
import {Link} from 'react-router-dom';


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
                            <Link className="btn btn-secondary btn-gray" to="/builder">Start Building</Link>
                        </div>
                        <div className="col-sm-5"/>
                    </div>
                </div>
                
                <Footer />
                <ParticlesBg type="cobweb" color="#5dbcd2" bg={true}/>
            </div>
            

        );
    }
}

export default MainMenu;