import React, { Component } from 'react'

const footer = {
    bottomMargin: "0%",
    flex: 1,
    backgroundColor: "#4e7781",
    height:"2npm%",
    bottom: 0,
    width:"100%",
    position:"fixed"
}

class Footer extends Component {

    render () {

        return (
            <nav className="navbar navbar-light bg-dark" style={footer}>
            
            </nav>
        );
    };
};

export default Footer;