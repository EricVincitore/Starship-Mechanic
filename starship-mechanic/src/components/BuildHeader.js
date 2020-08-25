import React from 'react';


function BuildHeader () {
    
        return (
            
            <div>
                <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Starship Mechanic</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav navbar-right">
                        <li className="nav-item active">
                            <div className="nav-link" onClick= {e => {this.showModal()}}>View Build<span className="sr-only">(current)</span></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" href="/">Exit</div>
                        </li>
                        </ul>
                    </div>
                </nav>
            
            </div>
        )
};

export default BuildHeader;