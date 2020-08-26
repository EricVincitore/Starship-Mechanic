import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class ExitModal extends Component {

    render() {

        if(!this.props.showExit){
            return null;
        };

        return (
            <div className="backdropStyle">
                <div className="row">
                    <div className="col-sm-3"/>
                    <div className="col-sm-6">
                        <div className="builderModal">
                            <div className="row modalTitle">
                                    <div className="col-sm-3"/> 
                                    <div className="col-sm-6">
                                        Final Report
                                    </div> 
                                    <div className="col-sm-3"/>  
                            </div>
                            <div className="builderModalStyle">
                                {this.props.children}
                                <div className="builderModalFooter">
                                    <Link to="/" className="btn btn-secondary endModalBtn">Exit to Main Menu</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3"/>
                </div>
            </div>
        );
    };

};

export default ExitModal;