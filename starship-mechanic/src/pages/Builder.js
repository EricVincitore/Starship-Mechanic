import React, {Component} from 'react';
import BuildHeader from '../components/BuildHeader';
import Footer from '../components/Footer';

class MainMenu extends Component {


    render () {
        return (
            <div className="MainMenu">
                <BuildHeader />
                <Footer />
            </div>
            

        );
    }
}

export default MainMenu;