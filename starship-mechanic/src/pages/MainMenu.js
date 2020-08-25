import React, {Component} from 'react';
import Jumbotron from '../components/Jumbotron';
import Header from '../components/Header';
import Footer from '../components/Footer';

class MainMenu extends Component {


    render () {
        return (
            <div className="MainMenu">
                <Header />
                <Jumbotron />
                <Footer />
            </div>
            

        );
    }
}

export default MainMenu;