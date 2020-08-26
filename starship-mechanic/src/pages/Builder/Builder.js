import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AllParts from '../../components/AllParts/AllParts';
import Modal from './../../components/Modal/Modal';
import ParticlesBg from "particles-bg";
import ExitModal from './../../components/ExitModal/ExitModal'

class Builder extends Component {

    state = {
        parts: [
            {
                id:1,
                name: "Engine",
                selected: false,
                price: 80000000,
                img: "https://i.imgur.com/kCdKdrC.jpg"
            },
            {
                id:2,
                name: "Tractor Beam",
                selected: false,
                price: 40000000,
                img: "https://i.insider.com/50898cc0ecad043e5c000002?width=400"
            },
            {
                id:3,
                name: "Shields",
                selected: false,
                price: 30750000,
                img: "https://vignette.wikia.nocookie.net/memoryalpha/images/c/c6/Voyager_shields.jpg/revision/latest?cb=20050927154016&path-prefix=en"
            },
            {
                id:4,
                name: "Wookie Copilot",
                selected: false,
                price: 100000000,
                img: "https://emailtuna.com/images/newsletter/6f7/6f7aa63c13dbb8c972c00db0364f3cf3.jpg"
            },
            {
                id:4,
                name: "Warp Drive",
                selected: false,
                price: 700000000,
                img: "https://www.citytech.cuny.edu/physicsworkshop/images/day3.jpg"
            },
            {
                id:6,
                name: "Death Star's Super Laser",
                selected: false,
                price: 999999999,
                img: "https://qph.fs.quoracdn.net/main-qimg-dcf61bacf182a1783ad1a43a4400fc0a.webp"
            },
            {
                id:7,
                name: "Escape Pods",
                selected: false,
                price: 250000000,
                img: "https://vignette.wikia.nocookie.net/starwars/images/d/d9/Republic_escape_pod.jpg/revision/latest?cb=20090304225643"
            },
            {
                id:8,
                name: "Plasma Generator",
                selected: false,
                price: 15000000,
                img: "https://i.pinimg.com/originals/ed/99/48/ed99482dc13c99d292e2d528cdf8706e.jpg"

            },
            {
                id:9,
                name: "Bio-Lab",
                selected: false,
                price: 950000,
                img: "https://i.pinimg.com/originals/5d/19/a7/5d19a76ca4abd9b10a769cc44a66b514.jpg"

            },
            {
                id:10,
                name: "Auto-Pilot Systems",
                selected: false,
                price: 5000000,
                img: "https://img.freepik.com/free-photo/blue-hologram-robot-head-artificial-intelligence-concept-neural-networks-autopilot-robotization-industrial-revolution-4-0-3d-illustration-3d-rendering_99433-109.jpg?size=626&ext=jpg"
            },
            {
                id:11,
                name: "Planetary Comms",
                selected: false,
                price: 250000000,
                img: "https://i.pinimg.com/originals/7f/17/df/7f17df189e7a8afbcad59326c0e35a24.jpg"
            },
            {
                id:12,
                name: "Galactic Fuzzy Dice",
                price: 25,
                img: "https://images-na.ssl-images-amazon.com/images/I/61Fkg7O4%2B2L._AC_SX466_.jpg"

            }
        ],
        selectedParts:[],
        priceTotal: 0,
        show: false
    };


    markSelected = id => {
        this.setState({
            parts: this.state.parts.map(part => {
                if (part.id === id) {
                    part.selected =!part.selected;
                }
                return part;
            })
        })
    };

    showModal = () => {
        let finalSelection = this.state.parts.filter(parts => parts.selected === true);

        let finalPrice = finalSelection.reduce((total, part) => total + part.price,0);

        this.setState({
            ...this.state,
            selectedParts: finalSelection,
            priceTotal: finalPrice,
            show: !this.state.show
        });
    }

    getFinalNames = () => {

        const listItems = this.state.selectedParts.map(part => <li>{part.name}</li>)

        return(
            <ul>{listItems}</ul>
        )
    }

    showExitModal = () => {

        this.finalStats();

        this.setState({
            ...this.state,
            exitShow: !this.state.exitShow
        });
    }

    render () {
        return (
            <div className="Builder">
                <Header />
                <div className="container">
                    <br/>
                    <div className="row">
                        <AllParts
                            parts={this.state.parts}
                            markSelected={this.markSelected}
                        />
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-4"/>
                        <button type="button" className="btn btn-secondary btn-gray" onClick={this.showModal} value ="Show Modal">Show Build Starship</button>
                        <div className="col-sm-1"/>
                        <button type="button" className="btn btn-light" onClick={this.showExitModal} value="show Exit Modal">Exit Builder</button>
                        <div className="col-sm-4"/>
                    </div>
                </div>
                <Modal onClose={this.showModal} show={this.state.show}> 
                    <div className="row listTitle"> 
                        Selected Parts
                    </div>
                    <div className="row">
                        <ul className="list">
                            {this.getFinalNames()}
                        </ul>
                    </div>
                    <div className="row">
                        Price Total in USD: {this.state.priceTotal}
                    </div>
                </Modal>
                <ExitModal showExit={this.state.exitShow}>
                    This is from Exit Modal
                </ExitModal>
                <br/>

                <Footer />
                <ParticlesBg type="cobweb" color="#5dbcd2" bg={true}/>
            </div>
        );
    }
};

export default Builder;